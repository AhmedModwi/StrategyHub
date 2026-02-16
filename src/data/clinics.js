export const clinicsData = {
  id: 'clinics',
  title: { en: 'Medical Clinics', ar: 'العيادات الطبية' },
  subtitle: { 
    en: 'From "Appointment Booking" to "Patient Trust Architecture".',
    ar: 'من "حجز المواعيد" إلى "هندسة ثقة المريض".'
  },
  metrics: [
    { label: { en: 'Trust Signal', ar: 'إشارة الثقة' }, value: { en: 'Reviews', ar: 'التقييمات' }, desc: { en: 'Google Maps dependent', ar: 'تعتمد على خرائط جوجل' }, color: 'blue' },
    { label: { en: 'No-Show Rate', ar: 'نسبة التغيب' }, value: { en: '~30%', ar: '~٣٠٪' }, desc: { en: 'Reduced by prepay', ar: 'تقل بالدفع المسبق' }, color: 'blue' },
    { label: { en: 'LTV focus', ar: 'قيمة العميل' }, value: { en: 'High', ar: 'عالية' }, desc: { en: 'Retention over acquisition', ar: 'الاحتفاظ أهم من الجذب' }, color: 'blue' },
    { label: { en: 'Compliance', ar: 'الامتثال' }, value: { en: 'Strict', ar: 'صارم' }, desc: { en: 'MOH/DHA ads regulations', ar: 'لوائح إعلانات الصحة' }, color: 'blue' }
  ],
  tabs: {
    reality: { en: 'Business Reality', ar: 'واقع القطاع' },
    website: { en: 'Website Model', ar: 'نموذج الموقع' },
    checklist: { en: 'Failure Prevention', ar: 'تجنب الفشل' }
  },
  content: {
    reality: {
      intro: {
        en: 'The **Clinic Market** (Dental, Derma, General) suffers from the "Commodity Trap". Patients shop for Botox like they shop for groceries.\n\n**Key Challenge:** The No-Show Epidemic. Patients book 3 clinics and go to the first one that confirms. Winning clinics use "Commitment Architecture" (small deposits, verify-by-WhatsApp) to lock in slots.',
        ar: 'سوق **العيادات** (الأسنان، الجلدية، العام) يعاني من "فخ السلعة". المرضى يتسوقون للبوتوكس كما يتسوقون للبقالة.\n\n**التحدي الرئيسي:** وباء عدم الحضور. يحجز المرضى في 3 عيادات ويذهبون لأول واحدة تؤكد الحجز. العيادات الناجحة تستخدم "هندسة الالتزام" (إيداع بسيط، تأكيد عبر واتساب) لتثبيت المواعيد.'
      },
      chartTitle: { en: 'Patient Trust Funnel', ar: 'قمع ثقة المريض' },
      chart: {
        en: `graph LR
          A[Google/Social Ad] -->|Promise| B(Landing Page)
          B -->|Social Proof| C{Doctor Video}
          C -->|Trust| D[WhatsApp Chat]
          D -->|Commitment| E[Paid Booking]`,
        ar: `graph LR
          A[إعلان جوجل/سوشيال] -->|الوعد| B(صفحة الهبوط)
          B -->|دليل اجتماعي| C{فيديو الطبيب}
          C -->|ثقة| D[محادثة واتساب]
          D -->|التزام| E[حجز مدفوع]`
      },
      friction: {
        title: { en: 'Friction Points', ar: 'نقاط الاحتكاك' },
        items: [
          { en: '**Hidden Prices:** "Call for price" drives Gen Z away instantly.', ar: '**الأسعار المخفية:** "اتصل للسعر" تطرد الجيل الجديد فوراً.' },
          { en: '**Generic Stock Photos:** Scary "perfect teeth" photos instead of the real clinic vibe.', ar: '**صور المخزون العامة:** صور "الأسنان المثالية" المرعبة بدلاً من جو العيادة الحقيقي.' },
          { en: '**Phone Tag:** Receptionists putting patients on hold forever.', ar: '**لعبة الهاتف:** موظفو الاستقبال يتركون المرضى على الانتظار للأبد.' }
        ]
      },
      opportunity: {
        title: { en: 'Growth Opportunities', ar: 'فرص النمو' },
        items: [
          { en: '**Teledentistry Triage:** Send a photo, get a quote estimation.', ar: '**فرز طب الأسنان عن بعد:** أرسل صورة، احصل على تقدير للسعر.' },
          { en: '**SEO for Symptoms:** "Wisdom tooth pain Dubai" pages, not just "Dentist Dubai".', ar: '**سيو للأعراض:** صفحات "ألم ضرس العقل دبي"، وليس فقط "طبيب أسنان دبي".' },
          { en: '**Finance Integration:** Tabby/Tamara for expensive procedures.', ar: '**دمج التقسيط:** تابي/تمارا للإجراءات المكلفة.' }
        ]
      }
    },
    website: {
      headline: { en: 'The "Trust-First" Digital Model', ar: 'النموذج الرقمي "الثقة أولاً"' },
      subheadline: { 
        en: 'A website designed to reduce anxiety and build rapport before the visit.',
        ar: 'موقع مصمم لتقليل القلق وبناء الألفة قبل الزيارة.'
      },
      phases: [
        {
          title: { en: 'Phase 1: Humanization', ar: 'المرحلة 1: الأنسنة' },
          items: [
            { title: { en: 'Doctor Video Bios', ar: 'فيديوهات تعريفية للأطباء' }, desc: { en: 'Hearing the doctor\'s voice reduces anxiety by 50%.', ar: 'سماع صوت الطبيب يقلل القلق بنسبة ٥٠٪.' } },
            { title: { en: 'Real Results Gallery', ar: 'معرض النتائج الحقيقية' }, desc: { en: 'Before/Afters with clear disclaimers.', ar: 'قبل/بعد مع إخلاء طرف واضح.' } }
          ]
        },
        {
          title: { en: 'Phase 2: Convenience', ar: 'المرحلة 2: الراحة' },
          items: [
            { title: { en: 'WhatsApp Widget', ar: 'ويدجت واتساب' }, desc: { en: 'Float on every page. "Ask Dr. X a question".', ar: 'عائم في كل صفحة. "اسأل الدكتور س سؤالاً".' } },
            { title: { en: 'Insurance Checker', ar: 'فاحص التأمين' }, desc: { en: 'Simple list of accepted networks.', ar: 'قائمة بسيطة بالشبكات المقبولة.' } }
          ]
        }
      ],
      chartTitle: { en: 'The Booking Architecture', ar: 'هيكلية الحجز' },
      chart: {
        en: `graph TD
          Visitor -->|Anxiety?| Bio[Meet the Doctor Video]
          Visitor -->|Cost?| Offer[Insurance/Installments]
          Bio & Offer -->|Action| WA[WhatsApp Chat Start]
          WA -->|Response < 5min| Book[Confirmed Appt]
          Book -->|Reminder| Show[Patient Arrival]`,
        ar: `graph TD
          Visitor -->|قلق؟| Bio[فيديو لقاء الطبيب]
          Visitor -->|تكلفة؟| Offer[تأمين/تقسيط]
          Bio & Offer -->|إجراء| WA[بدء محادثة واتساب]
          WA -->|رد < ٥ دقائق| Book[موعد مؤكد]
          Book -->|تذكير| Show[وصول المريض]`
      },
    },
    checklist: {
      headline: { en: 'Medical Director\'s Checklist', ar: 'قائمة المدير الطبي' },
      subheadline: { en: 'From "Patient Acquisition" to "Care Architecture".', ar: 'من "جذب المرضى" إلى "هندسة الرعاية".' },
      readiness: { en: 'Clinical Digital Score', ar: 'الدرجة الرقمية للعيادة' },
      phases: [
        {
          title: { en: 'Phase 1: Validation (Safety)', ar: 'المرحلة 1: التحقق (الأمان)' },
          items: [
            { 
              title: { en: 'Visual Hygiene = Clinical Hygiene', ar: 'النظافة البصرية = النظافة الطبية' }, 
              desc: { en: 'Site MUST load <3s. Clutter/slowness is perceived as "dirty/unsafe".', ar: 'الموقع يجب أن يحمل في <٣ ثوان. الفوضى تترجم "غير آمن/قذر".' } 
            },
            { 
              title: { en: 'Doctor-First Architecture', ar: 'هيكلية "الطبيب أولاً"' }, 
              desc: { en: 'Prioritize Doctor Profiles over "About Clinic". Patients follow doctors.', ar: 'الأولوية لملفات الأطباء على "عن العيادة". المرضى يتبعون الأطباء.' } 
            }
          ]
        },
        {
          title: { en: 'Phase 2: Triage (Flow)', ar: 'المرحلة 2: الفرز (التدفق)' },
          items: [
            { 
              title: { en: 'The "Two-Door" Entry', ar: 'مدخل "البابين"' }, 
              desc: { en: 'Separate CTAs: "Pain/Urgent" (Call/WhatsApp) vs "Plan/Elective" (Form).', ar: 'أزرار منفصلة: "ألم/طوارئ" (اتصال/واتساب) مقابل "تجميل/تخطيط" (نموذج).' } 
            },
            { 
              title: { en: 'Insurance Network Checker', ar: 'فاحص شبكة التأمين' }, 
              desc: { en: 'Searchable tool for accepted insurance. Reduces front-desk rejections.', ar: 'أداة للبحث عن التأمين المقبول. تقلل رفض الاستقبال.' } 
            },
            { 
              title: { en: 'Financing Transparency', ar: 'شفافية التمويل' }, 
              desc: { en: 'Show Tabby/Tamara options next to high-ticket/cosmetic prices.', ar: 'عرض خيارات تابي/تمارا بجانب الأسعار المرتفعة/التجميلية.' } 
            }
          ]
        },
        {
          title: { en: 'Phase 3: Authority (Conversion)', ar: 'المرحلة 3: السلطة (التحويل)' },
          items: [
            { 
              title: { en: 'Review Aggregation', ar: 'تجميع التقييمات' }, 
              desc: { en: 'Live API feed of Google Reviews on homepage. Don\'t send them away to check.', ar: 'عرض حي لتقييمات جوجل. لا ترسلهم خارج الموقع للتأكد.' } 
            },
            { 
              title: { en: 'Searchable "Before/Afters"', ar: 'صور "قبل وبعد" قابلة للبحث' }, 
              desc: { en: 'Filter gallery by specific condition (e.g., "Acne", "Veneers").', ar: 'فلترة المعرض حسب الحالة (مثل "حب الشباب"، "الفينير").' } 
            }
          ]
        },
        {
          title: { en: 'Phase 4: Future Proofing', ar: 'المرحلة 4: الاستعداد للمستقبل' },
          items: [
             { 
               title: { en: 'Roster Integrity Protocol', ar: 'بروتوكول سلامة القائمة' }, 
               desc: { en: 'Remove departed doctors immediately. Prevents "Bait & Switch" liability.', ar: 'إزالة الأطباء المغادرين فوراً. يمنع المسؤولية القانونية عن "الإعلان المضلل".' } 
             },
             { 
               title: { en: 'Patient Portal Integration', ar: 'ربط بوابة المرضى' }, 
               desc: { en: 'Lab results & history login. Locks patient into the ecosystem.', ar: 'دخول لنتائج المختبر والسجل. يربط المريض بالنظام البيئي للعيادة.' } 
             }
          ]
        }
      ]
    }
  }
};
