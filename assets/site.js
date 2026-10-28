// Shared settings and small helpers for every page.

// Paste the Amazon product link here once the book has an ASIN,
// e.g. "https://www.amazon.com/dp/B0XXXXXXXX". Empty = "Coming soon".
const AMAZON_URL = "https://www.amazon.com/dp/B0HPKQ2WG3";
// Regional stores shown as small links under the main button. Empty list = hidden.
const AMAZON_STORES = [
  [".de", "https://www.amazon.de/dp/B0HPKQ2WG3"],
  [".co.uk", "https://www.amazon.co.uk/dp/B0HPKQ2WG3"],
  [".fr", "https://www.amazon.fr/dp/B0HPKQ2WG3"],
  [".it", "https://www.amazon.it/dp/B0HPKQ2WG3"],
  [".es", "https://www.amazon.es/dp/B0HPKQ2WG3"],
];

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

document.querySelectorAll("[data-stores]").forEach(el => {
  if (!AMAZON_URL || !AMAZON_STORES.length) return;
  const label = document.createElement("span");
  label.textContent = "Also on Amazon ";
  el.appendChild(label);
  AMAZON_STORES.forEach(([name, url], i) => {
    if (i) el.appendChild(document.createTextNode(" / "));
    const a = document.createElement("a");
    a.href = url; a.target = "_blank"; a.rel = "noopener"; a.textContent = name;
    el.appendChild(a);
  });
  el.hidden = false;
});

document.querySelectorAll("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
