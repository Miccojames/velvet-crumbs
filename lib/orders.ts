import { getProductBySlug } from "@/data/products";

export interface OrderInput {
  fullName: string;
  email: string;
  phone: string;
  flavor: string;
  quantity: string;
  preferredDate?: string;
  message?: string;
}

/** Returns an error message, or null when valid. */
export function validateOrder(input: OrderInput): string | null {
  if (!input.fullName.trim() || input.fullName.trim().length < 2) {
    return "Please enter your full name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    return "Please enter a valid email address.";
  }
  if (input.phone.replace(/\D/g, "").length < 10) {
    return "Please enter a valid phone number.";
  }
  const product = getProductBySlug(input.flavor);
  if (!product) {
    return "Please select a valid flavor.";
  }
  const qty = Number(input.quantity);
  if (!Number.isInteger(qty) || qty < 1 || qty > 100) {
    return "Quantity must be between 1 and 100 cans.";
  }
  if (input.preferredDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(input.preferredDate) < today) {
      return "Preferred date cannot be in the past.";
    }
  }
  return null;
}

/** Build the human-readable order summary (used for email, WhatsApp, Messenger). */
export function buildOrderText(input: OrderInput): string {
  const product = getProductBySlug(input.flavor);
  const qty = Number(input.quantity);
  const total = product ? product.price * qty : 0;
  const totalLabel = total ? ` (Total: ₱${total.toLocaleString()})` : "";

  return (
    `Hello Velvet & Crumbs! I'd like to place an order inquiry:\n\n` +
    `\u2022 Name: ${input.fullName.trim()}\n` +
    `\u2022 Email: ${input.email.trim()}\n` +
    `\u2022 Phone: ${input.phone.trim()}\n` +
    `\u2022 Flavor: ${product?.name || input.flavor} (${product?.formattedPrice || "—"} each)\n` +
    `\u2022 Quantity: ${qty} can${qty > 1 ? "s" : ""}${totalLabel}\n` +
    `\u2022 Preferred Date: ${input.preferredDate || "As soon as possible"}\n` +
    `\u2022 Special Notes: ${input.message?.trim() || "None"}`
  );
}
