export const STRIPE_TICKET_URL = "https://buy.stripe.com/3cI6oA8wzg45aEm6xU3VC03";

export const openTicketCheckout = () => {
  window.open(STRIPE_TICKET_URL, "_blank");
};
