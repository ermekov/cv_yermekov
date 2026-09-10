import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "peakrent",
    slug: "peakrent-ai",
    title: {
      en: "MountainRent AI — PeakRent.kz",
      ru: "MountainRent AI — PeakRent.kz",
      kk: "MountainRent AI — PeakRent.kz",
    },
    category: {
      en: "Diploma Project · AI · Full-Stack",
      ru: "Дипломный проект · AI · Full-Stack",
      kk: "Дипломдық жоба · AI · Full-Stack",
    },
    year: "2025–2026",
    status: "completed",
    accent: "blue",
    tagline: {
      en: "An AI-assisted mountain equipment rental platform, built end to end as a diploma project.",
      ru: "AI-платформа аренды горного снаряжения — дипломный проект, реализованный от начала до конца.",
      kk: "Тау жабдықтарын жалға алудың AI көмегімен жұмыс істейтін платформасы — толықтай өзім әзірлеген дипломдық жоба.",
    },
    description: {
      en: "PeakRent is a full-stack rental platform for mountain equipment — browsing, filtering, bookings, reviews, and a hybrid recommendation engine that mixes rule-based logic with an OpenAI-backed layer. It was built as my diploma project, but scoped and shipped like a real product: authenticated users, an admin and manager panel, background jobs, and a containerized deployment.",
      ru: "PeakRent — full-stack платформа аренды горного снаряжения: каталог с фильтрами, бронирование, отзывы и гибридная система рекомендаций, сочетающая rule-based логику с OpenAI. Это мой дипломный проект, но спроектирован и реализован он как полноценный продукт: авторизация пользователей, админ- и менеджер-панель, фоновые задачи и контейнеризированный деплой.",
      kk: "PeakRent — тау жабдықтарын жалға алуға арналған full-stack платформа: сүзгілері бар каталог, брондау, пікірлер және rule-based логика мен OpenAI негізіндегі гибридті ұсыныс жүйесі. Бұл — менің дипломдық жобам, бірақ ол нақты өнім ретінде жобаланып, іске асырылды: пайдаланушыларды аутентификациялау, әкімші және менеджер панельдері, фондық тапсырмалар және контейнерленген деплой.",
    },
    problem: {
      en: "Renting mountain gear locally usually means messaging a shop directly, with no structured way to compare equipment, check availability, or get suggestions based on the trip you're planning. There was no single platform that combined a real catalog, bookings, and any kind of intelligent recommendation.",
      ru: "Аренда горного снаряжения обычно сводится к переписке напрямую с прокатом — без структурированного способа сравнить оборудование, проверить наличие или получить подсказку под конкретный маршрут. Единой платформы с каталогом, бронированием и хоть каким-то интеллектуальным подбором не существовало.",
      kk: "Тау жабдығын жергілікті жерде жалға алу әдетте дүкенге тікелей жазумен шектеледі — жабдықтарды салыстырудың, қолжетімділікті тексерудің немесе сапарға сай ұсыныс алудың құрылымды тәсілі жоқ болатын. Каталогы, брондауы және қандай да бір ақылды ұсыныс жүйесі бар бірыңғай платформа болмады.",
    },
    solution: {
      en: "I designed a Django REST API backend with a Next.js frontend, separating catalog, booking, and recommendation logic into distinct services. Recommendations start from rule-based filters (trip type, dates, past bookings) and are refined with an OpenAI call that reasons over the filtered candidate set — so the AI is scoped to a small, relevant slice of inventory instead of guessing over the whole catalog. Auth uses OTP plus JWT, and the admin/manager panel exposes analytics and CSV export for operational use.",
      ru: "Backend на Django REST Framework и frontend на Next.js — каталог, бронирование и рекомендательная логика вынесены в отдельные сервисы. Рекомендации сначала фильтруются по правилам (тип маршрута, даты, история бронирований), а затем уточняются запросом к OpenAI, который работает уже с отфильтрованной выборкой — поэтому AI принимает решения на небольшом релевантном срезе каталога, а не гадает по всей базе. Авторизация — OTP и JWT, админ- и менеджер-панель дают аналитику и экспорт в CSV.",
      kk: "Backend бөлігін Django REST Framework-те, frontend бөлігін Next.js-те жобаладым — каталог, брондау және ұсыныс логикасын жеке қызметтерге бөлдім. Ұсыныстар алдымен rule-based сүзгілерден өтеді (сапар түрі, күндер, бұрынғы брондаулар), содан кейін OpenAI сұранысы арқылы нақтыланады — модель бүкіл каталог бойынша емес, алдын ала сұрыпталған шағын үлгі бойынша шешім қабылдайды. Аутентификация OTP пен JWT арқылы жүзеге асады, ал әкімші/менеджер панелінде аналитика және CSV экспорты бар.",
    },
    features: {
      en: [
        "Equipment catalog with filtering and detailed product pages",
        "Booking flow with date-range availability checks",
        "Hybrid AI recommendations (rule-based filters + OpenAI reasoning)",
        "OTP + JWT authentication",
        "Reviews and ratings per listing",
        "Admin and manager panels with analytics and CSV export",
        "Kaspi QR demo payment flow",
        "Weather integration for trip planning context",
      ],
      ru: [
        "Каталог снаряжения с фильтрами и детальными карточками товаров",
        "Бронирование с проверкой доступности по датам",
        "Гибридные AI-рекомендации (rule-based фильтры + логика OpenAI)",
        "Аутентификация через OTP и JWT",
        "Отзывы и рейтинги для каждого объявления",
        "Админ- и менеджер-панели с аналитикой и экспортом в CSV",
        "Демо-оплата через Kaspi QR",
        "Интеграция с погодным сервисом для планирования поездки",
      ],
      kk: [
        "Сүзгілері мен толық сипаттамасы бар жабдық каталогы",
        "Күндер бойынша қолжетімділікті тексеретін брондау жүйесі",
        "Гибридті AI-ұсыныстар (rule-based сүзгілер + OpenAI логикасы)",
        "OTP және JWT арқылы аутентификация",
        "Әр жабдыққа пікір мен рейтинг қою мүмкіндігі",
        "Аналитикасы және CSV экспорты бар әкімші/менеджер панельдері",
        "Kaspi QR арқылы демо-төлем",
        "Сапарды жоспарлауға арналған ауа-райы интеграциясы",
      ],
    },
    technologies: [
      "Python", "Django", "Django REST Framework", "PostgreSQL", "Next.js", "React",
      "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Axios", "OpenAI API",
      "JWT", "Docker", "Redis", "Celery", "Nginx", "Gunicorn",
    ],
    techGroups: [
      {
        label: { en: "Backend", ru: "Backend", kk: "Backend" },
        items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "JWT"],
      },
      {
        label: { en: "Frontend", ru: "Frontend", kk: "Frontend" },
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "Axios"],
      },
      {
        label: { en: "AI", ru: "AI", kk: "AI" },
        items: ["OpenAI API", "Rule-based filtering", "Hybrid recommendation logic"],
      },
      {
        label: { en: "Infrastructure", ru: "Инфраструктура", kk: "Инфрақұрылым" },
        items: ["Docker", "Redis", "Celery", "Nginx", "Gunicorn"],
      },
    ],
    architecture: [
      {
        title: { en: "API layer", ru: "API-слой", kk: "API қабаты" },
        detail: {
          en: "Django REST Framework exposes versioned endpoints for catalog, bookings, reviews and recommendations, consumed by a separate Next.js frontend over a typed Axios client.",
          ru: "Django REST Framework отдаёт версионированные эндпоинты для каталога, бронирований, отзывов и рекомендаций, которые потребляет отдельный Next.js frontend через типизированный Axios-клиент.",
          kk: "Django REST Framework каталог, брондау, пікірлер және ұсыныстар үшін нұсқаланған endpoint-тер ұсынады, оларды бөлек Next.js frontend типтелген Axios клиенті арқылы тұтынады.",
        },
      },
      {
        title: { en: "Recommendation pipeline", ru: "Пайплайн рекомендаций", kk: "Ұсыныс пайплайны" },
        detail: {
          en: "Rule-based pre-filtering narrows candidates by trip type, dates and history, then an OpenAI call ranks and explains the shortlist — keeping cost and latency predictable.",
          ru: "Rule-based предфильтрация сужает список кандидатов по типу маршрута, датам и истории, а затем запрос к OpenAI ранжирует и объясняет получившийся шортлист — это удерживает стоимость и задержку под контролем.",
          kk: "Rule-based алдын ала сүзгілеу үміткерлерді сапар түрі, күндер және тарих бойынша тарылтады, содан соң OpenAI сұранысы қысқаша тізімді ретке келтіріп, түсіндіреді — бұл шығын мен кідірісті болжамды етеді.",
        },
      },
      {
        title: { en: "Background jobs", ru: "Фоновые задачи", kk: "Фондық тапсырмалар" },
        detail: {
          en: "Celery workers with Redis as the broker handle async tasks such as availability recalculation and notification dispatch, decoupled from the request/response cycle.",
          ru: "Celery-воркеры с Redis в качестве брокера обрабатывают асинхронные задачи — пересчёт доступности и рассылку уведомлений — вне цикла запрос/ответ.",
          kk: "Redis брокер ретінде жұмыс істейтін Celery воркерлері қолжетімділікті қайта есептеу және хабарландыру жіберу сияқты асинхронды тапсырмаларды сұраныс/жауап циклінен тыс орындайды.",
        },
      },
      {
        title: { en: "Deployment", ru: "Деплой", kk: "Деплой" },
        detail: {
          en: "Gunicorn behind Nginx, containerized with Docker, with Postgres as the system of record for catalog, bookings and users.",
          ru: "Gunicorn за Nginx, всё контейнеризировано в Docker, Postgres — основной источник данных для каталога, бронирований и пользователей.",
          kk: "Gunicorn Nginx артында жұмыс істейді, барлығы Docker арқылы контейнерленген, ал Postgres каталог, брондау және пайдаланушылар үшін негізгі дерекқор болып табылады.",
        },
      },
    ],
    challenges: {
      en: "The hardest part was keeping the AI recommendation layer useful without letting it become a black box — I had to bound what the model could see and decide, so results stayed explainable and fast enough for a booking flow rather than a chat experience.",
      ru: "Сложнее всего было сделать AI-рекомендации полезными, не превратив их в чёрный ящик — пришлось ограничить, что именно модель видит и решает, чтобы результат оставался объяснимым и достаточно быстрым для флоу бронирования, а не для чат-сценария.",
      kk: "Ең қиыны — AI ұсыныс қабатын «қара жәшікке» айналдырмай, пайдалы етіп сақтау болды: модельдің нені көріп, нені шешетінін шектеуге тура келді, сол арқылы нәтиже әрі түсінікті, әрі брондау флоуына жеткілікті жылдам болды.",
    },
    learned: {
      en: "How to design an AI feature as a constrained pipeline stage instead of a general-purpose chatbot bolted onto the UI, and how much of a 'smart' feature is really disciplined data preparation before the model ever gets involved.",
      ru: "Как проектировать AI-функцию как ограниченный этап пайплайна, а не как универсального чат-бота, приклеенного к интерфейсу — и насколько «умная» фича на самом деле держится на дисциплинированной подготовке данных ещё до того, как в дело вступает модель.",
      kk: "AI функциясын интерфейске жапсырылған жалпы чат-бот емес, пайплайннің шектелген бір кезеңі ретінде жобалауды үйрендім — және «ақылды» функцияның негізі көбіне модель іске қосылғанға дейінгі мұқият деректерді дайындауда жатқанын түсіндім.",
    },
    stats: [
      {
        label: { en: "Role", ru: "Роль", kk: "Рөл" },
        value: {
          en: "Solo — backend, frontend, architecture",
          ru: "Один разработчик — backend, frontend, архитектура",
          kk: "Жалғыз өзім — backend, frontend, архитектура",
        },
      },
      {
        label: { en: "Scope", ru: "Формат", kk: "Көлем" },
        value: { en: "Diploma project", ru: "Дипломный проект", kk: "Дипломдық жоба" },
      },
      {
        label: { en: "Services", ru: "Сервисы", kk: "Қызметтер" },
        value: { en: "API · Web · Worker", ru: "API · Web · Worker", kk: "API · Web · Worker" },
      },
    ],
    github: "https://github.com/ermekov/Mountain_equipment_rental",
    featured: true,
  },
  {
    id: "ai-business-assistant",
    slug: "ai-business-assistant",
    title: {
      en: "AI Business Assistant",
      ru: "AI-ассистент для бизнеса",
      kk: "Бизнеске арналған AI-ассистент",
    },
    category: {
      en: "AI Engineering · Automation · Integrations",
      ru: "AI Engineering · Автоматизация · Интеграции",
      kk: "AI Engineering · Автоматтандыру · Интеграциялар",
    },
    year: "2026",
    status: "building",
    accent: "violet",
    tagline: {
      en: "An AI assistant that handles business workflows across Telegram, WhatsApp and Instagram.",
      ru: "AI-ассистент, который ведёт бизнес-процессы в Telegram, WhatsApp и Instagram.",
      kk: "Telegram, WhatsApp және Instagram арқылы бизнес-процестерді жүргізетін AI-ассистент.",
    },
    description: {
      en: "A backend-driven AI assistant integrating Telegram, WhatsApp and Instagram with shared workflow logic. It structures incoming requests, calls external services where needed, and writes results into PostgreSQL and Google Sheets.",
      ru: "AI-ассистент с backend-логикой в основе, объединяющий Telegram, WhatsApp и Instagram общей логикой workflow. Он структурирует входящие запросы, обращается к внешним сервисам и записывает результат в PostgreSQL и Google Sheets.",
      kk: "Telegram, WhatsApp және Instagram-ды ортақ workflow логикасымен біріктіретін, backend логикасына негізделген AI-ассистент. Ол келіп түскен өтінімдерді құрылымдайды, қажет болса сыртқы қызметтерге жүгінеді және нәтижені PostgreSQL мен Google Sheets-ке жазады.",
    },
    problem: {
      en: "Small businesses running their operations manually through chat apps lose time to repetitive, structured tasks — collecting orders, logging requests, keeping records in sync — that don't need a human doing them by hand every time.",
      ru: "Малый бизнес, который ведёт процессы вручную через мессенджеры, теряет время на повторяющиеся структурированные задачи — приём заказов, фиксацию заявок, синхронизацию данных — которые не обязательно каждый раз делать руками.",
      kk: "Процестерін мессенджерлер арқылы қолмен жүргізетін шағын бизнес қайталанатын, құрылымды тапсырмаларға — тапсырыс қабылдау, өтінімдерді тіркеу, деректерді синхрондау — көп уақыт жоғалтады, ал бұларды әр жолы адам қолымен жасаудың қажеті жоқ.",
    },
    solution: {
      en: "I designed the backend logic in Python and integrated it with the Telegram, WhatsApp and Instagram APIs so each channel feeds into the same workflow engine. The assistant collects and structures incoming requests, calls external services where needed, and writes results into PostgreSQL and Google Sheets so the business always has an up-to-date, queryable record — with the chatbot logic itself built around real business processes rather than generic Q&A.",
      ru: "Backend-логику я реализовал на Python и интегрировал с API Telegram, WhatsApp и Instagram, чтобы все каналы вели в один и тот же workflow-движок. Ассистент собирает и структурирует входящие запросы, при необходимости обращается к внешним сервисам и записывает результат в PostgreSQL и Google Sheets — так у бизнеса всегда есть актуальные, доступные для анализа данные. Сама логика бота построена вокруг реальных бизнес-процессов, а не общих вопросов-ответов.",
      kk: "Backend логикасын Python-да жобаладым және оны Telegram, WhatsApp пен Instagram API-лерімен біріктірдім — сол арқылы әр арна бір ғана workflow қозғалтқышына түседі. Ассистент келіп түскен өтінімдерді жинап, құрылымдайды, қажет болса сыртқы қызметтерге жүгінеді және нәтижені PostgreSQL мен Google Sheets-ке жазады — осылайша бизнесте әрдайым өзекті, талдауға жарамды деректер болады. Боттың логикасы жалпы сұрақ-жауап емес, нақты бизнес-процестер негізінде құрылған.",
    },
    features: {
      en: [
        "Multi-channel intake — Telegram, WhatsApp and Instagram",
        "Python backend handling conversation and workflow logic",
        "Integration with external APIs and services",
        "Structured data storage in PostgreSQL",
        "Live sync to Google Sheets for non-technical stakeholders",
        "Automated, repeatable business workflows in place of manual handling",
      ],
      ru: [
        "Приём сообщений сразу из Telegram, WhatsApp и Instagram",
        "Python backend, который ведёт диалог и логику workflow",
        "Интеграция с внешними API и сервисами",
        "Структурированное хранение данных в PostgreSQL",
        "Живая синхронизация с Google Sheets для нетехнических сотрудников",
        "Автоматизированные, повторяемые бизнес-процессы вместо ручной обработки",
      ],
      kk: [
        "Telegram, WhatsApp және Instagram арқылы бір мезгілде хабарлама қабылдау",
        "Диалог пен workflow логикасын жүргізетін Python backend",
        "Сыртқы API мен қызметтермен интеграция",
        "Деректерді PostgreSQL-де құрылымды сақтау",
        "Техникалық емес қызметкерлер үшін Google Sheets-пен тікелей синхрондау",
        "Қолмен өңдеудің орнына автоматтандырылған, қайталанатын бизнес-процестер",
      ],
    },
    technologies: [
      "Python", "Telegram Bot API", "WhatsApp Business API", "Instagram Messaging API",
      "PostgreSQL", "Google Sheets API", "API integration", "n8n",
    ],
    techGroups: [
      {
        label: { en: "Backend", ru: "Backend", kk: "Backend" },
        items: ["Python", "API integration", "PostgreSQL"],
      },
      {
        label: { en: "Channels", ru: "Каналы", kk: "Арналар" },
        items: ["Telegram Bot API", "WhatsApp Business API", "Instagram Messaging API"],
      },
      {
        label: { en: "Automation", ru: "Автоматизация", kk: "Автоматтандыру" },
        items: ["Google Sheets API", "n8n", "Workflow automation"],
      },
    ],
    architecture: [
      {
        title: { en: "Multi-channel intake", ru: "Приём из нескольких каналов", kk: "Көп арналы қабылдау" },
        detail: {
          en: "Telegram, WhatsApp and Instagram each feed into the same Python backend, so workflow logic is written once and reused across channels instead of being duplicated per platform.",
          ru: "Telegram, WhatsApp и Instagram ведут в один и тот же Python backend, поэтому логика workflow пишется один раз и переиспользуется для всех каналов, а не дублируется под каждую платформу.",
          kk: "Telegram, WhatsApp және Instagram бір ғана Python backend-іне бағытталады, сондықтан workflow логикасы бір рет жазылып, әр платформа үшін қайта пайдаланылады, әрқайсысына бөлек жазылмайды.",
        },
      },
      {
        title: { en: "Workflow logic", ru: "Логика workflow", kk: "Workflow логикасы" },
        detail: {
          en: "Incoming messages are parsed into structured requests and routed through business-specific logic — this is the part that makes it an assistant rather than a scripted FAQ bot.",
          ru: "Входящие сообщения разбираются в структурированные запросы и направляются по бизнес-специфичной логике — именно это делает систему ассистентом, а не сценарным FAQ-ботом.",
          kk: "Келіп түскен хабарламалар құрылымды өтінімдерге бөлшектеніп, бизнеске тән логика арқылы бағытталады — жүйені жай сценарийлі FAQ-боттан ерекшелендіретін дәл осы бөлік.",
        },
      },
      {
        title: { en: "External integrations", ru: "Внешние интеграции", kk: "Сыртқы интеграциялар" },
        detail: {
          en: "The backend calls out to external APIs and services as each workflow requires, rather than keeping everything self-contained.",
          ru: "Backend обращается к внешним API и сервисам по мере необходимости в рамках каждого workflow, а не держит всю логику изолированно внутри себя.",
          kk: "Backend әр workflow талап еткен сыртқы API мен қызметтерге қажет болған сайын жүгінеді, барлық логиканы өз ішінде оқшауламайды.",
        },
      },
      {
        title: { en: "Data layer", ru: "Слой данных", kk: "Деректер қабаты" },
        detail: {
          en: "Structured results are written to PostgreSQL as the system of record, with a live Google Sheets sync so non-technical stakeholders can review data without needing database access.",
          ru: "Структурированные результаты записываются в PostgreSQL как основной источник данных, а живая синхронизация с Google Sheets позволяет нетехническим сотрудникам смотреть данные без доступа к базе.",
          kk: "Құрылымды нәтижелер негізгі дерекқор ретінде PostgreSQL-ге жазылады, ал Google Sheets-пен тікелей синхрондау техникалық емес қызметкерлерге дерекқорға қатынаусыз деректерді көруге мүмкіндік береді.",
        },
      },
    ],
    challenges: {
      en: "Keeping one consistent workflow engine underneath three different chat platforms, each with its own API quirks and message formats, without the business logic itself forking into three separate versions.",
      ru: "Сложнее всего было удержать единый workflow-движок под тремя разными платформами — у каждой свои особенности API и форматы сообщений — так, чтобы бизнес-логика не расползлась на три отдельные версии.",
      kk: "Ең қиыны — API ерекшеліктері мен хабарлама форматтары әрқилы үш түрлі платформаның астында бір ғана workflow қозғалтқышын сақтау болды, бизнес-логиканың өзі үш бөлек нұсқаға бөлініп кетпеуі үшін.",
    },
    learned: {
      en: "That the useful part of an 'AI chatbot' for a business is almost never the conversation — it's the workflow and data plumbing behind it. The channel is just the entry point.",
      ru: "Понял, что в «AI-чат-боте» для бизнеса ценность почти никогда не в самом диалоге — а в workflow и передаче данных за ним. Канал — это просто точка входа.",
      kk: "Бизнеске арналған «AI чат-боттың» пайдасы дерлік әңгімеде емес, оның артындағы workflow мен деректер ағынында екенін түсіндім. Арна — жай ғана кіру нүктесі.",
    },
    stats: [
      {
        label: { en: "Role", ru: "Роль", kk: "Рөл" },
        value: {
          en: "Solo — backend & integrations",
          ru: "Один разработчик — backend и интеграции",
          kk: "Жалғыз өзім — backend және интеграциялар",
        },
      },
      {
        label: { en: "Channels", ru: "Каналы", kk: "Арналар" },
        value: { en: "Telegram · WhatsApp · Instagram", ru: "Telegram · WhatsApp · Instagram", kk: "Telegram · WhatsApp · Instagram" },
      },
      {
        label: { en: "Data layer", ru: "Слой данных", kk: "Деректер қабаты" },
        value: { en: "PostgreSQL · Google Sheets", ru: "PostgreSQL · Google Sheets", kk: "PostgreSQL · Google Sheets" },
      },
    ],
    featured: true,
  },
  {
    id: "ken-tereze",
    slug: "ken-tereze-ai",
    title: { en: "Ken Tereze AI", ru: "Ken Tereze AI", kk: "Ken Tereze AI" },
    category: {
      en: "Python · AI · Automation",
      ru: "Python · AI · Автоматизация",
      kk: "Python · AI · Автоматтандыру",
    },
    year: "2026",
    status: "building",
    accent: "amber",
    tagline: {
      en: "A Telegram-based automation system that parses dealer order PDFs and calculates pricing from an internal price list.",
      ru: "Система автоматизации на Telegram, которая обрабатывает PDF-заказы дилеров и рассчитывает цену по внутреннему прайс-листу.",
      kk: "Дилерлердің PDF тапсырыстарын өңдеп, ішкі баға тізімі бойынша құнын есептейтін Telegram автоматтандыру жүйесі.",
    },
    description: {
      en: "Ken Tereze AI automates order processing for window and door dealers. A dealer sends an order PDF through Telegram; the system parses it, extracts the relevant specifications, and calculates the price from an internal price list using FastAPI and PostgreSQL.",
      ru: "Ken Tereze AI автоматизирует обработку заказов для дилеров окон и дверей. Дилер отправляет PDF-заказ в Telegram; система разбирает документ, извлекает нужные параметры и рассчитывает цену по внутреннему прайс-листу на FastAPI и PostgreSQL.",
      kk: "Ken Tereze AI терезе мен есік дилерлері үшін тапсырыстарды өңдеуді автоматтандырады. Дилер Telegram арқылы PDF тапсырыс жібереді; жүйе құжатты талдап, қажетті параметрлерді алады және FastAPI мен PostgreSQL негізінде ішкі баға тізімі бойынша құнын есептейді.",
    },
    problem: {
      en: "Dealers send order PDFs generated by third-party design software, and the prices printed on those PDFs are often inconsistent with the current internal price list — every order needs manual re-pricing before it can be confirmed.",
      ru: "Дилеры присылают PDF-заказы, сформированные сторонним ПО для проектирования, и указанные в них цены часто расходятся с актуальным внутренним прайс-листом — каждый заказ приходится пересчитывать вручную перед подтверждением.",
      kk: "Дилерлер үшінші тарап дизайн бағдарламасында жасалған PDF тапсырыстарын жібереді, ал ондағы бағалар көбіне ішкі баға тізіміне сәйкес келмейді — әр тапсырысты растамас бұрын қолмен қайта есептеу керек болады.",
    },
    solution: {
      en: "I built an async FastAPI service that receives PDFs through a Telegram bot, parses the document to extract order specifications — dimensions, quantity, profile, color, glass, fittings and extras — and calculates the price from an internal price list rather than trusting the price printed on the PDF, with results and order history stored in PostgreSQL.",
      ru: "Я реализовал асинхронный сервис на FastAPI, который принимает PDF через Telegram-бота, разбирает документ и извлекает параметры заказа — размеры, количество, профиль, цвет, стекло, фурнитуру и дополнительные опции, — а затем рассчитывает цену по внутреннему прайс-листу, не полагаясь на цену из самого PDF. Результаты и история заказов хранятся в PostgreSQL.",
      kk: "Telegram бот арқылы PDF қабылдайтын, құжатты талдап, тапсырыс параметрлерін — өлшемдер, саны, профиль, түсі, шыны, фурнитура және қосымша опцияларды — алатын асинхронды FastAPI қызметін әзірледім. Баға PDF-те көрсетілген бағаға емес, ішкі баға тізіміне негізделіп есептеледі. Нәтижелер мен тапсырыс тарихы PostgreSQL-де сақталады.",
    },
    features: {
      en: [
        "Telegram bot intake for order PDFs",
        "Structured PDF parsing — dimensions, profile, color, glass, fittings",
        "Pricing calculated from an internal price list, independent of the source PDF",
        "Async processing built on FastAPI",
        "Order and pricing history stored in PostgreSQL",
        "Schema migrations managed with Alembic",
      ],
      ru: [
        "Приём заказов через Telegram-бота",
        "Структурированный парсинг PDF — размеры, профиль, цвет, стекло, фурнитура",
        "Расчёт цены по внутреннему прайс-листу независимо от цены в исходном PDF",
        "Асинхронная обработка на FastAPI",
        "История заказов и расчётов в PostgreSQL",
        "Миграции схемы через Alembic",
      ],
      kk: [
        "Тапсырыстарды Telegram бот арқылы қабылдау",
        "PDF-ті құрылымды талдау — өлшемдер, профиль, түсі, шыны, фурнитура",
        "Бағаны бастапқы PDF-тегі бағаға тәуелсіз, ішкі баға тізімі бойынша есептеу",
        "FastAPI негізіндегі асинхронды өңдеу",
        "Тапсырыстар мен есептеулер тарихы PostgreSQL-де",
        "Alembic арқылы схема миграциялары",
      ],
    },
    technologies: [
      "Python", "FastAPI", "AsyncIO", "Async SQLAlchemy 2.0", "PostgreSQL",
      "Alembic", "Docker Compose", "Telegram Bot API", "PDF parsing",
    ],
    techGroups: [
      {
        label: { en: "Backend", ru: "Backend", kk: "Backend" },
        items: ["Python", "FastAPI", "AsyncIO", "Async SQLAlchemy 2.0", "PostgreSQL", "Alembic"],
      },
      {
        label: { en: "Automation", ru: "Автоматизация", kk: "Автоматтандыру" },
        items: ["Telegram Bot API", "PDF parsing", "Internal pricing engine"],
      },
      {
        label: { en: "Infrastructure", ru: "Инфраструктура", kk: "Инфрақұрылым" },
        items: ["Docker Compose"],
      },
    ],
    architecture: [
      {
        title: { en: "Intake", ru: "Приём", kk: "Қабылдау" },
        detail: {
          en: "A Telegram bot receives the order PDF and hands it to an async processing pipeline, keeping the bot responsive while parsing happens in the background.",
          ru: "Telegram-бот принимает PDF-заказ и передаёт его в асинхронный конвейер обработки — бот остаётся отзывчивым, пока парсинг выполняется в фоне.",
          kk: "Telegram бот PDF тапсырысты қабылдап, оны асинхронды өңдеу конвейеріне береді — талдау фондық режимде жүргенде бот жылдам жауап беруін жалғастырады.",
        },
      },
      {
        title: { en: "Parsing", ru: "Парсинг", kk: "Талдау" },
        detail: {
          en: "A dedicated parser extracts structured fields from the PDF — dimensions, quantities, profile, color, glass type, fittings and extras.",
          ru: "Отдельный парсер извлекает из PDF структурированные поля — размеры, количество, профиль, цвет, тип стекла, фурнитуру и дополнительные опции.",
          kk: "Бөлек парсер PDF-тен құрылымды өрістерді алады — өлшемдер, саны, профиль, түсі, шыны түрі, фурнитура және қосымша опциялар.",
        },
      },
      {
        title: { en: "Pricing engine", ru: "Модуль расчёта цены", kk: "Баға есептеу модулі" },
        detail: {
          en: "Parsed specs are matched against an internal price list to calculate the final price, completely independent of whatever price is printed on the PDF.",
          ru: "Разобранные параметры сопоставляются с внутренним прайс-листом для расчёта итоговой цены — полностью независимо от цены, указанной в PDF.",
          kk: "Талданған параметрлер соңғы бағаны есептеу үшін ішкі баға тізімімен салыстырылады — бұл PDF-те көрсетілген бағаға мүлдем тәуелсіз.",
        },
      },
      {
        title: { en: "Persistence", ru: "Хранение данных", kk: "Деректерді сақтау" },
        detail: {
          en: "Async SQLAlchemy 2.0 over PostgreSQL stores orders, parsed specs and calculated prices, with Alembic managing schema migrations.",
          ru: "Async SQLAlchemy 2.0 поверх PostgreSQL хранит заказы, разобранные параметры и рассчитанные цены, схему миграций ведёт Alembic.",
          kk: "PostgreSQL үстіндегі Async SQLAlchemy 2.0 тапсырыстарды, талданған параметрлерді және есептелген бағаларды сақтайды, схема миграцияларын Alembic басқарады.",
        },
      },
    ],
    challenges: {
      en: "PDF layouts from the design software aren't fully consistent, so the parser has to handle structural variance without misreading a spec — a wrong profile or fitting code changes the price.",
      ru: "Разметка PDF из программы проектирования не всегда одинакова, поэтому парсер должен выдерживать структурные отличия, не искажая параметры — неверный код профиля или фурнитуры меняет итоговую цену.",
      kk: "Дизайн бағдарламасынан шыққан PDF пішімі әрдайым бірдей бола бермейді, сондықтан парсер параметрлерді бұрмаламай құрылымдық айырмашылықтарға төзімді болуы керек — қате профиль немесе фурнитура коды соңғы бағаны өзгертеді.",
    },
    learned: {
      en: "That removing a repetitive manual step — re-pricing every order by hand — is often more valuable than any chatbot feature, and that async Python handles this kind of I/O-bound workflow well.",
      ru: "Что убрать повторяющийся ручной шаг — пересчёт цены каждого заказа вручную — часто ценнее любой чат-бот-функции, и что асинхронный Python хорошо справляется с такими I/O-зависимыми задачами.",
      kk: "Әр тапсырыстың бағасын қолмен қайта есептеу сияқты қайталанатын қадамды алып тастау кез келген чат-бот функциясынан гөрі көбірек құндылық беретінін және асинхронды Python осындай I/O-ға тәуелді workflow-ды жақсы басқаратынын түсіндім.",
    },
    stats: [
      {
        label: { en: "Role", ru: "Роль", kk: "Рөл" },
        value: {
          en: "Solo — backend & automation",
          ru: "Один разработчик — backend и автоматизация",
          kk: "Жалғыз өзім — backend және автоматтандыру",
        },
      },
      {
        label: { en: "Domain", ru: "Отрасль", kk: "Сала" },
        value: {
          en: "Window & door manufacturing",
          ru: "Производство окон и дверей",
          kk: "Терезе және есік өндірісі",
        },
      },
      {
        label: { en: "Interface", ru: "Интерфейс", kk: "Интерфейс" },
        value: { en: "Telegram", ru: "Telegram", kk: "Telegram" },
      },
    ],
    featured: true,
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
