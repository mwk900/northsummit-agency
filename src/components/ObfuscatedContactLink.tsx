import { useEffect, useMemo, useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { getAgencyEmail, getAgencyPhoneDisplay, getAgencyPhoneHref, getAgencyWhatsAppHref } from "@/utils/contact";

type ContactMethod = "email" | "phone" | "whatsapp";

interface ObfuscatedContactLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  method: ContactMethod;
  ssrLabel: string;
  children?: ReactNode | ((resolvedLabel: string, isReady: boolean) => ReactNode);
}

const resolvedLabelByMethod: Record<ContactMethod, () => string> = {
  email: getAgencyEmail,
  phone: getAgencyPhoneDisplay,
  whatsapp: () => "Chat",
};

const resolvedHrefByMethod: Record<ContactMethod, () => string> = {
  email: () => `mailto:${getAgencyEmail()}`,
  phone: getAgencyPhoneHref,
  whatsapp: getAgencyWhatsAppHref,
};

const defaultAriaLabelByMethod: Record<ContactMethod, string> = {
  email: "Email NorthSummit",
  phone: "Call NorthSummit",
  whatsapp: "Message NorthSummit on WhatsApp",
};

export default function ObfuscatedContactLink({
  method,
  ssrLabel,
  children,
  onClick,
  "aria-label": ariaLabel,
  ...anchorProps
}: ObfuscatedContactLinkProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const readyTimer = window.setTimeout(() => setIsReady(true), 0);
    return () => window.clearTimeout(readyTimer);
  }, []);

  const resolvedLabel = useMemo(
    () => (isReady ? resolvedLabelByMethod[method]() : ssrLabel),
    [isReady, method, ssrLabel],
  );

  const href = useMemo(
    () => (isReady ? resolvedHrefByMethod[method]() : "#"),
    [isReady, method],
  );

  const content = typeof children === "function" ? children(resolvedLabel, isReady) : (children ?? resolvedLabel);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isReady) {
      event.preventDefault();
      return;
    }

    onClick?.(event);
  };

  return (
    <a
      {...anchorProps}
      href={href}
      aria-label={ariaLabel ?? defaultAriaLabelByMethod[method]}
      onClick={handleClick}
    >
      {content}
    </a>
  );
}
