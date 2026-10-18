/*
 * HURA Eitaa Mini App — version 1
 * Edit the Eitaa username in CONTACT_USERNAME below if needed.
 */
const CONTACT_USERNAME = "hojat_k82";
const CONTACT_URL = `https://eitaa.com/${CONTACT_USERNAME}`;

const popularServices = [
  { id: "pos", icon: "▣", title: "فروش و تعمیر کارتخوان", desc: "دستگاه نو و کارکرده، پیگیری تعمیرات", message: "سلام، برای فروش یا تعمیر کارتخوان درخواست دارم." },
  { id: "insurance", icon: "◇", title: "بیمه", desc: "استعلام و راهنمایی خرید بیمه", message: "سلام، برای خدمات بیمه درخواست دارم." },
  { id: "vehicle", icon: "⌁", title: "خدمات خودرو", desc: "نوبت‌دهی، تعویض پلاک و پیگیری امور", message: "سلام، برای خدمات خودرو درخواست دارم." },
  { id: "internet", icon: "⌘", title: "خدمات اینترنتی", desc: "ثبت‌نام‌ها و امور اینترنتی", message: "سلام، برای یک خدمت اینترنتی درخواست دارم." }
];

const categories = [
  { icon: "▣", title: "کارتخوان و خدمات کسب‌وکار", detail: "فروش، تعمیر و راهنمایی کارتخوان", message: "سلام، برای خدمات کارتخوان و کسب‌وکار راهنمایی می‌خواهم." },
  { icon: "◇", title: "بیمه", detail: "استعلام و پیگیری خدمات بیمه", message: "سلام، برای خدمات بیمه راهنمایی می‌خواهم." },
  { icon: "⌁", title: "خدمات خودرو", detail: "نوبت، تعویض پلاک و امور مرتبط", message: "سلام، برای خدمات خودرو راهنمایی می‌خواهم." },
  { icon: "▤", title: "خدمات اداری و دولتی", detail: "ثبت درخواست و پیگیری امور", message: "سلام، برای خدمات اداری و دولتی درخواست دارم." },
  { icon: "⌘", title: "خدمات اینترنتی و ثبت‌نام", detail: "فرم‌ها، سامانه‌ها و ثبت‌نام‌ها", message: "سلام، برای ثبت‌نام اینترنتی درخواست دارم." },
  { icon: "◉", title: "سیم‌کارت و ارتباطات", detail: "خرید و خدمات سیم‌کارت", message: "سلام، برای خدمات سیم‌کارت درخواست دارم." }
];

function eitaaLink(message) {
  // The URL opens the user's Eitaa profile/chat. The message is shown in the app UI
  // so the customer can copy it; URL-prefilled text is not assumed to be supported.
  return CONTACT_URL;
}

function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function requestService(service) {
  const message = service.message || `سلام، برای خدمت «${service.title}» درخواست دارم.`;
  const confirmed = window.confirm(`درخواست آماده است:\n\n${message}\n\nبا تأیید، گفت‌وگوی هورا در ایتا باز می‌شود. متن را می‌توانی در گفت‌وگو ارسال کنی.`);
  if (!confirmed) return;
  try {
    const webApp = window.Eitaa && window.Eitaa.WebApp;
    if (webApp && typeof webApp.openEitaaLink === "function") {
      webApp.openEitaaLink(CONTACT_URL);
    } else if (webApp && typeof webApp.openLink === "function") {
      webApp.openLink(CONTACT_URL);
    } else {
      window.open(CONTACT_URL, "_blank", "noopener");
    }
  } catch (e) {
    window.open(CONTACT_URL, "_blank", "noopener");
  }
  showToast("گفت‌وگوی هورا باز می‌شود؛ پیام درخواست را ارسال کن.");
}

function renderPopular() {
  const host = document.getElementById("popular-services");
  host.innerHTML = popularServices.map((service) => `
    <a class="service-card" href="${CONTACT_URL}" data-service="${service.id}" aria-label="ثبت درخواست ${service.title}">
      <span class="service-icon">${service.icon}</span>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
      <span class="service-action">ثبت درخواست <span>↗</span></span>
    </a>
  `).join("");
  host.querySelectorAll("[data-service]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      const service = popularServices.find((item) => item.id === el.dataset.service);
      requestService(service);
    });
  });
}

function renderCategories() {
  const host = document.getElementById("categories");
  host.innerHTML = categories.map((category, index) => `
    <button class="category-item" type="button" data-category="${index}">
      <span class="category-icon">${category.icon}</span>
      <span class="category-copy"><strong>${category.title}</strong><small>${category.detail}</small></span>
      <span class="category-arrow">←</span>
    </button>
  `).join("");
  host.querySelectorAll("[data-category]").forEach((el) => {
    el.addEventListener("click", () => requestService(categories[Number(el.dataset.category)]));
  });
}

function initEitaa() {
  // SDK APIs can differ by host version; keep the page functional in a normal browser too.
  try {
    const app = window.Eitaa && window.Eitaa.WebApp;
    if (app && typeof app.ready === "function") app.ready();
    if (app && typeof app.expand === "function") app.expand();
  } catch (error) {
    console.info("Eitaa SDK is not available in this preview environment.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderPopular();
  renderCategories();
  initEitaa();
});
        
