const demoResume = {
  name: "Ekaterina Anikina",
  title: "HR Director | Automotive, Retail, IT & Manufacturing",
  location: "Tashkent, Uzbekistan",
  summary: "HR and operations leader focused on HR business partnership, recruiting ATS, analytics, corporate culture, communications and learning systems.",
  contacts: {
    email: "",
    phone: "+7 996 977 2995",
    telegram: "@Anickina",
    linkedin: "https://www.linkedin.com/in/ekaterina-a-980aa8187",
    github: ""
  },
  skills: ["HR Business Partnering", "Recruiting ATS Implementation", "HR Analytics"],
  experience: [],
  projects: [],
  education: [],
  languages: [
    { name: "Russian", level: "Native / Fluent" },
    { name: "English", level: "Professional working proficiency" },
    { name: "French", level: "B2" }
  ]
};

const i18n = {
  en: {
    code: "EN",
    label: "English",
    eyebrow: "Interactive resume",
    loadingName: "Loading...",
    loadingTitle: "Connecting data",
    contact: "Contact",
    profile: "Profile",
    location: "Location",
    statusLive: "Live data from Supabase",
    statusDemo: "Demo mode: add Supabase URL and publishable key to .env.local",
    statusMissing: "Resume record was not found, demo is shown",
    statusError: "Could not load Supabase, demo is shown",
    coreSignals: ["HRBP model", "Recruiting ATS", "HR analytics", "L&D ecosystem"],
    tabs: {
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Key Transformations",
      languages: "Languages"
    },
    contacts: {
      phone: "Call",
      email: "Email",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Website"
    }
  },
  ru: {
    code: "RU",
    label: "Русский",
    eyebrow: "Интерактивное резюме",
    loadingName: "Загрузка...",
    loadingTitle: "Подключаем данные",
    contact: "Связаться",
    profile: "Профиль",
    location: "Локация",
    statusLive: "Данные загружены из Supabase",
    statusDemo: "Демо-режим: добавьте Supabase URL и publishable key в .env.local",
    statusMissing: "Запись резюме не найдена, показано демо",
    statusError: "Не удалось загрузить Supabase, показано демо",
    coreSignals: ["HRBP-модель", "Recruiting ATS", "HR-аналитика", "L&D-система"],
    tabs: {
      skills: "Навыки",
      experience: "Опыт",
      education: "Образование",
      projects: "Ключевые трансформации",
      languages: "Языки"
    },
    contacts: {
      phone: "Позвонить",
      email: "Email",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Сайт"
    }
  },
  uz: {
    code: "UZ",
    label: "O'zbekcha",
    eyebrow: "Interaktiv rezyume",
    loadingName: "Yuklanmoqda...",
    loadingTitle: "Ma'lumotlar ulanmoqda",
    contact: "Bog'lanish",
    profile: "Profil",
    location: "Joylashuv",
    statusLive: "Ma'lumotlar Supabase'dan yuklandi",
    statusDemo: "Demo rejim: .env.local fayliga Supabase URL va publishable key qo'shing",
    statusMissing: "Rezyume yozuvi topilmadi, demo ko'rsatilmoqda",
    statusError: "Supabase yuklanmadi, demo ko'rsatilmoqda",
    coreSignals: ["HRBP modeli", "Recruiting ATS", "HR analitika", "L&D tizimi"],
    tabs: {
      skills: "Ko'nikmalar",
      experience: "Tajriba",
      education: "Ta'lim",
      projects: "Asosiy transformatsiyalar",
      languages: "Tillar"
    },
    contacts: {
      phone: "Qo'ng'iroq",
      email: "Email",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Sayt"
    }
  }
};

const translations = {
  ru: {
    title: "HR-директор | Automotive, Retail, IT и Manufacturing",
    location: "Ташкент, Узбекистан",
    summary:
      "HR- и операционный лидер с опытом 17+ лет в ролях HRD, CEO, COO, VP, Executive Assistant, Logistics and Procurement. Сильная экспертиза в HR business partnering, recruiting ATS, HR-аналитике, корпоративной культуре, внутренних коммуникациях, обучении, адаптации и автоматизации HR-процессов.",
    skills: {
      "Team Management": "Управление командами",
      Negotiation: "Переговоры",
      Training: "Обучение",
      Strategy: "Стратегия",
      "HR Strategy": "HR-стратегия",
      "People Management": "Управление персоналом",
      "Operations Management": "Операционное управление",
      "Performance Evaluation": "Оценка эффективности",
      "Business Transformation": "Бизнес-трансформация",
      "Lean Production": "Lean production",
      "Process Automation": "Автоматизация процессов",
      "Crisis Management": "Кризисное управление",
      "Contracts Management": "Управление договорами",
      "Sales & Marketing": "Продажи и маркетинг",
      Startups: "Стартапы",
      "SWOT Analysis": "SWOT-анализ",
      "HR Business Partnering": "HR Business Partnering",
      "Recruiting ATS Implementation": "Внедрение Recruiting ATS",
      "HR Analytics": "HR-аналитика",
      "Corporate Culture": "Корпоративная культура",
      "Internal Communications": "Внутренние коммуникации",
      "Learning & Development": "Обучение и развитие",
      "Employee Adaptation": "Адаптация сотрудников",
      "HR Administration": "Кадровое администрирование"
    },
    languages: {
      Russian: ["Русский", "Родной / свободно"],
      English: ["Английский", "Профессиональный рабочий уровень"],
      German: ["Немецкий", "Педагогическое образование"],
      French: ["Французский", "B2"]
    },
    projects: {
      "Operational Efficiency Transformation": [
        "Трансформация операционной эффективности",
        "Повышение эффективности бизнеса через автоматизацию процессов, систему мотивации команды и оптимизацию производства."
      ],
      "Procurement and Supplier Recovery": [
        "Восстановление поставщиков и закупок",
        "Восстановление сотрудничества с международными поставщиками, усиление контроля качества и снижение закупочных затрат за счет планирования."
      ],
      "HR Strategy and People Operations": [
        "HR-стратегия и people operations",
        "Выстраивание HR-направления вокруг управления командами, HR-стратегии, обучения, переговоров и связи с бизнес-задачами."
      ],
      "HR Business Partner Model": [
        "Модель HR Business Partner",
        "Внедрение роли HR Business Partner как связующего звена между продажами, операционными задачами и HR-функцией."
      ],
      "Corporate Culture and Communications": [
        "Корпкультура и коммуникации",
        "Создание единого направления корпоративной культуры и коммуникаций: кодекс этики, ПВТР, внутренние ивенты и коммуникационные ритуалы."
      ],
      "Learning, Adaptation and HR Automation": [
        "Обучение, адаптация и HR-автоматизация",
        "Создание процессов обучения и развития, внешнего и внутреннего обучения, аттестации, ИПР, адаптации и автоматизации административных HR-процессов."
      ]
    },
    experience: {
      "Human Resource Director|ADM GLOBAL": [
        "Директор по персоналу",
        "Выступает как HR Business Partner для руководителей продаж и операционных направлений, переводя потребности бизнеса в HR-решения. Ведет обучение команды, внедрение recruiting ATS, HR-аналитику по персоналу, клиентам и рынкам, корпоративную культуру и коммуникации, автоматизацию кадрового администрирования, обучение и развитие, аттестацию, индивидуальные планы развития и систему адаптации."
      ],
      "Human Resources Director|ADM GLOBAL": [
        "Директор по персоналу",
        "Управляла HR-направлением и people-процессами с фокусом на HRD, коммуникации, подбор, отношения с сотрудниками и операционное выравнивание."
      ],
      "Human Resource Director|Symbionty Kutushova": [
        "Директор по персоналу",
        "Отвечала за HR-лидерство, координацию команды и HR-стратегию в удаленном full-time формате."
      ],
      "Director Human Resources Division|An Company Working in Retail Project": [
        "Руководитель HR-дивизиона",
        "Возглавляла HR-дивизион retail-проекта, совмещая HR-управление, операционную поддержку и организационное развитие."
      ],
      "Project Head|Insulation, Heat Protection, Energy Saving Company": [
        "Руководитель проекта",
        "Управляла операциями проекта и координацией поставщиков. Восстановила сотрудничество с международными поставщиками через контроль качества, снизила стоимость командировочных закупок на 10% и внедрила профессиональное планирование закупочного финансирования."
      ],
      "Operational Director|TPP Partner, PTPA": [
        "Операционный директор",
        "Курировала операционные процессы и поддерживала управление в рамках краткосрочного leadership assignment."
      ],
      "CEO|Flagman Production, LLC": [
        "CEO",
        "Повысила операционную эффективность на 30% и общую результативность на 40%, увеличила производство в 3 раза и продажи в 3 раза. Запустила четыре новых продукта, автоматизировала процессы и системы, улучшила клиентский сервис на 30% и внедрила схемы лидерства для мотивации команды."
      ],
      "Furniture Designer|Sfera Mebel, LLC": [
        "Дизайнер мебели",
        "Создала 20 новых дизайнов, что привело к росту продаж на 20%. Отвечала за дизайн, продажи и работу с клиентами."
      ],
      "Head of Logistics and Procurement|TDYcomponents": [
        "Руководитель логистики и закупок",
        "Управляла закупками и логистикой автокомпонентов для производителей и дилерских сетей. Снизила закупочную стоимость на 20%, увеличила производственную мощность на 20%, улучшила складское управление и логистику, внедрила ISO 9000:2001 в двух департаментах."
      ]
    },
    education: {
      "Bachelor's Degree, English and German Teaching": "Бакалавриат, преподавание английского и немецкого языков",
      "Level 7 Master of Human Resources Management, Strategic Human Resources Management": "Level 7 Master of Human Resources Management, Strategic Human Resources Management",
      "Master of Strategic HR Management, Level 7": "Master of Strategic HR Management, Level 7"
    }
  },
  uz: {
    title: "HR direktori | Automotive, Retail, IT va Manufacturing",
    location: "Toshkent, O'zbekiston",
    summary:
      "HR va operatsion yo'nalishlarda 17+ yillik tajribaga ega rahbar. Asosiy kuchli tomonlari: HR business partnering, recruiting ATS, HR analitika, korporativ madaniyat, ichki kommunikatsiyalar, o'qitish, adaptatsiya va HR jarayonlarini avtomatlashtirish.",
    skills: {
      "Team Management": "Jamoani boshqarish",
      Negotiation: "Muzokaralar",
      Training: "O'qitish",
      Strategy: "Strategiya",
      "HR Strategy": "HR strategiya",
      "People Management": "Xodimlarni boshqarish",
      "Operations Management": "Operatsion boshqaruv",
      "Performance Evaluation": "Samaradorlikni baholash",
      "Business Transformation": "Biznes transformatsiyasi",
      "Lean Production": "Lean production",
      "Process Automation": "Jarayonlarni avtomatlashtirish",
      "Crisis Management": "Inqiroz boshqaruvi",
      "Contracts Management": "Shartnomalarni boshqarish",
      "Sales & Marketing": "Sotuv va marketing",
      Startups: "Startaplar",
      "SWOT Analysis": "SWOT tahlil",
      "HR Business Partnering": "HR Business Partnering",
      "Recruiting ATS Implementation": "Recruiting ATS joriy etish",
      "HR Analytics": "HR analitika",
      "Corporate Culture": "Korporativ madaniyat",
      "Internal Communications": "Ichki kommunikatsiyalar",
      "Learning & Development": "O'qitish va rivojlanish",
      "Employee Adaptation": "Xodimlar adaptatsiyasi",
      "HR Administration": "Kadrlar administratsiyasi"
    },
    languages: {
      Russian: ["Rus tili", "Ona tili / erkin"],
      English: ["Ingliz tili", "Professional ish darajasi"],
      German: ["Nemis tili", "Pedagogik ta'lim asosida"],
      French: ["Fransuz tili", "B2"]
    },
    projects: {
      "Operational Efficiency Transformation": [
        "Operatsion samaradorlik transformatsiyasi",
        "Jarayonlarni avtomatlashtirish, jamoa motivatsiyasi va ishlab chiqarishni optimallashtirish orqali biznes samaradorligini oshirish."
      ],
      "Procurement and Supplier Recovery": [
        "Ta'minotchilar va xaridlarni tiklash",
        "Xalqaro ta'minotchilar bilan hamkorlikni tiklash, sifat nazoratini kuchaytirish va xarid xarajatlarini kamaytirish."
      ],
      "HR Strategy and People Operations": [
        "HR strategiya va people operations",
        "Jamoa boshqaruvi, HR strategiya, o'qitish, muzokaralar va biznes maqsadlari bilan bog'langan HR yo'nalishini qurish."
      ],
      "HR Business Partner Model": [
        "HR Business Partner modeli",
        "Sotuv, operatsion ehtiyojlar va HR funksiyasi o'rtasida bog'lovchi rol sifatida HRBP modelini joriy etish."
      ],
      "Corporate Culture and Communications": [
        "Korporativ madaniyat va kommunikatsiyalar",
        "Etika kodeksi, ichki mehnat qoidalari, ichki tadbirlar va kommunikatsiya jarayonlari bilan yagona yo'nalish yaratish."
      ],
      "Learning, Adaptation and HR Automation": [
        "O'qitish, adaptatsiya va HR avtomatlashtirish",
        "Ichki/tashqi o'qitish, attestatsiya, individual rivojlanish rejalari, onboarding va HR-administrativ jarayonlarni avtomatlashtirish."
      ]
    },
    experience: {
      "Human Resource Director|ADM GLOBAL": [
        "HR direktori",
        "Sotuv va operatsion rahbarlar uchun HR Business Partner sifatida ishlaydi, biznes ehtiyojlarini HR yechimlariga aylantiradi. Jamoani o'qitish, recruiting ATS joriy etish, xodimlar, mijozlar va bozorlar bo'yicha HR analitika, korporativ madaniyat va kommunikatsiyalar, kadrlar administratsiyasini avtomatlashtirish, L&D, attestatsiya, individual rivojlanish rejalari va adaptatsiya tizimini boshqaradi."
      ],
      "Human Resources Director|ADM GLOBAL": [
        "HR direktori",
        "HR yo'nalishi va people jarayonlarini boshqargan: HRD, kommunikatsiya, rekruting, xodimlar bilan munosabatlar va operatsion moslashuv."
      ],
      "Human Resource Director|Symbionty Kutushova": [
        "HR direktori",
        "Masofaviy full-time formatda HR liderlik, jamoa koordinatsiyasi va HR strategiya uchun javobgar bo'lgan."
      ],
      "Director Human Resources Division|An Company Working in Retail Project": [
        "HR divizion rahbari",
        "Retail loyihasida HR divizionini boshqargan, HR boshqaruvi, operatsion qo'llab-quvvatlash va tashkiliy rivojlanishni birlashtirgan."
      ],
      "Project Head|Insulation, Heat Protection, Energy Saving Company": [
        "Loyiha rahbari",
        "Loyiha operatsiyalari va ta'minotchilar koordinatsiyasini boshqargan. Xalqaro ta'minotchilar bilan hamkorlikni tiklagan, xarid xarajatlarini 10% kamaytirgan va procurement finance planning joriy etgan."
      ],
      "Operational Director|TPP Partner, PTPA": [
        "Operatsion direktor",
        "Qisqa muddatli rahbarlik vazifasida operatsion jarayonlarni boshqargan va management support qilgan."
      ],
      "CEO|Flagman Production, LLC": [
        "CEO",
        "Operatsion samaradorlikni 30% va umumiy natijadorlikni 40% oshirgan, ishlab chiqarishni 3 barobar va sotuvni 3 barobar ko'paytirgan. To'rtta yangi mahsulotni ishga tushirgan, jarayonlarni avtomatlashtirgan va mijoz servisni 30% yaxshilagan."
      ],
      "Furniture Designer|Sfera Mebel, LLC": [
        "Mebel dizayneri",
        "20 ta yangi dizayn yaratgan, bu sotuvni 20% oshirgan. Dizayn, sotuv va mijozlar bilan ishlash uchun javobgar bo'lgan."
      ],
      "Head of Logistics and Procurement|TDYcomponents": [
        "Logistika va xaridlar rahbari",
        "Avtokomponentlar bo'yicha xarid va logistika jarayonlarini boshqargan. Xarid xarajatlarini 20% kamaytirgan, ishlab chiqarish quvvatini 20% oshirgan, ombor va logistika boshqaruvini yaxshilagan, ikki departamentda ISO 9000:2001 joriy etgan."
      ]
    },
    education: {
      "Bachelor's Degree, English and German Teaching": "Bakalavr darajasi, ingliz va nemis tillarini o'qitish",
      "Level 7 Master of Human Resources Management, Strategic Human Resources Management": "Level 7 Master of Human Resources Management, Strategic Human Resources Management",
      "Master of Strategic HR Management, Level 7": "Master of Strategic HR Management, Level 7"
    }
  }
};

const state = {
  rawResume: demoResume,
  resume: demoResume,
  activeTab: "skills",
  lang: "en",
  statusKey: "statusLive"
};

const $ = (selector) => document.querySelector(selector);

function t() {
  return i18n[state.lang];
}

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value || "";
}

function initials(name) {
  return String(name || "IR")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function contactItems(contacts = {}) {
  const order = ["phone", "telegram", "linkedin", "email", "website", "github"];
  return order.map((key) => [key, contacts[key]]).filter(([, value]) => Boolean(value));
}

function contactHref(key, value) {
  if (key === "email") return `mailto:${value}`;
  if (key === "phone") return `tel:${value.replace(/\s/g, "")}`;
  if (key === "telegram") return value.startsWith("http") ? value : `https://t.me/${value.replace("@", "")}`;
  return value;
}

function contactIcon(key) {
  return {
    phone: "tel",
    email: "@",
    telegram: "tg",
    linkedin: "in",
    github: "gh",
    website: "web"
  }[key] || "+";
}

function localizeResume(raw) {
  if (state.lang === "en") return raw;
  const dict = translations[state.lang];

  return {
    ...raw,
    title: dict.title || raw.title,
    location: dict.location || raw.location,
    summary: dict.summary || raw.summary,
    skills: (raw.skills || []).map((skill) => dict.skills[skill] || skill),
    projects: (raw.projects || []).map((project) => {
      const translated = dict.projects[project.name];
      return translated
        ? { ...project, name: translated[0], description: translated[1] }
        : project;
    }),
    experience: (raw.experience || []).map((item) => {
      const translated = dict.experience?.[`${item.role}|${item.company}`];
      return translated
        ? { ...item, role: translated[0], description: translated[1] }
        : item;
    }),
    education: (raw.education || []).map((item) => ({
      ...item,
      degree: dict.education?.[item.degree] || item.degree
    })),
    languages: (raw.languages || []).map((language) => {
      const translated = dict.languages[language.name];
      return translated
        ? { ...language, name: translated[0], level: translated[1] }
        : language;
    })
  };
}

function renderCards(items, mapper, variant = "") {
  return items
    .map((item) => {
      const mapped = mapper(item);
      return `
        <article class="card ${variant}">
          <h3>${mapped.title}</h3>
          ${mapped.meta ? `<p class="card-meta">${mapped.meta}</p>` : ""}
          ${mapped.description ? `<p>${mapped.description}</p>` : ""}
        </article>
      `;
    })
    .join("");
}

function renderContent() {
  const resume = state.resume;
  const content = $("#content");

  if (state.activeTab === "skills") {
    content.innerHTML = `
      <div class="skill-list">
        ${(resume.skills || []).map((skill) => `<span class="skill">${skill}</span>`).join("")}
      </div>
    `;
    return;
  }

  if (state.activeTab === "experience") {
    content.innerHTML = renderCards(
      resume.experience || [],
      (item) => ({
        title: item.role || "Role",
        meta: [item.company, item.period].filter(Boolean).join(" · "),
        description: item.description
      }),
      "timeline-card"
    );
    return;
  }

  if (state.activeTab === "projects") {
    content.innerHTML = renderCards(resume.projects || [], (item) => ({
      title: item.link ? `<a class="contact-link" href="${item.link}" target="_blank" rel="noreferrer">${item.name}</a>` : item.name,
      description: item.description
    }));
    return;
  }

  if (state.activeTab === "education") {
    content.innerHTML = renderCards(resume.education || [], (item) => ({
      title: item.school || "Education",
      meta: item.period,
      description: item.degree
    }));
    return;
  }

  content.innerHTML = renderCards(resume.languages || [], (item) => ({
    title: item.name,
    description: item.level
  }));
}

function renderChrome() {
  const copy = t();
  document.documentElement.lang = state.lang;
  setText("#eyebrow", copy.eyebrow);
  setText("#profileLabel", copy.profile);
  setText("#locationLabel", copy.location);
  setText("#emailLink", copy.contact);
  setText("#status", copy[state.statusKey] || "");

  document.querySelectorAll(".signal").forEach((item, index) => {
    item.textContent = copy.coreSignals[index] || "";
  });

  document.querySelectorAll(".tab").forEach((button) => {
    const label = copy.tabs[button.dataset.tab] || button.dataset.tab;
    button.querySelector(".tab-label").textContent = label;
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

function renderResume() {
  state.resume = localizeResume(state.rawResume);
  const resume = state.resume;
  document.title = `${resume.name || "Resume"} · Interactive Resume`;
  setText("#name", resume.name);
  setText("#title", resume.title);
  setText("#summary", resume.summary);
  setText("#location", resume.location);
  setText("#initials", initials(resume.name));

  const contacts = contactItems(resume.contacts);
  const contactsHtml = contacts
    .map(
      ([key, value]) => `
        <a class="contact-button" href="${contactHref(key, value)}" target="_blank" rel="noreferrer">
          <span>${contactIcon(key)}</span>
          <strong>${t().contacts[key] || key}</strong>
        </a>
      `
    )
    .join("");
  $("#contacts").innerHTML = contactsHtml;
  $("#heroContacts").innerHTML = contactsHtml;

  const preferredContact = resume.contacts?.email
    ? `mailto:${resume.contacts.email}`
    : resume.contacts?.telegram
      ? contactHref("telegram", resume.contacts.telegram)
      : resume.contacts?.phone
        ? contactHref("phone", resume.contacts.phone)
        : "#contacts";
  const primaryContact = $("#emailLink");
  if (primaryContact) primaryContact.href = preferredContact;

  renderChrome();
  renderContent();
}

async function loadResume() {
  const config = window.__RESUME_CONFIG__ || {};
  const { supabaseUrl, supabaseAnonKey, slug = "main" } = config;

  if (!supabaseUrl || !supabaseAnonKey) {
    state.statusKey = "statusDemo";
    renderResume();
    return;
  }

  try {
    const url = `${supabaseUrl.replace(/\/$/, "")}/rest/v1/resumes?slug=eq.${encodeURIComponent(slug)}&select=data&limit=1`;
    const response = await fetch(url, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`
      }
    });

    if (!response.ok) throw new Error(`Supabase returned ${response.status}`);
    const rows = await response.json();
    state.rawResume = rows[0]?.data || demoResume;
    state.statusKey = rows[0] ? "statusLive" : "statusMissing";
  } catch (error) {
    state.rawResume = demoResume;
    state.statusKey = "statusError";
  }

  renderResume();
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeTab = button.dataset.tab;
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderChrome();
    renderContent();
  });
});

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    renderResume();
  });
});

renderChrome();
loadResume();
