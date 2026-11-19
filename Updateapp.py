# -*- coding: utf-8 -*-
"""
🛠️ Updateapp.py - تطبيق وضع الصيانة والتطوير لمنصة إِسْـأَلْ الأكاديمية
يعمل هذا السيرفر الخفيف عند إيقاف app.py ليعرض صفحة أنيقة تخبر المستخدمين بأن الموقع قيد التطوير
مع إمكانية الاستمتاع بلعبة الحية وتغيير اللغات (عربي/إنجليزي) والوضع الليلي والنهاري.
"""

import os
import sys
import sqlite3

# ضمان عمل مخرجات الترميز UTF-8 في كونسول ويندوز
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

from flask import Flask, render_template, send_from_directory, jsonify, request

app = Flask(__name__, template_folder='templates', static_folder='static')
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.jinja_env.auto_reload = True

# =========================================================================
# 🛡️ نظام التخزين المؤقت وحماية قاعدة البيانات (Single-Shot Safe Fetch)
# جلب البيانات لمرة واحدة فقط عند تشغيل السيرفر وقطع الاتصال فوراً لحماية الأمان
# وتفادي أي ثغرات أو إبقاء اتصالات معلقة بقاعدة البيانات SQLite
# =========================================================================
CACHED_FOOTER_DATA = None

def get_cached_footer_data():
    """
    قراءة إعدادات الفوتر والروابط مرة واحدة فقط وإغلاق الاتصال بقاعدة البيانات SQLite فوراً (conn.close)
    منعاً لأي استهلاك للذاكرة أو إبقاء قناة مفتوحة لقاعدة البيانات.
    """
    global CACHED_FOOTER_DATA
    if CACHED_FOOTER_DATA is not None:
        return CACHED_FOOTER_DATA

    footer_info = {
        'footer_slogan': 'مختبر إسأل - العنوان: النجف الأشرف / شارع الجنسية - المجمع اللبناني - مقابل الملاعب.',
        'footer_copyright': 'جميع الحقوق محفوظة © 2026 مِـنَـصَّـةُ إِسْـأَلْ الأكاديمية (itqan.tech)',
        'social_links': [],
        'support_telegram': 'https://t.me/itqan_tech',
        'support_email': 'itqan.tech.iq@gmail.com'
    }

    db_path = os.path.join(os.path.dirname(__file__), 'project_db.db')
    if os.path.exists(db_path):
        conn = None
        try:
            # فتح اتصال مؤقت حصراً
            conn = sqlite3.connect(db_path, timeout=5)
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()

            # 1. جلب إعدادات النظام (العنوان، الشعار، والبريد الرسمي)
            try:
                settings_rows = cursor.execute("SELECT key, value FROM SystemSettings").fetchall()
                settings = {row['key']: row['value'] for row in settings_rows if row['value']}
                
                if 'footer_slogan' in settings and settings['footer_slogan'].strip():
                    footer_info['footer_slogan'] = settings['footer_slogan'].strip()
                elif 'payment_disabled_notice' in settings and 'العنوان:' in settings['payment_disabled_notice']:
                    footer_info['footer_slogan'] = settings['payment_disabled_notice'].strip()
                elif 'payment_address_location' in settings and settings['payment_address_location'].strip():
                    title = settings.get('payment_address_title', 'مختبر إسأل')
                    footer_info['footer_slogan'] = f"{title} - العنوان: {settings['payment_address_location'].strip()}"

                if 'footer_copyright' in settings and settings['footer_copyright'].strip():
                    footer_info['footer_copyright'] = settings['footer_copyright'].strip()

                if 'mail_username' in settings and settings['mail_username'].strip():
                    footer_info['support_email'] = settings['mail_username'].strip()
            except Exception as e:
                print(f"[!] Warning reading SystemSettings: {e}")

            # 2. جلب روابط التواصل الاجتماعي النشطة مرتبة
            try:
                link_rows = cursor.execute(
                    "SELECT platform_name, url, icon_class FROM SocialLinks WHERE is_active = 1 ORDER BY display_order ASC, id ASC"
                ).fetchall()
                footer_info['social_links'] = [dict(r) for r in link_rows]
            except Exception as e:
                print(f"[!] Warning reading SocialLinks: {e}")

        except Exception as e:
            print(f"[!] Warning during DB read: {e}")
        finally:
            if conn:
                try:
                    conn.close()  # 🔒 قطع الاتصال فوراً وإغلاق الممر بالكامل
                except Exception:
                    pass

    # روابط احتياطية قياسية في حال كانت قاعدة البيانات لا تحتوي روابط نشطة
    if not footer_info['social_links']:
        footer_info['social_links'] = [
            {'platform_name': 'يوتيوب', 'url': 'https://youtube.com', 'icon_class': 'fab fa-youtube'},
            {'platform_name': 'جيت هب', 'url': 'https://github.com', 'icon_class': 'fab fa-github'},
            {'platform_name': 'لينكد إن', 'url': 'https://linkedin.com', 'icon_class': 'fab fa-linkedin-in'},
            {'platform_name': 'تويتر / X', 'url': 'https://x.com', 'icon_class': 'fab fa-twitter'}
        ]

    CACHED_FOOTER_DATA = footer_info
    return CACHED_FOOTER_DATA

# تحميل البيانات مسبقاً عند استيراد/تشغيل التطبيق لمرة واحدة فقط
try:
    get_cached_footer_data()
except Exception:
    pass

# مسار خدمة الملفات الثابتة (أيقونات / صور)
@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(os.path.join(os.path.dirname(__file__), 'static'), filename)

@app.route('/favicon.ico')
@app.route('/icon.jpg')
def serve_favicon():
    return send_from_directory(os.path.join(os.path.dirname(__file__), 'static'), 'icon.jpg')

# واجهة فحص الحالة السريعة (API Health/Status)
@app.route('/api/status')
def maintenance_status():
    return jsonify({
        "status": "maintenance",
        "platform": "itqan.tech",
        "message": "الموقع قيد التطوير والترقية في الوقت الحالي وسيعمل قريباً جداً."
    })

# التقاط أي مسار في الموقع وتحويله لعرض صفحة الصيانة Updateapp.html مع تزويدها ببيانات الفوتر المحفوظة
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    # إذا كان الطلب عبارة عن طلب API، نرجع رد JSON بدلاً من خطأ 404
    if path.startswith('api/') or request.headers.get('Accept') == 'application/json':
        return jsonify({
            "error": "maintenance",
            "message": "نأسف لإزعاجكم، نعمل لخدمتكم. الموقع قيد التطوير والترقية وسيعمل قريباً."
        }), 503

    # تمرير بيانات الفوتر المجهزة والمخزنة مؤقتاً بدون لمس قاعدة البيانات إطلاقاً
    footer_data = get_cached_footer_data()
    return render_template('Updateapp.html', **footer_data)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    host = '0.0.0.0'

    print("\n" + "═" * 60)
    print("🛠️  مِـنَـصَّـةُ إِسْـأَلْ الأكاديمية (itqan.tech)")
    print("🚀  وضع الصيانة والتطوير (Maintenance & Update Mode) قيد التشغيل")
    print(f"🌐  الرابط المحلي:  http://localhost:{port}")
    print(f"🌍  الرابط الشبكي:  http://127.0.0.1:{port}")
    print("🔒  تم تحميل بيانات الفوتر وإغلاق مسار قاعدة البيانات بنجاح (Zero-Leak Cache)")
    print("ℹ️   هذا السيرفر البديل يعمل أثناء إيقاف app.py")
    print("═" * 60 + "\n")

    # كتم تحذيرات خادم التطوير لتشغيل وضع الصيانة الإنتاجي بنظافة
    import logging
    import flask.cli
    flask.cli.show_server_banner = lambda *args: None
    logging.getLogger('werkzeug').addFilter(lambda r: 'development server' not in r.getMessage())

    app.run(host=host, port=port, debug=False, threaded=True)

