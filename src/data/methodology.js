export const methodologyData = {
  title: {
    en: "Client Segment Decision Matrix",
    ar: "مصفوفة قرار قطاعات العملاء"
  },
  subtitle: {
    en: "Why we chose these 5 industries.",
    ar: "لماذا اخترنا هذه القطاعات الخمسة."
  },
  legend: {
    pursue: { label: { en: "PURSUE (Priority 1)", ar: "أولوية أولى (PURSUE)" }, color: "emerald" },
    deprioritize: { label: { en: "DEPRIORITIZE (Secondary)", ar: "أولوية ثانوية (DEPRIORITIZE)" }, color: "amber" },
    avoid: { label: { en: "AVOID", ar: "تجنب (AVOID)" }, color: "red" }
  },
  columns: [
    { key: "segment", label: { en: "Segment", ar: "القطاع" } },
    { key: "webDep", label: { en: "Web Dependency", ar: "الاعتماد على الويب" } },
    { key: "infraWeak", label: { en: "Infra Weakness", ar: "ضعف البنية التحتية" } },
    { key: "unmetNeed", label: { en: "Unmet Need", ar: "احتياج غير ملبى" } },
    { key: "freelancerSuit", label: { en: "Freelancer Suit.", ar: "ملاءمة الفريلانسر" } },
    { key: "aiSens", label: { en: "AI Sensitivity", ar: "حساسية الذكاء الاصطناعي" } },
    { key: "langRel", label: { en: "Lang Relevance", ar: "أهمية اللغة" } },
    { key: "dmAccess", label: { en: "DM Access", ar: "سهولة الوصول للمالك" }, highlight: true },
    { key: "total", label: { en: "Total Score", ar: "المجموع" } }
  ],
  segments: [
    // PURSUE
    {
      id: 3,
      name: { en: "Boutique Law Firms", ar: "مكاتب المحاماة الصغيرة" },
      class: "pursue",
      scores: { webDep: 8, infraWeak: 9, unmetNeed: 9, freelancerSuit: 9, aiSens: 9, langRel: 9, dmAccess: 6, total: 53 },
      confidence: "High",
      rationale: { en: "Highest total score. High value per client means website is critical.", ar: "أعلى مجموع نقاط. القيمة العالية لكل عميل تجعل الموقع حاسماً." }
    },
    {
      id: 1,
      name: { en: "Private Cosmetic & Dental Clinics", ar: "عيادات الأسنان والتجميل" },
      class: "pursue",
      scores: { webDep: 9, infraWeak: 9, unmetNeed: 9, freelancerSuit: 9, aiSens: 8, langRel: 8, dmAccess: 9, total: 52 },
      confidence: "High",
      rationale: { en: "Easiest access to decision makers (doctors/owners). Visual results sell.", ar: "أسهل وصول لصناع القرار (الأطباء/الملاك). النتائج البصرية تبيع." }
    },
    {
      id: 4,
      name: { en: "Business Setup & Corporate Services", ar: "تأسيس الشركات" },
      class: "pursue",
      scores: { webDep: 8, infraWeak: 8, unmetNeed: 9, freelancerSuit: 9, aiSens: 8, langRel: 10, dmAccess: 8, total: 52 },
      confidence: "High",
      rationale: { en: "Critical need for Arabic/English content. High competition drives need for better UX.", ar: "حاجة ماسة للمحتوى العربي/الإنجليزي. المنافسة العالية تدفع الحاجة لتجربة مستخدم أفضل." }
    },
    {
      id: 2,
      name: { en: "Boutique Real Estate Agencies", ar: "وكالات العقارات الصغيرة" },
      class: "pursue",
      scores: { webDep: 9, infraWeak: 9, unmetNeed: 9, freelancerSuit: 9, aiSens: 7, langRel: 7, dmAccess: 6, total: 50 },
      confidence: "High",
      rationale: { en: "Massive market volume. Founders are accessible but bombarded.", ar: "حجم سوق ضخم. المؤسسون متاحون لكنهم محاصرون بالعروض." }
    },
    {
      id: 10,
      name: { en: "Specialized Medical Clinics", ar: "عيادات طبية متخصصة" },
      class: "pursue",
      scores: { webDep: 9, infraWeak: 8, unmetNeed: 8, freelancerSuit: 7, aiSens: 8, langRel: 8, dmAccess: 8, total: 48 },
      confidence: "Medium",
      rationale: { en: "Similar to cosmetic but more regulated. Trust signals are key.", ar: "مشابهة للتجميل لكن أكثر تنظيماً. إشارات الثقة هي المفتاح." }
    },
    {
      id: 5,
      name: { en: "Niche Tour Operators", ar: "منظمو الرحلات المتخصصة" },
      class: "pursue",
      scores: { webDep: 9, infraWeak: 8, unmetNeed: 8, freelancerSuit: 7, aiSens: 7, langRel: 5, dmAccess: 7, total: 44 },
      confidence: "Medium",
      rationale: { en: "Visual heavy. Needs booking integration.", ar: "تعتمد على البصريات. تحتاج دمج الحجوزات." }
    },
    {
      id: 6,
      name: { en: "Home Services (AC, Plumbing)", ar: "خدمات منزلية (تكييف، سباكة)" },
      class: "pursue",
      scores: { webDep: 8, infraWeak: 9, unmetNeed: 8, freelancerSuit: 8, aiSens: 6, langRel: 5, dmAccess: 9, total: 44 },
      confidence: "Medium",
      rationale: { en: "High urgency (AC broken). Speed and mobile optimization are everything.", ar: "إلحاح عالي (المكيف معطل). السرعة وتحسين الموبايل هما كل شيء." }
    },

    // DEPRIORITIZE
    {
      id: 7,
      name: { en: "Professional Services (Accounting)", ar: "محاسبة ومراجعة" },
      class: "deprioritize",
      scores: { webDep: 7, infraWeak: 8, unmetNeed: 8, freelancerSuit: 8, aiSens: 7, langRel: 8, dmAccess: 6, total: 46 },
      confidence: "Medium"
    },
    {
      id: 12,
      name: { en: "Financial Consulting", ar: "استشارات مالية" },
      class: "deprioritize",
      scores: { webDep: 7, infraWeak: 7, unmetNeed: 7, freelancerSuit: 7, aiSens: 7, langRel: 8, dmAccess: 5, total: 43 },
      confidence: "Medium"
    },
    {
      id: 8,
      name: { en: "Training Institutes", ar: "معاهد تدريبية" },
      class: "deprioritize",
      scores: { webDep: 7, infraWeak: 7, unmetNeed: 7, freelancerSuit: 6, aiSens: 6, langRel: 7, dmAccess: 5, total: 40 },
      confidence: "Medium"
    },
    {
      id: 13, // E-commerce moved to AVOID usually, but kept ID for consistency or re-eval
      name: { en: "E-commerce & DTC Brands", ar: "تجارة إلكترونية" },
      class: "avoid", // Based on HTML it was AVOID
      scores: { webDep: 10, infraWeak: 6, unmetNeed: 5, freelancerSuit: 4, aiSens: 6, langRel: 8, dmAccess: 4, total: 39 },
      confidence: "High",
      rationale: { en: "Too complex for solo freelancer (logistics, inventory).", ar: "معقدة جداً لفريلانسر واحد (لوجستيات، مخزون)." }
    },
     {
      id: 18,
      name: { en: "Home Services (Cleaning)", ar: "خدمات نظافة" },
      class: "deprioritize",
      scores: { webDep: 7, infraWeak: 8, unmetNeed: 7, freelancerSuit: 7, aiSens: 5, langRel: 4, dmAccess: 9, total: 38 },
      confidence: "Medium"
    },
    {
      id: 11,
      name: { en: "Renovation & Interior Design", ar: "تصميم داخلي" },
      class: "deprioritize",
      scores: { webDep: 7, infraWeak: 6, unmetNeed: 6, freelancerSuit: 7, aiSens: 5, langRel: 5, dmAccess: 6, total: 36 },
      confidence: "Low"
    },
    {
      id: 17,
      name: { en: "Education Centers (Tutoring)", ar: "مراكز دروس خصوصية" },
      class: "deprioritize",
      scores: { webDep: 6, infraWeak: 6, unmetNeed: 6, freelancerSuit: 6, aiSens: 5, langRel: 7, dmAccess: 6, total: 36 },
      confidence: "Low"
    },
    {
        id: 9,
        name: { en: "Boutique Fitness & Wellness", ar: "نوادي رياضية صغيرة" },
        class: "deprioritize",
        scores: { webDep: 7, infraWeak: 7, unmetNeed: 6, freelancerSuit: 6, aiSens: 4, langRel: 4, dmAccess: 7, total: 34 },
        confidence: "Low"
    },
    
    // AVOID (Remaining)
    {
      id: 14,
      name: { en: "Property Management", ar: "إدارة عقارية" },
      class: "avoid",
      scores: { webDep: 6, infraWeak: 6, unmetNeed: 5, freelancerSuit: 6, aiSens: 4, langRel: 5, dmAccess: 5, total: 32 },
      confidence: "Low"
    },
    {
      id: 15,
      name: { en: "Creative Studios", ar: "استديوهات إبداعية" },
      class: "avoid",
      scores: { webDep: 6, infraWeak: 5, unmetNeed: 5, freelancerSuit: 5, aiSens: 5, langRel: 4, dmAccess: 6, total: 30 },
      confidence: "Low"
    },
    {
      id: 16,
      name: { en: "Digital Marketing Agencies", ar: "وكالات تسويق رقمي" },
      class: "avoid",
      scores: { webDep: 5, infraWeak: 5, unmetNeed: 4, freelancerSuit: 3, aiSens: 6, langRel: 4, dmAccess: 4, total: 27 },
      confidence: "Low",
      rationale: { en: "They do this themselves. Terrible client profile.", ar: "يقومون بذلك بأنفسهم. نوعية عملاء سيئة." }
    }
  ]
};
