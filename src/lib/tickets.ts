import { toast } from "sonner";

export const STRIPE_TICKET_URL = "https://buy.stripe.com/3cI6oA8wzg45aEm6xU3VC03";

// Temporary alumni early-access passcode, active until EARLY_ACCESS_ENDS.
export const ALUMNI_PASSCODE = "BIGDEAL26";

// Passcode gate is active until this moment; after it, ticket buttons go
// straight to STRIPE_TICKET_URL. Sunday 8/23/26 12:00pm EDT (UTC-4).
export const EARLY_ACCESS_ENDS = new Date("2026-08-23T12:00:00-04:00");

export const showTicketsComingSoon = () => {
  toast("🎉 2026 Tickets coming soon!!", {
    description: "We'll share the new ticket link here as soon as it's ready.",
  });
};
