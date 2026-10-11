import { Fragment, type ReactNode } from "react";
import {
  APP_STORE_REVIEW_URL,
  APP_STORE_URL,
  CONTACT_EMAIL,
  t,
  type Locale,
} from "@/content/site";

// Renders copy with {email}, {store} and {review} link tokens and **strong** spans.
export function RichText({ text, locale }: { text: string; locale: Locale }): ReactNode {
  const parts = text.split(/(\{email\}|\{store\}|\{review\}|\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part === "{email}") {
      return (
        <a key={i} className="t-link break-words" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
      );
    }
    if (part === "{store}") {
      return (
        <a key={i} className="t-link" href={APP_STORE_URL}>
          {t(locale).faq.storeLinkText}
        </a>
      );
    }
    if (part === "{review}") {
      return (
        <a key={i} className="t-link" href={APP_STORE_REVIEW_URL}>
          {APP_STORE_REVIEW_URL}
        </a>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
