export const realEstateData = {
  id: 'real-estate',
  title: {
    en: 'UAE Real Estate Agency Websites',
    ar: 'مواقع شركات العقارات في الإمارات'
  },
  subtitle: {
    en: 'From Brochureware to Revenue Infrastructure',
    ar: 'من مجرد "كتيب رقمي" إلى بنية تحتية للعوائد'
  },
  metrics: [
    {
      label: { en: 'Key Metric', ar: 'المقياس الرئيسي' },
      value: { en: 'Speed-to-Lead', ar: 'سرعة الاستجابة' },
      desc: { en: 'Must be < 5 mins', ar: 'يجب أن تكون أقل من 5 دقائق' },
      color: 'brand'
    },
    {
      label: { en: 'Major Risk', ar: 'الخطر الأكبر' },
      value: { en: 'Portal "Tax"', ar: '"ضريبة المنصات"' },
      desc: { en: 'Dependency on rented audience', ar: 'الاعتماد على جمهور مستأجر' },
      color: 'red'
    },
    {
      label: { en: 'Compliance', ar: 'الامتثال' },
      value: { en: 'AED 50k Fines', ar: 'غرامات 50 ألف' },
      desc: { en: 'For "Ghost Listings" / No QR', ar: 'للإعلانات الوهمية / بدون QR' },
      color: 'amber'
    },
    {
      label: { en: 'Opportunity', ar: 'الفرصة' },
      value: { en: 'Off-Market', ar: 'خارج السوق' },
      desc: { en: 'Data Sovereignty & Exclusivity', ar: 'سيادة البيانات والحصرية' },
      color: 'emerald'
    }
  ],
  tabs: {
    reality: { en: 'Business Reality', ar: 'الواقع التجاري' },
    website: { en: 'Website Model', ar: 'نموذج تشغيل الموقع' },
    checklist: { en: 'Checklist', ar: 'قائمة المهام' }
  },
  content: {
    reality: {
      intro: {
        en: `UAE real estate agencies operate on a high-stakes commission arbitrage model. While revenue comes from secondary sales (2%) and leasing (5%), the real growth engine is **Off-Plan Sales (2-5%+)**.
        
        **The Core Problem:** Agencies suffer from a "Portal Tax". They are operationally dependent on third-party aggregators (Property Finder, Bayut) for leads, effectively "renting" their audience. This dilutes lead quality and destroys margins.`,
        ar: `تعمل شركات العقارات في الإمارات بنموذج عمولات عالي المخاطر. بينما تأتي الإيرادات من مبيعات السوق الثانوي (2%) والتأجير (5%)، فإن محرك النمو الحقيقي هو **المشاريع قيد الإنشاء (Off-Plan)** بعمولات تصل إلى 5% أو أكثر.
        
        **المشكلة الجوهرية:** تعاني الشركات من "ضريبة المنصات". فهي تعتمد تشغيلياً على منصات الطرف الثالث (Property Finder, Bayut) للحصول على العملاء، مما يعني فعلياً "استئجار" جمهورها بدلاً من امتلاكه. وهذا يقلل من جودة العملاء المحتملين ويأكل هوامش الربح.`
      },
      chartTitle: {
        en: 'The "Lead Leak" Operational Flow',
        ar: 'مخطط "تسرب العملاء" التشغيلي'
      },
      chart: {
        en: `graph LR
          A[Paid Ads / Portals] -->|High CPL| B(Agency Inbox);
          B -->|"Delay > 5 mins"| C{Response Time};
          C -->|Slow| D[Lead Lost to Competitor];
          C -->|Fast| E{Qualification};
          E -->|Unqualified| F[Agent Burnout];
          E -->|Qualified| G[Sales Conversation];
          style D fill:#fecaca,stroke:#991b1b,stroke-width:2px
          style F fill:#fecaca,stroke:#991b1b,stroke-width:2px
          style G fill:#dcfce7,stroke:#166534,stroke-width:2px`,
        ar: `graph RL
          A[إعلانات مدفوعة / منصات] -->|تكلفة عالية| B(صندوق الوارد);
          B -->|"تأخير > 5 دقائق"| C{وقت الاستجابة};
          C -->|بطيء| D[ضياع العميل للمنافس];
          C -->|سريع| E{التأهيل والفرز};
          E -->|غير مؤهل| F[إرهاق الوكيل];
          E -->|مؤهل| G[محادثة مبيعات ناجحة];
          style D fill:#fecaca,stroke:#991b1b,stroke-width:2px
          style F fill:#fecaca,stroke:#991b1b,stroke-width:2px
          style G fill:#dcfce7,stroke:#166534,stroke-width:2px`
      },
      friction: {
        title: { en: 'Where Friction Exists', ar: 'أين يكمن الاحتكاك؟' },
        items: [
          { en: '**Portal Dependency:** Renting audience instead of owning data.', ar: '**تبعية المنصات:** استئجار الجمهور بدلاً من امتلاك البيانات.' },
          { en: '**Lead Quality:** Agents burn 70% of time on "window shoppers".', ar: '**جودة العملاء:** الوكلاء يضيعون 70% من وقتهم مع "المتفرجين".' },
          { en: '**Regulatory Risk:** "Form A" & QR Code compliance is mandatory.', ar: '**المخاطر التنظيمية:** الامتثال لـ "النموذج أ" ورموز QR إلزامي.' }
        ]
      },
      opportunity: {
        title: { en: 'The Opportunity', ar: 'الفرصة الحقيقية' },
        items: [
          { en: '**Off-Market Inventory:** Driving traffic for exclusive access.', ar: '**عقارات خارج السوق:** جذب الزوار للحصول على فرص حصرية.' },
          { en: '**Valuation Tools:** Trading data for seller leads.', ar: '**أدوات التقييم:** مقايضة البيانات مقابل بيانات البائعين.' },
          { en: '**Lifecycle Mgmt:** Converting buyers to landlords (Recurring Revenue).', ar: '**إدارة دورة الحياة:** تحويل المشترين إلى ملاك (إيرادات متكررة).' }
        ]
      }
    },
    website: {
      headline: {
        en: 'The Website\'s Real Job',
        ar: 'الوظيفة الحـقيقية للموقع'
      },
      subheadline: {
        en: 'Moves beyond "Brochureware" to become "Revenue Infrastructure".',
        ar: 'يتجاوز كونه "كتيباً رقمياً" ليصبح "بنية تحتية للعوائد".'
      },
      phases: [
        {
          title: { en: 'Phase 1: The Build (Day One)', ar: 'المرحلة 1: البناء (اليوم الأول)' },
          color: 'blue',
          items: [
            {
              title: { en: '1. Proprietary Inventory Showcase', ar: '1. عرض المخزون الحصري' },
              desc: { en: 'Host "Coming Soon" or "Off-Market" inventory not on portals. Forces high-intent buyers to visit you directly.', ar: 'استضافة عقارات "قريباً" أو "خارج السوق" غير الموجودة في المنصات. يجبر المشترين الجادين على زيارتك مباشرة.' }
            },
            {
              title: { en: '2. The "Budget Gate" Triage', ar: '2. بوابة فرز الميزانية' },
              desc: { en: 'Conditional forms capturing Budget, Timeline, & Visa. Routes Hot Leads -> WhatsApp, Cold Leads -> Email Nurture.', ar: 'نماذج شرطية تلتقط الميزانية والجدول الزمني. تحويل العملاء "الساخنين" -> واتساب، والباردين -> بريد إلكتروني تلقائي.' }
            },
             {
              title: { en: '3. RERA Trust Architecture', ar: '3. هيكلية الثقة (RERA)' },
              desc: { en: 'Every listing MUST display Trakheesi Permit Number & QR Code. Legal license to operate.', ar: 'كل إعلان يجب أن يعرض رقم تصريح "تراخيصي" ورمز QR. هذا ترخيص قانوني للعمل وليس خياراً.' }
            },
             {
              title: { en: '4. Seller Valuation Engine', ar: '4. محرك تقييم البائعين' },
              desc: { en: 'Algorithmic "Home Value" calculator. Trades market data for seller contact info.', ar: 'حاسبة خوارزمية لـ "قيمة المنزل". تقايض بيانات السوق مقابل معلومات الاتصال بالبائع.' }
            }
          ]
        },
        {
          title: { en: 'Phase 2: The Run (Daily Ops)', ar: 'المرحلة 2: التشغيل (يومياً)' },
          color: 'emerald',
          items: [
            {
              title: { en: '1. Inventory Sync (Ghost Busting)', ar: '1. مزامنة المخزون (طرد الأشباح)' },
              desc: { en: 'Real-time link CRM <-> Website. Sold properties must be removed INSTANTLY to avoid fines.', ar: 'ربط فوري بين الـ CRM والموقع. العقارات المباعة يجب إزالتها فوراً لتجنب الغرامات.' }
            },
            {
              title: { en: '2. Market Pulse Publishing', ar: '2. نشر نبض السوق' },
              desc: { en: 'Weekly transaction data updates (e.g., "Marina Price/SqFt"). Retains investors demanding data.', ar: 'تحديثات أسبوعية لبيانات المعاملات (مثل "سعر القدم في المارينا"). للحفاظ على المستثمرين.' }
            },
             {
              title: { en: '3. Permit Auditing', ar: '3. تدقيق التصاريح' },
              desc: { en: 'Automated weekly scans of live URLs to ensure QR codes haven\'t expired.', ar: 'مسح أسبوعي تلقائي للروابط للتأكد من أن رموز QR لم تنتهي صلاحيتها.' }
            },
             {
              title: { en: '4. CRM Feedback Loop', ar: '4. حلقة تغذية الـ CRM' },
              desc: { en: 'Feed "Offline Conversion" data back to marketing. Optimize for Revenue, not Clicks.', ar: 'إعادة بيانات "التحويل الفعلي" للتسويق. التحسين من أجل العوائد، ليس النقرات.' }
            }
          ]
        }
      ],
      chartTitle: { en: 'Operational Architecture Diagram', ar: 'مخطط الهيكلية التشغيلية' },
      chart: {
        en: `graph TD
          Visitor[Web Visitor] -->|Intention?| Gate{The Budget Gate};
          Gate -->|"Budget < 500k"| Email[Auto-Nurture Email];
          Gate -->|"Budget > 2M"| WA[WhatsApp API Alert];
          WA -->|"Speed < 5m"| Agent[Senior Advisor];
          Agent -->|Feedback| CRM[CRM / Analytics];
          CRM -->|Data| Mkt[Marketing Optimiz.];`,
        ar: `graph TD
          Visitor[زائر الموقع] -->|النية؟| Gate{بوابة الميزانية};
          Gate -->|"ميزانية < 500k"| Email[بريد متابعة تلقائي];
          Gate -->|"ميزانية > 2M"| WA[تنبيه واتساب فوري];
          WA -->|"السرعة < 5د"| Agent[مستشار أول];
          Agent -->|تغذية راجعة| CRM[التحليلات / CRM];
          CRM -->|بيانات| Mkt[تحسين التسويق];`
      }
    },
    checklist: {
      headline: { en: 'Owner\'s Implementation Checklist', ar: 'قائمة تفقد المالك' },
      subheadline: { en: 'Non-delegable decisions for the Agency/Founder.', ar: 'قرارات لا يمكن تفويضها للمؤسس/المالك.' },
      readiness: { en: 'Readiness', ar: 'الجاهزية' },
      phases: [
        {
          title: { en: 'Phase 1: License to Operate (Trust)', ar: 'المرحلة 1: رخصة العمل (الثقة والامتثال)' },
          items: [
             {
               title: { en: 'RERA/Trakheesi Audit', ar: 'تدقيق RERA (تراخيصي)' },
               desc: { en: 'Verify valid QR Code on EVERY listing page. (Risk: AED 50k fine).', ar: 'التحقق من وجود رمز QR صالح في كل صفحة عقار. (المخاطرة: غرامة 50 ألف).' }
             },
             {
               title: { en: '"Ghost Listing" Purge', ar: 'تطهير "الإعلانات الوهمية"' },
               desc: { en: 'Auto-label properties "Sold" via CRM sync within 1 hr.', ar: 'وضع علامة "مباع" تلقائياً عبر مزامنة CRM خلال ساعة.' }
             },
             {
               title: { en: 'Agent Accreditation', ar: 'اعتماد الوكلاء (BRN)' },
               desc: { en: 'Hard-code BRN (Broker No.) into all agent profiles.', ar: 'إظهار رقم الوسيط (BRN) في جميع ملفات الوكلاء.' }
             }
          ]
        },
        {
          title: { en: 'Phase 2: The Revenue Filter (Lead Quality)', ar: 'المرحلة 2: فلتر العوائد (جودة العملاء)' },
          items: [
             {
               title: { en: 'The "Budget Gate" Config', ar: 'تفعيل "بوابة الميزانية"' },
               desc: { en: 'Mandatory "Budget" & "Timeline" fields on all forms.', ar: 'حقول "الميزانية" و"الجدول الزمني" إلزامية في كافة النماذج.' }
             },
             {
               title: { en: 'Speed-to-Lead Protocol', ar: 'بروتوكول سرعة الاستجابة' },
               desc: { en: 'Replace email forms with "Click-to-WhatsApp" on mobile.', ar: 'استبدال نماذج البريد بـ "واتساب مباشر" على الجوال.' }
             },
             {
               title: { en: 'Intent Segmentation', ar: 'تقسيم النوايا' },
               desc: { en: 'Separate pages for "Investors" (ROI) vs "End Users".', ar: 'صفحات مستقلة للمستثمرين (عائد) عن المستخدمين (سكن).' }
             }
          ]
        },
        {
           title: { en: 'Phase 3: The Asset Builder (Defensibility)', ar: 'المرحلة 3: بناء الأصول (الحصرية)' },
           items: [
              {
                title: { en: 'Proprietary Market Pulse', ar: 'نبض السوق الخاص' },
                desc: { en: 'Publish DLD data directly (e.g., Price Trends), avoiding portals.', ar: 'نشر بيانات DLD (اتجاهات الأسعار) مباشرة لتجنب المنصات.' }
              },
              {
                title: { en: 'Seller Capture Engine', ar: 'محرك جذب البائعين' },
                desc: { en: 'Deploy algorithmic "Home Valuation" tool for seller leads.', ar: 'نشر أداة "تقييم عقاري" خوارزمية لجذب البائعين.' }
              },
              {
                title: { en: '"Off-Market" Vault', ar: 'خزنة "خارج السوق"' },
                desc: { en: 'Gated "Coming Soon" inventory requiring user registration.', ar: 'مخزون "قريباً" مغلق يتطلب تسجيل المستخدم.' }
              }
           ]
        },
        {
          title: { en: 'Phase 4: Future Proofing', ar: 'المرحلة 4: الاستعداد للمستقبل' },
          items: [
             {
               title: { en: 'AI Schema Implementation', ar: 'تطبيق بيانات AI المهيكلة' },
               desc: { en: 'Add Schema for ChatGPT/Voice Search visibility.', ar: 'إضافة Schema لضمان الظهور في بحث ChatGPT والصوت.' }
             },
             {
               title: { en: 'Multi-Lingual Hardening', ar: 'تصليب تعدد اللغات' },
               desc: { en: 'Ensure true RTL layout mirroring, not just translation.', ar: 'ضمان انعكاس التصميم RTL بشكل حقيقي وليس مجرد ترجمة.' }
             }
          ]
        }
      ]
    }
  }
};
