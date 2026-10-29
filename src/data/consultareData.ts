export interface NavItem {
  label: string;
  href: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  url: string;
  link?: string;
}

export interface WhyItWorksPillar {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  sectors: string;
  imageUrl?: string;
  description?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface StrategyTab {
  id: string;
  label: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  tag: string;
  title: string;
  description: string;
  metrics?: { label: string; value: string }[];
  imageUrl: string;
  client?: string;
  date?: string;
}

export interface FeaturedProject {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  status: 'Ongoing' | 'Limited Availability' | 'Sold Out' | 'Delivered' | 'Upcoming';
  statusColor: 'emerald' | 'amber' | 'zinc' | 'blue';
  category?: 'ongoing' | 'delivered' | 'upcoming';
  approval: string;
  plotSizes: string;
  roadWidth: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  bankLoan?: string;
  reraNumber?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  imageUrl: string;
  summary: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blogs' },
];

export const clientLogos: ClientLogo[] = [
  {
    id: 'vivo-city',
    name: 'Vivo City Colony',
    url: '/invest/Untitled-design-47.png',
    link: '/case-studies/vivo-city-colony',
  },
  {
    id: 'yaduraj-ojas',
    name: 'Yaduraj Ojas',
    url: '/invest/Untitled-design-48.png',
    link: '/case-studies/yaduraj-ojas',
  },
  {
    id: 'bank-officers-colony',
    name: 'Bank Officers Colony',
    url: '/invest/Untitled-design-49.png',
    link: '/case-studies/bank-officers-colony',
  },
  {
    id: 'imperial-galaxy',
    name: 'Imperial Galaxy Colony',
    url: '/invest/Untitled-design-50.png',
    link: '/case-studies/imperial-galaxy-colony',
  },
  {
    id: 'shree-krishna-vihar-iv',
    name: 'Shree Krishna Vihar IV',
    url: '/invest/Untitled-design-51.png',
    link: '/case-studies/shree-krishna-vihar-iv',
  },
];

export const whyItWorksPillars: WhyItWorksPillar[] = [
  {
    id: 'legal',
    title: 'Project Approval & Documentation Review',
    description: 'We help you review available project documents, understand JDA layout plans, and check Rajasthan RERA registration details against public records.',
    bullets: [
      'Guidance on reviewing JDA layout plans and land-use records',
      'Assistance in checking official Rajasthan RERA registration details',
      'Encouragement of independent title verification with qualified legal counsel',
    ],
  },
  {
    id: 'locations',
    title: 'Jaipur Plotted Corridors',
    description: 'Explore residential plotted projects situated in key growth areas of Jaipur, including Mansarovar Extension, Diggi-Malpura Road, and Ring Road connectivity.',
    bullets: [
      'Connectivity to major arterial roads and highway networks',
      'Proximity to surrounding educational, healthcare, and retail facilities',
      'Overview of published infrastructure plans and sector road layouts',
    ],
  },
  {
    id: 'gated',
    title: 'Township Infrastructure & Amenities',
    description: 'Inspect plotted communities offering planned infrastructure such as sector roads, boundary walls, street lighting, and open park spaces.',
    bullets: [
      'Gated entry points, boundary walls, and security arrangements',
      'Planned green zones, community parks, and open recreational spaces',
      'Sector water supply networks and planned drainage infrastructure',
    ],
  },
  {
    id: 'support',
    title: 'Enquiry & Site Inspection Assistance',
    description: 'From your initial project enquiry to coordinating on-ground site inspections, Mr. Ganesh Yadav assists you with available project details and specifications.',
    bullets: [
      'Arranging scheduled site visits to inspect on-ground property conditions',
      'Assistance with project brochures, layout maps, and developer specifications',
      'Clear and direct communication on project details and locations',
    ],
  },
];

export const founderQuote = {
  quote: '"Purchasing a residential plot is an important decision for any family. Our objective is to provide clear project information, facilitate on-ground inspections, and encourage buyers to independently review all documentation before making a commitment."',
  name: 'Ganesh Yadav',
  role: 'Founder & Property Consultant',
  image: '/wmremove-transformed.jpeg',
  avatar: '/brand/logo-square.png',
};

export const servicesData: ServiceItem[] = [
  {
    id: 'jda-residential-plots',
    title: 'JDA Residential Plots',
    description: 'Hand-picked residential plots in fully developed, gated townships with parks, wide roads, and immediate registry.',
    href: '/#projects',
  },
  {
    id: 'commercial-land',
    title: 'Commercial & Mixed-Use Land',
    description: 'High-footfall commercial plots on 60ft to 200ft sector roads ideal for retail showrooms, clinics, and offices.',
    href: '/#projects',
  },
  {
    id: 'legal-due-diligence',
    title: 'Legal & Title Due Diligence',
    description: 'Rigorous title search, JDA patta verification, mutation checks, and non-encumbrance certificate validation.',
    href: '/contact',
  },
  {
    id: 'bank-loan-assistance',
    title: 'Bank Loan Assistance',
    description: 'Seamless plot loan processing with top nationalized and private banks (SBI, HDFC, ICICI, BOB) at attractive interest rates.',
    href: '/contact',
  },
  {
    id: 'guided-site-visits',
    title: 'Free Guided Site Visits',
    description: 'Complimentary private site tours with transparent layout maps, sector road inspections, and growth briefings.',
    href: '/contact',
  },
  {
    id: 'wealth-investment-advisory',
    title: 'Wealth & Investment Advisory',
    description: 'Data-backed micro-market insights to target emerging Jaipur corridors offering 2x–3x appreciation over 3–5 years.',
    href: '/contact',
  },
];

export const industriesData: IndustryItem[] = [
  {
    id: 'gated-community',
    title: 'GATED COMMUNITY',
    sectors: 'Secure gated entry & peaceful residential environment',
    description: 'Enjoy secure gated entry with a peaceful and well-planned residential environment designed for modern living.',
    imageUrl: '/projects/amenity-1.jpg',
  },
  {
    id: 'green-environment',
    title: 'GREEN ENVIRONMENT',
    sectors: 'Open landscaped spaces & refreshing natural air',
    description: 'Experience open spaces, landscaped greenery, and a refreshing atmosphere that brings comfort to everyday life.',
    imageUrl: '/projects/yaduraj-ojas.jpg',
  },
  {
    id: 'modern-amenities',
    title: 'MODERN AMENITIES',
    sectors: 'Wide roads, street lighting & quality infrastructure',
    description: 'Developed with essential lifestyle amenities, wide roads, street lighting, and quality infrastructure for families.',
    imageUrl: '/projects/bank-officers-colony.jpg',
  },
  {
    id: 'wide-connectivity',
    title: 'WIDE CONNECTIVITY',
    sectors: 'Direct highway access & proximity to schools & hospitals',
    description: 'Smooth road connectivity with convenient access to schools, markets, hospitals, and major city locations.',
    imageUrl: '/projects/amenity-3.jpg',
  },
  {
    id: 'family-friendly',
    title: 'FAMILY FRIENDLY COMMUNITY',
    sectors: 'Safe, welcoming neighborhood for peaceful living',
    description: 'A safe and welcoming neighborhood designed for comfortable family living and a better future.',
    imageUrl: '/projects/vivo-city.jpg',
  },
  {
    id: 'security-24x7',
    title: '24×7 SECURITY',
    sectors: 'Advanced security & round-the-clock safety',
    description: 'Advanced security features with gated access and round-the-clock safety for complete peace of mind.',
    imageUrl: '/projects/amenity-2.jpg',
  },
];

export const statsData: StatItem[] = [
  { value: '5+', label: 'Years of Jaipur Real Estate Experience' },
  { value: 'JDA', label: 'Approved Schemes & Planned Layouts' },
  { value: 'RERA', label: 'Rajasthan RERA Registration Checks' },
  { value: '100%', label: 'Personal Guidance & In-Person Site Visits' },
];

export const strategyTabs: StrategyTab[] = [
  {
    id: 'discovery',
    label: '1. Discovery & Site Selection',
    description: 'We assess your budget, preferred location, and purpose to present matched residential plotted options:',
    imageUrl: '/projects/yaduraj-ojas.jpg',
    items: [
      {
        title: 'Curated Inventory Matching Your Requirements',
        description: 'Explore verified plotted options across growing corridors in Jaipur based on your budget and preferences.',
      },
      {
        title: 'Guided On-Ground Site Visit',
        description: 'Physical inspection of road connectivity, plot demarcations, and surrounding social infrastructure.',
      },
      {
        title: 'Infrastructure & Connectivity Overview',
        description: 'Detailed briefing on arterial roads, Ring Road links, educational institutes, and healthcare facilities.',
      },
    ],
  },
  {
    id: 'legal-finance',
    label: '2. Documentation Review & Bank Loan Guidance',
    description: 'We assist with reviewing available project records and connecting with lending institutions:',
    imageUrl: '/projects/bank-officers-colony.jpg',
    items: [
      {
        title: 'JDA Layout & RERA Details Review',
        description: 'Guidance on checking public JDA layout plans and official Rajasthan RERA registration numbers.',
      },
      {
        title: 'Bank Loan Assistance',
        description: 'Coordination and guidance on obtaining project documents required by leading nationalized and private banks.',
      },
      {
        title: 'Transparent Pricing Overview',
        description: 'Clear breakdown of applicable plot pricing, development charges, stamp duty, and registration fees.',
      },
    ],
  },
  {
    id: 'possession',
    label: '3. Registration & Plot Demarcation',
    description: 'Guidance through the official registration procedure and on-site plot identification:',
    imageUrl: '/projects/vivo-city.jpg',
    items: [
      {
        title: 'Sub-Registrar Registration Guidance',
        description: 'Assistance with scheduling registration appointments and required documentation checklist.',
      },
      {
        title: 'Physical Boundary Demarcation',
        description: 'Guidance on verifying corner demarcation pillars and official plot handover within the township.',
      },
      {
        title: 'Ongoing Information & Updates',
        description: 'Updates on surrounding civic infrastructure developments, sector connectivity, and road works.',
      },
    ],
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    author: 'Priyanka',
    role: 'Jaipur',
    avatarUrl: '/invest/priyanka-headshot.jpg',
    quote:
      '“We spent four months touring unapproved colonies before meeting Mr. Ganesh Yadav. He immediately filtered out risky titles and helped us secure a verified JDA plot with wide roads and clear demarcation. The peace of mind for our family is priceless.”',
  },
  {
    id: '2',
    author: 'Ronak Sharma',
    role: 'Jaipur',
    avatarUrl: '/invest/ronak-headshot.jpg',
    quote:
      '“Being based outside Jaipur, remote property due diligence was stressful. Ganesh provided authentic 4K drone footage, verified RERA sanction files, and facilitated seamless registry documentation. Best real estate advisor in Rajasthan.”',
  },
  {
    id: '3',
    author: 'Raman Lal Gupta',
    role: 'Alwar',
    avatarUrl: '/invest/4-768x768.jpg',
    quote:
      '“The transparency on upcoming Ring Road connectivity and genuine price benchmarks saved us from speculative hype. We got title-clean commercial-cum-residential land with underground utilities and planned sector drainage.”',
  },
];

export const featuredCaseStudy: CaseStudyItem = {
  id: 'yaduraj-ojas',
  slug: 'yaduraj-ojas',
  tag: 'LISTED PROJECT',
  title: 'Yaduraj Ojas — Plotted Development on Diggi-Malpura Road',
  description: 'A residential plotted development situated on Diggi-Malpura Road, Jaipur. Contact Invest With Ganesh for layout maps, available plot specifications, and on-site visit scheduling.',
  imageUrl: '/projects/yaduraj-ojas.jpg',
  client: 'Diggi-Malpura Road, Jaipur',
  date: 'Listed Project',
};

export const featuredProjectsData: FeaturedProject[] = [
  {
    id: 'yaduraj-ojas',
    slug: 'yaduraj-ojas',
    name: 'Yaduraj Ojas',
    tagline: 'Master-Planned Gated Plotted Township',
    location: 'Diggi-Malpura Road, Jaipur',
    status: 'Ongoing',
    statusColor: 'emerald',
    category: 'ongoing',
    approval: 'JDA & RERA Approved',
    plotSizes: '100 – 300 Sq. Yards',
    roadWidth: '40 & 60 Feet Wide Roads',
    description:
      'A premier residential plotted development situated on the rapidly growing Diggi-Malpura corridor. Engineered with underground electrification, landscaped green parks, wide sector roads, and clear title demarcation.',
    highlights: [
      'JDA Approved Patta & RERA Compliant',
      'Bank Financing Available (SBI / HDFC)',
      'Underground Drainage & Water Lines',
      'Immediate Demarcation & Registry Assistance',
    ],
    imageUrl: '/projects/Yaduraj-ojas-live-now-1200x677.jpg',
    bankLoan: 'Up to 90% Loan Available',
    reraNumber: 'RAJ/P/2023/1234',
  },
  {
    id: 'bank-officers-colony',
    slug: 'bank-officers-colony',
    name: 'Bank Officers Colony',
    tagline: 'Executive Residential Plotted Enclave',
    location: 'Near Tonk Road & Chokhi Dhani, Jaipur',
    status: 'Limited Availability',
    statusColor: 'amber',
    category: 'ongoing',
    approval: 'JDA Approved Scheme',
    plotSizes: '111 – 250 Sq. Yards',
    roadWidth: '30, 40 & 60 Feet Roads',
    description:
      'A peaceful, high-standard residential colony favored by corporate and banking professionals. Direct access to Tonk Road and Ring Road, complete with manicured parks, boundary wall, and LED street lighting.',
    highlights: [
      'Prime Tonk Road Highway Connectivity',
      'Pre-Approved Bank Loans from Leading Banks',
      'Secure Gated Access with Boom Barriers',
      'Ready for Immediate House Construction',
    ],
    imageUrl: '/projects/bank-officers-colony-township.png',
    bankLoan: 'Nationalized Bank Approved',
    reraNumber: 'JDA Approved Colony',
  },
  {
    id: 'vivo-city-colony',
    slug: 'vivo-city-colony',
    name: 'Vivo City Colony',
    tagline: 'Modern Plotted Community',
    location: 'Mansarovar Extension Corridor, Jaipur',
    status: 'Delivered',
    statusColor: 'zinc',
    category: 'delivered',
    approval: 'JDA Approved & Demarcated',
    plotSizes: 'Planned Plotted Layout',
    roadWidth: 'Wide Sector Roads',
    description:
      'A benchmark plotted development milestone delivering high capital appreciation and secure living in Jaipur. Features functional community parks, planned sewage lines, and a vibrant neighborhood.',
    highlights: [
      'Documented Title Track Record',
      'Mansarovar Metro Proximity',
      'Complete Underground Infrastructure',
      'High Value Appreciation Corridor',
    ],
    imageUrl: '/projects/vivo-city-township.png',
    bankLoan: 'Registry & Patta Complete',
    reraNumber: 'JDA Approved Scheme',
  },
  {
    id: 'imperial-galaxy-colony',
    slug: 'imperial-galaxy-colony',
    name: 'Imperial Galaxy Colony',
    tagline: 'Plotted Investment Enclave',
    location: 'Ajmer Road Growth Belt, Jaipur',
    status: 'Upcoming',
    statusColor: 'blue',
    category: 'upcoming',
    approval: 'JDA Documentation In Process',
    plotSizes: '150 – 500 Sq. Yards',
    roadWidth: '60 & 80 Feet Express Arterial',
    description:
      'Next-generation plotted enclave offering high-potential investment opportunities along Jaipur-Ajmer express belt with grand entrance gate, eco-friendly parks, and pre-launch pricing benefits.',
    highlights: [
      'Jaipur-Ajmer 6-Lane Expressway Access',
      'Early Stage Pricing Advantage',
      'Planned Central Boulevard & Gazebo Park',
      'Secured Boundary Walled Perimeter',
    ],
    imageUrl: '/projects/imperial-galaxy-colony-township.png',
    bankLoan: 'Bank Loan Assistance Available',
    reraNumber: 'JDA Verification In Progress',
  },
  {
    id: 'shree-krishna-vihar-iv',
    slug: 'shree-krishna-vihar-iv',
    name: 'Shree Krishna Vihar – IV',
    tagline: 'Residential Plotted Colony',
    location: 'Jaipur Growth Corridor',
    status: 'Delivered',
    statusColor: 'zinc',
    category: 'delivered',
    approval: 'JDA Approved Layout Plan',
    plotSizes: 'Planned Residential Plots',
    roadWidth: '30 & 40 Feet Colony Roads',
    description:
      'A completed residential plotted development in Jaipur with established surroundings, clear registry records, and demarcated plots where families have invested with peace of mind.',
    highlights: [
      'JDA Approved Scheme & Layout',
      'Clear Title & Boundary Demarcations',
      'Wide Internal Colony Roads',
      'Direct Connectivity to Main Arterial Roads',
    ],
    imageUrl: '/projects/shree-krishna-vihar-iv.jpg',
    bankLoan: 'Registry Ready Plots',
    reraNumber: 'JDA Approved Scheme',
  },
  {
    id: 'coming-soon-project',
    slug: 'coming-soon-project',
    name: 'Planned Growth Corridor Township',
    tagline: 'Planned Plotted Township',
    location: 'Jaipur High-Growth Corridor',
    status: 'Upcoming',
    statusColor: 'blue',
    category: 'upcoming',
    approval: 'JDA & RERA Verification In Progress',
    plotSizes: '100 – 250 Sq. Yards (Tentative)',
    roadWidth: '40, 60 & 80 Feet Planned Roads',
    description:
      'A newly planned residential plotted township in Jaipur scheduled for launch. Connect with Mr. Ganesh Yadav to receive verified layout files, priority allotment updates, and early site visit invites.',
    highlights: [
      'Prime Emerging Growth Corridor',
      'JDA Sanction & RERA Documentation In Progress',
      'Gated Township with Planned Parks & Modern Amenities',
      'Early Registration Open for Guided Site Visits',
    ],
    imageUrl: '/projects/coming-soon.jpg',
    bankLoan: 'Financing Verification Underway',
    reraNumber: 'Documentation In Process',
  },
];

export const allCaseStudies: CaseStudyItem[] = [
  {
    id: 'yaduraj-ojas',
    slug: 'yaduraj-ojas',
    tag: 'ONGOING TOWNSHIP',
    title: 'Yaduraj Ojas — Diggi-Malpura Road, Jaipur',
    description:
      'Master-planned gated plotted development on Diggi-Malpura Road featuring wide 40 & 60 ft roads, underground electrification, green parks, and clear JDA patta documentation.',
    imageUrl: '/projects/Yaduraj-ojas-live-now-1200x677.jpg',
    client: 'Diggi-Malpura Road, Jaipur',
    date: 'Active Project',
  },
  {
    id: 'bank-officers-colony',
    slug: 'bank-officers-colony',
    tag: 'LIMITED AVAILABILITY',
    title: 'Bank Officers Colony — Near Tonk Road, Jaipur',
    description:
      'Executive residential plotted enclave near Tonk Road and Ring Road with boom-barrier security, manicured parks, and pre-approved nationalized bank loans.',
    imageUrl: '/projects/bank-officers-colony-township.png',
    client: 'Tonk Road Corridor, Jaipur',
    date: 'Active Scheme',
  },
  {
    id: 'vivo-city-colony',
    slug: 'vivo-city-colony',
    tag: 'DELIVERED & SOLD OUT',
    title: 'Vivo City Colony — Mansarovar Extension, Jaipur',
    description:
      '100% delivered plotted township milestone in Mansarovar Extension corridor with complete underground drainage, street lighting, and high capital appreciation.',
    imageUrl: '/projects/vivo-city-township.png',
    client: 'Mansarovar Extension, Jaipur',
    date: 'Delivered Milestone',
  },
  {
    id: 'imperial-galaxy-colony',
    slug: 'imperial-galaxy-colony',
    tag: 'UPCOMING ENCLAVE',
    title: 'Imperial Galaxy Colony — Ajmer Road Belt, Jaipur',
    description:
      'Planned residential plotted sector along the 6-lane Jaipur-Ajmer Expressway corridor with grand entrance boulevard, eco-friendly parks, and early investor advantage.',
    imageUrl: '/projects/imperial-galaxy-colony-township.png',
    client: 'Ajmer Road Growth Belt, Jaipur',
    date: 'Upcoming Phase',
  },
  {
    id: 'shree-krishna-vihar-iv',
    slug: 'shree-krishna-vihar-iv',
    tag: 'DELIVERED COLONY',
    title: 'Shree Krishna Vihar – IV — Jaipur',
    description:
      'Established plotted colony in Jaipur with verified JDA layout approvals, wide internal roads, and transparent registry records for families.',
    imageUrl: '/projects/shree-krishna-vihar-iv.jpg',
    client: 'Jaipur Corridor',
    date: 'Delivered Scheme',
  },
  {
    id: 'coming-soon-project',
    slug: 'coming-soon-project',
    tag: 'PRE-REGISTRATION OPEN',
    title: 'Coming Soon Project — High-Growth Sector, Jaipur',
    description:
      'Upcoming master-planned residential plotted township in a high-demand Jaipur growth corridor. Pre-register for priority layout allotment and guided site visits.',
    imageUrl: '/projects/coming-soon.jpg',
    client: 'Jaipur Prime Corridor',
    date: 'Upcoming Launch',
  },
];

export const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What are the benefits of buying JDA approved plots?',
    answer: 'JDA (Jaipur Development Authority) approved plots are part of planned urban development schemes with designated layout permissions, road widths, and public utility provisions. Buyers should verify the specific JDA approval letter and layout plan for each scheme.',
  },
  {
    id: 'faq-2',
    question: 'How can I check if a project is RERA registered?',
    answer: 'You can verify the official registration status, sanctioned layout, and promoter details of any registered project on the Rajasthan RERA public portal (rera.rajasthan.gov.in). We recommend verifying official registration numbers before making any financial commitment.',
  },
  {
    id: 'faq-3',
    question: 'Can I get a bank loan for purchasing a plot?',
    answer: 'Bank financing eligibility depends on the specific project approval, the lending bank guidelines, and individual financial profiles. We can share available project documentation so you can check eligibility with your chosen lender.',
  },
  {
    id: 'faq-4',
    question: 'Where are the featured projects located in Jaipur?',
    answer: 'Listed projects are located in key residential corridors across Jaipur, including Mansarovar Extension, Diggi-Malpura Road, and surrounding connecting routes.',
  },
  {
    id: 'faq-5',
    question: 'How do I arrange a site visit?',
    answer: 'You can contact Invest With Ganesh by calling +91-7851982209, sending a WhatsApp message, or submitting the enquiry form. Our team will coordinate a suitable time to inspect the property in person.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'real-estate-vs-gold-vs-mutual-funds',
    title: 'जयपुर में प्लॉट, गोल्ड या म्यूचुअल फंड: कौन-सा निवेश बेहतर?',
    date: 'MAY 25, 2026',
    readTime: '6 MIN READ',
    imageUrl: '/invest/image-33.jpg',
    summary: 'A side-by-side look at residential plots in Jaipur, gold and mutual funds, to help property buyers weigh each option against their goals.',
  },
  {
    id: 'blog-2',
    slug: 'jaipur-real-estate-boom-ring-road',
    title: 'जयपुर रिंग रोड और रियल एस्टेट: 2026 में कौन-से इलाके बन रहे हैं नए ग्रोथ कॉरिडोर?',
    date: 'MAY 25, 2026',
    readTime: '5 MIN READ',
    imageUrl: '/invest/image-32.jpg',
    summary: 'How infrastructure such as the Jaipur Ring Road and SEZ connectivity is influencing the Mansarovar Extension area.',
  },
  {
    id: 'blog-3',
    slug: 'jda-rera-plots-buying-checklist',
    title: 'JDA और RERA अप्रूव्ड प्लॉट्स खरीदते समय इन 5 बातों का हमेशा ध्यान रखें',
    date: 'MAR 10, 2026',
    readTime: '4 MIN READ',
    imageUrl: '/projects/bank-officers-colony.jpg',
    summary: 'Essential legal due diligence checklist before signing an agreement to purchase plotted land in Rajasthan.',
  },
];

export const companyDetails = {
  name: 'Invest With Ganesh',
  fullName: 'Invest With Ganesh Real Estate Advisory',
  founder: 'Ganesh Yadav',
  phone: '+91-7851982209',
  phoneAlt: '+91-7496969728',
  whatsapp: '+91-7851982209',
  whatsappUrl: 'https://wa.me/917851982209?text=Hi%20Ganesh%2C%20I%20saw%20your%20website%20and%20would%20like%20details%20of%20JDA%20%26%20RERA%20approved%20plots%20in%20Jaipur.',
  instagramUrl: 'https://www.instagram.com/invest_with_gaaneesh/',
  youtubeUrl: 'https://www.youtube.com/@invest_with_gaaneesh',
  email: 'info@investwithgaaneesh.com',
  address: '14-A, Shiv Enclave, Near Royal Crysta, Mansarovar Extension, Jaipur, Rajasthan 302020',
  copyright: 'Copyright © Invest With Ganesh (InvestwithGaaneesh), 2026. All rights reserved.',
  designer: 'Invest With Ganesh',
  designerUrl: 'https://investwithgaaneesh.com/',
  disclaimer: 'Invest With Ganesh provides information on residential plotted developments across Jaipur. Project dimensions, layout plans and specifications are subject to verification with the relevant authorities (JDA and Rajasthan RERA). Buyers should complete their own legal due diligence before any purchase. © 2026 Invest With Ganesh. All rights reserved.',
};

export interface TownshipAmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const townshipAmenitiesData: TownshipAmenityItem[] = [
  {
    id: 'gated-community',
    title: 'Gated Community',
    description:
      'Secure gated entry and a well-planned residential layout that give families privacy and controlled access from day one.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'green-environment',
    title: 'Green Environment',
    description:
      'Landscaped parks and open spaces that bring greenery and room to breathe into everyday life.',
    iconName: 'Trees',
  },
  {
    id: 'modern-amenities',
    title: 'Modern Amenities',
    description:
      'Essential lifestyle amenities, wide internal roads, street lighting and quality infrastructure built around family living.',
    iconName: 'Sparkles',
  },
  {
    id: 'wide-connectivity',
    title: 'Wide Connectivity',
    description:
      'Smooth road access to schools, markets, hospitals and major parts of Jaipur.',
    iconName: 'Route',
  },
  {
    id: 'family-friendly-community',
    title: 'Family Friendly Community',
    description:
      'A safe, welcoming neighborhood designed for comfortable family living and a stable future.',
    iconName: 'Users',
  },
  {
    id: '24-7-security',
    title: '24×7 Security',
    description:
      'Controlled entry and round-the-clock security for lasting peace of mind.',
    iconName: 'Lock',
  },
];
