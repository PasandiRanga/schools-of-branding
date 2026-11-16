/* Central content for the Schools of Branding homepage.
   Swap imagery / copy here without touching components. */

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Programmes", to: "/programmes" },
  { label: "Mentors", to: "/mentors" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

export const MARQUEE = [
  "Brand Strategy",
  "Marketing Foundations",
  "Content Creation",
  "Social Media Handling",
  "Packaging Design",
  "Hands-on Workshops",
  "Online & In-person",
  "For Budding Entrepreneurs",
  "First-come Free Sessions",
];

export const HERO_PHOTOS = [
  img("1522071820081-009f0129c71c", 600),
  img("1552664730-d307ca884978", 600),
  img("1557804506-669a67965ba0", 600),
];

export const PROGRAMMES = [
  {
    icon: "Sparkles",
    title: "Brand Strategy",
    desc: "Position, name and shape a brand that people remember — purpose, voice, identity and the story that holds it together.",
    tint: "var(--tint-blue)",
    img: img("1558655146-9f40138edfeb"),
  },
  {
    icon: "Megaphone",
    title: "Marketing Foundations",
    desc: "Understand your audience, build campaigns that convert, and learn the practical marketing playbook every founder needs.",
    tint: "var(--tint-yellow)",
    img: img("1460925895917-afdab827c52f"),
  },
  {
    icon: "PenTool",
    title: "Content Creation",
    desc: "Plan, write and produce content that earns attention — photography, copy, video and the systems to stay consistent.",
    tint: "var(--tint-sky)",
    img: img("1611162617474-5b21e879e113"),
  },
  {
    icon: "Share2",
    title: "Social Media Handling",
    desc: "Grow and manage real communities across platforms, from calendars and analytics to engagement that actually sticks.",
    tint: "var(--tint-sun)",
    img: img("1611926653458-09294b3142bf"),
  },
  {
    icon: "Package",
    title: "Packaging Design",
    desc: "Turn a product into a shelf-stopping experience — materials, structure and design that sells before a word is read.",
    tint: "var(--tint-yellow)",
    img: img("1607082348824-0a96f2a4b9da"),
  },
  {
    icon: "Rocket",
    title: "Launch Your Business",
    desc: "Bring it all together in a guided programme that takes your idea from concept to a brand ready to meet its market.",
    tint: "var(--tint-blue)",
    img: img("1556761175-b413da4baf72"),
  },
];

export const STATS = [
  { value: "1200+", label: "Entrepreneurs trained" },
  { value: "60+", label: "Workshops delivered" },
  { value: "4.9/5", label: "Average rating" },
];

export const STEPS = [
  {
    num: "01",
    title: "Create your account",
    tag: "free to join",
    desc: "Sign up to unlock enrolment, free first-come sessions, meeting links and event invites — all in one place.",
  },
  {
    num: "02",
    title: "Pick a programme",
    tag: "online or in-person",
    desc: "Browse our programmes, reserve a seat for a physical workshop or enrol in a live online session that fits you.",
  },
  {
    num: "03",
    title: "Learn & build",
    tag: "ongoing",
    desc: "Join the sessions, get your meeting links and resources, and leave with a brand you can actually put to work.",
  },
];

export const FEATURES = [
  {
    icon: "GraduationCap",
    title: "Practical, not theory",
    desc: "Every session is hands-on — you build real brand assets as you learn.",
  },
  {
    icon: "Users",
    title: "Small by design",
    desc: "Focused groups so every founder gets attention and feedback.",
  },
  {
    icon: "Globe",
    title: "Online & physical",
    desc: "Join live from anywhere, or reserve a seat at an in-person workshop.",
  },
  {
    icon: "Ticket",
    title: "Free first-come seats",
    desc: "Members get access to free sessions on a first-come, first-served basis.",
  },
];

export const FOUNDERS = [
  {
    name: "Janidu Chandrasekara",
    role: "Co-founder",
    bio: "Branding strategist helping founders turn raw ideas into brands with a clear voice and direction.",
    img: img("1507003211169-0a1dd7228f2d"),
  },
  {
    name: "Hansana Janinda",
    role: "Co-founder",
    bio: "Marketing and content specialist focused on practical growth for early-stage businesses.",
    img: img("1500648767791-00dcc994a43e"),
  },
  {
    name: "Guest Mentors",
    role: "Industry pros",
    bio: "Working designers and marketers who join our workshops to share what's happening right now.",
    img: img("1573497019940-1c28c88b4f3e"),
  },
  {
    name: "Our Community",
    role: "Alumni network",
    bio: "A growing circle of founders you keep learning with long after the workshop ends.",
    img: img("1544005313-94ddf0286df2"),
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I came in with just an idea and left with a full brand identity I was proud to launch. The sessions are practical from minute one.",
    name: "Nethmi Perera",
    role: "Founder · Skincare startup",
  },
  {
    quote:
      "The social media workshop completely changed how I post. My small shop now gets real engagement instead of silence.",
    name: "Dilan Fernando",
    role: "Owner · Local cafe",
  },
  {
    quote:
      "Reserving a seat for the in-person packaging workshop was the best decision. Hands-on, honest feedback, zero fluff.",
    name: "Ama Wickrama",
    role: "Founder · Handmade goods",
  },
];

export const PLANS = [
  {
    name: "Free Session",
    price: "Free",
    per: "first-come",
    desc: "Try a live intro workshop, no commitment.",
    features: ["Members-only access", "First-come, first-served", "Online delivery"],
    cta: "Create account",
    featured: false,
  },
  {
    name: "Programme",
    price: "On request",
    per: "per track",
    desc: "A full programme in a single branding discipline.",
    features: [
      "Multi-session track",
      "Meeting links & resources",
      "Online or in-person",
      "Certificate of completion",
    ],
    cta: "Enrol now",
    featured: true,
  },
  {
    name: "Workshop Seat",
    price: "Reserve",
    per: "per event",
    desc: "A seat at a hands-on physical workshop.",
    features: ["Reserved physical seat", "Materials included", "Direct mentor feedback"],
    cta: "Reserve a seat",
    featured: false,
  },
];

/* ---- Extra data for inner pages ---- */

export const PROGRAMME_DETAILS = [
  {
    icon: "Sparkles",
    title: "Brand Strategy",
    tint: "var(--tint-blue)",
    img: img("1558655146-9f40138edfeb"),
    duration: "4 weeks",
    format: "Online & in-person",
    level: "Beginner friendly",
    desc: "Position, name and shape a brand that people remember. We cover purpose, voice, identity and the story that holds everything together.",
    outcomes: [
      "A clear brand purpose & positioning",
      "Your brand voice and personality",
      "A simple visual identity direction",
      "A one-page brand story to build on",
    ],
  },
  {
    icon: "Megaphone",
    title: "Marketing Foundations",
    tint: "var(--tint-yellow)",
    img: img("1460925895917-afdab827c52f"),
    duration: "4 weeks",
    format: "Online & in-person",
    level: "Beginner friendly",
    desc: "Understand your audience, build campaigns that convert and learn the practical marketing playbook every founder needs from day one.",
    outcomes: [
      "Know and map your ideal customer",
      "A simple, repeatable campaign plan",
      "Channels that fit your budget",
      "Metrics that actually matter",
    ],
  },
  {
    icon: "PenTool",
    title: "Content Creation",
    tint: "var(--tint-sky)",
    img: img("1611162617474-5b21e879e113"),
    duration: "5 weeks",
    format: "Online & in-person",
    level: "All levels",
    desc: "Plan, write and produce content that earns attention — photography, copy, video and the systems that keep you consistent.",
    outcomes: [
      "A content plan you can keep up with",
      "Writing and shooting fundamentals",
      "Editing on tools you already own",
      "A month of content, ready to post",
    ],
  },
  {
    icon: "Share2",
    title: "Social Media Handling",
    tint: "var(--tint-sun)",
    img: img("1611926653458-09294b3142bf"),
    duration: "5 weeks",
    format: "Online & in-person",
    level: "All levels",
    desc: "Grow and manage real communities across platforms — calendars, analytics and engagement that actually sticks.",
    outcomes: [
      "A platform-by-platform strategy",
      "A posting calendar & workflow",
      "Community management basics",
      "Reading analytics with confidence",
    ],
  },
  {
    icon: "Package",
    title: "Packaging Design",
    tint: "var(--tint-yellow)",
    img: img("1607082348824-0a96f2a4b9da"),
    duration: "4 weeks",
    format: "In-person",
    level: "Intermediate",
    desc: "Turn a product into a shelf-stopping experience — materials, structure and design that sells before a word is read.",
    outcomes: [
      "Packaging that fits your brand",
      "Materials & structure basics",
      "Working with printers & suppliers",
      "A packaging concept to test",
    ],
  },
  {
    icon: "Rocket",
    title: "Launch Your Business",
    tint: "var(--tint-blue)",
    img: img("1556761175-b413da4baf72"),
    duration: "8 weeks",
    format: "Online & in-person",
    level: "Capstone",
    desc: "Bring it all together in a guided programme that takes your idea from concept to a brand ready to meet its market.",
    outcomes: [
      "A complete brand toolkit",
      "A go-to-market plan",
      "Launch content ready to ship",
      "Mentor feedback at every step",
    ],
  },
];

export const MENTORS = [
  {
    name: "Janidu Chandrasekara",
    role: "Co-founder · Brand Strategy",
    bio: "Branding strategist helping founders turn raw ideas into brands with a clear voice and direction. Leads our strategy and identity programmes.",
    img: img("1507003211169-0a1dd7228f2d"),
  },
  {
    name: "Hansana Janinda",
    role: "Co-founder · Marketing",
    bio: "Marketing and content specialist focused on practical growth for early-stage businesses. Heads up marketing and content creation.",
    img: img("1500648767791-00dcc994a43e"),
  },
  {
    name: "Rahul Mendis",
    role: "Mentor · Social Media",
    bio: "Community builder who has grown audiences for local brands from zero. Teaches social strategy that fits a founder's time.",
    img: img("1506794778202-cad84cf45f1d"),
  },
  {
    name: "Ishara Fonseka",
    role: "Mentor · Content",
    bio: "Photographer and content producer who makes great content feel doable on any budget.",
    img: img("1544005313-94ddf0286df2"),
  },
  {
    name: "Tharindu Silva",
    role: "Mentor · Packaging",
    bio: "Product and packaging designer who has shipped work onto real shelves across Sri Lanka.",
    img: img("1573497019940-1c28c88b4f3e"),
  },
  {
    name: "Nadeesha Perera",
    role: "Mentor · Launch",
    bio: "Founder-turned-mentor who guides the capstone, from first idea to launch day.",
    img: img("1580489944761-15a19d654956"),
  },
];

export const VALUES = [
  {
    icon: "Target",
    title: "Practical first",
    desc: "You leave every session with something made, not just notes. Real assets for your real brand.",
  },
  {
    icon: "MessageSquare",
    title: "Honest feedback",
    desc: "Kind, direct and useful. We tell you what's working and what isn't — the way a good mentor should.",
  },
  {
    icon: "Users",
    title: "Built on community",
    desc: "You join a circle of founders who keep learning together long after the workshop ends.",
  },
  {
    icon: "Heart",
    title: "For real founders",
    desc: "No jargon, no gatekeeping. Branding knowledge made for people actually starting a business.",
  },
];

export const CONTACT_METHODS = [
  {
    icon: "Mail",
    title: "Email us",
    detail: "hello@schoolsofbranding.com",
    sub: "We reply within a day, usually sooner.",
  },
  {
    icon: "MessageSquare",
    title: "Workshops & events",
    detail: "Join an upcoming session",
    sub: "Online live classes and in-person workshops.",
  },
  {
    icon: "Users",
    title: "Partner with us",
    detail: "For brands & organisations",
    sub: "Run a tailored workshop for your team.",
  },
];

export const FAQS = [
  {
    q: "Do I need an account to join a programme?",
    a: "You can browse the whole site as a guest. To enrol in programmes, grab free first-come sessions, receive meeting links or reserve a physical seat, you'll create a free account so we can keep everything in one place and send you event updates.",
  },
  {
    q: "Are the workshops online or in person?",
    a: "Both. Many programmes run live online so you can join from anywhere, and we also hold in-person workshops where you can reserve a seat. Each programme page tells you the format before you enrol.",
  },
  {
    q: "How do the free first-come sessions work?",
    a: "Members get access to selected free sessions on a first-come, first-served basis. When a free session opens, logged-in members can claim a spot until it's full.",
  },
  {
    q: "Who are these programmes for?",
    a: "Budding entrepreneurs and anyone preparing to start a business who wants practical knowledge in branding, marketing, content, social media and packaging design — no prior experience required.",
  },
  {
    q: "Will I get a meeting link for online sessions?",
    a: "Yes. Once you're enrolled, your meeting links appear in your account and are sent to your email ahead of each live online session.",
  },
];
