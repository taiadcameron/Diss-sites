export const trackEvent = (eventName, eventProps) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventProps);
  } else {
    console.log(`Analytics disabled: Event [${eventName}]`, eventProps);
  }
};
