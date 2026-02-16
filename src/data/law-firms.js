export const lawFirmsData = {
  id: 'law-firms',
  title: { en: 'Law Firms', ar: 'مكاتب المحاماة' },
  subtitle: { 
    en: 'From "General Practice" to "Specialized Authority": The automated client intake model.',
    ar: 'من "الممارسة العامة" إلى "التخصص الدقيق": نموذج استقبال العملاء المؤتمت.'
  },
  metrics: [
    { label: { en: 'Client Trust', ar: 'ثقة العملاء' }, value: { en: 'Critical', ar: 'حرج' }, desc: { en: 'Based on authority signals', ar: 'يعتمد على إشارات القوة' }, color: 'slate' },
    { label: { en: 'Lead Response', ar: 'استجابة العملاء' }, value: { en: '< 15 min', ar: '< ١٥ دقيقة' }, desc: { en: 'Required for conversion', ar: 'مطلوب للتحويل' }, color: 'slate' },
    { label: { en: 'Content Vol.', ar: 'حجم المحتوى' }, value: { en: 'High', ar: 'عالي' }, desc: { en: 'Regulatory updates', ar: 'تحديثات تشريعية' }, color: 'slate' },
    { label: { en: 'Retainer Model', ar: 'نموذج العقود' }, value: { en: 'Focus', ar: 'التركيز' }, desc: { en: 'Recurring revenue', ar: 'إيرادات متكررة' }, color: 'slate' }
  ],
  tabs: {
    reality: { en: 'Business Reality', ar: 'واقع القطاع' },
    website: { en: 'Website Model', ar: 'نموذج الموقع' },
    checklist: { en: 'Failure Prevention', ar: 'تجنب الفشل' }
  },
  content: {
    reality: {
      intro: {
        en: 'The **Legal Market** in UAE is shifting from generalist firms to hyper-specialized boutiques. Clients no longer look for "a lawyer"; they look for "a construction arbitration expert".\n\n**Key Challenge:** The "Black Box" Billing perception. Clients fear undefined costs. Winning firms use transparent, fixed-fee packages for standard services (Will drafting, Company formation) while reserving hourly billing for complex litigation.',
        ar: 'سوق **المحاماة** في الإمارات يتحول من المكاتب العامة إلى التخصص الدقيق. العملاء لم يعودوا يبحثون عن "محامي"، بل يبحثون عن "خبير تحكيم في المقاولات".\n\n**التحدي الرئيسي:** تصور "الصندوق الأسود" للفواتير. يخشى العملاء التكاليف غير المحددة. المكاتب الناجحة تستخدم باقات أسعار ثابتة للخدمات القياسية (صياغة الوصايا، تأسيس الشركات) بينما تبقي الساعات للقضايا المعقدة.'
      },
      chartTitle: { en: 'The Authority Flywheel', ar: 'عجلة تعزيز السلطة' },
      chart: {
        en: `graph LR
          A[Specialized Content] -->|Attracts| B(Qualified Leads)
          B -->|Builds| C{Trust Authority}
          C -->|Justifies| D[Higher Retainers]
          D -->|Funds| A`,
        ar: `graph LR
          A[محتوى متخصص] -->|يجذب| B(عملاء مؤهلين)
          B -->|يبني| C{سلطة وثقة}
          C -->|يبرر| D[أتعاب أعلى]
          D -->|يمول| A`
      },
      friction: {
        title: { en: 'Friction Points', ar: 'نقاط الاحتكاك' },
        items: [
          { en: '**The "Consultation Fee" Barrier:** Clients hesitate to pay just to ask if you can help.', ar: '**حاجز "رسوم الاستشارة":** يتردد العملاء في الدفع فقط ليسألوا "هل يمكنك مساعدتي؟".' },
          { en: '**Legalese Overload:** Websites full of jargon scare away SME owners.', ar: '**الإغراق بالمصطلحات:** المواقع المليئة بالمصطلحات القانونية تخيف أصحاب الشركات الصغيرة.' },
          { en: '**Slow Intake:** "fill a form and we will call you" (they never do).', ar: '**بطء الاستقبال:** "املأ النموذج وسنتصل بك" (ولا يتصلون أبداً).' }
        ]
      },
      opportunity: {
        title: { en: 'Growth Opportunities', ar: 'فرص النمو' },
        items: [
          { en: '**The "Legal Health Check":** Free diagnostic tools for SMEs to verify compliance.', ar: '**فحص الصحة القانونية:** أدوات تشخيص مجانية للشركات للتأكد من امتثالها.' },
          { en: '**WhatsApp for Business:** Direct triage channel for urgent matters.', ar: '**واتساب للأعمال:** قناة فرز مباشرة للأمور العاجلة.' },
          { en: '**Fixed-Price Menus:** Transparent pricing for standard contracts.', ar: '**قوائم أسعار ثابتة:** تسعير شفاف للعقود القياسية.' }
        ]
      }
    },
    website: {
      headline: { en: 'The "Authority" Digital Model', ar: 'النموذج الرقمي "للسلطة"' },
      subheadline: { 
        en: 'A website designed to prove expertise before the first meeting.',
        ar: 'موقع مصمم لإثبات الخبرة قبل الاجتماع الأول.'
      },
      phases: [
        {
          title: { en: 'Phase 1: Validation', ar: 'المرحلة 1: التحقق' },
          items: [
            { title: { en: 'The "Expert" Bio', ar: 'نبذة "الخبير"' }, desc: { en: 'Focus on recent cases won, not just degrees.', ar: 'التركيز على القضايا المربوحة مؤخراً، وليس الشهادات فقط.' } },
            { title: { en: 'Practice Areas', ar: 'مجالات الممارسة' }, desc: { en: 'Deep pages for each niche (e.g., "Fintech Regs"), not just "Corporate Law".', ar: 'صفحات عميقة لكل تخصص (مثلاً: تشريعات الفينتك)، وليس فقط "قانون شركات".' } }
          ]
        },
        {
          title: { en: 'Phase 2: Conversion', ar: 'المرحلة 2: التحويل' },
          items: [
            { title: { en: 'Automated Booking', ar: 'الحجز الآلي' }, desc: { en: 'Calendly integration for paid consultations.', ar: 'ربط مع Calendly للاستشارات المدفوعة.' } },
            { title: { en: 'The "Knowledge Hub"', ar: 'مركز المعرفة' }, desc: { en: 'PDF Guides on new laws (Email Magnet).', ar: 'ادلة PDF عن القوانين الجديدة (جذب الإيميلات).' } }
          ]
        }
      ],
      chartTitle: { en: 'Lead Flow Architecture', ar: 'هيكلية تدفق العملاء' },
      chart: {
        en: `graph TD
          Lead[Visitor] -->|Reads Article| Content[Knowledge Hub]
          Content -->|Downloads Guide| Magnet[Lead Capture]
          Magnet -->|Email Seq| Trust[Nurture]
          Trust -->|Ready?| Book[Calendly Paid Session]
          Book -->|Client| CRM[Case Management]`,
        ar: `graph TD
          Lead[زائر] -->|يقرأ مقال| Content[مركز المعرفة]
          Content -->|يحمل دليل| Magnet[جمع بيانات]
          Magnet -->|سلسلة إيميلات| Trust[بناء ثقة]
          Trust -->|جاهز؟| Book[حجز استشارة مدفوعة]
          Book -->|عميل| CRM[إدارة قضايا]`
      },
    },
    checklist: {
      headline: { en: 'Managing Partner\'s Checklist', ar: 'قائمة الشريك المدير' },
      subheadline: { en: 'From "Billable Hours" to "Scalable Assets".', ar: 'من "الساعات المدفوعة" إلى "الأصول القابلة للتوسع".' },
      readiness: { en: 'Digital Maturity', ar: 'النضج الرقمي' },
      phases: [
        {
          title: { en: 'Phase 1: Validation (The Trust Foundation)', ar: 'المرحلة 1: التحقق (أساس الثقة)' },
          items: [
            { 
              title: { en: 'Partner-First Architecture', ar: 'أولوية الشركاء في الهيكلية' }, 
              desc: { en: 'Ensure navigation prioritizes "Our People" over "About Us". Clients hire lawyers, not logos.', ar: 'تأكد أن التصفح يعطي الأولوية لـ "فريقنا" على "من نحن". العملاء يوظفون محامين، وليس شعارات.' } 
            },
            { 
              title: { en: 'Credential Verification', ar: 'التحقق من الاعتمادات' }, 
              desc: { en: 'Hard-code "Bar Admission" and "Languages Spoken" into every lawyer profile header.', ar: 'إظهار "القيد في النقابة" و"اللغات" بشكل ثابت في ترويسة ملف كل محامي.' } 
            },
            { 
              title: { en: 'Speed Tests (<2s)', ar: 'اختبارات السرعة (<٢ ثانية)' }, 
              desc: { en: 'Verify site loads in <2 seconds. Slow sites signal "Old/Slow Firm" to corporate clients.', ar: 'تحقق من تحميل الموقع في أقل من ثانيتين. المواقع البطيئة توحي بـ "مكتب قديم/بطيء" للشركات.' } 
            }
          ]
        },
        {
          title: { en: 'Phase 2: The Triage Gate (Efficiency)', ar: 'المرحلة 2: بوابة الفرز (الكفاءة)' },
          items: [
            { 
              title: { en: 'The "Anti-Contact" Form', ar: 'نموذج "منع الاتصال العشوائي"' }, 
              desc: { en: 'Replace generic forms with logic requiring "Dispute Value". Auto-reject/route low-value claims.', ar: 'استبدل النماذج العامة بمنطق يطلب "قيمة النزاع". رفض/تحويل آلي للمطالبات الصغيرة.' } 
            },
            { 
              title: { en: 'Automated Paid Booking', ar: 'الحجز المدفوع الآلي' }, 
              desc: { en: 'Integrate Calendly for paid consultations to filter out free-advice seekers.', ar: 'ربط Calendly للاستشارات المدفوعة لفلترة الباحثين عن نصائح مجانية.' } 
            },
            { 
              title: { en: 'WhatsApp "Emergency" Ops', ar: 'عمليات واتساب للطوارئ' }, 
              desc: { en: 'Set up specific auto-replies for "Urgent/Police" matters versus general inquiries.', ar: 'إعداد ردود آلية خاصة لحالات "الطوارئ/الشرطة" مقابل الاستفسارات العامة.' } 
            }
          ]
        },
        {
          title: { en: 'Phase 3: The Authority Engine (Growth)', ar: 'المرحلة 3: محرك السلطة (النمو)' },
          items: [
            { 
              title: { en: 'Newsflash 48h Protocol', ar: 'بروتوكول الخبر العاجل (٤٨ ساعة)' }, 
              desc: { en: 'SLA to publish summary of NEW laws within 48 hours of gazette release.', ar: 'اتفاقية مستوى خدمة لنشر ملخص القوانين الجديدة خلال ٤٨ ساعة من صدور الجريدة الرسمية.' } 
            },
            { 
              title: { en: 'Case Study Linkage', ar: 'ربط دراسات الحالة' }, 
              desc: { en: 'Does the "Construction Law" page auto-pull the last 3 case studies dynamically?', ar: 'هل تسحب صفحة "قانون المقاولات" آخر ٣ قضايا ذات صلة تلقائياً؟' } 
            }
          ]
        },
        {
          title: { en: 'Phase 4: Future Proofing', ar: 'المرحلة 4: الاستعداد للمستقبل' },
          items: [
             { 
               title: { en: 'Schema "Attorney" Markup', ar: 'توصيف Schema للمحامين' }, 
               desc: { en: 'Add strict Schema markup so AI tools identify your lawyers as entities.', ar: 'إضافة توصيف Schema دقيق لكي تتعرف أدوات الذكاء الاصطناعي على محاميك ككيانات.' } 
             },
             { 
               title: { en: 'Data Sovereignty Audit', ar: 'تدقيق سيادة البيانات' }, 
               desc: { en: 'Confirm hosting guarantees data stays in UAE (critical for Gov/Bank panels).', ar: 'تأكد من أن الاستضافة تضمن بقاء البيانات داخل الإمارات (حاسم للتعامل مع الحكومة والبنوك).' } 
             }
          ]
        }
      ]
    }
  }
};
