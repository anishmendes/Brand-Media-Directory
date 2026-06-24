import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { FiExternalLink, FiGlobe, FiMapPin } from "react-icons/fi";

type Platform =
  | "website"
  | "google"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "youtube"
  | "linkedin";

type Brand = {
  name: string;
  category: "EV & Automotive" | "Automotive" | "Insurance" | "Construction" | "Construction Tech";
  accent: string;
  logo: string;
  links: Partial<Record<Platform, string>>;
};

type WeeklyRow = {
  brand: Pick<Brand, "name" | "category" | "accent" | "logo">;
  creator: string;
  content: string;
  publishing: string;
  messaging: string;
  deliverable: string;
};

type SeoSupportRow = {
  area: string;
  assignedTo: string;
  tasks: string[];
  frequency: string;
  priority: "High" | "Medium" | "Low";
  output: string;
};

const platforms: {
  id: Platform;
  label: string;
  action: string;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "website", label: "Website", action: "Visit", Icon: FiGlobe },
  { id: "google", label: "Google", action: "Open", Icon: FiMapPin },
  { id: "instagram", label: "Instagram", action: "View", Icon: FaInstagram },
  { id: "facebook", label: "Facebook", action: "View", Icon: FaFacebookF },
  { id: "tiktok", label: "TikTok", action: "View", Icon: FaTiktok },
  { id: "youtube", label: "YouTube", action: "Watch", Icon: FaYoutube },
  { id: "linkedin", label: "LinkedIn", action: "View", Icon: FaLinkedinIn },
];

const brands: Brand[] = [
  {
    name: "London Electric Centre",
    category: "EV & Automotive",
    accent: "#55d861",
    logo: "/logos/london-electric-centre.png",
    links: {
      website: "https://l-ec.co.uk/",
      google: "https://maps.app.goo.gl/MRQfnZY61ehoF75k7",
      instagram: "https://www.instagram.com/london_electric_centre/",
      facebook: "https://www.facebook.com",
      tiktok: "https://www.tiktok.com/@londonelectriccentre",
      youtube: "https://www.youtube.com/@LondonElectricCentre",
    },
  },
  {
    name: "Auto Boutique London",
    category: "Automotive",
    accent: "#8ab8ff",
    logo: "/logos/auto-boutique-london.png",
    links: {
      website: "http://www.autoboutiquelondon.co.uk",
      google: "https://share.google/dQ6w8bKU4ZuP8JVnq",
      instagram: "https://www.instagram.com/ablondonltd/",
      facebook: "https://www.facebook.com/autoboutiquelondon",
      tiktok: "https://www.tiktok.com/@autoboutiquelondon1",
      youtube: "https://www.youtube.com/@AutoBoutique-k4i",
    },
  },
  {
    name: "Insurance Claim Help",
    category: "Insurance",
    accent: "#7c83ff",
    logo: "/logos/insurance-claim-help.jpg",
    links: {
      website: "https://www.insuranceclaimhelp.co.uk/",
      google: "https://share.google/wAPhZG3ouHn09cQE2",
      instagram: "https://www.instagram.com/insurance_claim_help_uk/",
      facebook: "https://www.facebook.com/profile.php?id=61588094954787",
      youtube: "https://www.youtube.com/@InsuranceClaimHelpUk",
      linkedin: "https://www.linkedin.com/company/111964400/admin/dashboard/",
    },
  },
  {
    name: "London Scaffolding Company",
    category: "Construction",
    accent: "#ff9b2f",
    logo: "/logos/london-scaffolding-company.png",
    links: {
      website: "https://www.londonscaffoldingcompany.co.uk/",
      google: "https://share.google/Eoy8dAhXV9OM2YCA4",
      instagram: "https://www.instagram.com/london_scaffolding_company/",
      facebook: "https://www.facebook.com/profile.php?id=61587396099324",
    },
  },
  {
    name: "Builders App",
    category: "Construction Tech",
    accent: "#14b8a6",
    logo: "/logos/builders-app-ai.png",
    links: {
      website: "https://www.buildersappai.com/",
      facebook: "https://www.facebook.com/profile.php?id=61590998711292",
      youtube: "https://www.youtube.com/channel/UCJQ1ivmNLEI8quDD8l8cYeA",
    },
  },
];

const weeklyRows: WeeklyRow[] = [
  {
    brand: brands[2],
    creator: "Content creator",
    content: "Create 2 UGC videos explaining claim help, proof points, and common customer questions.",
    publishing: "Post to Instagram, Facebook, YouTube Shorts and repurpose captions for LinkedIn.",
    messaging: "Check comments and DMs daily, collect claim enquiries, and flag urgent cases.",
    deliverable: "2 edited videos, captions, hashtags, enquiry notes, follower update.",
  },
  {
    brand: brands[1],
    creator: "Automotive creator",
    content: "Create 2 UGC videos around vehicle work, before/after clips, walkarounds, and customer trust.",
    publishing: "Cross-post to Instagram, Facebook, TikTok and YouTube Shorts with platform-fit captions.",
    messaging: "Reply to booking questions, save leads, and pass quote requests to the business.",
    deliverable: "2 edited videos, thumbnail frames, captions, lead notes, follower update.",
  },
  {
    brand: brands[0],
    creator: "EV content creator",
    content: "Create 2 UGC videos for EV chargers, electrical services, product explainers, and installs.",
    publishing: "Cross-post to Instagram, Facebook, TikTok and YouTube Shorts with consistent branding.",
    messaging: "Handle social questions, charger enquiries, service requests, and pass leads to team.",
    deliverable: "2 edited videos, captions, cross-post links, message summary, follower update.",
  },
];

const seoSupportRows: SeoSupportRow[] = [
  {
    area: "Website Health",
    assignedTo: "Web support",
    tasks: ["Update requested text/images", "Check contact forms", "Fix broken buttons or links"],
    frequency: "Weekly",
    priority: "High",
    output: "Website changes live and tested",
  },
  {
    area: "Technical SEO",
    assignedTo: "SEO specialist",
    tasks: ["Check titles and meta descriptions", "Review indexing basics", "Maintain sitemap and schema"],
    frequency: "Weekly",
    priority: "High",
    output: "Technical SEO checklist completed",
  },
  {
    area: "Page Content",
    assignedTo: "SEO copywriter",
    tasks: ["Improve service-page headings", "Add keywords naturally", "Add useful internal links"],
    frequency: "Bi-weekly",
    priority: "Medium",
    output: "Updated SEO copy and page notes",
  },
  {
    area: "Local SEO",
    assignedTo: "Local SEO",
    tasks: ["Update Google Business services", "Add photos/posts", "Track review requests and responses"],
    frequency: "Weekly",
    priority: "High",
    output: "Google profile activity completed",
  },
  {
    area: "Monthly Report",
    assignedTo: "Account manager",
    tasks: ["Summarise traffic and ranking notes", "List completed tasks", "Add next-month recommendations"],
    frequency: "Monthly",
    priority: "Medium",
    output: "Client-ready support report",
  },
];

function PlatformIcon({
  platform,
  size = "normal",
}: {
  platform: (typeof platforms)[number];
  size?: "normal" | "small";
}) {
  const Icon = platform.Icon;

  return (
    <span className={`platform-icon ${platform.id} ${size}`}>
      <Icon />
    </span>
  );
}

function BrandIdentity({ brand }: { brand: Brand }) {
  return (
    <div className="company-cell">
      <div className="logo-ring" style={{ "--accent": brand.accent } as React.CSSProperties}>
        <Image alt={`${brand.name} logo`} height={96} src={brand.logo} width={96} />
      </div>
      <div className="company-text">
        <h2>{brand.name}</h2>
        <span style={{ "--accent": brand.accent } as React.CSSProperties}>{brand.category}</span>
      </div>
    </div>
  );
}

function LinkButton({ href, platform }: { href: string; platform: (typeof platforms)[number] }) {
  return (
    <a className="media-button" href={href} rel="noreferrer" target="_blank">
      <PlatformIcon platform={platform} />
      <span className="button-copy">
        <b>{platform.action}</b>
        <small>{platform.label}</small>
      </span>
      <FiExternalLink className="external-icon" />
    </a>
  );
}

function priorityClass(priority: SeoSupportRow["priority"]) {
  return `priority ${priority.toLowerCase()}`;
}

function TaskText({ children }: { children: React.ReactNode }) {
  return (
    <div className="task-text">
      <span className="task-check" />
      <p>{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="directory-page">
      <section className="directory" id="brands">
        <header className="table-title">
          <Image
            alt="Prindiville Media"
            className="pm-logo"
            height={74}
            priority
            src="/prindiville-media-logo.png"
            width={270}
          />
          <h1>Brand Media Directory</h1>
        </header>

        <div className="desktop-table">
          <div className="directory-header">
            <span>Company</span>
            {platforms.map((platform) => (
              <span key={platform.id}>
                <PlatformIcon platform={platform} size="small" />
                {platform.label}
              </span>
            ))}
          </div>

          <div className="brand-list">
            {brands.map((brand) => (
              <article className="brand-row" key={brand.name}>
                <BrandIdentity brand={brand} />

                {platforms.map((platform) => {
                  const href = brand.links[platform.id];
                  return href ? (
                    <LinkButton href={href} key={platform.id} platform={platform} />
                  ) : (
                    <div className="empty-button" key={platform.id}>
                      <span>Not active</span>
                    </div>
                  );
                })}
              </article>
            ))}
          </div>
        </div>

        <div className="mobile-cards">
          {brands.map((brand) => (
            <article className="brand-card" key={brand.name}>
              <BrandIdentity brand={brand} />
              <div className="mobile-links">
                {platforms.map((platform) => {
                  const href = brand.links[platform.id];
                  return href ? (
                    <LinkButton href={href} key={platform.id} platform={platform} />
                  ) : null;
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="weekly-section" aria-labelledby="weekly-title">
        <header className="weekly-title">
          <span />
          <div>
            <p>Creator & Social Team</p>
            <h2 id="weekly-title">Weekly Work Task List</h2>
          </div>
        </header>

        <div className="weekly-table">
          <div className="weekly-side" aria-hidden="true">
            <div className="task-large">
              <b>2x</b>
              <span>UGC per brand</span>
            </div>
          </div>

          <div className="weekly-grid">
            <div className="weekly-head brand-heading">Brand</div>
            <div className="weekly-head">
              <strong>Assigned To</strong>
              <small>Creator / handler</small>
            </div>
            <div className="weekly-head">
              <strong>UGC Content</strong>
              <small>What to create</small>
            </div>
            <div className="weekly-head">
              <strong>Cross Posting</strong>
              <small>Where to publish</small>
            </div>
            <div className="weekly-head">
              <strong>Social Messages</strong>
              <small>Inbox and leads</small>
            </div>
            <div className="weekly-head">
              <strong>Deliverables</strong>
              <small>What to submit</small>
            </div>

            {weeklyRows.map((row) => (
              <div className="weekly-row-fragment" key={row.brand.name}>
                <BrandIdentity brand={row.brand as Brand} />
                <div className="weekly-cell">
                  <span className="owner-chip">{row.creator}</span>
                </div>
                <div className="weekly-cell">
                  <TaskText>{row.content}</TaskText>
                </div>
                <div className="weekly-cell">
                  <TaskText>{row.publishing}</TaskText>
                </div>
                <div className="weekly-cell">
                  <TaskText>{row.messaging}</TaskText>
                </div>
                <div className="weekly-cell">
                  <TaskText>{row.deliverable}</TaskText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seo-section" aria-labelledby="seo-title">
        <header className="seo-title">
          <div>
            <p>Website & SEO</p>
            <h2 id="seo-title">Support Task Table</h2>
          </div>
          <span>Operational checklist</span>
        </header>

        <div className="seo-table">
          <div className="seo-head">Support Area</div>
          <div className="seo-head">Assigned To</div>
          <div className="seo-head">Tasks To Do</div>
          <div className="seo-head">Frequency</div>
          <div className="seo-head">Priority</div>
          <div className="seo-head">Output</div>

          {seoSupportRows.map((row) => (
            <div className="seo-row-fragment" key={row.area}>
              <div className="seo-area">
                <strong>{row.area}</strong>
              </div>
              <div className="seo-pill">{row.assignedTo}</div>
              <div className="seo-task">
                {row.tasks.map((task) => (
                  <TaskText key={task}>{task}</TaskText>
                ))}
              </div>
              <div className="seo-pill">{row.frequency}</div>
              <div>
                <span className={priorityClass(row.priority)}>{row.priority}</span>
              </div>
              <div className="seo-output">{row.output}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
