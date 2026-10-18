"use server";

import { Resend } from "resend";
import { buildOrderText, validateOrder, type OrderInput } from "@/lib/orders";
import { getProductBySlug } from "@/data/products";
import { SITE } from "@/lib/site";

export interface OrderActionResult {
  ok: boolean;
  /** Server-side validation or delivery error, if any. */
  error?: string;
  /** True when the email was actually delivered to the shop inbox. */
  emailed: boolean;
  /** Pre-filled deep links for the customer to continue on chat. */
  links?: {
    whatsapp: string;
    messenger: string;
  };
  /** The formatted order text (also used for pre-filling chat links). */
  orderText?: string;
}

const RESEND_TIMEOUT_MS = 8000;

async function sendOrderEmail(input: OrderInput, orderText: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ORDER_TO_EMAIL;
  if (!apiKey || !to) return false;

  const resend = new Resend(apiKey);
  const product = getProductBySlug(input.flavor);
  const qty = Number(input.quantity);

  const { error } = await Promise.race([
    resend.emails.send({
      from: process.env.ORDER_FROM_EMAIL ?? "Velvet & Crumbs <onboarding@resend.dev>",
      to,
      replyTo: input.email.trim(),
      subject: `New order inquiry \u2014 ${product?.name || input.flavor} x${qty} from ${input.fullName.trim()}`,
      text: `${orderText}\n\n---\nCustomer email: ${input.email.trim()}\nCustomer phone: ${input.phone.trim()}`,
    }),
    new Promise<{ error: Error }>((resolve) =>
      setTimeout(() => resolve({ error: new Error("Email send timed out") }), RESEND_TIMEOUT_MS)
    ),
  ]);

  if (error) {
    console.error("[orders] Failed to send inquiry email:", error);
    return false;
  }
  return true;
}

export async function submitOrder(input: OrderInput): Promise<OrderActionResult> {
  const validationError = validateOrder(input);
  if (validationError) {
    return { ok: false, emailed: false, error: validationError };
  }

  const orderText = buildOrderText(input);
  let emailed = false;
  try {
    emailed = await sendOrderEmail(input, orderText);
  } catch (err) {
    console.error("[orders] Unexpected email failure:", err);
  }

  const waText = encodeURIComponent(orderText);
  return {
    ok: true,
    emailed,
    orderText,
    links: {
      whatsapp: `https://wa.me/${SITE.whatsappNumber}?text=${waText}`,
      messenger: SITE.messengerUrl,
    },
  };
}
