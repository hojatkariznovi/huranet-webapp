(function () {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const iconPaths = {
    house:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1Z"/>','user-round':'<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',
    moon:'<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',x:'<path d="m18 6-12 12M6 6l12 12"/>', 'arrow-left':'<path d="M19 12H5m7 7-7-7 7-7"/>','arrow-up':'<path d="M12 19V5m-7 7 7-7 7 7"/>','chevron-left':'<path d="m15 18-6-6 6-6"/>','sparkles':'<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z"/>','map-pin':'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>','circle-play':'<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/>','file-check-2':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 14l2.5 2.5L16 11"/>','check-circle-2':'<circle cx="12" cy="12" r="10"/><path d="m8 12 2.5 2.5L16 9"/>','store':'<path d="M3 10h18l-2-7H5zM5 10v10h14V10M9 20v-6h6v6"/>','zap':'<path d="m13 2-3 8h7l-6 12 1-9H6l7-11Z"/>','files':'<path d="M15 2H6a2 2 0 0 0-2 2v14M8 6h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"/><path d="M10 11h6m-6 4h6"/>','car-front':'<path d="m5 17-1 3h3l1-2h8l1 2h3l-1-3M5 17l-2-2 2-7h14l2 7-2 2M5 17h14M7 12h.01M17 12h.01M7 8l2-4h6l2 4"/>','credit-card':'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20m-15 5h4"/>','layers-3':'<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>','search':'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>','search-x':'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4m-7-8 4 4m0-4-4 4"/>','info':'<circle cx="12" cy="12" r="10"/><path d="M12 11v5m0-9h.01"/>','route':'<circle cx="6" cy="19" r="2"/><path d="M8 19h5a3 3 0 0 0 3-3V8a3 3 0 0 1 3-3h-1"/><circle cx="18" cy="5" r="2"/>','clipboard-list':'<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4.5h6M9 10h6m-6 4h6m-6 4h3"/>','send':'<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>','heart-handshake':'<path d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11Z"/><path d="m7 13 2-1 3 2 3-2 2 1"/>','messages-square':'<path d="M21 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-3-.5L4 21l1.5-4A7.5 7.5 0 1 1 21 11.5Z"/><path d="M8 10h8m-8 4h5"/>','clipboard-check':'<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2h6v2m-6 9 2 2 4-4"/>','shield-check':'<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>','copy':'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>','share-2':'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.7 10.7 6.6-4.4m-6.6 7.4 6.6 4.4"/>','printer':'<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6zM18 12h.01"/>','landmark':'<path d="M3 10h18M5 10v9m4-9v9m6-9v9m4-9v9M3 21h18M12 3 2 8h20L12 3Z"/>','file-text':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8m-8 4h8"/>','car':'<path d="m5 11 2-6h10l2 6M3 11h18l1 7H2l1-7Z"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>','wallet':'<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 8h18m-5 5h5"/>','wrench':'<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 13l-3-3 3.7-3.7Z"/>','monitor':'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>','image':'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>','globe':'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/>','building-2':'<path d="M3 21h18M5 21V5l7-3 7 3v16M9 9h1m4 0h1M9 13h1m4 0h1M9 17h1m4 0h1"/>','badge-check':'<path d="M12 3 15 5l4-.2.2 4L21 12l-1.8 3.2-.2 4-4-.2L12 21l-3-2-4 .2-.2-4L3 12l1.8-3.2.2-4 4 .2 3-2Z"/><path d="m8.5 12 2.2 2.2 4.8-4.8"/>','package':'<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="M3 8v9l9 5 9-5V8M12 13v9"/>','phone':'<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.9L7.2 10a16 16 0 0 0 6 6l1.6-1.8a2 2 0 0 1 1.9-.6l2.8.5a2 2 0 0 1 1.7 2Z"/>','calendar-check':'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 9h18m-13 5 2 2 4-4"/>','receipt':'<path d="M4 2v20l4-2 4 2 4-2 4 2V2l-4 2-4-2-4 2-4-2Z"/><path d="M8 9h8m-8 4h8"/>','truck':'<path d="M3 6h12v12H3zM15 10h4l3 4v4h-7z"/><circle cx="7.5" cy="19" r="2"/><circle cx="18.5" cy="19" r="2"/>','wifi':'<path d="M5 12.5a11 11 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0M11 18.5a2 2 0 0 1 2 0"/><path d="M12 22h.01"/>','book-open':'<path d="M2 4h7a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-7a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h8z"/>','headphones':'<path d="M3 14v-3a9 9 0 0 1 18 0v3M3 14h4v7H5a2 2 0 0 1-2-2zM21 14h-4v7h2a2 2 0 0 0 2-2z"/>','smartphone':'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M11 18h2"/>','shopping-bag':'<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'
  };
  function icon(name){return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(iconPaths[name]||iconPaths.sparkles)+'</svg>';}
  let services = [
    {id:'online-admin',title:'خدمات اداری و اینترنتی',category:'admin',categoryName:'اداری و آنلاین',icon:'landmark',tag:'پرکاربرد',color:'#2563eb',bg:'#dbeafe',description:'راهنمایی و انجام خدمات اینترنتی و اداری بر اساس نوع درخواست.',docs:['کارت ملی یا اطلاعات هویتی متقاضی','شماره تلفن همراه در دسترس','اطلاعات و مدارک اختصاصی همان خدمت'],note:'مدارک دقیق به سامانه و نوع درخواست بستگی دارد.'},
    {id:'gov-services',title:'ثبت درخواست‌های سامانه‌ای',category:'admin',categoryName:'اداری و آنلاین',icon:'globe',tag:'آنلاین',color:'#0e7490',bg:'#cffafe',description:'کمک در ورود اطلاعات، بررسی مراحل و پیگیری درخواست‌های اینترنتی.',docs:['اطلاعات هویتی متقاضی','شماره همراه فعال و در دسترس','مدارک اعلام‌شده در سامانه مربوط'],note:'رمزهای یک‌بارمصرف را شخصاً وارد کنید و در اختیار دیگران نگذارید.'},
    {id:'printing',title:'چاپ، کپی و اسکن مدارک',category:'digital',categoryName:'دیجیتال و چاپ',icon:'printer',tag:'حضوری',color:'#7c3aed',bg:'#ede9fe',description:'آماده‌سازی نسخه چاپی، کپی یا فایل اسکن‌شده مدارک و برگه‌ها.',docs:['فایل قابل چاپ یا اصل مدرک','اعلام تعداد نسخه و اندازه کاغذ','برای اسکن: مشخص کردن قالب فایل دلخواه'],note:'کیفیت خروجی به کیفیت فایل یا اصل مدرک وابسته است.'},
    {id:'vehicle',title:'راهنمای خدمات خودرو',category:'vehicle',categoryName:'خودرو',icon:'car-front',tag:'خودرو',color:'#b45309',bg:'#fef3c7',description:'راهنمایی اولیه برای آماده‌سازی مدارک و مراحل خدمات خودرویی.',docs:['کارت ملی مالک یا نماینده قانونی','مدارک مالکیت و شناسایی خودرو','مدارک تکمیلی متناسب با نوع خدمت'],note:'این فهرست عمومی است؛ مدارک نهایی را مرجع مربوط تعیین می‌کند.'},
    {id:'plate-transfer',title:'راهنمای تعویض پلاک',category:'vehicle',categoryName:'خودرو',icon:'badge-check',tag:'مرحله‌به‌مرحله',color:'#047857',bg:'#d1fae5',description:'چک‌لیست اولیه مدارک و آمادگی پیش از مراجعه برای تعویض پلاک.',docs:['مدارک هویتی خریدار و فروشنده','مدارک مالکیت خودرو و کارت خودرو','مدارک احراز محل سکونت طبق مقررات','مدارک و نوبت موردنیاز مرکز مربوط'],note:'شرایط و مدارک ممکن است با مقررات روز تغییر کند.'},
    {id:'pos-sales',title:'فروش دستگاه کارتخوان',category:'business',categoryName:'کسب‌وکار',icon:'credit-card',tag:'ویژه کسب‌وکار',color:'#2563eb',bg:'#dbeafe',description:'مشاوره انتخاب کارتخوان نو یا کارکرده، سیم‌کارتی یا وای‌فای‌دار، متناسب با نیاز پذیرنده.',docs:['مدارک هویتی متقاضی','مدارک کسب‌وکار و حساب بانکی موردنیاز شرکت پرداخت','اطلاعات محل فعالیت و نوع استفاده'],note:'پذیرش و اتصال دستگاه به تأیید شرکت پرداخت و بانک وابسته است.'},
    {id:'pos-support',title:'پشتیبانی و تعمیر کارتخوان',category:'business',categoryName:'کسب‌وکار',icon:'wrench',tag:'پشتیبانی',color:'#0f766e',bg:'#ccfbf1',description:'ثبت درخواست بررسی ایرادهای نرم‌افزاری یا سخت‌افزاری دستگاه‌های کارتخوان.',docs:['مدل و شماره سریال دستگاه','شرح خطا یا مشکل مشاهده‌شده','اطلاعات تماس پذیرنده؛ اطلاعات محرمانه کارت لازم نیست'],note:'تعمیرپذیری و هزینه پس از بررسی دستگاه مشخص می‌شود.'},
    {id:'cashless',title:'دستگاه کش‌لس',category:'business',categoryName:'کسب‌وکار',icon:'wallet',tag:'ویژه فروشگاه',color:'#7c3aed',bg:'#ede9fe',description:'دریافت اطلاعات اولیه برای بررسی دستگاه‌های پرداخت و خدمات کش‌لس متناسب با محل فعالیت.',docs:['مدارک هویتی متقاضی','اطلاعات محل کسب‌وکار','نیازمندی‌ها و نوع خدمات موردنظر'],note:'امکان ارائه و شرایط فعال‌سازی باید پیش از خرید تأیید شود.'},
    {id:'business-digital',title:'خدمات دیجیتال کسب‌وکار',category:'business',categoryName:'کسب‌وکار',icon:'store',tag:'رشد کسب‌وکار',color:'#c2410c',bg:'#ffedd5',description:'کمک به معرفی آنلاین مغازه، تنظیم اطلاعات کسب‌وکار و آماده‌سازی محتوای معرفی خدمات.',docs:['نام و زمینه فعالیت کسب‌وکار','نشانی و راه‌های ارتباطی قابل انتشار','لوگو، تصاویر یا متن معرفی در صورت وجود'],note:'انتشار اطلاعات فقط با تأیید صاحب کسب‌وکار انجام شود.'},
    {id:'design-print',title:'طراحی و آماده‌سازی تبلیغات',category:'digital',categoryName:'دیجیتال و چاپ',icon:'image',tag:'محتوا',color:'#be185d',bg:'#fce7f3',description:'آماده‌سازی متن یا طرح اولیه برای تراکت، کارت تبلیغاتی و محتوای شبکه‌های اجتماعی.',docs:['نام و اطلاعات صحیح کسب‌وکار','متن و خدمات موردنظر','لوگو یا تصاویر مورد استفاده، در صورت وجود'],note:'چاپ نهایی، تیراژ و هزینه باید جداگانه هماهنگ شود.'},
    {id:'web-tools',title:'راه‌اندازی ابزارهای آنلاین',category:'digital',categoryName:'دیجیتال و چاپ',icon:'monitor',tag:'دیجیتال',color:'#0369a1',bg:'#e0f2fe',description:'مشاوره اولیه برای صفحه معرفی، فرم ثبت درخواست یا ابزار ساده آنلاین کسب‌وکار.',docs:['هدف و نوع ابزار موردنیاز','نام برند و اطلاعات تماس','متن، تصاویر و امکانات ضروری'],note:'دامنه، میزبانی یا سرویس‌های پولی ممکن است هزینه جداگانه داشته باشند.'},
    {id:'form-help',title:'تکمیل و آماده‌سازی فرم‌ها',category:'admin',categoryName:'اداری و آنلاین',icon:'file-text',tag:'مدارک',color:'#4f46e5',bg:'#e0e7ff',description:'مرتب‌سازی اطلاعات و راهنمایی برای تکمیل فرم‌ها و آماده‌سازی فایل‌های لازم.',docs:['فرم یا نشانی سامانه مربوط','اطلاعاتی که در فرم درخواست شده','مدارک پشتیبان موردنیاز همان فرم'],note:'اطلاعات را پیش از تأیید نهایی خودتان بررسی کنید.'},
    {id:'insurance-issue',title:'صدور بیمه‌نامه',category:'insurance',categoryName:'بیمه',icon:'shield-check',tag:'بیمه',color:'#0f766e',bg:'#ccfbf1',description:'ثبت درخواست برای بررسی شرایط و صدور بیمه‌نامه متناسب با نیاز شما.',docs:['کارت ملی و اطلاعات تماس','مشخصات بیمه‌گذار و مورد بیمه','مدارک اختصاصی نوع بیمه'],note:'صدور نهایی و نرخ بیمه پس از بررسی شرکت بیمه و شرایط بیمه‌نامه مشخص می‌شود.'},
    {id:'insurance-renew',title:'تمدید بیمه‌نامه',category:'insurance',categoryName:'بیمه',icon:'calendar-check',tag:'تمدید',color:'#0369a1',bg:'#e0f2fe',description:'پیگیری اولیه برای تمدید بیمه‌نامه و بررسی مدارک و زمان اعتبار.',docs:['تصویر بیمه‌نامه قبلی','کد ملی و شماره تماس','اطلاعات به‌روز مورد بیمه'],note:'شرایط تمدید، تخفیف‌ها و نرخ نهایی باید از شرکت بیمه استعلام شود.'},
    {id:'insurance-thirdparty',title:'بیمه شخص ثالث خودرو',category:'insurance',categoryName:'بیمه',icon:'car-front',tag:'خودرو',color:'#b45309',bg:'#fef3c7',description:'درخواست استعلام و صدور یا تمدید بیمه شخص ثالث خودرو.',docs:['کارت خودرو یا برگ سبز','کد ملی مالک','بیمه‌نامه قبلی در صورت وجود'],note:'تعرفه و شرایط نهایی براساس مشخصات خودرو و مقررات جاری محاسبه می‌شود.'},
    {id:'insurance-body',title:'بیمه بدنه خودرو',category:'insurance',categoryName:'بیمه',icon:'car',tag:'خودرو',color:'#7c3aed',bg:'#ede9fe',description:'بررسی پوشش‌های بیمه بدنه و دریافت استعلام متناسب با خودرو.',docs:['مشخصات خودرو و مالک','تصاویر یا بازدید خودرو در صورت نیاز','بیمه‌نامه قبلی در صورت وجود'],note:'پوشش‌ها، فرانشیز و نیاز به بازدید پس از بررسی مشخص می‌شود.'},
    {id:'insurance-life',title:'بیمه عمر و زندگی',category:'insurance',categoryName:'بیمه',icon:'heart-handshake',tag:'زندگی',color:'#be185d',bg:'#fce7f3',description:'آشنایی اولیه با گزینه‌های بیمه عمر و ثبت درخواست مشاوره.',docs:['سن و اطلاعات تماس متقاضی','هدف و مدت موردنظر','اطلاعات تکمیلی که شرکت بیمه درخواست کند'],note:'مزایا و شرایط بیمه‌نامه باید در پیشنهاد رسمی شرکت بیمه بررسی شود.'},
    {id:'insurance-home',title:'بیمه آتش‌سوزی و منزل',category:'insurance',categoryName:'بیمه',icon:'building-2',tag:'اموال',color:'#c2410c',bg:'#ffedd5',description:'درخواست بررسی پوشش‌های آتش‌سوزی و حوادث ساختمان و اثاثیه.',docs:['نشانی و مشخصات ملک','نوع کاربری و متراژ تقریبی','ارزش تقریبی ساختمان یا اثاثیه'],note:'محدوده پوشش و سرمایه بیمه‌شده در بیمه‌نامه نهایی تعیین می‌شود.'},
    {id:'insurance-travel',title:'بیمه مسافرتی',category:'insurance',categoryName:'بیمه',icon:'globe',tag:'سفر',color:'#0891b2',bg:'#cffafe',description:'استعلام بیمه مسافرتی براساس مقصد، مدت سفر و شرایط مسافر.',docs:['اطلاعات هویتی مسافران','کشور مقصد و تاریخ سفر','سن مسافران و مدت اقامت'],note:'پوشش و پذیرش بیمه به مقصد و شرایط شرکت بیمه بستگی دارد.'},
    {id:'insurance-business',title:'بیمه مسئولیت و کسب‌وکار',category:'insurance',categoryName:'بیمه',icon:'store',tag:'کسب‌وکار',color:'#047857',bg:'#d1fae5',description:'ثبت درخواست بررسی بیمه‌های مسئولیت و پوشش‌های مرتبط با محل کسب‌وکار.',docs:['نوع فعالیت و نشانی محل','تعداد کارکنان یا مراجعه‌کنندگان در صورت ارتباط','شرح پوشش موردنیاز'],note:'نوع بیمه مناسب پس از بررسی فعالیت و ریسک‌های مربوط مشخص می‌شود.'},
    {id:'sim-lines',title:'فروش سیم‌کارت و خط رند',category:'shop',categoryName:'فروشگاه هورا',icon:'phone',tag:'فروش',color:'#4f46e5',bg:'#e0e7ff',description:'برای موجودی، اپراتور، شماره‌های رند و قیمت روز استعلام بگیرید.',docs:['اپراتور یا پیش‌شماره موردنظر','بودجه تقریبی و نوع خط','شرایط انتقال مالکیت را پیش از خرید بررسی کنید'],note:'موجودی و قیمت خطوط متغیر است؛ پیش از پرداخت از هورا استعلام بگیرید.'}
  ];
  let activeCategory = 'all';
  const grid = $('#services-grid');
  const searchInput = $('#service-search');
  const status = $('#app-status');
  let toastTimer;

  function renderIcons(root=document){ $$('[data-icon]',root).forEach(el=>{const name=el.getAttribute('data-icon');el.innerHTML=icon(name);}); }
  function safeText(value){return String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function serviceCard(s){
    const docs=s.docs.map(d=>'<li>'+safeText(d)+'</li>').join('');
    return '<article class="service-card" data-id="'+s.id+'" style="--icon-bg:'+s.bg+';--icon-color:'+s.color+';--card-glow:'+s.bg+'"><div class="service-card-inner"><div class="service-face service-front"><div class="service-card-top"><span class="service-icon">'+icon(s.icon)+'</span><span class="service-tag">'+safeText(s.tag)+'</span></div><h3>'+safeText(s.title)+'</h3><p>'+safeText(s.description)+'</p><div class="service-meta">'+icon('layers-3')+'<span>'+safeText(s.categoryName)+'</span></div><div class="service-card-actions"><button class="btn details-btn" type="button" data-action="flip" data-id="'+s.id+'">'+icon('file-text')+' مدارک لازم</button><button class="btn btn-primary" type="button" data-action="request" data-id="'+s.id+'">ثبت درخواست '+icon('arrow-left')+'</button></div></div><div class="service-face service-back"><h3>'+safeText(s.title)+'</h3><p class="back-subtitle">چک‌لیست اولیه پیش از ثبت درخواست</p><div class="docs-title">'+icon('clipboard-check')+' مدارک و اطلاعات موردنیاز</div><ul class="docs-list">'+docs+'</ul><div class="docs-disclaimer">'+safeText(s.note)+'</div><div class="service-card-actions"><button class="btn details-btn" type="button" data-action="flip" data-id="'+s.id+'">'+icon('arrow-left')+' بازگشت</button><button class="btn btn-primary" type="button" data-action="request" data-id="'+s.id+'">ثبت درخواست '+icon('arrow-left')+'</button></div></div></div></article>';
  }
  function updateServices(){
    const query=(searchInput.value||'').trim().toLocaleLowerCase('fa');
    const shown=services.filter(s=>s.category!=='shop'&&(activeCategory==='all'||s.category===activeCategory)&&(!query||(s.title+' '+s.description+' '+s.categoryName+' '+s.tag+' '+s.docs.join(' ')).toLocaleLowerCase('fa').includes(query)));
    grid.innerHTML=shown.map(serviceCard).join('');
    $('#visible-count').textContent=shown.length.toLocaleString('fa-IR');
    $('#empty-state').hidden=shown.length!==0; grid.hidden=shown.length===0;
    renderIcons(grid);
  }
  function setStatus(message,type){status.textContent=message;status.className='app-status'+(type?' '+type:'');}
  function toggleTheme(){const dark=document.body.classList.toggle('dark');try{localStorage.setItem('hura-theme',dark?'dark':'light');}catch(e){}$('#theme-toggle').innerHTML=icon(dark?'sun':'moon');$('#theme-toggle').setAttribute('aria-label',dark?'فعال‌کردن پوسته روشن':'فعال‌کردن پوسته تیره');}
  function initTheme(){let saved='';try{saved=localStorage.getItem('hura-theme')||'';}catch(e){}if(saved==='dark')document.body.classList.add('dark');$('#theme-toggle').innerHTML=icon(document.body.classList.contains('dark')?'sun':'moon');}
  function initPromoSlider(){
    const host=$('#promo-slider');
    if(!host)return;
    let current=0,timer=null;
    const show=(index)=>{
      const slides=$$('.promo-slide',host),dots=$$('.promo-dot',host);
      if(!slides.length)return;
      current=(index+slides.length)%slides.length;
      slides.forEach((slide,i)=>slide.classList.toggle('active',i===current));
      dots.forEach((dot,i)=>dot.classList.toggle('active',i===current));
    };
    const restart=()=>{if(timer)clearInterval(timer);timer=setInterval(()=>show(current+1),5000);};
    host.addEventListener('click',e=>{
      const prev=e.target.closest('#promo-prev'),next=e.target.closest('#promo-next'),dot=e.target.closest('.promo-dot');
      if(prev){show(current-1);restart();}
      else if(next){show(current+1);restart();}
      else if(dot){show(Number(dot.dataset.slideTo)||0);restart();}
    });
    restart();
  }
  let currentView = 'home';
  let previousView = 'home';
  let selectedStoreCategory = 'all';
  const viewIds = ['home','services','store','how','about'];
  const categoryNames = {all:'همه خدمات',admin:'اداری و آنلاین',vehicle:'خودرو',business:'کسب‌وکار',digital:'دیجیتال و چاپ',insurance:'بیمه'};
  function setActiveSection(id){
    const serviceActive=id==='services'; const storeActive=id==='store';
    $('#bottom-services').classList.toggle('active',serviceActive);
    $('#bottom-store').classList.toggle('active',storeActive);
    $$('.section-switch-btn').forEach(link=>link.classList.toggle('active',link.getAttribute('href')===(storeActive?'#store':'#services')));
  }
  function setView(id, options={}){
    if(!viewIds.includes(id)) id='home';
    currentView=id;
    $$('[data-view]').forEach(panel=>{panel.hidden=panel.dataset.view!==id;});
    $$('.nav-link[data-view-nav]').forEach(link=>link.classList.toggle('active',link.dataset.viewNav===id));
    setActiveSection(id);
    $('#promo-slider')?.classList.remove('slider-hidden');
    $('#request-page').hidden=true; $('#purchase-page').hidden=true;
    document.querySelector('.site-footer').hidden=false;
    document.body.classList.remove('request-page-open');
    if(options.hash!==false) history.replaceState({huraView:id},'', '#'+id);
    if(options.scroll!==false) window.scrollTo({top:0,behavior:options.smooth?'smooth':'auto'});
  }
  function applyServiceCategory(category){
    activeCategory=categoryNames[category] ? category : 'all';
    $$('.filter-chip').forEach(b=>b.classList.toggle('active',b.dataset.category===activeCategory));
    const title=$('#services-heading'); const subtitle=$('#services-subheading');
    if(title) title.textContent=activeCategory==='all'?'چه کاری از دست هورا برمیاد؟':'خدمات '+categoryNames[activeCategory];
    if(subtitle) subtitle.textContent=activeCategory==='all'?'خدمت موردنظرت را جست‌وجو کن یا از دسته‌بندی‌ها شروع کن.':'خدمات مرتبط با دسته «'+categoryNames[activeCategory]+'» را اینجا می‌بینی.';
    updateServices();
  }
  function filterStore(category){
    selectedStoreCategory=category||'all';
    $$('.store-category-chip').forEach(b=>b.classList.toggle('active',b.dataset.storeCategory===selectedStoreCategory));
    $$('#store .store-card').forEach(card=>{card.hidden=selectedStoreCategory!=='all'&&card.dataset.productCategory!==selectedStoreCategory;});
  }
  function showRequestPage(label){
    previousView=currentView;
    $('#request-page-service').textContent=label ? 'برای «'+label+'» از طریق پیام خصوصی با هورا در ارتباط باش.' : 'خدمت موردنظر را از طریق پیام خصوصی برای ما بفرست.';
    $$('[data-view]').forEach(panel=>panel.hidden=true);
    $('#promo-slider').classList.add('slider-hidden');
    document.querySelector('.site-footer').hidden=true;
    $('#purchase-page').hidden=true; $('#request-page').hidden=false;
    document.body.classList.add('request-page-open');
    window.scrollTo(0,0); history.replaceState({huraSubpage:'request'},'', '#send-request');
  }
  function showPurchasePage(product,price,specs){
    previousView=currentView==='store'?'store':currentView;
    $('#purchase-page-product').textContent='برای استعلام موجودی و خرید «'+product+'» از پیام‌رسان دلخواهت با هورا در ارتباط باش.';
    const details=$('#purchase-page-details');
    details.innerHTML='<strong>'+safeText(product)+'</strong><span>'+safeText(price||'قیمت نهایی نیازمند استعلام است')+'</span><p>'+safeText(specs||'مشخصات و موجودی هنگام استعلام تأیید می‌شود.')+'</p>';
    details.hidden=false;
    $$('[data-view]').forEach(panel=>panel.hidden=true);
    $('#promo-slider').classList.add('slider-hidden');
    document.querySelector('.site-footer').hidden=true; $('#request-page').hidden=true; $('#purchase-page').hidden=false;
    document.body.classList.add('request-page-open'); window.scrollTo(0,0); history.replaceState({huraSubpage:'purchase'},'', '#purchase');
  }
  function restorePreviousView(){setView(previousView,{hash:true,scroll:true});}
  function initSectionNavigation(){
    document.addEventListener('click',e=>{
      const categoryLink=e.target.closest('[data-service-category]');
      if(categoryLink){e.preventDefault();const cat=categoryLink.dataset.serviceCategory;setView('services');applyServiceCategory(cat);return;}
      const nav=e.target.closest('[data-view-nav]');
      if(nav){e.preventDefault();setView(nav.dataset.viewNav);return;}
      const link=e.target.closest('a[href^="#"]');
      if(!link)return;
      const id=link.getAttribute('href').slice(1);
      if(viewIds.includes(id)){e.preventDefault();setView(id);return;}
    });
    $('#bottom-services').addEventListener('click',e=>{e.preventDefault();setView('services');});
    $('#bottom-store').addEventListener('click',e=>{e.preventDefault();setView('store');});
    $('#category-filters').addEventListener('click',e=>{const btn=e.target.closest('[data-category]');if(btn)applyServiceCategory(btn.dataset.category);});
    $('#store-category-filters').addEventListener('click',e=>{const btn=e.target.closest('[data-store-category]');if(btn)filterStore(btn.dataset.storeCategory);});
    setView('home',{hash:false,scroll:false}); filterStore('all');
  }
  const HURA_SUPABASE_URL = 'https://niilwmvjvttxtngdgepa.supabase.co';
  const HURA_SUPABASE_KEY = 'sb_publishable_3Umb3Nca87j52DRQGgql2Q_GzPLRb0f';
  let huraDb = null;
  let remoteStoreProducts = false;
  const HURA_SUPABASE_URL = 'https://niilwmvjvttxtngdgepa.supabase.co';
  const HURA_SUPABASE_KEY = 'sb_publishable_3Umb3Nca87j52DRQGgql2Q_GzPLRb0f';
  let huraDb = null;
  let remoteStoreProducts = false;
  const palette = [
    {color:'#2563eb',bg:'#dbeafe'}, {color:'#0e7490',bg:'#cffafe'},
    {color:'#7c3aed',bg:'#ede9fe'}, {color:'#047857',bg:'#d1fae5'},
    {color:'#b45309',bg:'#fef3c7'}, {color:'#be185d',bg:'#fce7f3'}
  ];
  function normalizedSlug(value){return String(value||'').trim().toLowerCase().replace(/\s+/g,'-');}
  function categoryForSlug(slug){
    const aliases={admin:'admin','اداری':'admin','اداری-و-آنلاین':'admin',vehicle:'vehicle','خودرو':'vehicle',business:'business','کسب-و-کار':'business',digital:'digital','دیجیتال-و-چاپ':'digital',insurance:'insurance','بیمه':'insurance',shop:'shop'};
    return aliases[normalizedSlug(slug)] || normalizedSlug(slug) || 'all';
  }
  function faPrice(value){
    if(value===null||value===undefined||value==='')return '';
    const n=Number(value);
    return Number.isFinite(n) ? n.toLocaleString('fa-IR')+' تومان' : String(value);
  }
  function specsText(value){
    if(Array.isArray(value))return value.join('، ');
    if(value&&typeof value==='object'){
      if(Array.isArray(value.items))return value.items.join('، ');
      return Object.entries(value).map(([k,v])=>k+': '+v).join('، ');
    }
    return String(value||'');
  }
  async function getRows(table){
    const {data,error}=await huraDb.from(table).select('*').order('sort_order',{ascending:true});
    if(error)throw error;
    return data||[];
  }
  function renderRemoteServiceCategories(list){
    const host=$('#category-filters');
    if(!host||!list.length)return;
    const existing=host.querySelector('[data-category="all"]');
    host.innerHTML='';
    const all=document.createElement('button');all.type='button';all.className='filter-chip active';all.dataset.category='all';all.textContent='همه خدمات';host.appendChild(all);
    list.filter(c=>c.is_active!==false).forEach(c=>{
      const slug=categoryForSlug(c.slug||c.name);
      if(slug==='shop')return;
      const b=document.createElement('button');b.type='button';b.className='filter-chip';b.dataset.category=slug;b.textContent=c.name||slug;host.appendChild(b);
    });
  }
  function renderRemoteServices(records,categoriesList){
    if(!records.length)return false;
    const categoryById=new Map(categoriesList.map(c=>[String(c.id),c]));
    const mapped=records.filter(r=>r.is_active!==false).map((r,i)=>{
      const cat=categoryById.get(String(r.category_id));
      const slug=categoryForSlug(cat?.slug||cat?.name||'admin');
      const p=palette[i%palette.length];
      return {
        id:String(r.id),title:r.name||r.title||'خدمت بدون نام',category:slug,categoryName:cat?.name||'خدمات هورا',
        icon:r.icon||'sparkles',tag:r.tag||'خدمت هورا',color:r.color||p.color,bg:r.bg||p.bg,
        description:r.description||'برای دریافت جزئیات این خدمت با هورا ارتباط بگیر.',
        docs:Array.isArray(r.docs)&&r.docs.length?r.docs:['مدارک و اطلاعات موردنیاز را هنگام ثبت درخواست از هورا بپرسید.'],
        note:r.note||'مدارک نهایی به نوع درخواست و شرایط مرجع مربوط بستگی دارد.'
      };
    });
    if(!mapped.length)return false;
    services=mapped;
    renderRemoteServiceCategories(categoriesList);
    updateServices();
    return true;
  }
  function renderRemoteProductCategories(list){
    const host=$('#store-category-filters');
    if(!host||!list.length)return;
    host.innerHTML='';
    const all=document.createElement('button');all.type='button';all.className='store-category-chip active';all.dataset.storeCategory='all';all.textContent='همه محصولات';host.appendChild(all);
    list.filter(c=>c.is_active!==false).forEach(c=>{
      const b=document.createElement('button');b.type='button';b.className='store-category-chip';b.dataset.storeCategory=normalizedSlug(c.slug||c.name);b.textContent=c.name||c.slug||'دسته‌بندی';host.appendChild(b);
    });
  }
  function renderRemoteProducts(records,categoriesList){
    const host=$('#store .store-grid');
    if(!host||!records.length)return false;
    const categoryById=new Map(categoriesList.map(c=>[String(c.id),c]));
    const active=records.filter(r=>r.is_active!==false);
    if(!active.length)return false;
    host.innerHTML=active.map((p,i)=>{
      const cat=categoryById.get(String(p.category_id));
      const slug=normalizedSlug(cat?.slug||cat?.name||'other');
      const name=p.name||'محصول بدون نام';
      const description=p.description||'';
      const specs=specsText(p.specifications);
      const price=p.price_label||faPrice(p.price)||'برای قیمت تماس بگیرید';
      const badge=p.is_available===false?'ناموجود':'استعلام موجودی';
      const iconName=/sim|line|سیم/i.test(slug+' '+name)?'phone':/modem|مودم|wifi/i.test(slug+' '+name)?'wifi':/pos|کارتخوان|cashless|کش.?لس/i.test(slug+' '+name)?'credit-card':'package';
      const iconClass=['product-blue','product-purple','product-green','product-orange'][i%4];
      const image=p.image_url?'<div class="store-product-image"><img src="'+safeText(p.image_url)+'" alt="'+safeText(name)+'" loading="lazy" onerror="this.parentElement.hidden=true"></div>':'';
      return '<article class="store-card" data-product-category="'+safeText(slug)+'">'+image+'<div class="store-product-icon '+iconClass+'"><span data-icon="'+iconName+'"></span></div><span class="store-badge">'+safeText(badge)+'</span><h3>'+safeText(name)+'</h3><p>'+safeText(description)+'</p>'+(specs?'<div class="store-specs"><span>'+safeText(specs)+'</span></div>':'')+'<div class="store-price">'+safeText(price)+(p.price_label?'<small>قیمت/وضعیت ثبت‌شده در هورا</small>':'')+'</div><button class="btn btn-primary btn-full" type="button" data-product="'+safeText(name)+'" data-price="'+safeText(price)+'" data-specs="'+safeText(specs||description)+'">استعلام و خرید <span data-icon="arrow-left"></span></button></article>';
    }).join('');
    renderIcons(host);
    remoteStoreProducts=true;
    renderRemoteProductCategories(categoriesList);
    filterStore('all');
    return true;
  }
  function renderRemoteBanners(records){
    const active=records.filter(b=>b.is_active!==false && (b.title||b.description||b.image_url));
    if(!active.length)return false;
    const slidesHost=$('#promo-slides'),dotsHost=$('#promo-dots');
    if(!slidesHost||!dotsHost)return false;
    slidesHost.innerHTML=active.map((b,i)=>{
      const href=b.button_url||'#services';
      const buttonText=b.button_text||'مشاهده بیشتر';
      const bg=b.image_url?' style="background-image:linear-gradient(90deg,rgba(7,18,38,.78),rgba(7,18,38,.2)),url(\''+safeText(b.image_url)+'\');background-size:cover;background-position:center"':'';
      return '<article class="promo-slide '+(i===0?'active':'')+'" data-slide="'+i+'"'+bg+'><div class="promo-slide-icon"><span data-icon="sparkles"></span></div><div class="promo-slide-copy"><small>هورا</small><strong>'+safeText(b.title||'پیشنهاد هورا')+'</strong><span>'+safeText(b.description||'برای دریافت اطلاعات بیشتر وارد بخش مربوط شو.')+'</span></div><a class="promo-slide-link" href="'+safeText(href)+'"'+(/^https?:\/\//i.test(href)?' target="_blank" rel="noopener noreferrer"':'')+'>'+safeText(buttonText)+' <span data-icon="arrow-left"></span></a></article>';
    }).join('');
    dotsHost.innerHTML=active.map((b,i)=>'<button class="promo-dot '+(i===0?'active':'')+'" type="button" data-slide-to="'+i+'" aria-label="اسلاید '+(i+1)+'"></button>').join('');
    renderIcons(slidesHost);
    return true;
  }
  function applySiteContent(rows){
    if(!Array.isArray(rows))return;
    rows.forEach(row=>{
      const key=String(row.content_key||'');
      if(row.content_value===null || row.content_value===undefined)return;
      if(key.startsWith('href_')){
        const link=document.getElementById(key.slice(5));
        if(link)link.setAttribute('href',String(row.content_value));
        return;
      }
      if(!key.startsWith('cms_'))return;
      const target=document.getElementById(key);
      if(target)target.textContent=String(row.content_value);
    });
  }
  async function loadHuraContent(){
    if(!window.supabase?.createClient){setStatus('سایت آماده است؛ کتابخانه اتصال بارگذاری نشد.','error');return;}
    huraDb=window.supabase.createClient(HURA_SUPABASE_URL,HURA_SUPABASE_KEY);
    const results=await Promise.allSettled([
      getRows('service_categories'),getRows('services'),getRows('product_categories'),getRows('products'),getRows('banners'),
      huraDb.from('site_content').select('content_key,content_value')
    ]);
    const failed=results.filter(r=>r.status==='rejected');
    const val=i=>results[i].status==='fulfilled'?(results[i].value?.data ?? results[i].value):[];
    const serviceCats=val(0),serviceRows=val(1),productCats=val(2),productRows=val(3),bannerRows=val(4),siteContent=val(5);
    applySiteContent(siteContent);
    const changed=[];
    if(renderRemoteServices(serviceRows,serviceCats))changed.push('خدمات');
    if(renderRemoteProducts(productRows,productCats))changed.push('محصولات');
    if(renderRemoteBanners(bannerRows))changed.push('بنرها');
    if(failed.length){
      console.warn('Supabase read issue:',results.filter(r=>r.status==='rejected').map(r=>r.reason));
      setStatus(changed.length?'بخش '+changed.join('، ')+' از پایگاه داده بارگذاری شد؛ دسترسی بعضی جدول‌ها بررسی شود.':'سایت با اطلاعات پیش‌فرض نمایش داده می‌شود؛ دسترسی خواندن Supabase را بررسی کنید.','error');
    } else {
      setStatus(changed.length?'اطلاعات '+changed.join('، ')+' از پنل مدیریت بارگذاری شد.':'اتصال برقرار است؛ برای نمایش اطلاعات جدید، موارد را در پنل مدیریت فعال کنید.','success');
    }
    }
  function init(){
    renderIcons(); initTheme(); initPromoSlider(); initSectionNavigation(); $('#current-year').textContent=new Date().getFullYear().toLocaleString('fa-IR'); updateServices();
    $('#theme-toggle').addEventListener('click',toggleTheme);
    searchInput.addEventListener('input',updateServices);
    $('#reset-search').addEventListener('click',()=>{searchInput.value='';applyServiceCategory('all');});
    grid.addEventListener('click',e=>{const btn=e.target.closest('button[data-action]');if(!btn)return;const card=btn.closest('.service-card');if(btn.dataset.action==='flip'){if(card)card.classList.toggle('is-flipped');}else if(btn.dataset.action==='request'){const service=services.find(s=>s.id===btn.dataset.id);showRequestPage(service?service.title:'خدمات هورا');}});
    $('#store').addEventListener('click',e=>{const btn=e.target.closest('button[data-product]');if(btn)showPurchasePage(btn.dataset.product,btn.dataset.price,btn.dataset.specs);});
    $('#request-page-back').addEventListener('click',restorePreviousView);
    $('#purchase-page-back').addEventListener('click',()=>setView('store'));
    // Platform links are direct profile links; no form or fake submission is used.
    setStatus('هورا آماده است؛ در حال دریافت اطلاعات سایت…','success');
    loadHuraContent().catch(error=>{console.error('Hura Supabase sync failed:',error);setStatus('سایت با اطلاعات پیش‌فرض نمایش داده می‌شود؛ اتصال پایگاه داده بررسی شود.','error');});
  }
  try{if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();}
  catch(error){console.error('Hura initialization failed:',error);setStatus('خطا در اجرای اسکریپت؛ فایل app.js را بررسی کنید','error');}
})();
