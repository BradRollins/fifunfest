import { toast } from "sonner";

// TODO: once the 2026 Stripe checkout link is ready, point this at it directly
// (e.g. window.open(STRIPE_TICKET_URL, "_blank")) instead of showing the toast.
export const STRIPE_TICKET_URL = "https://buy.stripe.com/9B6eV69AD057bIq2hE3VC00";

export const showTicketsComingSoon = () => {
  toast("🎉 2026 Tickets coming soon!!", {
    description: "We'll share the new ticket link here as soon as it's ready.",
  });
};
