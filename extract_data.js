(function() {
  const metaTags = {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content,
    keywords: document.querySelector('meta[name="keywords"]')?.content,
    ogTitle: document.querySelector('meta[property="og:title"]')?.content,
    ogDescription: document.querySelector('meta[property="og:description"]')?.content,
  };

  const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
  const jsonLd = scripts.map(s => {
    try {
      return JSON.parse(s.innerText);
    } catch (e) {
      return null;
    }
  }).filter(Boolean);

  // Simple check for microdata
  const microdata = []; // Could add logic if needed, but JSON-LD is standard

  // Get text content to check for relationships
  const bodyText = document.body.innerText.substring(0, 5000); // Sample first 5000 chars

  return { metaTags, jsonLd, bodyText };
})();
