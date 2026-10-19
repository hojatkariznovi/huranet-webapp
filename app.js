
/*
 * HURA Eitaa Mini App
 * نسخه بازنویسی‌شده: انتقال مستقیم به ایتا بدون پیام تأیید یا اعلان
 */

const CONTACT_USERNAME = "hojat_k82";
const CONTACT_URL = `https://eitaa.com/${CONTACT_USERNAME}`;

/* خدمات پرتقاضا */
const popularServices = [
  {
    id: "pos",
    icon: "▣",
    title: "فروش و تعمیر کارتخوان",
    desc: "دستگاه نو و کارکرده، پیگیری تعمیرات",
    message: "سلام، برای فروش یا تعمیر کارتخوان درخواست دارم."
  },
  {
    id: "insurance",
    icon: "◇",
    title: "بیمه",
    desc: "استعلام و راهنمایی خرید بیمه",
    message: "سلام، برای خدمات بیمه درخواست دارم."
  },
  {
    id: "vehicle",
    icon: "⌁",
    title: "خدمات خودرو",
    desc: "نوبت‌دهی، تعویض پلاک و پیگیری امور",
    message: "سلام، برای خدمات خودرو درخواست دارم."
  },
  {
    id: "internet",
    icon: "⌘",
    title: "خدمات اینترنتی",
    desc: "ثبت‌نام‌ها و امور اینترنتی",
    message: "سلام، برای یک خدمت اینترنتی درخواست دارم."
  }
];

/* دسته‌بندی کامل خدمات */
const categories = [
  {
    icon: "▣",
    title: "کارتخوان و خدمات کسب‌وکار",
    detail: "فروش، تعمیر و راهنمایی کارتخوان",
    message: "سلام، برای خدمات کارتخوان و کسب‌وکار راهنمایی می‌خواهم."
  },
  {
    icon: "◇",
    title: "بیمه",
    detail: "استعلام و پیگیری خدمات بیمه",
    message: "سلام، برای خدمات بیمه راهنمایی می‌خواهم."
  },
  {
    icon: "⌁",
    title: "خدمات خودرو",
    detail: "نوبت، تعویض پلاک و امور مرتبط",
    message: "سلام، برای خدمات خودرو راهنمایی می‌خواهم."
  },
  {
    icon: "▤",
    title: "خدمات اداری و دولتی",
    detail: "ثبت درخواست و پیگیری امور",
    message: "سلام، برای خدمات اداری و دولتی درخواست دارم."
  },
  {
    icon: "⌘",
    title: "خدمات اینترنتی و ثبت‌نام",
    detail: "فرم‌ها، سامانه‌ها و ثبت‌نام‌ها",
    message: "سلام، برای ثبت‌نام اینترنتی درخواست دارم."
  },
  {
    icon: "◉",
    title: "سیم‌کارت و ارتباطات",
    detail: "خرید و خدمات سیم‌کارت",
    message: "سلام، برای خدمات سیم‌کارت درخواست دارم."
  }
];

/* ساخت متن درخواست */
function createRequestMessage(service) {
  return service.message ||
    `سلام، برای خدمت «${service.title}» درخواست دارم.`;
}

/*
 * انتقال مستقیم به چت هورا
 * بدون confirm، بدون toast و بدون پیام واسطه
 */
function requestService(service) {
  if (!service) {
    window.location.href = CONTACT_URL;
    return;
  }

  const message = createRequestMessage(service);

  // تلاش برای کپی متن آماده؛ در صورت عدم پشتیبانی، انتقال ادامه می‌یابد.
  try {
    if (navigator.clipboard &&
        typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(message).catch(() => {});
    }
  } catch (error) {
    // خطای کپی نباید مانع بازشدن ایتا شود.
  }

  // استفاده از API برنامک در صورت در دسترس بودن
  try {
    const app = window.Eitaa && window.Eitaa.WebApp;

    if (app && typeof app.openEitaaLink === "function") {
      app.openEitaaLink(CONTACT_URL);
      return;
    }

    if (app && typeof app.openLink === "function") {
      app.openLink(CONTACT_URL);
      return;
    }
  } catch (error) {
    // در صورت در دسترس نبودن API از لینک مستقیم استفاده می‌شود.
  }

  // بازکردن مستقیم گفت‌وگو در مرورگر یا برنامه ایتا
  window.location.href = CONTACT_URL;
}

/* نمایش کارت‌های خدمات */
function renderPopular() {
  const host = document.getElementById("popular-services");
  if (!host) return;

  host.innerHTML = popularServices.map(service => `
    <a
      class="service-card"
      href="${CONTACT_URL}"
      data-service="${service.id}"
      aria-label="ثبت درخواست ${service.title}"
    >
      <span class="service-icon">${service.icon}</span>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
      <span class="service-action">
        ثبت درخواست <span>↗</span>
      </span>
    </a>
  `).join("");

  host.querySelectorAll("[data-service]").forEach(element => {
    element.addEventListener("click", event => {
      event.preventDefault();

      const service = popularServices.find(
        item => item.id === element.dataset.service
      );

      requestService(service);
    });
  });
}

/* نمایش دسته‌بندی‌ها */
function renderCategories() {
  const host = document.getElementById("categories");
  if (!host) return;

  host.innerHTML = categories.map((category, index) => `
    <button
      class="category-item"
      type="button"
      data-category="${index}"
      aria-label="درخواست ${category.title}"
    >
      <span class="category-icon">${category.icon}</span>
      <span class="category-copy">
        <strong>${category.title}</strong>
        <small>${category.detail}</small>
      </span>
      <span class="category-arrow">←</span>
    </button>
  `).join("");

  host.querySelectorAll("[data-category]").forEach(element => {
    element.addEventListener("click", () => {
      const index = Number(element.dataset.category);
      requestService(categories[index]);
    });
  });
}

/* آماده‌سازی برنامک ایتا */
function initEitaa() {
  try {
    const app = window.Eitaa && window.Eitaa.WebApp;

    if (app && typeof app.ready === "function") {
      app.ready();
    }

    if (app && typeof app.expand === "function") {
      app.expand();
    }
  } catch (error) {
    // سایت در مرورگر معمولی هم قابل استفاده می‌ماند.
  }
}

/* اجرای اولیه */
document.addEventListener("DOMContentLoaded", (() => {
  // دکمه‌های تغییر تم
  const themeButton = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");

  // عناصر موسیقی؛ مستقل از تغییر تم
  const music = document.getElementById("huraMusic");
  const musicButton = document.getElementById("musicToggle");
  const musicIcon = document.getElementById("musicIcon");
  const musicLabel = document.getElementById("musicLabel");

  // ---------- Theme ----------
  function applyTheme(theme) {
    const normalizedTheme = theme === "light" ? "light" : "dark";

    document.body.dataset.theme = normalizedTheme;
    document.documentElement.dataset.theme = normalizedTheme;

    if (themeIcon) {
      themeIcon.textContent =
        normalizedTheme === "light" ? "🌙" : "☀️";
    }

    if (themeLabel) {
      themeLabel.textContent =
        normalizedTheme === "light" ? "حالت شب" : "حالت روشن";
    }

    if (themeButton) {
      themeButton.setAttribute(
        "aria-pressed",
        String(normalizedTheme === "light")
      );
    }

    try {
      localStorage.setItem("hura-theme", normalizedTheme);
    } catch (_) {}
  }

  let savedTheme = "dark";

  try {
    savedTheme = localStorage.getItem("hura-theme") || "dark";
  } catch (_) {}

  applyTheme(savedTheme);

  if (themeButton) {
    themeButton.addEventListener("click", (event) => {
      event.preventDefault();

      const currentTheme =
        document.body.dataset.theme ||
        document.documentElement.dataset.theme;

      applyTheme(currentTheme === "light" ? "dark" : "light");
    });
  }

  // ---------- Music ----------
  if (music && musicButton) {
    function updateMusicButton() {
      const playing = !music.paused;

      if (musicIcon) {
        musicIcon.textContent = playing ? "❚❚" : "▶";
      }

      if (musicLabel) {
        musicLabel.textContent = playing
          ? "قطع موسیقی"
          : "پخش موسیقی";
      }

      musicButton.setAttribute("aria-pressed", String(playing));
    }

    musicButton.addEventListener("click", async (event) => {
      event.preventDefault();

      if (music.paused) {
        try {
          await music.play();
        } catch (_) {
          if (musicLabel) {
            musicLabel.textContent = "پخش ناموفق؛ دوباره بزن";
          }
          return;
        }
      } else {
        music.pause();
      }

      updateMusicButton();
    });

    music.addEventListener("play", updateMusicButton);
    music.addEventListener("pause", updateMusicButton);
    music.addEventListener("ended", updateMusicButton);

    updateMusicButton();
  }
})();
  
