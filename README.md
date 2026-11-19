# منصة إسأل — صفحة الصيانة والتحديث (`itqan-maintenance`)

صفحة صيانة وتطوير ثابتة (**Static HTML / CSS / JS**) بدون الحاجة إلى بايثون أو قاعدة بيانات — جاهزة للاستضافة المباشرة على **GitHub Pages** أو **Cloudflare Pages** أو **Vercel** أو **Netlify**.

## هيكل الملفات
```text
itqan-maintenance/
├── index.html
├── 404.html
├── .nojekyll
├── README.md
└── assets/
    ├── css/
    │   └── updateapp.css
    ├── js/
    │   ├── lottie.min.js
    │   └── updateapp.js
    ├── animations/
    │   ├── dev_animation.json
    │   └── server_animation.json
    └── images/
        ├── icon.jpg
        ├── icon.png
        └── favicon.ico
```

## النشر على GitHub Pages
1. ارفع محتويات هذا المجلد كاملة إلى مستودع GitHub مع الحفاظ على مجلد `assets/`.
2. من **Settings -> Pages** اختر فرع `main` والمجلد `/ (root)` ثم اضغط **Save**.
