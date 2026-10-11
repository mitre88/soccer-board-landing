// Every string on the landing page lives here, in English and Mexican Spanish with identical keys.
// Product claims are limited to the SoccerBoard Tactics AI 2.0.0 store copy (en-US / es-MX).

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const htmlLang: Record<Locale, string> = { en: "en", es: "es-MX" };
export const ogLocale: Record<Locale, string> = { en: "en_US", es: "es_MX" };

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://soccer-board-landing.vercel.app"
).replace(/\/$/, "");

export const APP_NAME = "SoccerBoard Tactics AI";
export const APP_STORE_ID = "6762029244";
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
export const APP_STORE_REVIEW_URL = `${APP_STORE_URL}?action=write-review`;
/** App Store seller of record (individual developer account). */
export const SELLER = "Alejandro Hernandez Mitre";
export const CONTACT_EMAIL = "vamosmexico2018.ahm@gmail.com";
export const LEGAL_UPDATED_ISO = "2026-10-10";

/** "/support" in English is "/es/support" in Spanish; "/" is "/es". */
export function localePath(locale: Locale, path: string): string {
  if (locale === "en") return path;
  return path === "/" ? "/es" : `/es${path}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

const en = {
  meta: {
    homeTitle: "SoccerBoard Tactics AI — AI Tactical Whiteboard",
    homeDescription:
      "AI helps you plan and improve your strategy and your lineup. It is private and works offline on compatible iPhones. Now available for iPhone Duo.",
    ogAlt: "SoccerBoard Tactics AI, AI Tactical Whiteboard, with the 3D-style board.",
    privacyTitle: "Privacy Policy — SoccerBoard Tactics AI",
    privacyDescription:
      "SoccerBoard Tactics AI does not collect personal data. Your teams and boards stay on your device, and the AI coach runs on your iPhone.",
    termsTitle: "Terms of Service — SoccerBoard Tactics AI",
    termsDescription:
      "The terms for using SoccerBoard Tactics AI, a one-time purchase on the App Store with no subscriptions and no in-app purchases.",
    supportTitle: "Support — SoccerBoard Tactics AI",
    supportDescription:
      "Help with SoccerBoard Tactics AI: requirements, the AI coach, iPhone Duo, your data, and how to contact us.",
  },
  a11y: {
    skip: "Skip to content",
    mainNav: "Main",
    legalNav: "Legal",
    language: "Language",
    english: "English",
    spanish: "Spanish",
    menu: "Menu",
    appearance: "Dark appearance",
    home: "SoccerBoard Tactics AI, home",
  },
  nav: {
    coach: "AI coach",
    board: "3D board",
    duo: "iPhone Duo",
    whatsNew: "What’s new",
    faq: "FAQ",
  },
  badgeAlt: "Download on the App Store",
  newChip: "New in 2.0",
  disclosure: {
    label: "AI availability:",
    text: "the on-device AI needs a compatible iPhone with on-device intelligence turned on and a supported language. On other devices and languages, you get rule-based suggestions.",
  },
  hero: {
    badge: "Now on iPhone Duo",
    title: "AI helps you plan and improve your strategy and your lineup.",
    lead: "It is private and works offline on compatible iPhones. Draw it all on a 3D-style tactical board.",
    whatsNewLink: "What’s new in 2.0",
    footnote: "Requires iOS 26.4 or later. Pay once. No in-app purchases.",
  },
  coach: {
    title: "An AI coach on your iPhone",
    lead: "Tell the coach your plan and see it on the board.",
    build: {
      title: "Build my lineup",
      body: "Pick the plan with chips (“defend a lead,” “protect left flank,” “high press”) or type it in your own words. The AI understands the plan, picks the best formation, assigns the players by position, explains why, and applies it to the board with an animation.",
    },
    analyze: {
      title: "Analyze my setup",
      body: "Get up to 3 concrete adjustments, shown right on the board. Apply each one with a single tap.",
      numeralLabel: "Up to 3 adjustments",
    },
    insights: {
      title: "Instant insights",
      body: "About width, gaps between lines and flank overloads.",
    },
    private: {
      title: "Private, on your iPhone",
      body: "It is private, works offline and runs on your iPhone.",
    },
    howTitle: "How it works",
    steps: [
      "Pick your team and format.",
      "Tell the coach your plan with chips or in your own words.",
      "Review the lineup on the board and fine-tune it.",
    ],
  },
  board: {
    title: "Your board, now in 3D",
    body: "A 3D-style board: player tokens with volume, light and shadow, on a pitch with depth.",
  },
  duo: {
    title: "A coach desk for iPhone Duo",
    body: "On the inner display, the board and the coach panel sit side by side. On the outer display, you get a compact board.",
    captionClosed: "A compact board on the outer display.",
    captionOpen: "The coach desk, with the board and the coach panel side by side.",
    captionHalf: "The board and the coach panel stay side by side.",
    close: "Fold or unfold and keep working.",
  },
  performance: {
    title: "Smoother and lighter",
    body: "Faster drawing and dragging, zoom and pan, and lower memory use.",
  },
  formats: {
    title: "Built for every squad",
    items: [
      "11-a-side, 7-a-side and futsal.",
      "New teams start with a full squad.",
      "Saved setups remember where every player stands.",
      "Add a photo of your field and remove it whenever you want.",
    ],
    f11: "11-a-side",
    f7: "7-a-side",
    futsal: "Futsal",
  },
  whatsNew: {
    title: "What’s new in 2.0",
    lead: "Requires iOS 26.4 or later.",
    items: [
      {
        href: "#coach",
        label: "AI coach on your iPhone",
        rest: ": turns your plan into a lineup and suggests up to 3 one-tap adjustments.",
      },
      { href: "#board", label: "3D-style board", rest: " with light, shadow and depth." },
      {
        href: "#duo",
        label: "iPhone Duo",
        rest: ": coach desk on the inner display, compact board on the outer one.",
      },
      {
        href: "#performance",
        label: "Smoother and lighter",
        rest: ": faster drawing and dragging, zoom and pan, less memory.",
      },
      {
        href: "#formats",
        label: "Fixes",
        rest: ": undo, full squads for new teams, setups that remember player positions, removable field photo.",
      },
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      { q: "What are the requirements?", a: "iOS 26.4 or later." },
      {
        q: "Which devices get the on-device AI?",
        a: "A compatible iPhone with on-device intelligence turned on and a supported language. On other devices and languages, you get rule-based suggestions.",
      },
      {
        q: "Which languages does the AI coach support?",
        a: "The on-device AI needs a supported language. In other languages, you get rule-based suggestions. The {store} lists the app’s languages.",
      },
      { q: "Is the AI coach private?", a: "Yes. It runs on your iPhone, privately and offline." },
      {
        q: "Is it a subscription?",
        a: "No. Pay once: no subscriptions, no in-app purchases and no ads.",
      },
    ],
    storeLinkText: "App Store page",
  },
  download: {
    title: "Plan your lineup with AI",
    sub: "One-time purchase. No subscriptions, no ads, no in-app purchases. Requires iOS 26.4 or later.",
  },
  footer: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    support: "Support",
    contact: "Contact",
    copyright: "© 2026 Alejandro Hernandez Mitre",
  },
  legal: {
    updatedLabel: "Last updated",
    updatedDate: "October 10, 2026",
    contactLabel: "Email",
  },
} as const;

export type Dictionary = Widen<typeof en>;

const es: Dictionary = {
  meta: {
    homeTitle: "SoccerBoard Tactics AI — Pizarra táctica con IA",
    homeDescription:
      "La IA te ayuda a planear y mejorar tu estrategia y el parado de tu equipo. Es privada y funciona sin conexión en un iPhone compatible. Ya disponible para iPhone Duo.",
    ogAlt: "SoccerBoard Tactics AI, pizarra táctica con IA, con la pizarra con efecto 3D.",
    privacyTitle: "Aviso de privacidad — SoccerBoard Tactics AI",
    privacyDescription:
      "SoccerBoard Tactics AI no recopila datos personales. Tus equipos y pizarras se quedan en tu dispositivo y el entrenador con IA corre en tu iPhone.",
    termsTitle: "Términos de servicio — SoccerBoard Tactics AI",
    termsDescription:
      "Los términos de uso de SoccerBoard Tactics AI, una compra única en el App Store sin suscripciones ni compras dentro de la app.",
    supportTitle: "Soporte — SoccerBoard Tactics AI",
    supportDescription:
      "Ayuda con SoccerBoard Tactics AI: requisitos, el entrenador con IA, iPhone Duo, tus datos y cómo contactarnos.",
  },
  a11y: {
    skip: "Saltar al contenido",
    mainNav: "Principal",
    legalNav: "Legal",
    language: "Idioma",
    english: "inglés",
    spanish: "español",
    menu: "Menú",
    appearance: "Apariencia oscura",
    home: "SoccerBoard Tactics AI, inicio",
  },
  nav: {
    coach: "Entrenador con IA",
    board: "Pizarra 3D",
    duo: "iPhone Duo",
    whatsNew: "Novedades",
    faq: "Preguntas frecuentes",
  },
  badgeAlt: "Descárgalo en el App Store",
  newChip: "Nuevo en 2.0",
  disclosure: {
    label: "Disponibilidad de la IA:",
    text: "necesita un iPhone compatible con la inteligencia en el dispositivo activada y un idioma compatible. En otros dispositivos e idiomas recibes sugerencias basadas en reglas.",
  },
  hero: {
    badge: "Ya disponible para iPhone Duo",
    title: "La IA te ayuda a planear y mejorar tu estrategia y el parado de tu equipo.",
    lead: "Es privada y funciona sin conexión en un iPhone compatible. Dibújalo todo en una pizarra táctica con efecto 3D.",
    whatsNewLink: "Novedades de la versión 2.0",
    footnote: "Requiere iOS 26.4 o posterior. Pago único. Sin compras dentro de la app.",
  },
  coach: {
    title: "Entrenador con IA en tu iPhone",
    lead: "Cuéntale tu plan al entrenador con IA y míralo en la pizarra.",
    build: {
      title: "Armar mi alineación",
      body: "Toca una opción rápida, como “defender la ventaja”, “proteger la banda izquierda” o “presión alta”, o escribe el plan con tus propias palabras. La IA entiende el plan, elige la mejor formación, acomoda a los jugadores por posición, te explica por qué y lo aplica en la pizarra con una animación.",
    },
    analyze: {
      title: "Analizar mi parado",
      body: "Hasta 3 ajustes concretos, marcados directo en la pizarra. Aplica cada uno con un solo toque.",
      numeralLabel: "Hasta 3 ajustes",
    },
    insights: {
      title: "Observaciones al instante",
      body: "Sobre el ancho, los huecos entre líneas y las sobrecargas por banda.",
    },
    private: {
      title: "Privado, en tu iPhone",
      body: "Es privado, funciona sin conexión y corre en tu iPhone.",
    },
    howTitle: "Cómo funciona",
    steps: [
      "Elige tu equipo y el formato.",
      "Cuéntale tu plan al entrenador con opciones rápidas o con tus propias palabras.",
      "Revisa la alineación en la pizarra y ajústala.",
    ],
  },
  board: {
    title: "Tu pizarra, ahora en 3D",
    body: "Pizarra con efecto 3D: fichas de jugador con volumen, luz y sombra, sobre una cancha con profundidad.",
  },
  duo: {
    title: "Mesa del entrenador para iPhone Duo",
    body: "En la pantalla interior, la pizarra y el panel del entrenador van lado a lado. En la pantalla exterior tienes una pizarra compacta.",
    captionClosed: "Pizarra compacta en la pantalla exterior.",
    captionOpen: "La mesa del entrenador, con la pizarra y el panel del entrenador lado a lado.",
    captionHalf: "La pizarra y el panel del entrenador siguen lado a lado.",
    close: "Pliega o abre tu iPhone Duo y sigue trabajando.",
  },
  performance: {
    title: "Más fluida y ligera",
    body: "Dibujo y arrastre más rápidos, zoom y desplazamiento, y menor uso de memoria.",
  },
  formats: {
    title: "Para cada equipo",
    items: [
      "Fútbol 11, fútbol 7 y futsal.",
      "Los equipos nuevos empiezan con la plantilla completa.",
      "Los esquemas guardados recuerdan dónde está parado cada jugador.",
      "Agrega una foto de tu cancha y quítala cuando quieras.",
    ],
    f11: "Fútbol 11",
    f7: "Fútbol 7",
    futsal: "Futsal",
  },
  whatsNew: {
    title: "Novedades de la versión 2.0",
    lead: "Requiere iOS 26.4 o posterior.",
    items: [
      {
        href: "#coach",
        label: "Entrenador con IA",
        rest: ": convierte tu plan en alineación y sugiere hasta 3 ajustes de un toque.",
      },
      { href: "#board", label: "Pizarra con efecto 3D", rest: ", con luz, sombra y profundidad." },
      {
        href: "#duo",
        label: "iPhone Duo",
        rest: ": mesa del entrenador en la pantalla interior, pizarra compacta en la exterior.",
      },
      {
        href: "#performance",
        label: "Más fluida y ligera",
        rest: ": dibujo y arrastre más rápidos, zoom y desplazamiento, menos memoria.",
      },
      {
        href: "#formats",
        label: "Correcciones",
        rest: ": deshacer, plantilla completa en equipos nuevos, esquemas que recuerdan posiciones y foto de cancha removible.",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Qué requisitos tiene la app?", a: "iOS 26.4 o posterior." },
      {
        q: "¿En qué dispositivos funciona la IA?",
        a: "En un iPhone compatible con la inteligencia en el dispositivo activada y un idioma compatible. En otros dispositivos e idiomas recibes sugerencias basadas en reglas.",
      },
      {
        q: "¿En qué idiomas funciona el entrenador con IA?",
        a: "La IA necesita un idioma compatible. En otros idiomas recibes sugerencias basadas en reglas. La {store} muestra los idiomas de la app.",
      },
      {
        q: "¿El entrenador con IA es privado?",
        a: "Sí. Corre en tu iPhone, en privado y sin conexión.",
      },
      {
        q: "¿Es una suscripción?",
        a: "No. Pago único: sin suscripciones, sin compras dentro de la app y sin anuncios.",
      },
    ],
    storeLinkText: "página del App Store",
  },
  download: {
    title: "Planea tu parado con IA",
    sub: "Compra única. Sin suscripciones, sin anuncios y sin compras dentro de la app. Requiere iOS 26.4 o posterior.",
  },
  footer: {
    privacy: "Aviso de privacidad",
    terms: "Términos de servicio",
    support: "Soporte",
    contact: "Contacto",
    copyright: "© 2026 Alejandro Hernandez Mitre",
  },
  legal: {
    updatedLabel: "Última actualización",
    updatedDate: "10 de octubre de 2026",
    contactLabel: "Correo",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}
