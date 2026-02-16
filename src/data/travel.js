export const travelData = {
  id: 'travel',
  title: { en: 'Travel Agencies', ar: 'وكالات السفر' },
  subtitle: { 
    en: 'From "Ticket Booker" to "Destination Curator".',
    ar: 'من "حجز التذاكر" إلى "تصميم الرحلات".'
  },
  metrics: [
    { label: { en: 'Conversion', ar: 'التحويل' }, value: { en: 'Low', ar: 'منخفض' }, desc: { en: 'Price shopping is rampant', ar: 'التسوق بالسعر منتشر' }, color: 'sky' },
    { label: { en: 'Margins', ar: 'الهوامش' }, value: { en: 'Thin', ar: 'ضئيلة' }, desc: { en: 'Flight aggregation commoditized', ar: 'حجوزات الطيران سلعة' }, color: 'sky' },
    { label: { en: 'Upsell', ar: 'البيع الإضافي' }, value: { en: 'Vital', ar: 'حيوي' }, desc: { en: 'Packages/Visas are the profit', ar: 'الباقات/التأشيرات هي الربح' }, color: 'sky' },
    { label: { en: 'Speed', ar: 'السرعة' }, value: { en: 'Instant', ar: 'فورية' }, desc: { en: 'WhatsApp response time', ar: 'وقت الرد على واتساب' }, color: 'sky' }
  ],
  tabs: {
    reality: { en: 'Business Reality', ar: 'واقع القطاع' },
    website: { en: 'Website Model', ar: 'نموذج الموقع' },
    checklist: { en: 'Failure Prevention', ar: 'تجنب الفشل' }
  },
  content: {
    reality: {
      intro: {
        en: 'The **Travel Market** is bifurcated. Simple flights are booked on Skyscanner. The agency\'s role is now "Complex Itineraries" and "Visa Assistance".\n\n**Key Challenge:** The "Price Drift". Customers get your itinerary and book it themselves online to save 50 AED. Winning agencies bundle services (Visa + Hotel + Transfer) so the individual price is opaque.',
        ar: 'سوق **السفر** منقسم. الرحلات البسيطة تُحجز على Skyscanner. دور الوكالة الآن هو "الرحلات المعقدة" و"تسهيل التأشيرات".\n\n**التحدي الرئيسي:** "تسرب السعر". العملاء يأخذون جدول رحلتك ويحجزونه بأنفسهم لتوفير ٥٠ درهم. الوكالات الناجحة تدمج الخدمات (تأشيرة + فندق + استقبال) ليصبح السعر الفردي غير واضح.'
      },
      chartTitle: { en: 'The Bundle Strategy', ar: 'استراتيجية الحزم' },
      chart: {
        en: `graph LR
          A[Client Request] -->|Commodity| B(Flight Only)
          B -->|Lose to| C{Skyscanner}
          A -->|Value| D(Complex Bundle)
          D -->|Includes| E[Visa + Transfer + Experience]
          E -->|Result| F[High Margin Sale]`,
        ar: `graph LR
          A[طلب العميل] -->|سلعة| B(طيران فقط)
          B -->|خسارة لصالح| C{Skyscanner}
          A -->|قيمة| D(حزمة معقدة)
          D -->|تشمل| E[تأشيرة + استقبال + تجربة]
          E -->|نتجية| F[بيع بهامش عالي]`
      },
      friction: {
        title: { en: 'Friction Points', ar: 'نقاط الاحتكاك' },
        items: [
          { en: '**Hidden Visa Requirements:** Promoting a cheap package without mentioning difficult visa rules.', ar: '**شروط التأشيرة المخفية:** ترويج باقة رخيصة دون ذكر شروط التأشيرة المعقدة.' },
          { en: '**Response Lag:** Replying to a quote request after 24 hours (client has already booked).', ar: '**تأخر الرد:** الرد على طلب السعر بعد ٢٤ ساعة (العميل حجز وانتهى).' },
          { en: '**Static PDFs:** Sending itineraries as unreadable text blocks.', ar: '**ملفات PDF ثابتة:** إرسال جداول الرحلات ككتل نصية غير مقروءة.' }
        ]
      },
      opportunity: {
        title: { en: 'Growth Opportunities', ar: 'فرص النمو' },
        items: [
          { en: '**Visa Automation:** "Check your eligibility" tools on the site.', ar: '**أتمتة التأشيرات:** أدوات "تحقق من أهليتك" على الموقع.' },
          { en: '**TikTok Itineraries:** Visual video snippets embedded in package pages.', ar: '**رحلات تيك توك:** مقاطع فيديو مدمجة في صفحات الباقات.' },
          { en: '**Corporate Retainers:** Handling all travel for SMEs for a monthly fee.', ar: '**عقود الشركات:** إدارة جميع سفريات الشركات الصغيرة مقابل رسوم شهرية.' }
        ]
      }
    },
    website: {
      headline: { en: 'The "Curator" Digital Model', ar: 'النموذج الرقمي "للمصمم"' },
      subheadline: { 
        en: 'A website designed to inspire desire, not just list prices.',
        ar: 'موقع مصمم لإثارة الرغبة، وليس فقط لسرد الأسعار.'
      },
      phases: [
        {
          title: { en: 'Phase 1: Inspiration', ar: 'المرحلة 1: الإلهام' },
          items: [
            { title: { en: 'Visual Heavy', ar: 'كثافة بصرية' }, desc: { en: 'Large hero images/videos of destinations, not airplanes.', ar: 'صور/فيديوهات كبيرة للوجهات، وليس للطائرات.' } },
            { title: { en: 'Themed Collections', ar: 'مجموعات موضوعية' }, desc: { en: '"Honeymoon", "Adventure", "Visa-Free for Residents".', ar: '"شهر عسل"، "مغامرة"، "بدون فيزا للمقيمين".' } }
          ]
        },
        {
          title: { en: 'Phase 2: Action', ar: 'المرحلة 2: الإجراء' },
          items: [
            { title: { en: 'WhatsApp Deal Closer', ar: 'إغلاق الصفقة عبر واتساب' }, desc: { en: 'Direct "Book via WhatsApp" button on every package.', ar: 'زر "احجز عبر واتساب" مباشر على كل باقة.' } },
            { title: { en: 'Live Availability', ar: 'توفر حي' }, desc: { en: '(Advanced) Calendar showing real open dates.', ar: '(متقدم) تقويم يظهر التواريخ المتاحة فعلياً.' } }
          ]
        }
      ],
      chartTitle: { en: 'Inspiration to Booking Flow', ar: 'تدفق الإلهام إلى الحجز' },
      chart: {
        en: `graph TD
          Ads[Instagram Reel] -->|Dream| Site[Package Page]
          Site -->|Details| Content[Itinerary Visuals]
          Content -->|Question?| WA[WhatsApp Agent]
          WA -->|Customize| Offer[Final Quote]
          Offer -->|Pay link| Paid[Confirmed Trip]`,
        ar: `graph TD
          Ads[ريلز انستجرام] -->|حلم| Site[صفحة الباقة]
          Site -->|تفاصيل| Content[صور الرحلة]
          Content -->|سؤال؟| WA[وكيل واتساب]
          WA -->|تخصيص| Offer[عرض نهائي]
          Offer -->|رابط دفع| Paid[رحلة مؤكدة]`
      },
    },
    checklist: {
      headline: { en: 'Agency Owner\'s Checklist', ar: 'قائمة مالك الوكالة' },
      subheadline: { en: 'From "Booking Engine" to "Margin Defender".', ar: 'من "محرك حجز" إلى "حامي الهوامش".' },
      readiness: { en: 'Digital Readiness', ar: 'الجاهزية الرقمية' },
      phases: [
        {
          title: { en: 'Phase 1: Validation (Price Defense)', ar: 'المرحلة 1: التحقق (حماية السعر)' },
          items: [
            { 
              title: { en: 'The "Price Shield"', ar: 'درع السعر' }, 
              desc: { en: 'Compare value vs OTAs (e.g., "Includes 5% VAT"). Stop price drift.', ar: 'قارن القيمة مقابل OTAs (مثلاً "شامل الضريبة"). أوقف تسرب السعر.' } 
            },
            { 
              title: { en: 'Trust Signals (Anti-Scam)', ar: 'إشارات الثقة (ضد الاحتيال)' }, 
              desc: { en: 'Footer MUST show DTCM License & Office Map. Critical for tourists.', ar: 'تذليل الموقع يجب أن يظهر رخصة السياحة والخريطة. حاسم للسياح.' } 
            }
          ]
        },
        {
          title: { en: 'Phase 2: Triage (Closing)', ar: 'المرحلة 2: الفرز (الإغلاق)' },
          items: [
            { 
              title: { en: 'Contextual WhatsApp', ar: 'واتساب السياقي' }, 
              desc: { en: 'Buttons must send payload ("Safari, 4 Pax"). No generic "Hi".', ar: 'الأزرار يجب أن ترسل تفاصيل ("سفاري، ٤ أشخاص"). لا لرسائل "مرحبا" العامة.' } 
            },
            { 
              title: { en: 'Mobile One-Click Pay', ar: 'دفع بلمسة واحدة' }, 
              desc: { en: 'Apple Pay/Google Pay integration. Vital for booking on-the-go.', ar: 'ربط Apple Pay/Google Pay. حيوي للحجز أثناء التنقل.' } 
            },
            { 
              title: { en: 'Automated Visa Intake', ar: 'استقبال التأشيرات الآلي' }, 
              desc: { en: 'Portal must validate passport photo quality before submission.', ar: 'البوابة يجب أن تتحقق من جودة صورة الجواز قبل الإرسال.' } 
            }
          ]
        },
        {
          title: { en: 'Phase 3: Authority (Asset Control)', ar: 'المرحلة 3: السلطة (التحكم بالأصول)' },
          items: [
            { 
              title: { en: 'Inventory "Stop-Sell"', ar: 'بروتوكول "إيقاف البيع"' }, 
              desc: { en: 'Auto-switch to "On Request" when inventory is low. Prevents liability.', ar: 'تحويل آلي إلى "عند الطلب" عند انخفاض المخزون. يمنع المسؤولية.' } 
            },
            { 
              title: { en: 'Seasonal Cycling', ar: 'التدوير الموسمي' }, 
              desc: { en: 'Auto-pivot homepage: "Outdoor" (Winter) vs "Indoor" (Summer).', ar: 'تحويل الصفحة الرئيسية تلقائياً: "خارجي" (شتاء) مقابل "داخلي" (صيف).' } 
            }
          ]
        },
        {
          title: { en: 'Phase 4: Future Proofing', ar: 'المرحلة 4: الاستعداد للمستقبل' },
          items: [
             { 
               title: { en: 'The "Second Purchase" Loop', ar: 'حلقة "الشراء الثاني"' }, 
               desc: { en: 'Feed OTA customer data into CRM to sell next trip directly.', ar: 'تغذية بيانات عملاء OTA في الـ CRM لبيع الرحلة التالية مباشرة.' } 
             },
             { 
               title: { en: 'Logistics Automation', ar: 'أتمتة اللوجستيات' }, 
               desc: { en: 'Post-booking page updates with Driver Name/Pickup Time.', ar: 'تحديث صفحة ما بعد الحجز باسم السائق ووقت الاستقبال.' } 
             }
          ]
        }
      ]
    }
  }
};
