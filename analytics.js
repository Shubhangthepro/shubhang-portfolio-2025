document.addEventListener("DOMContentLoaded", () => {
  // Basic Performance Analytics
  const trackPageView = () => {
    console.log(`Page viewed: ${window.location.pathname}`);
    // Placeholder for analytics service (e.g., Google Analytics)
    // Example: gtag('event', 'page_view', { page_path: window.location.pathname });
  };

  const trackClick = (element, label) => {
    console.log(`Clicked: ${label}`);
    // Example: gtag('event', 'click', { event_label: label });
  };

  // Track page view
  trackPageView();

  // Track CTA button clicks
  document.querySelectorAll(".cta-button").forEach((button) => {
    button.addEventListener("click", () => trackClick(button, "CTA Button"));
  });

  // Track navigation clicks
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () =>
      trackClick(link, `Nav ${link.textContent}`)
    );
  });
});
