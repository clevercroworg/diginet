export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  department: string;
  shortBio: string;
  fullBio: string[];
  image: string;
  imageScale?: number;      // Zoom level multiplier
  imagePosition?: string;   // CSS object-position
  imageOffset?: {           // Fine pixel translations
    x?: number;             // Horizontal offset in pixels
    y?: number;             // Vertical offset in pixels
  };
  skills: string[];
  experienceYears: string;
  education?: string;
  certifications?: string;
  email: string;
  linkedin: string;
  keyAchievements: string[];
  quote: string;
}

export const teamMembers: TeamMember[] = [
  /* Temporarily removed Suman Singh from Our Team as requested
  {
    id: "suman-singh",
    slug: "suman-singh",
    name: "Suman Singh",
    role: "Chief Executive Officer & Investor",
    department: "Executive Leadership",
    shortBio: "Consummate entrepreneur and astute investor leading Diginet's strategic trajectory with a synthesis of entrepreneurial audacity and operational discipline.",
    fullBio: [
      "Suman Singh is a consummate entrepreneur and astute investor whose trajectory through the information technology landscape spans more than fifteen years, marked at every juncture by an unwavering appetite for innovation, calculated risk, and the pursuit of ventures that transcend conventional commercial boundaries. Her career reflects not merely participation in the industry's evolution, but active authorship of it — a career built on the conviction that technology, at its most compelling, is inseparable from culture, aesthetics, and the texture of everyday human life.",
      "As a visionary progenitor of numerous ventures, Suman has cultivated a diverse and discerning portfolio spanning the lifestyle and cultural domains, identifying nascent opportunities well before they crystallize into mainstream movements. Her investments are not the product of reflexive capital deployment, but of a deliberate, almost curatorial philosophy — one that privileges founders and ideas capable of forging genuine cultural resonance alongside commercial viability. Across this portfolio, she has served as an indispensable catalyst: incubating early-stage ventures through their most precarious formative stages, lending not only capital but strategic counsel, market intuition, and an unerring sense of timing that has repeatedly distinguished the ventures she champions from their contemporaries.",
      "In her present capacity as Chief Executive Officer and Investor at Diginet, Suman helms the organization's strategic trajectory with a rare synthesis of entrepreneurial audacity and operational discipline. She approaches leadership not as custodianship of the status quo, but as an ongoing exercise in reimagination — continually interrogating where the organization stands, where the broader industry is drifting, and where genuine, defensible advantage might yet be forged. Her leadership philosophy is anchored in conviction over consensus, agility over inertia, and an instinctive, almost intuitive eye for untapped potential long before it becomes apparent to more conventional observers."
    ],
    image: "/images/team/suman_singh.jpeg",
    imageScale: 1,
    imagePosition: "center top",
    imageOffset: { x: 0, y: 0 },
    skills: ["Strategic Leadership", "Venture Investment", "Corporate Strategy", "Innovation Management", "Business Transformation"],
    experienceYears: "15+ Years",
    email: "s.singh@diginet.com",
    linkedin: "https://www.linkedin.com/in/suman-singh-b60b241a1/",
    keyAchievements: [
      "Helms Diginet's strategic trajectory across global enterprise technology markets.",
      "Incubated and backed a diverse portfolio of high-growth technology and cultural ventures.",
      "Established Diginet's core leadership philosophy combining commercial pragmatism and cultural sensibility."
    ],
    quote: "Technology, at its most compelling, is inseparable from culture, aesthetics, and the texture of everyday human life."
  }
  */
  {
    id: "vijayant-tripathi",
    slug: "vijayant-tripathi",
    name: "Vijayant Tripathi",
    role: "APAC Director of Technical Services",
    department: "Technical Services & Cybersecurity",
    shortBio: "25 years of IT infrastructure leadership and cybersecurity operations, leading Diginet's technical services across the APAC region.",
    fullBio: [
      "Vijayant leads DigiNet's technical services organization across the APAC region, bringing 25 years of experience spanning IT infrastructure leadership and cybersecurity operations. His career began at Hewlett-Packard India, followed by multiple infrastructure and delivery roles across Singapore's banking and technology sector, before he moved into focused leadership of managed security and SOC delivery for clients in banking, capital markets, and other regulated industries.",
      "As Director, Vijayant is responsible for the operational integrity of DigiNet's client-facing technical stack — detection and response, privileged access, network security, and vulnerability management — run as a single accountable discipline rather than a set of disconnected tools. He has direct experience leading incident response on live, high-severity events, including ransomware engagements, and has built the reporting, escalation, and governance frameworks that let regulated clients evidence their security posture with confidence.",
      "His approach is grounded in operational discipline: SLA-bound response, ITIL-aligned service delivery, and a bias toward measurable outcomes over vendor promises. He holds PMP, ITIL V3, AWS Certified Solutions Architect, and MCSE certifications, and has built delivery teams that combine deep technical fluency with client-facing accountability."
    ],
    image: "/images/team/vijayant_tripathi.jpeg",
    imageScale: 1,
    imagePosition: "center top",
    imageOffset: { x: 0, y: 0 },
    skills: ["Managed Security & SOC", "Incident Response", "Vulnerability Management", "IT Infrastructure Leadership", "ITIL & SLA Governance"],
    experienceYears: "25+ Years",
    certifications: "PMP, ITIL V3, AWS Certified Solutions Architect, MCSE",
    email: "v.tripathi@diginet.com",
    linkedin: "https://www.linkedin.com/in/vijayant-tripathi/",
    keyAchievements: [
      "Leads DigiNet's technical services and SOC operations across the APAC region.",
      "Spearheaded live high-severity incident response and ransomware containment engagements.",
      "Built SLA-bound ITIL service delivery governance frameworks for tier-1 banking institutions."
    ],
    quote: "Make security and infrastructure something clients stop worrying about — by owning the outcome end to end."
  },
  {
    id: "gaurav-sethi",
    slug: "gaurav-sethi",
    name: "Gaurav Sethi",
    role: "Principal Enterprise Architect",
    department: "Enterprise Architecture & AI",
    shortBio: "Seasoned Enterprise Architect specializing in modernizing mission-critical BFSI platforms, cloud-native microservices, and agentic AI solution design.",
    fullBio: [
      "Gaurav is a seasoned Enterprise Architect with deep expertise in modernizing mission‑critical systems across BFSI. He has led the transformation of trade finance platforms through cloud‑native microservices, API‑first design, and resilient SaaS architectures.",
      "With advanced skills in Java, Spring, data modeling, and DevOps, Gaurav also pioneers agentic AI‑based solutions that enhance decision‑making and operational efficiency.",
      "His proven ability to align technology strategy with business outcomes, mentor engineering teams, and deliver secure, compliant, and future‑ready platforms makes him a trusted partner for enterprises seeking innovation and scalability."
    ],
    image: "/images/team/gaurav_sethi.jpeg",
    imageScale: 1.02,
    imagePosition: "center top",
    imageOffset: { x: 1, y: 0 },
    skills: ["Enterprise Architecture", "BFSI Systems Modernization", "Agentic AI Solutions", "Cloud-Native Microservices", "API-First SaaS Platforms"],
    experienceYears: "18+ Years",
    email: "g.sethi@diginet.com",
    linkedin: "https://www.linkedin.com/company/diginet-solutions-pte-ltd/",
    keyAchievements: [
      "Led full cloud-native microservice transformations of enterprise BFSI trade finance platforms.",
      "Pioneered agentic AI solutions that enhance automated decision-making and operational efficiency.",
      "Architected secure, compliant, and future-ready API-first SaaS infrastructures."
    ],
    quote: "Aligning technology strategy with business outcomes creates secure, compliant, and future-ready enterprise platforms."
  }
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}
