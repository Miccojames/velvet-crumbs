// Central place for business contact info used across the site.
// WhatsApp/Messenger values are placeholders — replace with the real ones.
export const SITE = {
  name: "Velvet & Crumbs",
  /** Facebook page profile URL (plain page link). */
  facebookPageUrl: "https://www.facebook.com/profile.php?id=61593329624071",
  /** Messenger deep link — m.me accepts a page username or numeric page ID. */
  messengerUrl: "https://m.me/61593329624071",
  /** WhatsApp deep link number: digits only, country code first, no + or spaces. */
  whatsappNumber: "639178882253",
  /** Display phone for the footer. Keep digits in sync with whatsappNumber. */
  phoneDisplay: "+63 917 888 CAKE",
  email: "hello@velvetandcrumbs.ph",
  instagramUrl: "https://instagram.com/velvetandcrumbs",
} as const;

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(text: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
