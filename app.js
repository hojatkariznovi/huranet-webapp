(() => {
  'use strict';
  const EITAA_URL = 'https://eitaa.com/hojat_k82';
  const STORAGE = { theme: 'hura-theme-v2', favorites: 'hura-favorites-v2' };
  const iconPaths = {
    pos:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M7 20h10M12 17v3M7 8h10M7 12h5"/>',
    cashless:'<rect x="5" y="2.5" width="14" height="19" rx="2.5"/><path d="M9 6h6M8 10h8M9 17h6"/>',
    'pos-repair':'<path d="M14.5 6.5a5 5 0 0 0-6.8 6.8L3 18l3 3 4.7-4.7a5 5 0 0 0 6.8-6.8L14 13l-3-3z"/>',
    insurance:'<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    'third-party':'<path d="M5 17h14l-1.2-6a2 2 0 0 0-2-1.6H8.2a2 2 0 0 0-2 1.6L5 17Z"/><path d="M7 17v2m10-2v2M7 13h.01M17 13h.01M8 9l1-3h6l1 3"/>',
    plate:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10h2m2 0h2m2 0h4M6 14h12"/>',
    'vehicle-transfer':'<path d="M7 7h13l-3-3M20 7l-3 3M17 17H4l3 3M4 17l3-3"/>',
    license:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M5.5 16c.8-2 4.2-2 5 0M13 9h5m-5 4h5"/>',
    tax:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h2m4 0h2M8 16h8"/>',
    sim:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 6h6v5H9zM10 18h4"/>',
    internet:'<path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0m-10.5 3.5a5 5 0 0 1 7 0M12 19h.01"/>',
    printing:'<path d="M6 9V3h12v6M6 17H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6zM17 12h.01"/>',
    forms:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
    online:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    'business-ad':'<path d="m3 11 18-5v12L3 13z"/><path d="M7 14l2 6h4l-3-7M21 10l2-2m-2 10 2 2"/>',
    consult:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-1.2 1-1.7 1.3-1.7 2.7M12 17h.01"/>',
    other:'<path d="M12 5v14M5 12h14"/>',
    'کسب‌وکار':'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/>',
    'بیمه و خودرو':'<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    'مدارک هویتی':'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M5.5 16c.8-2 4.2-2 5 0M13 9h5m-5 4h5"/>',
    'ارتباطات':'<path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0m-10.5 3.5a5 5 0 0 1 7 0M12 19h.01"/>',
    'خدمات اداری':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
    'راهنمایی':'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-1.2 1-1.7 1.3-1.7 2.7M12 17h.01"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
    moon:'<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
    menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
    heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>'
  };
  function iconSvg(name, extraClass='') {
    const path = iconPaths[name] || iconPaths.other;
    return `<svg class="svg-icon ${extraClass}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${path}</svg>`;
  }
  const services = [
    {id:'pos',title:'فروش و خدمات کارتخوان',category:'کسب‌وکار',icon:'▣',tag:'کسب‌وکار',description:'راهنمای تهیه کارتخوان نو یا کارکرده، بررسی شرایط اتصال و پذیرش درخواست تعمیرات.',documents:['کارت ملی متقاضی','شماره تلفن همراه به نام متقاضی','اطلاعات حساب و شبای بانکی در صورت نیاز','مدارک شغلی یا مالیاتی در صورت درخواست شرکت ارائه‌دهنده'],note:'نوع دستگاه، شرایط احراز و امکان اتصال به بانک باید پیش از ثبت نهایی بررسی شود.'},
    {id:'cashless',title:'دستگاه کش‌لس',category:'کسب‌وکار',icon:'▤',tag:'کسب‌وکار',description:'ثبت درخواست برای آشنایی با دستگاه‌های پرداخت بدون دریافت وجه نقد و شرایط تهیه آن.',documents:['کارت ملی متقاضی','شماره تماس فعال','اطلاعات کسب‌وکار','مدارک تکمیلی طبق ضوابط ارائه‌دهنده'],note:'موجودی، قیمت و شرایط ارائه دستگاه پس از استعلام مشخص می‌شود.'},
    {id:'pos-repair',title:'تعمیرات کارتخوان',category:'کسب‌وکار',icon:'⚙',tag:'تعمیرات',description:'ثبت درخواست بررسی ایرادهای نرم‌افزاری یا سخت‌افزاری دستگاه کارتخوان.',documents:['مدل دستگاه و نام شرکت پرداخت','شرح دقیق ایراد','شماره تماس برای هماهنگی','تصویر دستگاه یا پیام خطا در صورت امکان'],note:'هزینه و امکان تعمیر پس از بررسی دستگاه اعلام می‌شود؛ اطلاعات حساس کارت بانکی را ارسال نکنید.'},
    {id:'insurance',title:'خدمات بیمه',category:'بیمه و خودرو',icon:'◇',tag:'بیمه',description:'راهنمای دریافت یا تمدید بیمه‌نامه و بررسی مدارک متناسب با نوع بیمه.',documents:['کارت ملی بیمه‌گذار','شماره تماس','بیمه‌نامه قبلی در صورت تمدید','مدارک اختصاصی متناسب با نوع بیمه'],note:'مدارک دقیق به نوع بیمه و شرکت بیمه‌گر بستگی دارد.'},
    {id:'third-party',title:'بیمه شخص ثالث',category:'بیمه و خودرو',icon:'◈',tag:'بیمه خودرو',description:'ثبت درخواست استعلام و پیگیری شرایط بیمه شخص ثالث خودرو یا موتورسیکلت.',documents:['کارت ملی مالک یا بیمه‌گذار','کارت خودرو یا برگ سبز','بیمه‌نامه قبلی در صورت وجود','اطلاعات کاربری وسیله نقلیه'],note:'مبلغ نهایی و پوشش بیمه پس از استعلام از مرجع ارائه‌دهنده مشخص می‌شود.'},
    {id:'plate',title:'خدمات تعویض پلاک',category:'بیمه و خودرو',icon:'▦',tag:'خودرو',description:'راهنمای آماده‌سازی مدارک و آگاهی از مراحل متداول تعویض پلاک.',documents:['مدارک هویتی طرفین معامله','مدارک مالکیت و شناسایی خودرو','مدرک احراز محل سکونت طبق ضوابط','مدارک تسویه و معاینه فنی در صورت نیاز'],note:'فهرست مدارک و مراحل ممکن است با مقررات و وضعیت پرونده تغییر کند؛ نوبت‌دهی رسمی از مسیر مرجع مربوط انجام می‌شود.'},
    {id:'vehicle-transfer',title:'راهنمای نقل‌وانتقال خودرو',category:'بیمه و خودرو',icon:'⇄',tag:'خودرو',description:'آشنایی با مدارک متداول و آماده‌سازی اولیه برای فرایند نقل‌وانتقال.',documents:['مدارک هویتی خریدار و فروشنده','مدارک مالکیت خودرو','مدارک احراز محل سکونت حسب ضوابط','مدارک تسویه عوارض و جرایم در صورت نیاز'],note:'این بخش راهنماست و جایگزین بررسی شرایط پرونده توسط مراجع رسمی نیست.'},
    {id:'license',title:'خدمات گواهینامه',category:'مدارک هویتی',icon:'▤',tag:'مدارک',description:'راهنمای اولیه مدارک موردنیاز برای پیگیری برخی امور مرتبط با گواهینامه.',documents:['مدرک هویتی معتبر','گواهینامه قبلی در صورت تمدید یا تعویض','عکس یا مدارک پزشکی در صورت مطالبه مرجع مربوط','اطلاعات تماس متقاضی'],note:'نوع درخواست (صدور، تمدید، المثنی یا اصلاح اطلاعات) مدارک را تغییر می‌دهد.'},
    {id:'tax',title:'خدمات مالیاتی',category:'کسب‌وکار',icon:'٪',tag:'کسب‌وکار',description:'راهنمای اولیه برای آماده‌سازی اطلاعات موردنیاز امور مالیاتی کسب‌وکار.',documents:['اطلاعات هویتی مؤدی','شناسه یا اطلاعات پرونده مالیاتی در صورت وجود','اطلاعات کسب‌وکار و نشانی','مدارک تکمیلی متناسب با نوع درخواست'],note:'رمز عبور و کدهای یک‌بارمصرف را در پیام عمومی ارسال نکنید.'},
    {id:'sim',title:'خدمات سیم‌کارت',category:'ارتباطات',icon:'▥',tag:'ارتباطات',description:'راهنمای درخواست‌های متداول سیم‌کارت و بررسی مدارک اولیه.',documents:['کارت ملی معتبر','شماره تماس در دسترس','اطلاعات سیم‌کارت فعلی در صورت تعویض یا پیگیری','مدارک تکمیلی طبق مقررات اپراتور'],note:'ارائه خدمت تابع ضوابط اپراتور و احراز هویت رسمی است.'},
    {id:'internet',title:'اینترنت و مودم',category:'ارتباطات',icon:'⌁',tag:'ارتباطات',description:'ثبت درخواست راهنمایی برای انتخاب یا پیگیری خدمات اینترنت و تجهیزات مرتبط.',documents:['نشانی محل استفاده','شماره تماس','نوع اتصال یا اپراتور مدنظر در صورت مشخص بودن','مدل مودم در صورت درخواست پشتیبانی'],note:'پوشش، تعرفه و امکان ارائه خدمت باید از اپراتور مربوط استعلام شود.'},
    {id:'printing',title:'تایپ، پرینت و اسکن',category:'خدمات اداری',icon:'▧',tag:'خدمات اداری',description:'ثبت درخواست برای خدمات عمومی تایپ، چاپ و اسکن مدارک.',documents:['فایل یا تصویر خوانای مدرک','تعداد نسخه یا صفحات','نوع خروجی موردنظر','زمان تحویل مدنظر'],note:'پیش از ارسال مدارک محرمانه، درباره روش تحویل و نگهداری فایل هماهنگ کنید.'},
    {id:'forms',title:'تکمیل فرم‌های اینترنتی',category:'خدمات اداری',icon:'☷',tag:'خدمات اداری',description:'راهنمای آماده‌سازی اطلاعات و ثبت درخواست کمک در تکمیل فرم‌های اینترنتی.',documents:['نام سامانه یا نوع فرم','اطلاعات موردنیاز فرم','مدارک لازم طبق دستورالعمل همان سامانه','راه تماس برای هماهنگی'],note:'رمزها، اطلاعات بانکی و کدهای تأیید را ارسال نکنید؛ ثبت نهایی باید با تأیید خود متقاضی باشد.'},
    {id:'online',title:'پیگیری خدمات آنلاین',category:'خدمات اداری',icon:'◎',tag:'خدمات آنلاین',description:'ثبت درخواست راهنمایی برای پیدا کردن مسیر رسمی پیگیری یک خدمت اینترنتی.',documents:['نام خدمت یا سامانه','کد پیگیری در صورت وجود','شرح مرحله‌ای که در آن مشکل دارید','تصویر خطا با پوشاندن اطلاعات حساس'],note:'امکان پیگیری هر پرونده به دسترسی سامانه و مجوزهای قانونی بستگی دارد.'},
    {id:'business-ad',title:'تبلیغات کسب‌وکار',category:'کسب‌وکار',icon:'✳',tag:'تبلیغات',description:'ثبت درخواست برای بررسی انتشار معرفی یا تبلیغ کسب‌وکار در بسترهای قابل ارائه هورا.',documents:['نام کسب‌وکار و حوزه فعالیت','متن یا تصویر تبلیغ','راه ارتباطی موردنظر','محدوده مخاطب و زمان انتشار پیشنهادی'],note:'بستر، هزینه و زمان انتشار باید پیش از سفارش تأیید شود.'},
    {id:'consult',title:'راهنمای انتخاب خدمت',category:'راهنمایی',icon:'✦',tag:'راهنمایی',description:'اگر دقیق نمی‌دانی کدام خدمت مناسب توست، مسئله‌ات را توضیح بده تا مسیر مناسب بررسی شود.',documents:['شرح کوتاه نیاز یا مسئله','شهر یا محدوده خدمت در صورت مرتبط بودن','زمان مدنظر','مدارک مرتبط فقط در صورت درخواست پشتیبانی'],note:'ارسال اطلاعات حساس یا اصل مدارک در پیام اول لازم نیست.'},
    {id:'other',title:'سایر خدمات و درخواست‌ها',category:'راهنمایی',icon:'＋',tag:'سایر خدمات',description:'برای خدمتی که در فهرست نیست، درخواست خود را توضیح بده تا امکان ارائه آن بررسی شود.',documents:['شرح روشن خدمت موردنظر','اطلاعات تماس','زمان مدنظر','مدارک مرتبط در صورت نیاز و پس از هماهنگی'],note:'ثبت پیام به معنی تأیید امکان ارائه خدمت یا پذیرش سفارش نیست.'}
  ];
  const categories = [
    {name:'کسب‌وکار',icon:'▣',description:'کارتخوان، مالیات و تبلیغات'},
    {name:'بیمه و خودرو',icon:'◈',description:'بیمه، تعویض پلاک و خودرو'},
    {name:'مدارک هویتی',icon:'▤',description:'راهنمای امور مدارک'},
    {name:'ارتباطات',icon:'⌁',description:'سیم‌کارت و اینترنت'},
    {name:'خدمات اداری',icon:'▧',description:'تایپ، چاپ و فرم‌ها'},
    {name:'راهنمایی',icon:'✦',description:'انتخاب خدمت و درخواست دیگر'}
  ];
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const state = {category:'all', query:'', favoritesOnly:false, sort:'default', flipped:new Set(), slide:0, toastTimer:null};
  const safeRead = (key, fallback) => { try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); } catch { return fallback; } };
  const safeWrite = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage may be disabled */ } };
  let favorites = new Set(safeRead(STORAGE.favorites, []));

  function showToast(message) {
    const toast = $('#toast'); if (!toast) return;
    toast.textContent = message; toast.classList.add('is-visible');
    clearTimeout(state.toastTimer); state.toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  }
  function applyTheme(theme) {
    const selected = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = selected;
    const glyph = $('#themeGlyph'); if (glyph) glyph.innerHTML = iconSvg(selected === 'dark' ? 'sun' : 'moon');
    const themeButton = $('#themeToggle'); if (themeButton) themeButton.setAttribute('aria-label', selected === 'dark' ? 'روشن کردن پوسته' : 'تاریک کردن پوسته');
    const meta = $('meta[name="theme-color"]'); if (meta) meta.content = selected === 'dark' ? '#091321' : '#f4f8fb';
    safeWrite(STORAGE.theme, selected);
  }
  function toggleTheme() { applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'); }
  function requestText(service) {
    return `سلام، برای خدمت «${service.title}» از هورا راهنمایی می‌خواهم.\nلطفاً شرایط، مدارک دقیق، هزینه احتمالی و مراحل انجام را اعلام کنید.\nتوضیحات تکمیلی: `;
  }
  async function copyText(text) {
    try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; } } catch { /* use fallback */ }
    try {
      const area = document.createElement('textarea'); area.value = text; area.setAttribute('readonly',''); area.style.position='fixed'; area.style.opacity='0'; document.body.appendChild(area); area.select();
      const ok = document.execCommand('copy'); area.remove(); return ok;
    } catch { return false; }
  }
  function startRequest(service) {
    const dialog = $('#requestDialog');
    const field = $('#requestMessage');
    if (!dialog || !field) { showToast('متن درخواست در دسترس نیست؛ از راه ارتباطی ایتا استفاده کن.'); return; }
    if ($('#serviceDialog')?.open) $('#serviceDialog').close();
    field.value = requestText(service);
    $('#requestDialogTitle').textContent = `درخواست «${service.title}»`;
    $('#openEitaaRequest').href = EITAA_URL;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else { field.focus(); field.select(); showToast('متن درخواست آماده است؛ آن را کپی و در ایتا ارسال کن.'); }
  }
  function escapeHTML(value) { return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
  function getFilteredServices() {
    let list = services.filter(service => {
      const query = state.query.trim().toLocaleLowerCase('fa');
      const matchesQuery = !query || `${service.title} ${service.description} ${service.category} ${service.tag}`.toLocaleLowerCase('fa').includes(query);
      return matchesQuery && (state.category === 'all' || service.category === state.category) && (!state.favoritesOnly || favorites.has(service.id));
    });
    if (state.sort === 'title') list.sort((a,b) => a.title.localeCompare(b.title,'fa'));
    return list;
  }
  function renderServiceCard(service) {
    const isFavorite = favorites.has(service.id);
    const flipped = state.flipped.has(service.id);
    const docs = service.documents.map(doc => `<li>${escapeHTML(doc)}</li>`).join('');
    const safeTitle = escapeHTML(service.title);
    return `<article class="service-card ${flipped?'is-flipped':''}" data-service-id="${service.id}">
      <div class="service-card-inner">
        <div class="service-face service-front">
          <div class="service-card-top"><span class="service-icon" aria-hidden="true">${iconSvg(service.id)}</span><span class="service-tag">${escapeHTML(service.tag)}</span><button class="favorite-button ${isFavorite?'is-favorite':''}" type="button" data-action="favorite" data-id="${service.id}" aria-label="${isFavorite?'حذف از':'افزودن به'} علاقه‌مندی‌ها" aria-pressed="${isFavorite}">${isFavorite?'★':'☆'}</button></div>
          <h3 class="service-title">${safeTitle}</h3><p class="service-description">${escapeHTML(service.description)}</p>
          <div class="service-card-meta"><span class="meta-pill">${escapeHTML(service.category)}</span><span class="meta-pill">مدارک و راهنما</span></div>
          <div class="service-card-actions"><button class="button flip-button" type="button" data-action="flip" data-id="${service.id}">مدارک موردنیاز ↻</button><button class="button button-primary" type="button" data-action="request" data-id="${service.id}">ثبت درخواست ↗</button></div>
        </div>
        <div class="service-face service-back">
          <div class="back-heading"><span class="service-icon" aria-hidden="true">${iconSvg(service.id)}</span><h3>${safeTitle}</h3></div>
          <div class="docs-label">مدارک پیشنهادی برای شروع</div><ul class="documents-list">${docs}</ul>
          <div class="service-note">${escapeHTML(service.note)}</div>
          <div class="service-card-actions"><button class="button flip-button" type="button" data-action="flip" data-id="${service.id}">بازگشت به کارت ↻</button><button class="button button-primary" type="button" data-action="request" data-id="${service.id}">ثبت درخواست ↗</button></div>
        </div>
      </div>
    </article>`;
  }
  function renderServices() {
    const list = getFilteredServices();
    $('#servicesGrid').innerHTML = list.map(renderServiceCard).join('');
    $('#servicesGrid').hidden = list.length === 0;
    $('#emptyState').hidden = list.length !== 0;
    $('#resultsCount').textContent = `${list.length.toLocaleString('fa-IR')} خدمت از ${services.length.toLocaleString('fa-IR')} خدمت`;
    $('#favoriteCount').textContent = favorites.size.toLocaleString('fa-IR');
    $('#favoritesFilter').setAttribute('aria-pressed', String(state.favoritesOnly));
    $('#clearSearch').hidden = !state.query;
    $('#allCount').textContent = services.length.toLocaleString('fa-IR');
    $$('.category-chip').forEach(button => button.classList.toggle('is-active', button.dataset.category === state.category));
    $$('.category-chip').forEach(button => {
      if (button.dataset.category !== 'all') {
        const count = services.filter(s => s.category === button.dataset.category).length;
        const countEl = button.querySelector('.chip-count'); if (countEl) countEl.textContent = count.toLocaleString('fa-IR');
      }
    });
  }
  function renderCategories() {
    const counts = new Map(); services.forEach(s => counts.set(s.category, (counts.get(s.category)||0)+1));
    $('#categoryChips').innerHTML = `<button class="category-chip ${state.category==='all'?'is-active':''}" data-category="all">همه خدمات <span class="chip-count">${services.length.toLocaleString('fa-IR')}</span></button>` + categories.map(cat => `<button class="category-chip ${state.category===cat.name?'is-active':''}" data-category="${escapeHTML(cat.name)}">${escapeHTML(cat.name)} <span class="chip-count">${(counts.get(cat.name)||0).toLocaleString('fa-IR')}</span></button>`).join('');
    $('#categoryGrid').innerHTML = categories.map(cat => `<button type="button" class="category-tile" data-category-jump="${escapeHTML(cat.name)}"><span class="category-tile-icon" aria-hidden="true">${iconSvg(cat.name)}</span><span><strong>${escapeHTML(cat.name)}</strong><small>${escapeHTML(cat.description)} · ${(counts.get(cat.name)||0).toLocaleString('fa-IR')} خدمت</small></span></button>`).join('');
  }
  function selectCategory(category, shouldScroll=true) {
    state.category = category; state.favoritesOnly = false; renderCategories(); renderServices();
    if (shouldScroll) $('#services').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function openServiceDialog(service) {
    const docs = service.documents.map(doc => `<li>${escapeHTML(doc)}</li>`).join('');
    $('#dialogContent').innerHTML = `<div class="service-card-top"><span class="service-icon" aria-hidden="true">${iconSvg(service.id)}</span><span class="service-tag">${escapeHTML(service.category)}</span></div><h2 id="dialogTitle">${escapeHTML(service.title)}</h2><p>${escapeHTML(service.description)}</p><h3>مدارک پیشنهادی</h3><ul>${docs}</ul><p><strong>نکته:</strong> ${escapeHTML(service.note)} مدارک این صفحه راهنمای عمومی‌اند و فهرست قطعی باید با مرجع ارائه‌دهنده بررسی شود.</p><div class="dialog-actions"><button class="button button-primary" type="button" data-dialog-request="${service.id}">ثبت درخواست در ایتا ↗</button><button class="button button-secondary" type="button" data-dialog-copy="${service.id}">کپی متن درخواست</button></div>`;
    const dialog = $('#serviceDialog'); if (typeof dialog.showModal === 'function') dialog.showModal(); else showToast('برای جزئیات، کارت خدمت را برگردان.');
  }
  function setSlide(index) {
    const slides = $$('.slide'); if (!slides.length) return;
    state.slide = (index + slides.length) % slides.length;
    slides.forEach((slide,i) => { slide.classList.toggle('is-active',i===state.slide); slide.setAttribute('aria-hidden',String(i!==state.slide)); });
    $$('.slider-dot').forEach((dot,i) => { dot.classList.toggle('is-active',i===state.slide); dot.setAttribute('aria-current',i===state.slide?'true':'false'); });
  }
  function closeMobileMenu() { $('#mainNav').classList.remove('is-open'); $('#menuToggle').setAttribute('aria-expanded','false'); $('#menuToggle').setAttribute('aria-label','باز کردن منو'); }
  function init() {
    applyTheme(safeRead(STORAGE.theme, 'dark'));
    renderCategories(); renderServices();
    $('#themeToggle').addEventListener('click',toggleTheme);
    $('#requestDialogClose').addEventListener('click',() => $('#requestDialog').close());
    $('#copyRequestText').addEventListener('click', async () => {
      const field = $('#requestMessage'); field.focus(); field.select();
      const copied = await copyText(field.value);
      showToast(copied ? 'متن درخواست کپی شد؛ حالا آن را در ایتا ارسال کن.' : 'متن انتخاب شد؛ از گزینه کپی گوشی استفاده کن.');
    });
    $('#requestDialog').addEventListener('click', event => { if (event.target === $('#requestDialog')) $('#requestDialog').close(); });
    $('#footerThemeToggle').addEventListener('click',toggleTheme);
    $('#sliderThemeBtn').addEventListener('click',toggleTheme);
    $('#menuToggle').addEventListener('click',() => { const open = $('#mainNav').classList.toggle('is-open'); $('#menuToggle').setAttribute('aria-expanded',String(open)); $('#menuToggle').setAttribute('aria-label',open?'بستن منو':'باز کردن منو'); });
    $$('#mainNav a').forEach(link => link.addEventListener('click',closeMobileMenu));
    $('#serviceSearch').addEventListener('input',event => { state.query = event.target.value; renderServices(); });
    $('#clearSearch').addEventListener('click',() => { state.query=''; $('#serviceSearch').value=''; renderServices(); $('#serviceSearch').focus(); });
    $('#serviceSort').addEventListener('change',event => { state.sort=event.target.value; renderServices(); });
    $('#categoryChips').addEventListener('click',event => { const button=event.target.closest('[data-category]'); if(button) selectCategory(button.dataset.category,false); });
    $('#categoryGrid').addEventListener('click',event => { const button=event.target.closest('[data-category-jump]'); if(button) selectCategory(button.dataset.categoryJump); });
    $('#favoritesFilter').addEventListener('click',() => { state.favoritesOnly=!state.favoritesOnly; if(state.favoritesOnly) state.category='all'; renderCategories(); renderServices(); $('#services').scrollIntoView({behavior:'smooth',block:'start'}); });
    const reset = () => { state.category='all'; state.query=''; state.favoritesOnly=false; state.sort='default'; $('#serviceSearch').value=''; $('#serviceSort').value='default'; renderCategories(); renderServices(); };
    $('#resetFilters').addEventListener('click',reset); $('#emptyReset').addEventListener('click',reset);
    $('#servicesGrid').addEventListener('click',async event => {
      const button=event.target.closest('[data-action]'); if(!button) return;
      const service=services.find(s=>s.id===button.dataset.id); if(!service) return;
      if(button.dataset.action==='flip') { if(state.flipped.has(service.id)) state.flipped.delete(service.id); else state.flipped.add(service.id); renderServices(); }
      if(button.dataset.action==='favorite') { if(favorites.has(service.id)) favorites.delete(service.id); else favorites.add(service.id); safeWrite(STORAGE.favorites,[...favorites]); renderServices(); showToast(favorites.has(service.id)?'به علاقه‌مندی‌ها اضافه شد.':'از علاقه‌مندی‌ها حذف شد.'); }
      if(button.dataset.action==='request') startRequest(service);
      if(button.dataset.action==='details') openServiceDialog(service);
    });
    $('#serviceDialog').addEventListener('click',event => { if(event.target === $('#serviceDialog')) $('#serviceDialog').close(); });
    $('#dialogClose').addEventListener('click',() => $('#serviceDialog').close());
    $('#dialogContent').addEventListener('click',async event => { const request=event.target.closest('[data-dialog-request]'); const copy=event.target.closest('[data-dialog-copy]'); const id=(request||copy)?.dataset.dialogRequest || (request||copy)?.dataset.dialogCopy; const service=services.find(s=>s.id===id); if(!service) return; if(request) startRequest(service); if(copy) showToast(await copyText(requestText(service))?'متن درخواست کپی شد.':'کپی خودکار در این مرورگر در دسترس نیست.'); });
    $('#slidePrev').addEventListener('click',()=>setSlide(state.slide-1)); $('#slideNext').addEventListener('click',()=>setSlide(state.slide+1));
    $('#sliderDots').addEventListener('click',event => { const dot=event.target.closest('[data-slide]'); if(dot) setSlide(Number(dot.dataset.slide)); });
    let slideTouchStart=null; const slider=$('.slider');
    slider.addEventListener('touchstart',event=>{slideTouchStart=event.changedTouches[0].clientX;},{passive:true});
    slider.addEventListener('touchend',event=>{if(slideTouchStart===null)return;const delta=event.changedTouches[0].clientX-slideTouchStart;if(Math.abs(delta)>45)setSlide(state.slide+(delta>0?1:-1));slideTouchStart=null;},{passive:true});
    $('#backToTop').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
    window.addEventListener('scroll',()=>$('#backToTop').classList.toggle('is-visible',window.scrollY>500),{passive:true});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMobileMenu();}});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();
