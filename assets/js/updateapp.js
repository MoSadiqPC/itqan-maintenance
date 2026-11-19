/**
 * ==========================================================================
 * 🛠️ updateapp.js - ملف الجافاسكربت المنفصل لوضع الصيانة والتطوير
 * يحتوي على منطق الترجمة (AR/EN)، نظام الثيم (Dark/Light)، ولعبة الحية المتطورة
 * منصة إِسْـأَلْ الأكاديمية (itqan.tech)
 * ==========================================================================
 */

// ==========================================
// 🌐 1. نظام الترجمة واللغات (AR / EN)
// ==========================================
const translations = {
    ar: {
        status_badge: "جاري تحديث وتطوير أنظمة المنصة اللحظية...",
        hero_title: "نأسف لإزعاجكم، <span>نعمل لخدمتكم</span>",
        hero_subtitle: "الموقع قيد التطوير والترقية في الوقت الحالي لتقديم تجربة أكاديمية متفوقة وسريعة، وسيعمل قريباً جداً بكامل طاقته.",
        task1_title: "ترقية خوادم الفحص",
        task1_desc: "مضاعفة سرعة استخراج وفحص نسب الاستلال وتوليد تقارير Turnitin.",
        task2_title: "تحديث محركات الذكاء الاصطناعي",
        task2_desc: "رفع دقة كاشف AI Detector والأدوات الأكاديمية والترجمة المزدوجة.",
        task3_title: "تعزيز الأمان والحماية",
        task3_desc: "تشفير متقدم لقواعد البيانات وضمان حماية أبحاث الباحثين والطلبة 100%.",
        game_title: "لعبة الحية التفاعلية",
        game_desc: "تسلى باللعب بينما يكتمل تحديث المنصة!",
        game_ready: "جاهز للتحدي؟",
        game_instr: "استخدم الأسهم أو لوحة التحكم لتوجيه الحية وجمع الطاقة دون الاصطدام بالجدران.",
        game_start_btn: "ابدأ اللعب الآن",
        game_over: "انتهت اللعبة!",
        game_restart_btn: "العب مرة أخرى",
        game_pause: "إيقاف مؤقت",
        game_resume: "استئناف اللعب",
        game_reset: "إعادة الضبط",
        speed_label: "مستوى السرعة:",
        speed_slow: "بطيء",
        speed_normal: "عادي",
        speed_fast: "سريع",
        speed_insane: "صاروخي",
        arcade_launcher_txt: "تسلَّ باللعب أثناء انتظار اكتمال التحديث",
        arcade_open_tag: "فتح اللعبة 🕹️",
        arcade_close_btn: "إغلاق اللعبة",
        arcade_expand_btn: "تكبير ساحة اللعبة (وضع الشاشة الكاملة)",
        arcade_collapse_btn: "تصغير ساحة اللعبة (الوضع العادي)",
        touch_hint: "اسحب بإصبعك على الشاشة (Swipe) في الموبايل أو استخدم الأسهم في الحاسبة",
        dev_scene_badge: "برمجة وبناء المنصة الأكاديمية",
        server_scene_badge: "صيانة وتحديث السيرفرات المركزية",
        lab_badge_txt: "أعمال صيانة وترقية حية للسيرفرات المركزية",
        lab_title_txt: "غرفة السيرفرات المركزية <span>أعمال صيانة ولحام وبرمجة جارية</span>",
        lab_desc_txt: "مهندسونا ومحركات الذكاء الاصطناعي يعملون حالياً على لحام كوابل الفايبر وترقية المعالجات لضمان أقصى سرعة وأمان.",
        support_telegram_txt: "Telegram الدعم الفني",
        support_email_txt: "البريد الرسمي",
        footer_copy: "جميع الحقوق محفوظة © 2026 منصة إسأل — مختبر إسأل التكنولوجي (itqan.tech)",
        lang_btn: "English"
    },
    en: {
        status_badge: "Systems update and platform upgrade in progress...",
        hero_title: "We Apologize for Inconvenience, <span>Working to Serve You</span>",
        hero_subtitle: "The platform is currently undergoing development and updates to deliver a faster and superior academic experience. We will be back online shortly!",
        task1_title: "Plagiarism Engines Upgrade",
        task1_desc: "Boosting scanning speed and instant generation of official Turnitin reports.",
        task2_title: "AI Detection Engine Update",
        task2_desc: "Enhancing AI Detector accuracy, smart paraphrasing, and dual lecture translator.",
        task3_title: "Security & Encryption Hardening",
        task3_desc: "Advanced encryption protocols to ensure 100% researcher document confidentiality.",
        game_title: "Interactive Snake Arcade",
        game_desc: "Enjoy playing while we finish upgrading the platform!",
        game_ready: "Ready for the Challenge?",
        game_instr: "Use arrow keys or touch controls to guide the snake and collect energy crystals!",
        game_start_btn: "Play Now",
        game_over: "Game Over!",
        game_restart_btn: "Play Again",
        game_pause: "Pause",
        game_resume: "Resume",
        game_reset: "Reset",
        speed_label: "Speed Level:",
        speed_slow: "Slow",
        speed_normal: "Normal",
        speed_fast: "Fast",
        speed_insane: "Insane",
        arcade_launcher_txt: "Play Snake Arcade While Waiting",
        arcade_open_tag: "Play Game 🕹️",
        arcade_close_btn: "Close Game",
        arcade_expand_btn: "Expand Arcade (Theater Mode)",
        arcade_collapse_btn: "Collapse Arcade (Normal Mode)",
        touch_hint: "Swipe on the screen on mobile or use arrow keys on PC",
        dev_scene_badge: "Academic Coding & Live Development",
        server_scene_badge: "Core Servers Maintenance & Fiber Splicing",
        lab_badge_txt: "LIVE SERVER UPGRADE & FIBER REPAIR",
        lab_title_txt: "Core Server Operations <span>Maintenance & Live Coding in Progress</span>",
        lab_desc_txt: "Our senior engineers and AI engines are actively welding fiber optics and compiling turbocharged updates.",
        support_telegram_txt: "Telegram Support",
        support_email_txt: "Official Email",
        footer_copy: "All Rights Reserved © 2026 Isal Academic Platform (itqan.tech)",
        lang_btn: "العربية"
    }
};

let currentLang = localStorage.getItem('site_lang') || 'ar';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    const dict = translations[lang] || translations.ar;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    const langBtnTxt = document.getElementById('currentLangTxt');
    if (langBtnTxt) langBtnTxt.innerText = dict.lang_btn;
}

function toggleLanguage() {
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

// ==========================================
// 🌓 2. نظام الثيم والوضع الليلي / النهاري
// ==========================================
function applyTheme(isDark) {
    const icon = document.getElementById('themeIcon');
    if (isDark) {
        document.documentElement.classList.add('dark-mode');
        if (icon) icon.className = 'fas fa-sun';
    } else {
        document.documentElement.classList.remove('dark-mode');
        if (icon) icon.className = 'fas fa-moon';
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark-mode');
    const nextMode = !isDark;
    localStorage.setItem('theme', nextMode ? 'dark' : 'light');
    applyTheme(nextMode);
}

// ==========================================
// 🐍 3. لعبة الحية المتطورة (Snake Arcade Game)
// مع أوضاع السرعة المتعددة (بطيء / عادي / سريع / صاروخي)
// ==========================================
const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const tileCount = canvas.width / gridSize;

// إعدادات السرعات المتعددة بالميلي ثانية
const SPEED_CONFIG = {
    slow: 145,     // بطيء وهادئ للمبتدئين
    normal: 105,   // عادي ومتوازن
    fast: 70,      // سريع ومليء بالحماس
    insane: 45     // صاروخي للمحترفين
};

let currentSpeedMode = localStorage.getItem('snake_speed_mode') || 'normal';
let baseSpeed = SPEED_CONFIG[currentSpeedMode] || 105;
let gameSpeed = baseSpeed;

function setGameSpeed(mode) {
    if (!SPEED_CONFIG[mode]) mode = 'normal';
    currentSpeedMode = mode;
    localStorage.setItem('snake_speed_mode', mode);
    baseSpeed = SPEED_CONFIG[mode];

    if (!isGameRunning) {
        gameSpeed = baseSpeed;
    } else {
        // تعديل السرعة فوراً مع الحفاظ على تسارع النقاط
        const speedBoost = Math.floor(score / 50) * 4;
        gameSpeed = Math.max(30, baseSpeed - speedBoost);
        if (!isPaused) {
            clearInterval(gameLoopInterval);
            gameLoopInterval = setInterval(gameLoop, gameSpeed);
        }
    }

    // تفعيل الزر المختار
    document.querySelectorAll('.speed-pill').forEach(btn => {
        if (btn.getAttribute('data-speed') === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

let snake = [];
let food = { x: 10, y: 10 };
let dx = 1;
let dy = 0;
let nextDx = 1;
let nextDy = 0;
let score = 0;
let highScore = parseInt(localStorage.getItem('snake_highscore') || '0');
let gameLoopInterval = null;
let isGameRunning = false;
let isPaused = false;

const highScoreEl = document.getElementById('snakeHighScore');
if (highScoreEl) highScoreEl.innerText = highScore;

function initSnake() {
    const mid = Math.floor(tileCount / 2);
    snake = [
        { x: mid, y: mid },
        { x: mid - 1, y: mid },
        { x: mid - 2, y: mid }
    ];
    dx = 1;
    dy = 0;
    nextDx = 1;
    nextDy = 0;
    score = 0;
    gameSpeed = baseSpeed;
    const scoreEl = document.getElementById('snakeScore');
    if (scoreEl) scoreEl.innerText = score;
    spawnFood();
}

function spawnFood() {
    let valid = false;
    while (!valid) {
        food.x = Math.floor(Math.random() * tileCount);
        food.y = Math.floor(Math.random() * tileCount);
        valid = !snake.some(segment => segment.x === food.x && segment.y === food.y);
    }
}

function startGame() {
    document.getElementById('gameStartOverlay').style.display = 'none';
    document.getElementById('gameOverOverlay').style.display = 'none';
    initSnake();
    isGameRunning = true;
    isPaused = false;
    clearInterval(gameLoopInterval);
    gameLoopInterval = setInterval(gameLoop, gameSpeed);
}

function togglePauseGame() {
    if (!isGameRunning) return;
    const pauseIcon = document.getElementById('pauseBtnIcon');
    const pauseTxt = document.getElementById('pauseBtnTxt');
    const dict = translations[currentLang] || translations.ar;

    if (isPaused) {
        isPaused = false;
        gameLoopInterval = setInterval(gameLoop, gameSpeed);
        if (pauseIcon) pauseIcon.className = 'fas fa-pause';
        if (pauseTxt) pauseTxt.innerText = dict.game_pause;
    } else {
        isPaused = true;
        clearInterval(gameLoopInterval);
        if (pauseIcon) pauseIcon.className = 'fas fa-play';
        if (pauseTxt) pauseTxt.innerText = dict.game_resume;
    }
}

function resetGame() {
    clearInterval(gameLoopInterval);
    isGameRunning = false;
    isPaused = false;
    document.getElementById('gameStartOverlay').style.display = 'flex';
    document.getElementById('gameOverOverlay').style.display = 'none';
    drawBoard();
}

function gameOver() {
    clearInterval(gameLoopInterval);
    isGameRunning = false;

    if (score > highScore) {
        highScore = score;
        localStorage.setItem('snake_highscore', highScore);
        const hsEl = document.getElementById('snakeHighScore');
        if (hsEl) hsEl.innerText = highScore;
    }

    const overText = document.getElementById('gameOverScoreText');
    if (overText) {
        overText.innerText = (currentLang === 'ar') ? `مجموع نقاطك: ${score}` : `Your Score: ${score}`;
    }
    document.getElementById('gameOverOverlay').style.display = 'flex';
}

function gameLoop() {
    dx = nextDx;
    dy = nextDy;

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // فحص الاصطدام بالجدران
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        gameOver();
        return;
    }

    // فحص الاصطدام بجسم الحية
    for (let i = 0; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver();
            return;
        }
    }

    snake.unshift(head);

    // أكل الطعام
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        const scoreEl = document.getElementById('snakeScore');
        if (scoreEl) scoreEl.innerText = score;
        spawnFood();

        // تسريع اللعبة تدريجياً كل 50 نقطة حسب المود المختار
        if (score % 50 === 0 && gameSpeed > 30) {
            gameSpeed = Math.max(25, gameSpeed - 4);
            clearInterval(gameLoopInterval);
            gameLoopInterval = setInterval(gameLoop, gameSpeed);
        }
    } else {
        snake.pop();
    }

    drawBoard();
}

function drawBoard() {
    if (!ctx) return;

    // خلفية الكانفاس
    ctx.fillStyle = '#0b1120';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // خطوط الشبكة الخفيفة
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // رسم الطعام (كريستالة طاقة متوهجة)
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#F26522';
    ctx.fillStyle = '#F26522';
    ctx.beginPath();
    const foodCenterX = food.x * gridSize + gridSize / 2;
    const foodCenterY = food.y * gridSize + gridSize / 2;
    ctx.arc(foodCenterX, foodCenterY, gridSize / 2.3, 0, Math.PI * 2);
    ctx.fill();

    // لمعة صغيرة بالمنتصف
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(foodCenterX - 2, foodCenterY - 2, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // رسم جسم الحية
    snake.forEach((part, index) => {
        const isHead = index === 0;
        const px = part.x * gridSize;
        const py = part.y * gridSize;

        if (isHead) {
            ctx.shadowBlur = 12;
            ctx.shadowColor = '#10b981';
            ctx.fillStyle = '#10b981';
        } else {
            ctx.shadowBlur = 4;
            ctx.shadowColor = 'rgba(16, 185, 129, 0.4)';
            const grad = ctx.createLinearGradient(px, py, px + gridSize, py + gridSize);
            grad.addColorStop(0, '#10b981');
            grad.addColorStop(1, '#059669');
            ctx.fillStyle = grad;
        }

        // رسم مربع مستدير الحواف
        drawRoundedRect(ctx, px + 1, py + 1, gridSize - 2, gridSize - 2, isHead ? 6 : 4);

        // رسم العينين على رأس الحية
        if (isHead) {
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#ffffff';

            let eyeX1 = px + 5, eyeY1 = py + 5, eyeX2 = px + 15, eyeY2 = py + 5;
            if (dx === 1) { eyeX1 = px + 14; eyeY1 = py + 5; eyeX2 = px + 14; eyeY2 = py + 14; }
            else if (dx === -1) { eyeX1 = px + 5; eyeY1 = py + 5; eyeX2 = px + 5; eyeY2 = py + 14; }
            else if (dy === 1) { eyeX1 = px + 5; eyeY1 = py + 14; eyeX2 = px + 14; eyeY2 = py + 14; }
            else if (dy === -1) { eyeX1 = px + 5; eyeY1 = py + 5; eyeX2 = px + 14; eyeY2 = py + 5; }

            ctx.beginPath();
            ctx.arc(eyeX1, eyeY1, 2.2, 0, Math.PI * 2);
            ctx.arc(eyeX2, eyeY2, 2.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#0f172a';
            ctx.beginPath();
            ctx.arc(eyeX1, eyeY1, 1.2, 0, Math.PI * 2);
            ctx.arc(eyeX2, eyeY2, 1.2, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    ctx.shadowBlur = 0;
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
}

function changeDirection(dir) {
    if (!isGameRunning || isPaused) return;
    if (dir === 'UP' && dy === 0) { nextDx = 0; nextDy = -1; }
    else if (dir === 'DOWN' && dy === 0) { nextDx = 0; nextDy = 1; }
    else if (dir === 'LEFT' && dx === 0) { nextDx = -1; nextDy = 0; }
    else if (dir === 'RIGHT' && dx === 0) { nextDx = 1; nextDy = 0; }
}

// ==========================================
// 📱 نظام التحكم باللمس والسحب للشاشات والهواتف (Touch / Swipe Controls)
// ==========================================
function initTouchControls() {
    const cvs = document.getElementById('snakeCanvas');
    if (!cvs) return;

    let startX = 0;
    let startY = 0;
    let isTracking = false;
    const SWIPE_DIST = 16; // حساسية استجابة فورية بدون أي تأخير

    // الاستماع لأحداث اللمس فقط على شاشة الكانفاس لتفادي اعتراض أي نقرات على الأزرار بالحاسبة
    cvs.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length > 0) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isTracking = true;
        }
    }, { passive: true });

    cvs.addEventListener('touchmove', (e) => {
        if (!isTracking || !isGameRunning || isPaused) return;
        if (!e.touches || e.touches.length === 0) return;

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = currentX - startX;
        const diffY = currentY - startY;
        const absX = Math.abs(diffX);
        const absY = Math.abs(diffY);

        if (Math.max(absX, absY) >= SWIPE_DIST) {
            if (e.cancelable) {
                e.preventDefault(); // منع سكرول الشاشة أثناء السحب واللعب
            }

            if (absX > absY) {
                if (diffX > 0) changeDirection('RIGHT');
                else changeDirection('LEFT');
            } else {
                if (diffY > 0) changeDirection('DOWN');
                else changeDirection('UP');
            }

            // إعادة ضبط النقطة لحظياً لتمكين السحب المتتالي والسلس دون رفع الإصبع
            startX = currentX;
            startY = currentY;
        }
    }, { passive: false });

    cvs.addEventListener('touchend', (e) => {
        if (!isTracking || !isGameRunning || isPaused) return;
        isTracking = false;

        if (e.changedTouches && e.changedTouches.length > 0) {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = endX - startX;
            const diffY = endY - startY;
            const absX = Math.abs(diffX);
            const absY = Math.abs(diffY);

            if (Math.max(absX, absY) >= SWIPE_DIST) {
                if (absX > absY) {
                    if (diffX > 0) changeDirection('RIGHT');
                    else changeDirection('LEFT');
                } else {
                    if (diffY > 0) changeDirection('DOWN');
                    else changeDirection('UP');
                }
            }
        }
    }, { passive: true });
}

// ==========================================
// 🕹️ 3.5. نظام إظهار وإخفاء اللعبة التفاعلية (Toggle Visibility)
// اللعبة تكون مخفية بالبداية وتظهر فقط عند الضغط على الزر
// ==========================================
let isArcadeVisible = false;

function toggleArcadeVisibility(forceState) {
    if (typeof forceState === 'boolean') {
        isArcadeVisible = forceState;
    } else {
        isArcadeVisible = !isArcadeVisible;
    }

    const arcade = document.querySelector('.arcade-section');
    const launcherContainer = document.querySelector('.arcade-launcher-container');

    if (arcade) {
        if (isArcadeVisible) {
            arcade.classList.add('is-visible');
            if (launcherContainer) launcherContainer.style.display = 'none';
            drawBoard();
            setTimeout(() => {
                arcade.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 60);
        } else {
            arcade.classList.remove('is-visible');
            if (isArcadeExpanded) {
                toggleArcadeExpand();
            }
            if (isGameRunning && !isGamePaused) {
                togglePauseGame();
            }
            if (launcherContainer) launcherContainer.style.display = 'flex';
        }
    }
}

// ==========================================
// ⛶ 4. نظام تكبير وتصغير ساحة اللعبة (Arcade Expand/Collapse)
// ==========================================
let isArcadeExpanded = false;

function toggleArcadeExpand() {
    isArcadeExpanded = !isArcadeExpanded;
    const arcade = document.querySelector('.arcade-section');
    const toggleIcon = document.getElementById('arcadeToggleIcon');
    const toggleText = document.getElementById('arcadeToggleText');
    const dict = translations[currentLang] || translations.ar;

    if (arcade) {
        const expandBtn = document.getElementById('arcadeExpandBtn');
        if (isArcadeExpanded) {
            arcade.classList.add('is-expanded');
            document.body.classList.add('has-arcade-expanded');
            if (toggleIcon) toggleIcon.className = 'fas fa-compress-alt';
            if (toggleText) toggleText.innerText = dict.arcade_collapse_btn;
            if (expandBtn) expandBtn.classList.add('active');
        } else {
            arcade.classList.remove('is-expanded');
            document.body.classList.remove('has-arcade-expanded');
            if (toggleIcon) toggleIcon.className = 'fas fa-expand-alt';
            if (toggleText) toggleText.innerText = dict.arcade_expand_btn;
            if (expandBtn) expandBtn.classList.remove('active');
        }
        drawBoard();
    }
}

// ==========================================
// 🎬 5. تشغيل فيديوهات وأنيميشن Lottie الشفافة بالكامل
// ==========================================
function initLottieAnimations() {
    if (typeof lottie === 'undefined') {
        console.warn('Lottie library is not ready');
        return;
    }

    // 1. فيديو المبرمج يكتب الكود بشفافية تامة
    const devBox = document.getElementById('lottieDeveloper');
    if (devBox) {
        try {
            lottie.loadAnimation({
                container: devBox,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'assets/animations/dev_animation.json'
            });
        } catch (e) {
            console.error('Failed to load developer animation:', e);
        }
    }

    // 2. فيديو صيانة السيرفرات المركزية بشفافية تامة مع وميض اللحام
    const serverBox = document.getElementById('lottieServer');
    if (serverBox) {
        try {
            lottie.loadAnimation({
                container: serverBox,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'assets/animations/server_animation.json'
            });
        } catch (e) {
            console.error('Failed to load server animation:', e);
        }
    }
}

// الاستماع لأزرار لوحة المفاتيح
window.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'KeyW'].includes(e.code)) {
        e.preventDefault();
        changeDirection('UP');
    } else if (['ArrowDown', 'KeyS'].includes(e.code)) {
        e.preventDefault();
        changeDirection('DOWN');
    } else if (['ArrowLeft', 'KeyA'].includes(e.code)) {
        e.preventDefault();
        changeDirection('LEFT');
    } else if (['ArrowRight', 'KeyD'].includes(e.code)) {
        e.preventDefault();
        changeDirection('RIGHT');
    } else if (e.code === 'Space') {
        e.preventDefault();
        togglePauseGame();
    } else if (e.key === 'Escape') {
        e.preventDefault();
        if (isArcadeExpanded) {
            toggleArcadeExpand();
        } else if (isArcadeVisible) {
            toggleArcadeVisibility(false);
        }
    }
});

// تهيئة الإعدادات الأولية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme === 'dark');
    setGameSpeed(currentSpeedMode);
    drawBoard();
    initTouchControls();
    initLottieAnimations();
});
