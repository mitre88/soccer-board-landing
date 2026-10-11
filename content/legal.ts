// Privacy policy, terms and support content, English and Mexican Spanish.
// Inline tokens rendered as links: {email}, {store}, {review}. **text** renders as strong.
// Facts checked against the 2.0 project: no collected data types and no tracking in the privacy
// manifest, no networking or analytics code, photo library access only (pick a field photo,
// save board images), on-device coach with a rule-based fallback, paid app without in-app purchases.
import type { Locale } from "./site";

export type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };
export type LegalSection = { heading: string; blocks: Block[] };
export type LegalDoc = { title: string; intro: string[]; sections: LegalSection[] };
export type SupportDoc = {
  title: string;
  intro: string;
  faqHeading: string;
  faq: { q: string; a: string }[];
  reviewHeading: string;
  reviewBody: string;
  reviewLink: string;
};

const p = (text: string): Block => ({ type: "p", text });
const ul = (...items: string[]): Block => ({ type: "ul", items });

export const privacy: Record<Locale, LegalDoc> = {
  en: {
    title: "Privacy Policy",
    intro: [
      "This policy explains how SoccerBoard Tactics AI (“the app”) and this website handle your information. The app is developed and sold on the App Store by Alejandro Hernandez Mitre (“we”, “us”), an independent developer based in Mexico.",
    ],
    sections: [
      {
        heading: "In short",
        blocks: [
          ul(
            "The app does not collect personal data. There are no accounts and no servers behind the app.",
            "There is no tracking, no advertising and no analytics in the app.",
            "Your teams, boards and setups stay on your device.",
            "The AI coach runs on your iPhone. Your plans and lineups never leave the device, and the coach works offline.",
          ),
        ],
      },
      {
        heading: "What you create stays on your device",
        blocks: [
          p(
            "Teams, players, formations, drawings, saved setups and any field photo you add are stored only on your device. We never receive a copy. If you delete the app, this data is deleted with it. It can be included in your own device backups, which you control.",
          ),
        ],
      },
      {
        heading: "The AI coach",
        blocks: [
          p(
            "To build a lineup or analyze a setup, the coach reads the plan you choose with chips or type in your own words, together with the players on your board. This is processed on your iPhone: your plan, your lineup and the coach’s answer are not sent to us or to anyone else, and the coach works without an internet connection.",
          ),
          p(
            "On devices or in languages where the on-device AI is not available, suggestions come from a rule-based engine that also runs on the device.",
          ),
        ],
      },
      {
        heading: "Photos",
        blocks: [
          p(
            "If you add a photo of your field, the app uses only the photo you choose, on your device, as the background of the board. If you save a board as an image, the app asks for permission to add it to your photo library. You can change photo access at any time in your device settings.",
          ),
        ],
      },
      {
        heading: "Preferences",
        blocks: [
          p(
            "The app saves a few preferences on your device, such as the last teams you selected. They never leave the device.",
          ),
        ],
      },
      {
        heading: "Purchases",
        blocks: [
          p(
            "You buy the app on the App Store, which processes the payment under its own terms and privacy policy. We do not receive your payment details.",
          ),
        ],
      },
      {
        heading: "Children",
        blocks: [p("The app does not collect personal information from anyone, including children.")],
      },
      {
        heading: "This website",
        blocks: [
          p(
            "This website does not use cookies, analytics, advertising or tracking. If you choose a light or dark appearance, the choice is saved in your browser on your device. Our hosting provider processes technical data, such as IP addresses, to deliver the pages and keep them secure.",
          ),
        ],
      },
      {
        heading: "When you email us",
        blocks: [
          p(
            "If you write to us, we use your email address and your message only to reply. Ask us at any time and we will delete your messages.",
          ),
        ],
      },
      {
        heading: "Changes to this policy",
        blocks: [p("If this policy changes, we will update this page and the date at the top.")],
      },
      { heading: "Contact", blocks: [p("Questions about privacy: {email}.")] },
    ],
  },
  es: {
    title: "Aviso de privacidad",
    intro: [
      "Este aviso explica cómo SoccerBoard Tactics AI (“la app”) y este sitio web tratan tu información. La app la desarrolla y la vende en el App Store Alejandro Hernandez Mitre (“nosotros”), desarrollador independiente con sede en México.",
    ],
    sections: [
      {
        heading: "En resumen",
        blocks: [
          ul(
            "La app no recopila datos personales. No hay cuentas ni servidores detrás de la app.",
            "La app no tiene rastreo, publicidad ni analítica.",
            "Tus equipos, pizarras y esquemas se quedan en tu dispositivo.",
            "El entrenador con IA corre en tu iPhone. Tus planes y alineaciones nunca salen del dispositivo y el entrenador funciona sin conexión.",
          ),
        ],
      },
      {
        heading: "Lo que creas se queda en tu dispositivo",
        blocks: [
          p(
            "Los equipos, jugadores, formaciones, dibujos, esquemas guardados y cualquier foto de cancha que agregues se guardan solo en tu dispositivo. Nunca recibimos una copia. Si eliminas la app, estos datos se eliminan con ella. Pueden incluirse en los respaldos de tu propio dispositivo, que tú controlas.",
          ),
        ],
      },
      {
        heading: "El entrenador con IA",
        blocks: [
          p(
            "Para armar una alineación o analizar un parado, el entrenador lee el plan que eliges con las opciones rápidas o escribes con tus propias palabras, junto con los jugadores de tu pizarra. Todo se procesa en tu iPhone: tu plan, tu alineación y la respuesta del entrenador no se envían a nosotros ni a nadie más, y el entrenador funciona sin conexión a internet.",
          ),
          p(
            "En dispositivos o idiomas donde la IA en el dispositivo no está disponible, las sugerencias vienen de un motor basado en reglas que también corre en el dispositivo.",
          ),
        ],
      },
      {
        heading: "Fotos",
        blocks: [
          p(
            "Si agregas una foto de tu cancha, la app usa solo la foto que eliges, en tu dispositivo, como fondo de la pizarra. Si guardas una pizarra como imagen, la app te pide permiso para agregarla a tu fototeca. Puedes cambiar el acceso a tus fotos en cualquier momento desde la configuración de tu dispositivo.",
          ),
        ],
      },
      {
        heading: "Preferencias",
        blocks: [
          p(
            "La app guarda algunas preferencias en tu dispositivo, como los últimos equipos que elegiste. Nunca salen del dispositivo.",
          ),
        ],
      },
      {
        heading: "Compras",
        blocks: [
          p(
            "Compras la app en el App Store, que procesa el pago conforme a sus propios términos y aviso de privacidad. No recibimos tus datos de pago.",
          ),
        ],
      },
      {
        heading: "Menores de edad",
        blocks: [
          p("La app no recopila información personal de nadie, incluidos niñas, niños y adolescentes."),
        ],
      },
      {
        heading: "Este sitio web",
        blocks: [
          p(
            "Este sitio no usa cookies, analítica, publicidad ni rastreo. Si eliges la apariencia clara u oscura, tu elección se guarda en tu navegador, en tu dispositivo. Nuestro proveedor de alojamiento procesa datos técnicos, como direcciones IP, para entregar las páginas y mantenerlas seguras.",
          ),
        ],
      },
      {
        heading: "Si nos escribes",
        blocks: [
          p(
            "Si nos escribes, usamos tu correo y tu mensaje solo para responderte. Pídenos en cualquier momento que borremos tus mensajes y lo haremos.",
          ),
        ],
      },
      {
        heading: "Cambios a este aviso",
        blocks: [p("Si este aviso cambia, actualizaremos esta página y la fecha de arriba.")],
      },
      { heading: "Contacto", blocks: [p("Dudas sobre privacidad: {email}.")] },
    ],
  },
};

export const terms: Record<Locale, LegalDoc> = {
  en: {
    title: "Terms of Service",
    intro: [
      "These terms apply to SoccerBoard Tactics AI (“the app”) and to this website. They are offered by Alejandro Hernandez Mitre (“we”, “us”). By using the app, you agree to them. The App Store’s standard license terms for apps also apply.",
    ],
    sections: [
      {
        heading: "The app",
        blocks: [
          p(
            "SoccerBoard Tactics AI is a tactical whiteboard for soccer coaches, analysts and players. You can set up your team, build your lineup, draw your plan and save it. It requires iOS 26.4 or later.",
          ),
        ],
      },
      {
        heading: "Purchase",
        blocks: [
          p(
            "The app is a one-time purchase on the App Store. There are no subscriptions and no in-app purchases. Prices, payment and refunds are handled by the App Store under its terms. After you buy the app, you can download it again from the App Store with the same account.",
          ),
        ],
      },
      {
        heading: "Your content",
        blocks: [
          p(
            "Teams, boards and setups you create are yours. They are stored on your device, and we have no access to them. Please keep backups of anything that is important to you.",
          ),
        ],
      },
      {
        heading: "The AI coach and its suggestions",
        blocks: [
          p(
            "The coach’s lineups, explanations and adjustments are suggestions to support your own decisions. They can be wrong or may not suit your team, your players or the situation. On devices or in languages where the on-device AI is not available, suggestions come from a rule-based engine. You decide what to use, and you are responsible for those decisions.",
          ),
        ],
      },
      {
        heading: "Acceptable use",
        blocks: [
          ul(
            "Use the app lawfully.",
            "Do not copy, resell or redistribute the app.",
            "Do not reverse engineer the app, except where the law allows it.",
            "Respect other people’s rights in the names, photos and content you add.",
          ),
        ],
      },
      {
        heading: "Ownership",
        blocks: [
          p(
            "We own the app, its design and its code. These terms give you a personal, non-transferable right to use it under the App Store terms. Names and marks of teams or clubs that you type in belong to their owners.",
          ),
        ],
      },
      {
        heading: "No warranty",
        blocks: [
          p(
            "We work to keep the app reliable, but it is provided “as is”, to the extent the law allows. We do not promise that it will be free of errors or that it will meet every need.",
          ),
        ],
      },
      {
        heading: "Limitation of liability",
        blocks: [
          p(
            "To the extent the law allows, we are not liable for indirect or consequential damages, and our total liability is limited to the amount you paid for the app. Nothing in these terms limits the rights you have under the consumer protection laws that apply to you.",
          ),
        ],
      },
      {
        heading: "Governing law",
        blocks: [
          p(
            "These terms are governed by the laws of Mexico. If you are a consumer, you keep the protection of the mandatory laws of the country where you live.",
          ),
        ],
      },
      {
        heading: "Changes",
        blocks: [
          p(
            "We may update these terms. When we do, we will post the new version on this page with a new date.",
          ),
        ],
      },
      { heading: "Contact", blocks: [p("Questions about these terms: {email}.")] },
    ],
  },
  es: {
    title: "Términos de servicio",
    intro: [
      "Estos términos aplican a SoccerBoard Tactics AI (“la app”) y a este sitio web. Los ofrece Alejandro Hernandez Mitre (“nosotros”). Al usar la app, los aceptas. También aplican los términos de licencia estándar del App Store para apps.",
    ],
    sections: [
      {
        heading: "La app",
        blocks: [
          p(
            "SoccerBoard Tactics AI es una pizarra táctica para entrenadores, analistas y jugadores de fútbol. Puedes armar tu equipo y tu alineación, dibujar tu plan y guardarlo. Requiere iOS 26.4 o posterior.",
          ),
        ],
      },
      {
        heading: "Compra",
        blocks: [
          p(
            "La app es una compra única en el App Store. No tiene suscripciones ni compras dentro de la app. Los precios, el pago y los reembolsos los gestiona el App Store conforme a sus términos. Después de comprarla, puedes volver a descargarla desde el App Store con la misma cuenta.",
          ),
        ],
      },
      {
        heading: "Tu contenido",
        blocks: [
          p(
            "Los equipos, pizarras y esquemas que creas son tuyos. Se guardan en tu dispositivo y no tenemos acceso a ellos. Te recomendamos respaldar lo que sea importante para ti.",
          ),
        ],
      },
      {
        heading: "El entrenador con IA y sus sugerencias",
        blocks: [
          p(
            "Las alineaciones, explicaciones y ajustes del entrenador son sugerencias para apoyar tus propias decisiones. Pueden equivocarse o no adaptarse a tu equipo, a tus jugadores o a la situación. En dispositivos o idiomas donde la IA en el dispositivo no está disponible, las sugerencias vienen de un motor basado en reglas. Tú decides qué usar y eres responsable de esas decisiones.",
          ),
        ],
      },
      {
        heading: "Uso aceptable",
        blocks: [
          ul(
            "Usa la app conforme a la ley.",
            "No copies, revendas ni redistribuyas la app.",
            "No apliques ingeniería inversa a la app, salvo donde la ley lo permita.",
            "Respeta los derechos de otras personas en los nombres, fotos y contenido que agregues.",
          ),
        ],
      },
      {
        heading: "Propiedad",
        blocks: [
          p(
            "La app, su diseño y su código son nuestros. Estos términos te dan un derecho personal e intransferible para usarla conforme a los términos del App Store. Los nombres y marcas de equipos o clubes que escribas pertenecen a sus dueños.",
          ),
        ],
      },
      {
        heading: "Sin garantía",
        blocks: [
          p(
            "Trabajamos para que la app sea confiable, pero se ofrece “tal cual”, en la medida en que la ley lo permita. No prometemos que esté libre de errores ni que cubra todas las necesidades.",
          ),
        ],
      },
      {
        heading: "Limitación de responsabilidad",
        blocks: [
          p(
            "En la medida en que la ley lo permita, no somos responsables por daños indirectos o consecuentes, y nuestra responsabilidad total se limita a lo que pagaste por la app. Nada en estos términos limita los derechos que te otorgan las leyes de protección al consumidor que te apliquen.",
          ),
        ],
      },
      {
        heading: "Ley aplicable",
        blocks: [
          p(
            "Estos términos se rigen por las leyes de México. Si eres consumidor, conservas la protección de las leyes obligatorias del país donde vives.",
          ),
        ],
      },
      {
        heading: "Cambios",
        blocks: [
          p(
            "Podemos actualizar estos términos. Cuando lo hagamos, publicaremos la nueva versión en esta página con una nueva fecha.",
          ),
        ],
      },
      { heading: "Contacto", blocks: [p("Dudas sobre estos términos: {email}.")] },
    ],
  },
};

export const support: Record<Locale, SupportDoc> = {
  en: {
    title: "Support",
    intro:
      "Need a hand? Email us at {email} and include your device model, your iOS version and what happened. We read every message.",
    faqHeading: "Common questions",
    faq: [
      { q: "What do I need to use the app?", a: "iOS 26.4 or later." },
      {
        q: "Which devices get the on-device AI?",
        a: "A compatible iPhone with on-device intelligence turned on and a supported language. On other devices and languages, you get rule-based suggestions.",
      },
      {
        q: "How do I build a lineup with the coach?",
        a: "Open the coach panel, pick your plan with the chips or type it in your own words, and tap **Build my lineup**. Review the formation and the explanation, then tap **Apply to board**.",
      },
      {
        q: "How do I analyze my setup?",
        a: "With your players on the board, open the coach panel and tap **Analyze my setup**. You get up to 3 adjustments, numbered on the board and listed in the panel. Tap **Apply** on the ones you want.",
      },
      {
        q: "How do I remove the field photo?",
        a: "Open the photo options in the board’s tools and tap **Remove Photo**. Your players and drawings stay where they are.",
      },
      {
        q: "How does it work on iPhone Duo?",
        a: "On the inner display, the board and the coach panel sit side by side. On the outer display, you get a compact board. Fold or unfold and keep working.",
      },
      {
        q: "Where is my data stored?",
        a: "Your teams, boards and setups are stored on your device. There are no accounts and no servers, so we cannot see or restore your data. If you delete the app, its data is deleted too.",
      },
      {
        q: "I have a new iPhone. Do I need to buy the app again?",
        a: "No. Download it again from the App Store with the same account you used to buy it.",
      },
      {
        q: "Is it a subscription?",
        a: "No. Pay once: no subscriptions, no in-app purchases and no ads.",
      },
    ],
    reviewHeading: "Like the app?",
    reviewBody: "A review on the App Store helps other coaches find SoccerBoard Tactics AI.",
    reviewLink: "Write a review",
  },
  es: {
    title: "Soporte",
    intro:
      "¿Necesitas ayuda? Escríbenos a {email} e incluye el modelo de tu dispositivo, tu versión de iOS y qué pasó. Leemos todos los mensajes.",
    faqHeading: "Preguntas comunes",
    faq: [
      { q: "¿Qué necesito para usar la app?", a: "iOS 26.4 o posterior." },
      {
        q: "¿En qué dispositivos funciona la IA?",
        a: "En un iPhone compatible con la inteligencia en el dispositivo activada y un idioma compatible. En otros dispositivos e idiomas recibes sugerencias basadas en reglas.",
      },
      {
        q: "¿Cómo armo una alineación con el entrenador?",
        a: "Abre el panel del entrenador, elige tu plan con las opciones rápidas o escríbelo con tus propias palabras y toca **Armar mi alineación**. Revisa la formación y la explicación, y luego aplícala en la pizarra.",
      },
      {
        q: "¿Cómo analizo mi parado?",
        a: "Con tus jugadores en la pizarra, abre el panel del entrenador y toca **Analizar mi parado**. Recibes hasta 3 ajustes, numerados en la pizarra y listados en el panel. Aplica los que quieras con un toque.",
      },
      {
        q: "¿Cómo quito la foto de la cancha?",
        a: "Abre las opciones de foto en las herramientas de la pizarra y elige quitar la foto. Tus jugadores y dibujos se quedan donde están.",
      },
      {
        q: "¿Cómo funciona en iPhone Duo?",
        a: "En la pantalla interior, la pizarra y el panel del entrenador van lado a lado. En la pantalla exterior tienes una pizarra compacta. Pliega o abre tu iPhone Duo y sigue trabajando.",
      },
      {
        q: "¿Dónde se guardan mis datos?",
        a: "Tus equipos, pizarras y esquemas se guardan en tu dispositivo. No hay cuentas ni servidores, así que no podemos ver ni recuperar tus datos. Si eliminas la app, sus datos también se eliminan.",
      },
      {
        q: "Tengo un iPhone nuevo. ¿Debo comprar la app otra vez?",
        a: "No. Descárgala de nuevo desde el App Store con la misma cuenta con la que la compraste.",
      },
      {
        q: "¿Es una suscripción?",
        a: "No. Pago único: sin suscripciones, sin compras dentro de la app y sin anuncios.",
      },
    ],
    reviewHeading: "¿Te gusta la app?",
    reviewBody: "Una reseña en el App Store ayuda a otros entrenadores a encontrar SoccerBoard Tactics AI.",
    reviewLink: "Escribir una reseña",
  },
};
