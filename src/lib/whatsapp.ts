/**
 * Central WhatsApp ordering logic.
 * Every "Order on WhatsApp" action in the site funnels through here so the
 * pre-filled message is always specific to what the customer was looking at.
 */

export const WHATSAPP_NUMBER = '254798782360'

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim())
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

/** Message for a specific cake card. */
export function cakeInquiryMessage(cakeName: string, category?: string): string {
  return `Hello! I am interested in the ${cakeName}${category ? ` (${category})` : ''}. I would like to know the available sizes, pricing, and availability.`
}

/** Message for a whole category page's general CTA. */
export function categoryInquiryMessage(categoryLabel: string): string {
  return `Hello! I've been browsing your ${categoryLabel} collection and would love some guidance choosing the right cake. Could you help me with options, pricing, and availability?`
}

/** Message for the Custom Cakes page. */
export function customCakeMessage(): string {
  return `Hello! I would like to order a custom-designed cake. I would like to discuss my ideas, preferred date, and receive a quotation.`
}

/** Message for Wedding Cakes, matching the brief's example tone. */
export function weddingInquiryMessage(cakeName: string): string {
  return `Hello! I would like to inquire about the ${cakeName}. I would like to discuss the design, number of servings, pricing, and my preferred wedding date.`
}

/** Contact page message with optional pre-filled fields. */
export function contactMessage(name: string, eventType: string, date: string, details: string): string {
  const parts = [`Hello, my name is ${name || '[Your name]'}.`]
  if (eventType) parts.push(`I'm inquiring about a cake for a ${eventType}.`)
  if (date) parts.push(`My preferred date is ${date}.`)
  if (details) parts.push(details)
  parts.push(`Could you share pricing and availability?`)
  return parts.join(' ')
}

/** General footer / floating button inquiry. */
export function generalInquiryMessage(): string {
  return `Hello! I'd like to know more about your cakes and how to place an order.`
}
