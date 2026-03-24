"use client";

import { useMemo, useState } from "react";

const content = {
  th: {
    languageLabel: "TH",
    switchLabel: "English",
    nav: [
      { label: "หน้าแรก", href: "#top" },
      { label: "ผลงาน", href: "#portfolio" },
      { label: "โปรไฟล์", href: "#about" },
      { label: "ประสบการณ์", href: "#experience" },
      { label: "ติดต่อ", href: "#contact" },
    ],
    eyebrow: "Personal Portfolio",
    name: "วัชรี คำบุญ",
    title: "Admin & Customer Support Portfolio",
    role: "Administrative Support • Sales Support • Customer Service",
    summary:
      "ผู้ช่วยงานธุรการและประสานงานขายที่ดูแลงานเอกสาร งานตอบแชทลูกค้า และการติดตามลูกค้าอย่างเป็นระบบ เน้นการสื่อสารชัดเจน ความละเอียดรอบคอบ และการส่งต่องานให้ทีมทำงานต่อได้ลื่นไหล",
    availability:
      "พร้อมรับงานประจำ งานรีโมต และงานฟรีแลนซ์สำหรับงานแอดมิน งานเอกสาร งานตอบลูกค้า และงานประสานงานขาย",
    ctas: [
      { label: "ส่งอีเมล", href: "mailto:Watcharee7305@gmail.com", kind: "primary" },
      { label: "แชทผ่าน Line", href: "https://line.me/ti/p/~Dactww", kind: "secondary" },
      { label: "ดาวน์โหลด CV", href: "/Watcharee_Khambun_CV.pdf", kind: "ghost", download: true },
    ],
    quickMetrics: [
      { value: "3+ ปี", label: "งานธุรการและสนับสนุนการขาย" },
      { value: "6 บทบาท", label: "ประสบการณ์จริงหลายรูปแบบงาน" },
      { value: "Office + Canva", label: "เครื่องมือทำงานประจำ" },
    ],
    notes: [
      "ตอบแชทลูกค้าอย่างสุภาพและต่อเนื่อง",
      "คีย์ข้อมูลและจัดทำเอกสารรายวัน",
      "ช่วยติดตามลูกค้าเก่าและลูกค้าใหม่",
    ],
    highlightsTitle: "Portfolio Highlights",
    highlights: [
      {
        title: "Customer Chat Operations",
        subtitle: "Line OA / Meta / Multi-platform",
        text: "ดูแลการสื่อสารลูกค้าตั้งแต่สอบถามสินค้า แจ้งโปรโมชั่น ไปจนถึงติดตามหลังการขาย เพื่อให้ตอบกลับไวและข้อมูลสม่ำเสมอ",
        tags: ["Chat Support", "Customer Service", "Follow-up"],
      },
      {
        title: "Admin Workflow",
        subtitle: "Documentation + Daily Tracking",
        text: "จัดการงานเอกสาร คีย์ข้อมูล และสรุปรายงานเบื้องต้น ช่วยให้ทีมเห็นสถานะงานและลดความผิดพลาดจากงานซ้ำ",
        tags: ["Excel", "Data Entry", "Document Control"],
      },
      {
        title: "Sales Support Backbone",
        subtitle: "Promotion + Coordination",
        text: "สนับสนุนงานขายด้วยการประสานงาน แจ้งโปรโมชั่น และติดตามลูกค้า ทำให้กระบวนการขายต่อเนื่องและเป็นระบบมากขึ้น",
        tags: ["Sales Admin", "Coordination", "Promotion"],
      },
    ],
    aboutTitle: "โปรไฟล์การทำงาน",
    aboutCards: [
      {
        title: "เหมาะกับตำแหน่ง",
        text: "Administrative Officer, Sales Coordinator, Sales Admin, Customer Service, Chat Support",
      },
      {
        title: "จุดเด่น",
        text: "ละเอียด รอบคอบ ทำงานต่อเนื่องได้ดี และประสานงานกับทีมและลูกค้าได้อย่างเป็นระบบ",
      },
      {
        title: "รูปแบบงานที่ถนัด",
        text: "งานหลังบ้านที่ต้องการความสม่ำเสมอ งานตอบลูกค้า และงานที่ต้องติดตามสถานะงานรายวัน",
      },
    ],
    skillsTitle: "Skills & Tools",
    skillGroups: [
      {
        title: "Core Skills",
        items: [
          "Administrative support",
          "Customer chat support",
          "Sales coordination",
          "Data entry and tracking",
        ],
      },
      {
        title: "Tools",
        items: ["Excel", "Word", "PowerPoint", "Canva", "Line OA", "Meta Business Suite", "Shopee", "Lazada"],
      },
      {
        title: "Work Style",
        items: ["Detail-oriented", "Clear communication", "Consistent follow-through", "Fast learner"],
      },
    ],
    servicesTitle: "บริการที่เปิดรับบน Fastwork",
    services: [
      {
        title: "แอดมินตอบแชทลูกค้า",
        text: "ตอบแชทลูกค้า ให้ข้อมูลสินค้า แจ้งโปรโมชั่น และติดตามลูกค้าผ่าน Line หรือช่องทางออนไลน์อื่น",
      },
      {
        title: "คีย์ข้อมูลและเอกสาร",
        text: "บันทึกข้อมูล จัดทำไฟล์ Excel/Word และอัปเดตข้อมูลประจำวันอย่างมีระบบ",
      },
      {
        title: "ผู้ช่วยประสานงานขาย",
        text: "ติดตามลูกค้า ประสานงานภายใน และช่วยให้งานขายดำเนินต่อได้ลื่นขึ้น",
      },
      {
        title: "ผู้ช่วยร้านค้าออนไลน์",
        text: "ดูแลงานตอบลูกค้า งานคำสั่งซื้อ และงานแพ็กหรือเตรียมข้อมูลสินค้า",
      },
    ],
    experienceTitle: "ประสบการณ์ทำงาน",
    experience: [
      {
        period: "2568 - ปัจจุบัน",
        role: "Telesales และ Admin",
        company: "บริษัท มิราเคิล 24 จำกัด",
        bullets: [
          "ดูแลงานขายและการสื่อสารลูกค้าผ่าน Line OA และ Meta (Facebook/Instagram)",
          "ให้ข้อมูลสินค้า แนะนำโปรโมชั่น และติดตามลูกค้าอย่างต่อเนื่อง",
          "สนับสนุนงานแอดมินหลังบ้าน เช่น บันทึกข้อมูลลูกค้าและติดตามออเดอร์",
        ],
      },
      {
        period: "2568",
        role: "Admin",
        company: "บริษัท พรีเจ เวิร์ล เอ็นเตอร์ไพรส์ จำกัด",
        bullets: [
          "ตอบแชทลูกค้าหลายแพลตฟอร์มและให้ข้อมูลสินค้าเบื้องต้น",
          "สนับสนุนการแจ้งโปรโมชั่นประจำเดือน",
          "ประสานงานงานขายและงานแอดมินประจำวัน",
        ],
      },
      {
        period: "2567 - 2568",
        role: "พนักงานขายทางมือถือและแชท",
        company: "บริษัท พรีออนิค จำกัด",
        bullets: [
          "ให้บริการลูกค้าผ่านมือถือและช่องทางแชท",
          "ติดตามลูกค้าผ่าน Line พร้อมแนะนำสินค้าและโปรโมชั่น",
          "ดูแลการปิดการขายจากลูกค้าเดิมและลูกค้าใหม่",
        ],
      },
      {
        period: "2567",
        role: "เจ้าหน้าที่สรรหาบุคลากร (HR Recruiter L2)",
        company: "Siamchai",
        bullets: [
          "สรรหาบุคลากรให้ตรงกับความต้องการของตำแหน่งงาน",
          "จัดทำเอกสารประจำวันและประสานงานกับหน่วยงานที่เกี่ยวข้อง",
          "สนับสนุนการทำงานภายในทีมและติดตามความคืบหน้าของงาน",
        ],
      },
      {
        period: "2567",
        role: "Admin และแพ็กสินค้า",
        company: "Lazada / Shopee (งานเสริม)",
        bullets: [
          "ตอบคำถามลูกค้าและให้ข้อมูลสินค้าอย่างครบถ้วน",
          "แพ็กสินค้าและเตรียมงานจัดส่งประจำวัน",
          "สนับสนุนการดำเนินงานของร้านค้าออนไลน์ในช่วงงานเร่งด่วน",
        ],
      },
      {
        period: "2566",
        role: "เจ้าหน้าที่ธุรการ",
        company: "Nail & Spa",
        bullets: [
          "จัดทำเอกสารประจำวันและบันทึกรายการสินค้าใน Excel",
          "ดูแลการจัดทำและอัปเดตโปรโมชั่นประจำเดือน",
          "โทรติดตามและแจ้งข้อมูลโปรโมชั่นให้กับลูกค้า",
        ],
      },
    ],
    contactTitle: "Contact",
    contacts: [
      { label: "Phone", value: "088-1637305", href: "tel:0881637305" },
      { label: "Email", value: "Watcharee7305@gmail.com", href: "mailto:Watcharee7305@gmail.com" },
      { label: "Line", value: "Dactww", href: "https://line.me/ti/p/~Dactww" },
      { label: "Location", value: "Si Racha, Chonburi", href: null },
    ],
    footer:
      "เว็บไซต์นี้ใช้เป็นทั้ง Portfolio, CV Online และหน้าแนะนำตัวสำหรับสมัครงานหรือรับงานฟรีแลนซ์",
  },
  en: {
    languageLabel: "EN",
    switchLabel: "ภาษาไทย",
    nav: [
      { label: "Home", href: "#top" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Profile", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    eyebrow: "Personal Portfolio",
    name: "Watcharee Khambun",
    title: "Admin & Customer Support Portfolio",
    role: "Administrative Support • Sales Support • Customer Service",
    summary:
      "Administrative and sales support professional with practical experience in documentation, customer chat support, client follow-up, and online sales coordination. Reliable, detail-oriented, and focused on keeping day-to-day operations clear and organized.",
    availability:
      "Open to full-time, remote, and freelance opportunities in admin support, documentation, customer communication, and sales coordination.",
    ctas: [
      { label: "Send Email", href: "mailto:Watcharee7305@gmail.com", kind: "primary" },
      { label: "Line Chat", href: "https://line.me/ti/p/~Dactww", kind: "secondary" },
      { label: "Download CV", href: "/Watcharee_Khambun_CV.pdf", kind: "ghost", download: true },
    ],
    quickMetrics: [
      { value: "3+ Years", label: "Admin and sales support experience" },
      { value: "6 Roles", label: "Hands-on work across operations" },
      { value: "Office + Canva", label: "Daily tools" },
    ],
    notes: [
      "Professional customer chat handling",
      "Consistent documentation and data updates",
      "Strong follow-up support for new and existing customers",
    ],
    highlightsTitle: "Portfolio Highlights",
    highlights: [
      {
        title: "Customer Chat Operations",
        subtitle: "Line OA / Meta / Multi-platform",
        text: "Managed customer conversations from first inquiry to post-sale follow-up, keeping response quality and tone consistent across channels.",
        tags: ["Chat Support", "Customer Service", "Follow-up"],
      },
      {
        title: "Admin Workflow",
        subtitle: "Documentation + Daily Tracking",
        text: "Handled documentation, data entry, and daily reporting tasks to keep operational status visible and reduce repetitive admin friction.",
        tags: ["Excel", "Data Entry", "Document Control"],
      },
      {
        title: "Sales Support Backbone",
        subtitle: "Promotion + Coordination",
        text: "Supported sales operations with promotion communication, customer follow-up, and coordination workflows that improved continuity.",
        tags: ["Sales Admin", "Coordination", "Promotion"],
      },
    ],
    aboutTitle: "Working Profile",
    aboutCards: [
      {
        title: "Best-fit roles",
        text: "Administrative Officer, Sales Coordinator, Sales Admin, Customer Service, Chat Support",
      },
      {
        title: "Strengths",
        text: "Detail-oriented, dependable, and able to keep routine operations structured while coordinating clearly with teams and customers.",
      },
      {
        title: "Preferred work style",
        text: "Backend support, routine tracking work, customer response operations, and role-based coordination tasks.",
      },
    ],
    skillsTitle: "Skills & Tools",
    skillGroups: [
      {
        title: "Core Skills",
        items: [
          "Administrative support",
          "Customer chat support",
          "Sales coordination",
          "Data entry and tracking",
        ],
      },
      {
        title: "Tools",
        items: ["Excel", "Word", "PowerPoint", "Canva", "Line OA", "Meta Business Suite", "Shopee", "Lazada"],
      },
      {
        title: "Work Style",
        items: ["Detail-oriented", "Clear communication", "Consistent follow-through", "Fast learner"],
      },
    ],
    servicesTitle: "Fastwork-Friendly Services",
    services: [
      {
        title: "Customer Chat Support",
        text: "Handle customer messages, provide product information, share promotions, and follow up through Line or other online channels.",
      },
      {
        title: "Data Entry and Documentation",
        text: "Organize records, update spreadsheets, and prepare daily support documents accurately and consistently.",
      },
      {
        title: "Sales Coordination Support",
        text: "Support customer follow-up, internal coordination, and promotion communication to keep sales workflows moving.",
      },
      {
        title: "Online Shop Assistance",
        text: "Support order handling, customer replies, and preparation tasks for online store operations.",
      },
    ],
    experienceTitle: "Work Experience",
    experience: [
      {
        period: "2025 - Present",
        role: "Telesales and Admin",
        company: "Miracle 24 Company Limited",
        bullets: [
          "Handle telesales and customer communication through Line OA and Meta channels.",
          "Provide product information, recommend promotions, and follow up with customers consistently.",
          "Support backend admin tasks such as customer records and order follow-up.",
        ],
      },
      {
        period: "2025",
        role: "Admin",
        company: "Preage World Enterprise Co., Ltd.",
        bullets: [
          "Responded to customer inquiries across multiple platforms and provided basic sales information.",
          "Supported monthly promotion communication for customers.",
          "Assisted with sales coordination and follow-up tasks.",
        ],
      },
      {
        period: "2024 - 2025",
        role: "Sales and Chat Support Staff",
        company: "Preonique Co., Ltd.",
        bullets: [
          "Assisted customers through mobile and chat-based sales channels.",
          "Followed up with customers via Line and recommended products and promotions.",
          "Supported sales closing for both returning and new customers.",
        ],
      },
      {
        period: "2024",
        role: "HR Recruiter (L2)",
        company: "Siamchai",
        bullets: [
          "Recruited candidates according to job requirements and team needs.",
          "Prepared daily documents and coordinated with related departments.",
          "Supported internal team operations and progress tracking.",
        ],
      },
      {
        period: "2024",
        role: "Admin and Packing Staff",
        company: "Lazada / Shopee (Part-time)",
        bullets: [
          "Answered customer questions and provided product information.",
          "Packed products and supported daily order preparation.",
          "Helped maintain day-to-day online shop operations during high-volume periods.",
        ],
      },
      {
        period: "2023",
        role: "Administrative Officer",
        company: "Nail & Spa",
        bullets: [
          "Prepared daily documents and maintained product records in Excel.",
          "Supported monthly promotion updates and promotional coordination.",
          "Contacted customers to share promotional information and follow up on service communication.",
        ],
      },
    ],
    contactTitle: "Contact",
    contacts: [
      { label: "Phone", value: "+66 88 163 7305", href: "tel:+66881637305" },
      { label: "Email", value: "Watcharee7305@gmail.com", href: "mailto:Watcharee7305@gmail.com" },
      { label: "Line", value: "Dactww", href: "https://line.me/ti/p/~Dactww" },
      { label: "Location", value: "Si Racha, Chonburi, Thailand", href: null },
    ],
    footer:
      "This website works as a portfolio, online CV, and profile page for job applications and freelance opportunities.",
  },
};

function CtaButton({ item }) {
  const isExternal = item.href.startsWith("http");

  return (
    <a
      className={`cta-button cta-${item.kind}`}
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      download={item.download ? true : undefined}
    >
      {item.label}
    </a>
  );
}

function SectionHeading({ title }) {
  return (
    <div className="section-head reveal">
      <span className="section-line" />
      <h2>{title}</h2>
    </div>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState("th");
  const copy = useMemo(() => content[lang], [lang]);

  return (
    <main className="page-shell" id="top">
      <div className="bg-blob blob-a" />
      <div className="bg-blob blob-b" />
      <div className="bg-blob blob-c" />

      <header className="site-header glass reveal" style={{ "--delay": "60ms" }}>
        <a className="brand" href="#top">
          watcharee_CV
        </a>

        <nav className="site-nav">
          {copy.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="lang-switch" onClick={() => setLang(lang === "th" ? "en" : "th")} type="button">
          <span>{copy.languageLabel}</span>
          <span>{copy.switchLabel}</span>
        </button>
      </header>

      <section className="hero glass reveal" style={{ "--delay": "120ms" }}>
        <div className="hero-left">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.name}</h1>
          <p className="hero-title">{copy.title}</p>
          <p className="hero-role">{copy.role}</p>
          <p className="hero-summary">{copy.summary}</p>

          <div className="hero-actions">
            {copy.ctas.map((item) => (
              <CtaButton key={item.label} item={item} />
            ))}
          </div>

          <p className="availability">{copy.availability}</p>

          <div className="metrics-grid">
            {copy.quickMetrics.map((metric, index) => (
              <article
                className="metric-card reveal"
                key={metric.label}
                style={{ "--delay": `${180 + index * 70}ms` }}
              >
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-right">
          <div className="portrait-stage">
            <div className="portrait-disc">WK</div>
            <div className="floating-note note-a">Admin</div>
            <div className="floating-note note-b">Support</div>
            <div className="floating-note note-c">Fastwork</div>
          </div>

          <div className="notes-list">
            {copy.notes.map((item, index) => (
              <div className="note-row reveal" key={item} style={{ "--delay": `${220 + index * 80}ms` }}>
                <span className="dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="section" id="portfolio">
        <SectionHeading title={copy.highlightsTitle} />
        <div className="portfolio-grid">
          {copy.highlights.map((card, index) => (
            <article
              className="portfolio-card glass reveal"
              key={card.title}
              style={{ "--delay": `${120 + index * 90}ms` }}
            >
              <p className="portfolio-subtitle">{card.subtitle}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className="tag-list">
                {card.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <SectionHeading title={copy.aboutTitle} />
        <div className="about-grid">
          {copy.aboutCards.map((card, index) => (
            <article className="about-card glass reveal" key={card.title} style={{ "--delay": `${120 + index * 80}ms` }}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-column" id="skills">
        <article className="skills-panel glass reveal" style={{ "--delay": "100ms" }}>
          <SectionHeading title={copy.skillsTitle} />
          <div className="skills-group-list">
            {copy.skillGroups.map((group, index) => (
              <div className="skills-group" key={group.title} style={{ "--delay": `${150 + index * 80}ms` }}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="tag-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="services-panel glass reveal" id="services" style={{ "--delay": "160ms" }}>
          <SectionHeading title={copy.servicesTitle} />
          <div className="services-grid">
            {copy.services.map((service, index) => (
              <article className="service-card reveal" key={service.title} style={{ "--delay": `${220 + index * 80}ms` }}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="section" id="experience">
        <SectionHeading title={copy.experienceTitle} />
        <div className="timeline-wrap">
          {copy.experience.map((job, index) => (
            <article className="timeline-card glass reveal" key={`${job.period}-${job.role}`} style={{ "--delay": `${120 + index * 65}ms` }}>
              <div className="timeline-period">{job.period}</div>
              <div className="timeline-content">
                <h3>{job.role}</h3>
                <p className="company">{job.company}</p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <article className="contact-shell glass reveal" style={{ "--delay": "140ms" }}>
          <SectionHeading title={copy.contactTitle} />
          <div className="contact-grid">
            {copy.contacts.map((item, index) => (
              <div className="contact-row reveal" key={item.label} style={{ "--delay": `${220 + index * 70}ms` }}>
                <span>{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="contact-actions">
            {copy.ctas.map((item) => (
              <CtaButton key={`contact-${item.label}`} item={item} />
            ))}
          </div>
        </article>
      </section>

      <footer className="site-footer reveal" style={{ "--delay": "180ms" }}>
        <p>{copy.footer}</p>
      </footer>
    </main>
  );
}
