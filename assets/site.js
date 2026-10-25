// Shared settings and small helpers for every page.

// Paste the Amazon product link here once the book has an ASIN,
// e.g. "https://www.amazon.com/dp/B0XXXXXXXX". Empty = "Coming soon".
const AMAZON_URL = "";

document.querySelectorAll("[data-amazon]").forEach(el => {
  if (AMAZON_URL) {
    el.href = AMAZON_URL;
    el.target = "_blank";
    el.rel = "noopener";
    el.textContent = el.dataset.amazon || "GET IT ON AMAZON";
    el.removeAttribute("aria-disabled");
  } else {
    el.removeAttribute("href");
    el.setAttribute("aria-disabled", "true");
    el.textContent = "COMING SOON ON AMAZON";
  }
});

document.querySelectorAll("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
