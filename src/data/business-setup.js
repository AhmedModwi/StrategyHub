export const businessSetupData = {
  id: 'business-setup',
  title: { en: 'Business Setup', ar: 'تأسيس الشركات' },
  subtitle: { 
    en: 'From "Paper Pusher" to "Strategic Launchpad".',
    ar: 'من "مخلص معاملات" إلى "منصة انطلاق استراتيجية".'
  },
  metrics: [
    { label: { en: 'Competition', ar: 'المنافسة' }, value: { en: 'Extreme', ar: 'شديدة جداً' }, desc: { en: 'Freezones sell direct', ar: 'المناطق الحرة تبيع مباشرة' }, color: 'amber' },
    { label: { en: 'CPC Cost', ar: 'تكلفة النقرة' }, value: { en: '$50+', ar: '$٥٠+' }, desc: { en: 'Highest in region', ar: 'الأعلى في المنطقة' }, color: 'amber' },
    { label: { en: 'Lifetime Value', ar: 'قيمة العميل' }, value: { en: 'Key', ar: 'أساسية' }, desc: { en: 'Renewal & Tax services', ar: 'التجديد والخدمات الضريبية' }, color: 'amber' },
    { label: { en: 'Complexity', ar: 'التعقيد' }, value: { en: 'High', ar: 'عالي' }, desc: { en: '50+ Jurisdictions', ar: '٥٠+ منطقة اختصاص' }, color: 'amber' }
  ],
  tabs: {
    reality: { en: 'Business Reality', ar: 'واقع القطاع' },
    website: { en: 'Website Model', ar: 'نموذج الموقع' },
    checklist: { en: 'Failure Prevention', ar: 'تجنب الفشل' }
  },
  content: {
    reality: {
      intro: {
        en: 'The **Business Setup Market** is a battlefield. 50+ Freezones are effectively competing with the consultants they pay commissions to. To survive, consultants must offer unbiased advice that a single Freezone sales rep cannot.\n\n**Key Challenge:** "Price Baiting". Ads promise "License for 500 AED", but the real cost is 20,000 AED. Clients come in angry/confused.',
        ar: 'سوق **تأسيس الشركات** هو ساحة معركة. ٥٠+ منطقة حرة تنافس فعلياً الاستشاريين الذين تدفع لهم عمولات. للبقاء، يجب أن يقدم الاستشاري نصيحة محايدة لا يستطيع مندوب مبيعات منطقة حرة واحدة تقديمها.\n\n**التحدي الرئيسي:** "طعم السعر". الإعلانات تعد بـ "رخصة بـ ٥٠٠ درهم"، لكن التكلفة الحقيقية ٢٠,٠٠٠ درهم. يأتي العملاء غاضبين/مشوشين.'
      },
      chartTitle: { en: 'The Consultant\'s Value Wedge', ar: 'قيمة الاستشاري المضافة' },
      chart: {
        en: `graph LR
          A[Client Needs] -->|Direct?| B{Freezone Sales Rep}
          B -->|Biased| C[Sells ONE Solution]
          A -->|Consultant| D{Strategic Advisor}
          D -->|Unbiased| E[Compares 50+ Options]
          E -->|Result| F[Optimized Setup Tax/Ops]`,
        ar: `graph LR
          A[احتياجات العميل] -->|مباشر؟| B{مندوب المنطقة الحرة}
          B -->|متحيز| C[يبيع حلاً واحداً]
          A -->|استشاري| D{مستشار استراتيجي}
          D -->|محايد| E[يقارن ٥٠+ خيار]
          E -->|نتيجة| F[تأسيس محسن ضريبياً وتشغيلياً]`
      },
      friction: {
        title: { en: 'Friction Points', ar: 'نقاط الاحتكاك' },
        items: [
          { en: '**Information Overload:** Clients drown in "Mainland vs Freezone" jargon.', ar: '**الإغراق المعلوماتي:** يغرق العملاء في مصطلحات "البر الرئيسي مقابل المنطقة الحرة".' },
          { en: '**Hidden Renewals:** Cheap year 1, expensive year 2.', ar: '**التجديدات المخفية:** سنة أولى رخيصة، سنة ثانية مكلفة.' },
          { en: '**Trust Deficit:** Too many "scam" consultants ghosting clients.', ar: '**نقص الثقة:** الكثير من "الاستشاريين" الوهميين يختفون بعد الدفع.' }
        ]
      },
      opportunity: {
        title: { en: 'Growth Opportunities', ar: 'فرص النمو' },
        items: [
          { en: '**Cost Calculator:** "Calculate your real setup cost" tool on site.', ar: '**حاسبة التكلفة:** أداة "احسب تكلفتك الحقيقية" على الموقع.' },
          { en: '**Comparison Tables:** Transparent "Freezone A vs Freezone B" pages.', ar: '**جداول المقارنة:** صفحات شفافة "منطقة أ ضد منطقة ب".' },
          { en: '**Bank Account Guarantee:** The #1 pain point is banking, not licensing. Solve this.', ar: '**ضمان الحساب البنكي:** الألم رقم ١ هو البنك، وليس الرخصة. حل هذا.' }
        ]
      }
    },
    website: {
      headline: { en: 'The "Comparison Engine" Digital Model', ar: 'النموذج الرقمي "محرك المقارنة"' },
      subheadline: { 
        en: 'A website designed to clarify complexity, not hide it.',
        ar: 'موقع مصمم لتوضيح التعقيد، وليس إخفاءه.'
      },
      phases: [
        {
          title: { en: 'Phase 1: Education', ar: 'المرحلة 1: التعليم' },
          items: [
            { title: { en: 'Comparison Tools', ar: 'أدوات المقارنة' }, desc: { en: 'Interactive filter: "E-comm + 1 Visa = Dubai South".', ar: 'فلتر تفاعلي: "تجارة إلكترونية + فيزا واحدة = دبي الجنوب".' } },
            { title: { en: 'Tax Clarity', ar: 'الوضوح الضريبي' }, desc: { en: 'Clear FAQ on Corporate Tax impact.', ar: 'أسئلة شائعة واضحة عن تأثير ضريبة الشركات.' } }
          ]
        },
        {
          title: { en: 'Phase 2: Conversion', ar: 'المرحلة 2: التحويل' },
          items: [
            { title: { en: 'Instant Quote', ar: 'عرض سعر فوري' }, desc: { en: 'PDF Quote generator in exchange for email.', ar: 'مولد عروض أسعار PDF مقابل الإيميل.' } },
            { title: { en: 'Expert Video', ar: 'فيديو الخبير' }, desc: { en: '"Don\'t open a company until you watch this".', ar: '"لا تفتح شركة قبل أن تشاهد هذا".' } }
          ]
        }
      ],
      chartTitle: { en: 'Lead Qualification Flow', ar: 'تدفق تأهيل العملاء' },
      chart: {
        en: `graph TD
          Ads[Search: 'Dubai Business Setup'] -->|Click| Calc[Cost Calculator]
          Calc -->|Input: Activity/Visas| Logic{Filtering Engine}
          Logic -->|Output| Lead[Get Quote via Email]
          Lead -->|Sales Call| Consult[Advisor Call]
          Consult -->|Close| Setup[Onboarding]`,
        ar: `graph TD
          Ads[بحث: 'تأسيس شركات دبي'] -->|نقر| Calc[حاسبة التكلفة]
          Calc -->|إدخال: نشاط/فيز| Logic{محرك الفلترة}
          Logic -->|مخرجات| Lead[احصل على العرض بالإيميل]
          Lead -->|اتصال مبيعات| Consult[مكالمة المستشار]
          Consult -->|إغلاق| Setup[بدء العمل]`
      },
    },
    checklist: {
      headline: { en: 'CEO\'s Operational Checklist', ar: 'قائمة تفقد الرئيس التنفيذي' },
      subheadline: { en: 'From "Lead Gen" to "Revenue Engine".', ar: 'من "توليد العملاء" إلى "محرك العوائد".' },
      readiness: { en: 'Operational Maturity', ar: 'النضج التشغيلي' },
      phases: [
        {
          title: { en: 'Phase 1: Validation (Trust Foundation)', ar: 'المرحلة 1: التحقق (أساس الثقة)' },
          items: [
            { 
              title: { en: 'Physical Proof Assets', ar: 'أصول الإثبات المادي' }, 
              desc: { en: 'High-res office photos & team bios above the fold to counter "scam anxiety".', ar: 'صور عالية الدقة للمكتب وفريق العمل في واجهة الموقع لدحض "مخاوف الاحتيال".' } 
            },
            { 
              title: { en: 'Government Alignment', ar: 'الربط الحكومي' }, 
              desc: { en: 'DED/DMCC logos & "verified partner" badges visible on landing.', ar: 'شعارات DED/DMCC وشارات "شريك معتمد" ظاهرة في صفحة الهبوط.' } 
            }
          ]
        },
        {
          title: { en: 'Phase 2: Triage (Efficiency)', ar: 'المرحلة 2: الفرز (الكفاءة)' },
          items: [
            { 
              title: { en: 'The "Budget Gate"', ar: 'بوابة الميزانية' }, 
              desc: { en: 'Forms must ask "Budget Range". Route <20k to email, >50k to sales call.', ar: 'النماذج يجب أن تسأل عن "نطاق الميزانية". حول <٢٠ ألف للإيميل، و >٥٠ ألف للمبيعات.' } 
            },
            { 
              title: { en: 'Speed-to-Lead Protocol', ar: 'بروتوكول سرعة الرد' }, 
              desc: { en: 'Auto-WhatsApp welcome message sent within 60 seconds of submission.', ar: 'رسالة ترحيب واتساب آلية ترسل خلال ٦٠ ثانية من تقديم الطلب.' } 
            },
            { 
              title: { en: 'Bank Eligibility Check', ar: 'فحص أهلية البنك' }, 
              desc: { en: 'Content clearing "Can I get a bank account?" friction upfront.', ar: 'محتوى يزيل عائق "هل يمكنني فتح حساب بنكي؟" مسبقاً.' } 
            }
          ]
        },
        {
          title: { en: 'Phase 3: Authority (Growth)', ar: 'المرحلة 3: السلطة (النمو)' },
          items: [
            { 
              title: { en: 'Regulatory Watchdog', ar: 'الراصد التشريعي' }, 
              desc: { en: 'Update tax/visa rules within 48h. "Knowledge Currency" builds trust.', ar: 'تحديث قوانين الضرائب/الفيزا خلال ٤٨ ساعة. "العملة المعرفية" تبني الثقة.' } 
            },
            { 
              title: { en: 'Transparent Pricing', ar: 'تسعير شفاف' }, 
              desc: { en: 'Publish "Starting From" packages. Transparency filters tire-kickers.', ar: 'نشر باقات "تبدأ من". الشفافية تفلتر المتطفلين.' } 
            }
          ]
        },
        {
          title: { en: 'Phase 4: Future Proofing', ar: 'المرحلة 4: الاستعداد للمستقبل' },
          items: [
             { 
               title: { en: 'Client Lifecycle Portal', ar: 'بوابة دورة حياة العميل' }, 
               desc: { en: 'Login for visa renewals & tax filing. Creates high switching costs.', ar: 'دخول لتجديد الفيزا والإقرار الضريبي. يخلق تكلفة انتقال عالية.' } 
             },
             { 
               title: { en: 'Data Sovereignty', ar: 'سيادة البيانات' }, 
               desc: { en: 'Ensure passport copies are stored in UAE-compliant local servers.', ar: 'تأكد أن نسخ الجوازات مخزنة في خوادم محلية متوافقة مع قوانين الإمارات.' } 
             }
          ]
        }
      ]
    }
  }
};
