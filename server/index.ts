import express, { Request, Response } from 'express';
import cors from 'cors';
import {
  servicesData,
  industriesData,
  statsData,
  allCaseStudies,
  faqList,
  blogPosts,
  companyDetails,
} from '../src/data/consultareData';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory inquiries store
interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  createdAt: string;
}

const inquiries: Inquiry[] = [];
const subscribers: string[] = [];

// Health Check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Invest With Ganesh API',
    time: new Date().toISOString(),
  });
});

// Services
app.get('/api/services', (_req: Request, res: Response) => {
  res.json({ success: true, data: servicesData });
});

// Industries / Amenities
app.get('/api/industries', (_req: Request, res: Response) => {
  res.json({ success: true, data: industriesData });
});

// Stats
app.get('/api/stats', (_req: Request, res: Response) => {
  res.json({ success: true, data: statsData });
});

// Projects & Case Studies
app.get(['/api/case-studies', '/api/projects'], (_req: Request, res: Response) => {
  res.json({ success: true, data: allCaseStudies });
});

app.get(['/api/case-studies/:slug', '/api/projects/:slug'], (req: Request, res: Response) => {
  const caseStudy = allCaseStudies.find((c) => c.slug === req.params.slug);
  if (!caseStudy) {
    return res.status(404).json({ success: false, error: 'Project not found' });
  }
  res.json({ success: true, data: caseStudy });
});

// Blogs
app.get('/api/blogs', (_req: Request, res: Response) => {
  res.json({ success: true, data: blogPosts });
});

app.get('/api/blogs/:slug', (req: Request, res: Response) => {
  const blog = blogPosts.find((b) => b.slug === req.params.slug);
  if (!blog) {
    return res.status(404).json({ success: false, error: 'Blog post not found' });
  }
  res.json({ success: true, data: blog });
});

// FAQs
app.get('/api/faqs', (_req: Request, res: Response) => {
  res.json({ success: true, data: faqList });
});

// Company Info
app.get('/api/company', (_req: Request, res: Response) => {
  res.json({ success: true, data: companyDetails });
});

// Contact / Consultation Booking Submission
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || (!email && !phone)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide your name and at least a phone number or email address.',
    });
  }

  const newInquiry: Inquiry = {
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name,
    email: email || '',
    phone: phone || '',
    service,
    message,
    createdAt: new Date().toISOString(),
  };

  inquiries.unshift(newInquiry);
  console.log(`[Consultare API] New consultation inquiry received:`, newInquiry);

  return res.status(201).json({
    success: true,
    message: 'Thank you! Your consultation request has been submitted successfully.',
    data: newInquiry,
  });
});

// Newsletter Subscription
app.post('/api/newsletter', (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Valid email required' });
  }

  if (!subscribers.includes(email)) {
    subscribers.push(email);
  }

  return res.json({
    success: true,
    message: 'Subscribed successfully to Consultare insights.',
  });
});

app.listen(PORT, () => {
  console.log(`⚡ [Consultare API Server] running at http://localhost:${PORT}`);
});
