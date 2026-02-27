import { siteConfig } from "@/data/site";

const joinParts = (parts: readonly string[], separator = "") => parts.join(separator).trim();

export function getAgencyEmail() {
  const [localPart, domainPart] = siteConfig.agency.emailParts;
  return `${localPart}@${domainPart}`;
}

export function getAgencyPhoneDisplay() {
  return joinParts(siteConfig.agency.phoneParts, " ");
}

export function getAgencyPhoneHref() {
  return `tel:${joinParts(siteConfig.agency.phoneParts)}`;
}

export function getAgencyWhatsAppHref() {
  const digits = joinParts(siteConfig.agency.whatsappParts).replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}
