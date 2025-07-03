export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-6VPBR0SZEE";

export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag !== "function") {
    console.warn("gtag is not available");
    return;
  }
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
