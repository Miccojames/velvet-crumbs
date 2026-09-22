"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { products } from "@/data/products";
import { CheckCircle2, Copy, ExternalLink } from "lucide-react";

const FB_PAGE_URL = "https://www.facebook.com/profile.php?id=61593329624071";

export function InquiryForm() {
  const searchParams = useSearchParams();
  const [flavor, setFlavor] = useState("red-velvet");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formattedMessage, setFormattedMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    quantity: "1",
    preferredDate: "",
    message: "",
  });

  useEffect(() => {
    const paramFlavor = searchParams.get("flavor");
    if (paramFlavor && products.some((p) => p.slug === paramFlavor)) {
      setFlavor(paramFlavor);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const selectedProduct = products.find((p) => p.slug === flavor);
    
    // Format full order text for Facebook Messenger / Page Message
    const textMsg =
      `Hello Velvet & Crumbs! I'd like to place an order inquiry:\n\n` +
      `• Name: ${formData.fullName}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Flavor: ${selectedProduct?.name || flavor} (₱120)\n` +
      `• Quantity: ${formData.quantity} cans\n` +
      `• Preferred Date: ${formData.preferredDate || "As soon as possible"}\n` +
      `• Special Notes: ${formData.message || "None"}`;

    setFormattedMessage(textMsg);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Open official Facebook Page directly in a new tab
      window.open(FB_PAGE_URL, "_blank");
    }, 600);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0B0B0B]" id="inquiry">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
            GET IN TOUCH
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#D8C6BA] font-light tracking-wide uppercase">
            READY FOR A LITTLE INDULGENCE?
          </h2>
          <div className="flex items-center justify-center gap-3 my-2">
            <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
            <span className="text-[#C9AE9E] text-xs">❖</span>
            <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
          </div>
          <p className="font-sans-clean text-sm md:text-base text-[#B4A59D] font-light max-w-xl mx-auto">
            "Submit your order details below to send directly to our official Facebook Page."
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#11100F] border border-[#D8C6BA]/40 p-8 md:p-10 text-center space-y-6 animate-fadeIn shadow-2xl">
            <div className="flex justify-center text-[#C9AE9E]">
              <CheckCircle2 className="h-16 w-16 stroke-[1.2]" />
            </div>
            <h3 className="font-serif-editorial text-3xl text-[#D8C6BA] uppercase">
              Inquiry Form Prepared
            </h3>
            <p className="font-sans-clean text-base text-[#B4A59D] font-light max-w-md mx-auto">
              Your inquiry has been formatted and our official Facebook Page has opened! Copy your message below and send it via Message on Facebook.
            </p>

            {/* Formatted Message Preview Box */}
            <div className="bg-[#0B0B0B] border border-[#D8C6BA]/25 p-5 text-left rounded-none space-y-3 font-mono text-xs text-[#D8C6BA] relative">
              <pre className="whitespace-pre-wrap font-sans-clean leading-relaxed">
                {formattedMessage}
              </pre>
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#C9AE9E] border border-[#C9AE9E]/40 px-3 py-1.5 hover:bg-[#C9AE9E]/10 transition-colors mt-2"
              >
                <Copy className="h-3.5 w-3.5" />
                <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY INQUIRY TEXT"}</span>
              </button>
              <p className="text-[11px] text-[#C9AE9E]/90 italic font-sans-clean mt-2">
                Note: Copy this text and send it to our Facebook Page via Messenger.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={FB_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="solid" className="w-full py-3 flex items-center justify-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>OPEN FACEBOOK PAGE</span>
                </Button>
              </a>
              <Button
                variant="outline"
                className="flex-1 py-3"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    quantity: "1",
                    preferredDate: "",
                    message: "",
                  });
                }}
              >
                SUBMIT ANOTHER INQUIRY
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#11100F] border border-[#D8C6BA]/25 p-8 md:p-12 space-y-6 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  required
                  placeholder="e.g. Maria Santos"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. maria@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="e.g. +63 917 123 4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              {/* Preferred Flavor */}
              <div>
                <Label htmlFor="flavor">Preferred Flavor *</Label>
                <Select
                  id="flavor"
                  value={flavor}
                  onChange={(e) => setFlavor(e.target.value)}
                >
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug} className="bg-[#11100F]">
                      {p.name} (₱120)
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Quantity */}
              <div>
                <Label htmlFor="quantity">Quantity (Cans) *</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  max="100"
                  required
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                />
              </div>

              {/* Preferred Date */}
              <div>
                <Label htmlFor="preferredDate">Preferred Delivery/Pickup Date</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message">Special Requests or Notes</Label>
              <Textarea
                id="message"
                placeholder="Let us know if you need gift cards, custom ribbons, or specific delivery instructions..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="solid"
                disabled={loading}
                className="w-full py-4 text-xs tracking-[0.25em] flex items-center justify-center gap-2"
              >
                <svg
                  className="h-4 w-4 text-[#0B0B0B]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.906 1.455 5.5 3.734 7.185V22l3.424-1.879c.904.25 1.862.387 2.842.387 5.523 0 10-4.145 10-9.25C22 6.145 17.523 2 12 2zm1.03 12.355l-2.585-2.757-5.044 2.757 5.547-5.89 2.646 2.757 4.983-2.757-5.547 5.89z" />
                </svg>
                <span>{loading ? "OPENING FACEBOOK PAGE..." : "SEND INQUIRY VIA FACEBOOK PAGE"}</span>
              </Button>
            </div>
          </form>
        )}

        {/* Direct Social Messaging Links */}
        <div className="mt-12 text-center space-y-4 pt-8 border-t border-[#D8C6BA]/15">
          <p className="text-xs text-[#81756E] tracking-widest uppercase">
            OR VISIT OUR OFFICIAL FACEBOOK PAGE
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={FB_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#D8C6BA]/30 px-6 py-2.5 text-xs text-[#D8C6BA] hover:border-[#D8C6BA] hover:bg-[#D8C6BA]/10 transition-colors uppercase tracking-widest"
            >
              <svg
                className="h-4 w-4 text-[#C9AE9E]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span>VISIT OUR FACEBOOK PAGE</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#D8C6BA]/30 px-6 py-2.5 text-xs text-[#D8C6BA] hover:border-[#D8C6BA] hover:bg-[#D8C6BA]/10 transition-colors uppercase tracking-widest"
            >
              <svg
                className="h-4 w-4 text-[#C9AE9E]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>MESSAGE US ON INSTAGRAM</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
