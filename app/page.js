"use client";

import { useMemo, useState } from "react";

const content = {
  th: {
    languageLabel: "TH",
    switchLabel: "English",
    nav: [
      { label: "เกี่ยวกับ", href: "#about" },
      { label: "ประสบการณ์", href: "#experience" },
      { label: "ทักษะ", href: "#skills" },
      { label: "บริการ", href: "#services" },
      { label: "ติดต่อ", href: "#contact" },
    ],
    eyebrow: "Portfolio / CV",
    name: "วัชรี คำบุญ",
    nameLatin: "Watcharee Khambun",
    role: "Admin • Sales Support • Customer Service",
    summary:
      "ผู้ช่วยงานธุรการและประสานงานขายที่มีประสบการณ์ด้านเอกสาร การตอบแชทลูกค้า การติดตามลูกค้า และการสนับสนุนงานขายผ่านช่องทางออนไลน์ ทำงานละเอียด สื่อสารชัดเจน และพร้อมดูแลงานหลังบ้านให้เป็นระบบ",
    availability:
      "เปิดรับงานประจำ งานรีโมต และงานฟรีแลนซ์สำหรับงานแอดมิน งานเอกสาร งานตอบลูกค้า และงานประสานงานขาย",
    ctas: [
      { label: "ส่งอีเมล", href: "mailto:Watcharee7305@gmail.com", kind: "primary" },
      { label: "ติดต่อ Line", href: "https://line.me/ti/p/~Dactww", kind: "secondary" },
    ],
    heroStats: [
      { value: "3+ ปี", label: "ประสบการณ์งานเอกสารและงานขายสนับสนุน" },
      { value: "6 ตำแหน่ง", label: "งานในสาย Admin, HR, Chat Support, Sales" },
      { value: "Office + Canva", label: "เครื่องมือที่ใช้งานประจำ" },
    ],
    profilePoints: [
      "ตอบแชทลูกค้าอย่างสุภาพและต่อเนื่อง",
      "จัดทำเอกสาร คีย์ข้อมูล และอัปเดตข้อมูลรายวัน",
      "ช่วยติดตามลูกค้าเก่าและลูกค้าใหม่เพื่อสนับสนุนการขาย",
    ],
    sectionAboutTitle: "ภาพรวมการทำงาน",
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
        title: "พื้นที่ทำงาน",
        text: "ศรีราชา ชลบุรี และงานออนไลน์หรือรีโมตที่ต้องการผู้ช่วยดูแลงานประจำวัน",
      },
    ],
    experienceTitle: "ประสบการณ์ทำงาน",
    experience: [
      {
        period: "2568 - ปัจจุบัน",
        role: "พนักงานขายทางมือถือและแชท",
        company: "Miracle",
        bullets: [
          "ดูแลลูกค้าผ่าน Line และช่องทางแชท พร้อมให้ข้อมูลสินค้าอย่างชัดเจน",
          "ติดตามลูกค้าเก่าและลูกค้าใหม่เพื่อสนับสนุนการปิดการขาย",
          "ช่วยเสนอโปรโมชั่นประจำเดือนและดูแลการสื่อสารอย่างต่อเนื่อง",
        ],
      },
      {
        period: "2568",
        role: "Admin",
        company: "ฟรีเจ เวิร์ล เอ็นเตอร์ไพรส์",
        bullets: [
          "ตอบลูกค้าหลายแพลตฟอร์มและให้ข้อมูลเบื้องต้นเกี่ยวกับสินค้า",
          "สนับสนุนการนำเสนอโปรโมชั่นและติดตามงานขายที่เกี่ยวข้อง",
          "ช่วยประสานงานงานขายและงานแอดมินประจำวัน",
        ],
      },
      {
        period: "2567 - 2568",
        role: "พนักงานขายทางมือถือและแชท",
        company: "พรอชนิต จำกัด",
        bullets: [
          "ให้บริการลูกค้าผ่านมือถือและแชท พร้อมแนะนำสินค้า",
          "ติดตามลูกค้าผ่าน Line และช่วยปิดการขายอย่างต่อเนื่อง",
          "ดูแลโปรโมชั่นและการสื่อสารกับลูกค้าทั้งเก่าและใหม่",
        ],
      },
      {
        period: "2567",
        role: "เจ้าหน้าที่สรรหาบุคลากร (HR Recruiter L2)",
        company: "Siamchai",
        bullets: [
          "สรรหาผู้สมัครให้ตรงกับความต้องการของตำแหน่ง",
          "จัดทำเอกสารประจำวันและประสานงานกับหน่วยงานที่เกี่ยวข้อง",
          "ช่วยติดตามความคืบหน้าของงานและสนับสนุนการทำงานภายในทีม",
        ],
      },
      {
        period: "2567",
        role: "Admin และแพ็กสินค้า",
        company: "Lazada / Shopee (งานเสริม)",
        bullets: [
          "ตอบคำถามลูกค้าและให้ข้อมูลสินค้าในร้านค้าออนไลน์",
          "แพ็กสินค้าและเตรียมคำสั่งซื้อประจำวัน",
          "สนับสนุนการดำเนินงานร้านค้าออนไลน์ช่วงงานเร่งด่วน",
        ],
      },
      {
        period: "2566",
        role: "เจ้าหน้าที่ธุรการ",
        company: "Nail & Spa",
        bullets: [
          "จัดทำเอกสารประจำวันและบันทึกรายการสินค้าใน Excel",
          "อัปเดตโปรโมชั่นประจำเดือนและช่วยสื่อสารกับลูกค้า",
          "ติดตามและแจ้งข้อมูลโปรโมชั่นผ่านโทรศัพท์",
        ],
      },
    ],
    skillsTitle: "ทักษะหลัก",
    skillGroups: [
      {
        title: "งานที่ทำได้ดี",
        items: [
          "งานธุรการและงานเอกสาร",
          "คีย์ข้อมูลและสรุปข้อมูลเบื้องต้น",
          "ตอบแชทลูกค้าและติดตามลูกค้า",
          "ประสานงานขายและสนับสนุนงานหน้าร้าน/ออนไลน์",
        ],
      },
      {
        title: "เครื่องมือ",
        items: ["Microsoft Excel", "Microsoft Word", "PowerPoint", "Canva", "Line", "Shopee", "Lazada"],
      },
      {
        title: "สไตล์การทำงาน",
        items: ["ละเอียดรอบคอบ", "เรียนรู้งานไว", "ติดตามงานต่อเนื่อง", "สื่อสารสุภาพและชัดเจน"],
      },
    ],
    servicesTitle: "บริการที่เหมาะกับ Fastwork",
    services: [
      {
        title: "แอดมินตอบแชทลูกค้า",
        text: "ตอบแชท ให้ข้อมูลสินค้า แจ้งโปรโมชั่น และช่วยติดตามลูกค้าผ่าน Line หรือช่องทางออนไลน์อื่น",
      },
      {
        title: "คีย์ข้อมูลและจัดทำเอกสาร",
        text: "ช่วยบันทึกข้อมูล จัดทำไฟล์ Excel/Word และอัปเดตข้อมูลประจำวันอย่างเป็นระบบ",
      },
      {
        title: "ผู้ช่วยประสานงานขาย",
        text: "สนับสนุนการติดตามลูกค้า จัดการงานหลังบ้าน และช่วยให้งานขายเดินต่อได้ลื่นขึ้น",
      },
      {
        title: "ผู้ช่วยร้านค้าออนไลน์",
        text: "ตอบลูกค้า ดูแลงานคำสั่งซื้อ และช่วยแพ็กหรือเตรียมข้อมูลสินค้าสำหรับร้านออนไลน์",
      },
    ],
    educationTitle: "การศึกษาและข้อมูลเพิ่มเติม",
    education: {
      degree: "บริหารธุรกิจบัณฑิต สาขาการจัดการ",
      school: "มหาวิทยาลัยราชภัฏพิบูลสงคราม พิษณุโลก",
      meta: ["เกรดเฉลี่ยสะสม 3.29", "จบปี 2565", "ภาษาไทย: ภาษาแม่", "ภาษาอังกฤษ: ระดับพื้นฐานสำหรับการทำงาน"],
    },
    contactTitle: "ติดต่อ",
    contacts: [
      { label: "โทรศัพท์", value: "088-1637305", href: "tel:0881637305" },
      { label: "อีเมล", value: "Watcharee7305@gmail.com", href: "mailto:Watcharee7305@gmail.com" },
      { label: "Line", value: "Dactww", href: "https://line.me/ti/p/~Dactww" },
      { label: "พื้นที่", value: "Si Racha, Chonburi", href: null },
    ],
    footer: "เว็บไซต์นี้ใช้เป็นทั้ง Portfolio, CV Online และหน้าแนะนำตัวสำหรับสมัครงานหรือรับงานฟรีแลนซ์",
  },
  en: {
    languageLabel: "EN",
    switchLabel: "ภาษาไทย",
    nav: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    eyebrow: "Portfolio / CV",
    name: "Watcharee Khambun",
    nameLatin: "Administrative Support Portfolio",
    role: "Admin • Sales Support • Customer Service",
    summary:
      "Administrative and sales support professional with hands-on experience in document preparation, customer chat support, client follow-up, and online sales coordination. Reliable, detail-oriented, and ready to support structured day-to-day operations.",
    availability:
      "Open to full-time, remote, and freelance work in admin support, customer communication, documentation, and sales coordination.",
    ctas: [
      { label: "Send Email", href: "mailto:Watcharee7305@gmail.com", kind: "primary" },
      { label: "Chat on Line", href: "https://line.me/ti/p/~Dactww", kind: "secondary" },
    ],
    heroStats: [
      { value: "3+ Years", label: "Admin, documentation, and sales support experience" },
      { value: "6 Roles", label: "Across admin, HR, chat support, and sales operations" },
      { value: "Office + Canva", label: "Daily working tools" },
    ],
    profilePoints: [
      "Professional customer chat support and follow-up",
      "Consistent document handling, data entry, and daily updates",
      "Practical support for sales teams and online operations",
    ],
    sectionAboutTitle: "Working Profile",
    aboutCards: [
      {
        title: "Best-fit roles",
        text: "Administrative Officer, Sales Coordinator, Sales Admin, Customer Service, Chat Support",
      },
      {
        title: "Strengths",
        text: "Detail-oriented, dependable, and able to keep routine work organized while coordinating clearly with customers and teams.",
      },
      {
        title: "Work setting",
        text: "Based in Si Racha, Chonburi, and available for remote support or online operational work.",
      },
    ],
    experienceTitle: "Work Experience",
    experience: [
      {
        period: "2025 - Present",
        role: "Sales and Chat Support Staff",
        company: "Miracle",
        bullets: [
          "Handle customer communication through Line and chat channels with clear product guidance.",
          "Follow up with both existing and new customers to support sales conversion.",
          "Promote monthly campaigns and maintain consistent customer communication.",
        ],
      },
      {
        period: "2025",
        role: "Admin",
        company: "ฟรีเจ เวิร์ล เอ็นเตอร์ไพรส์",
        bullets: [
          "Responded to customer inquiries across multiple platforms and provided basic product information.",
          "Supported promotion communication and follow-up tasks related to sales activities.",
          "Assisted with daily coordination across admin and sales support work.",
        ],
      },
      {
        period: "2024 - 2025",
        role: "Sales and Chat Support Staff",
        company: "พรอชนิต จำกัด",
        bullets: [
          "Supported customers through mobile and chat-based sales communication.",
          "Followed up through Line and recommended products and promotions.",
          "Helped drive sales with both returning and new customers.",
        ],
      },
      {
        period: "2024",
        role: "HR Recruiter (L2)",
        company: "Siamchai",
        bullets: [
          "Screened and recruited candidates based on role requirements.",
          "Prepared daily documents and coordinated with related departments.",
          "Supported internal team operations and task follow-up.",
        ],
      },
      {
        period: "2024",
        role: "Admin and Packing Staff",
        company: "Lazada / Shopee (Part-time)",
        bullets: [
          "Answered customer questions and provided product information for online shops.",
          "Packed products and supported daily order preparation.",
          "Helped maintain online shop operations during busy periods.",
        ],
      },
      {
        period: "2023",
        role: "Administrative Officer",
        company: "Nail & Spa",
        bullets: [
          "Prepared daily documents and updated product records in Excel.",
          "Supported monthly promotion updates and customer communication.",
          "Followed up with customers by phone regarding promotional offers.",
        ],
      },
    ],
    skillsTitle: "Core Skills",
    skillGroups: [
      {
        title: "Strongest areas",
        items: [
          "Administrative support and document handling",
          "Data entry and basic reporting",
          "Customer chat support and client follow-up",
          "Sales coordination for online and in-store workflows",
        ],
      },
      {
        title: "Tools",
        items: ["Microsoft Excel", "Microsoft Word", "PowerPoint", "Canva", "Line", "Shopee", "Lazada"],
      },
      {
        title: "Working style",
        items: ["Detail-oriented", "Fast learner", "Consistent follow-through", "Clear and polite communication"],
      },
    ],
    servicesTitle: "Fastwork-Friendly Services",
    services: [
      {
        title: "Customer Chat Support",
        text: "Handle customer messages, share product information, promote offers, and follow up through Line or other online channels.",
      },
      {
        title: "Data Entry and Documentation",
        text: "Organize files, update spreadsheets, and prepare daily support documents with accuracy and consistency.",
      },
      {
        title: "Sales Coordination Support",
        text: "Assist with customer follow-up, promotion communication, and backend support that keeps sales work moving.",
      },
      {
        title: "Online Shop Assistance",
        text: "Support order handling, customer responses, and product preparation for online store operations.",
      },
    ],
    educationTitle: "Education and Additional Information",
    education: {
      degree: "Bachelor of Business Administration in Management",
      school: "Pibulsongkram Rajabhat University, Phitsanulok, Thailand",
      meta: ["GPA 3.29", "Graduated in 2022", "Thai: Native", "English: Basic working proficiency"],
    },
    contactTitle: "Contact",
    contacts: [
      { label: "Phone", value: "+66 88 163 7305", href: "tel:+66881637305" },
      { label: "Email", value: "Watcharee7305@gmail.com", href: "mailto:Watcharee7305@gmail.com" },
      { label: "Line", value: "Dactww", href: "https://line.me/ti/p/~Dactww" },
      { label: "Location", value: "Si Racha, Chonburi, Thailand", href: null },
    ],
    footer: "This website works as a portfolio, online CV, and profile page for job applications or freelance opportunities.",
  },
};

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function LinkButton({ item }) {
  return (
    <a
      className={`button ${item.kind === "primary" ? "button-primary" : "button-secondary"}`}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
    >
      {item.label}
    </a>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState("th");
  const copy = useMemo(() => content[lang], [lang]);

  return (
    <main className="page-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <header className="topbar">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <a className="brand" href="#top">
            watcharee_CV
          </a>
        </div>

        <div className="toolbar">
          <nav className="nav">
            {copy.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="lang-switch"
            onClick={() => setLang(lang === "th" ? "en" : "th")}
            type="button"
          >
            <span>{copy.languageLabel}</span>
            <span>{copy.switchLabel}</span>
          </button>
        </div>
      </header>

      <section className="hero panel" id="top">
        <div className="hero-copy">
          <p className="hero-kicker">{copy.role}</p>
          <h1>{copy.name}</h1>
          <p className="hero-subtitle">{copy.nameLatin}</p>
          <p className="hero-summary">{copy.summary}</p>

          <div className="hero-actions">
            {copy.ctas.map((item) => (
              <LinkButton key={item.label} item={item} />
            ))}
          </div>

          <p className="availability">{copy.availability}</p>
        </div>

        <aside className="hero-side">
          <div className="monogram-card">
            <div className="monogram">WK</div>
            <div className="monogram-copy">
              <h2>{lang === "th" ? "พร้อมช่วยดูแลงานหลังบ้าน" : "Ready to support daily operations"}</h2>
              <p>
                {lang === "th"
                  ? "เหมาะกับงานเอกสาร ตอบลูกค้า ประสานงานขาย และงานสนับสนุนการทำงานประจำวัน"
                  : "A practical fit for admin work, customer support, sales coordination, and routine operational tasks."}
              </p>
            </div>
          </div>

          <div className="point-list">
            {copy.profilePoints.map((point) => (
              <div className="point-item" key={point}>
                <span className="point-bullet" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="stats-grid">
        {copy.heroStats.map((item) => (
          <article className="stat-card panel" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section-block" id="about">
        <div className="section-heading">
          <p className="section-label">{copy.sectionAboutTitle}</p>
        </div>
        <div className="card-grid three-up">
          {copy.aboutCards.map((card) => (
            <article className="panel info-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="experience">
        <div className="section-heading">
          <p className="section-label">{copy.experienceTitle}</p>
        </div>

        <div className="timeline">
          {copy.experience.map((job) => (
            <article className="panel timeline-item" key={`${job.period}-${job.role}`}>
              <div className="timeline-meta">
                <Badge>{job.period}</Badge>
              </div>
              <div className="timeline-body">
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

      <section className="section-block" id="skills">
        <div className="section-heading">
          <p className="section-label">{copy.skillsTitle}</p>
        </div>
        <div className="card-grid three-up">
          {copy.skillGroups.map((group) => (
            <article className="panel skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-list">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="services">
        <div className="section-heading">
          <p className="section-label">{copy.servicesTitle}</p>
        </div>
        <div className="card-grid four-up">
          {copy.services.map((service) => (
            <article className="panel service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-layout">
        <article className="panel education-card">
          <p className="section-label">{copy.educationTitle}</p>
          <h3>{copy.education.degree}</h3>
          <p className="company">{copy.education.school}</p>
          <ul>
            {copy.education.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel contact-card" id="contact">
          <p className="section-label">{copy.contactTitle}</p>
          <div className="contact-list">
            {copy.contacts.map((item) => (
              <div className="contact-row" key={item.label}>
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
        </article>
      </section>

      <footer className="footer">
        <p>{copy.footer}</p>
      </footer>
    </main>
  );
}

