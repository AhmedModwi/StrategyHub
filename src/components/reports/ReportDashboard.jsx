'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../ui/LanguageContext';
import mermaid from 'mermaid';
import MermaidChart from '../charts/MermaidChart';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, AlertOctagon, TrendingUp, Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '../../lib/utils';

export default function ReportDashboard({ data }) {
  const { lang, toggleLang } = useLanguage();
  const t = useTranslations('Dashboard');
  const [activeTab, setActiveTab] = useState('reality');
  /* Logic to handle both flat items (legacy) and phases (new) */
  const getChecklistItems = () => {
    if (data.content.checklist.phases) {
      return data.content.checklist.phases.flatMap(p => p.items);
    }
    return data.content.checklist.items || [];
  };

  const allChecklistItems = getChecklistItems();

  const [checklist, setChecklist] = useState(
    new Array(allChecklistItems.length).fill(false)
  );

  const toggleCheck = (index) => {
    const newChecklist = [...checklist];
    newChecklist[index] = !newChecklist[index];
    setChecklist(newChecklist);
  };

  const calculateProgress = () => {
    const checkedCount = checklist.filter(Boolean).length;
    return Math.round((checkedCount / checklist.length) * 100);
  };

  const renderMarkdown = (text) => {
    return text.split('\n').map((line, i) => (
      <p key={i} className="mb-4" dangerouslySetInnerHTML={{
        __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      }} />
    ));
  };
  
  // Helper to render a single checklist item
  const ChecklistItem = ({ item, index }) => (
    <label className={cn(
      "flex items-start p-5 rounded-xl cursor-pointer transition-all duration-200 group border mb-3",
      checklist[index] ? "bg-sky-50 border-sky-200" : "bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200"
    )}>
       <input 
         type="checkbox" 
         checked={checklist[index]} 
         onChange={() => toggleCheck(index)}
         className="mt-1 h-5 w-5 text-sky-600 rounded border-gray-300 focus:ring-sky-500 rtl:ml-4 rtl:mr-0 mr-4"
       />
       <div className="flex-1">
          <span className={cn("font-bold block group-hover:text-sky-700 transition-colors", checklist[index] ? "text-sky-900 line-through decoration-sky-500/30" : "text-slate-900")}>
            {item.title[lang]}
          </span>
          <span className={cn("text-sm transition-colors mt-1 block", checklist[index] ? "text-sky-700/70" : "text-slate-500")}>
            {item.desc[lang]}
          </span>
       </div>
    </label>
  );

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
        activeTab === id 
          ? "bg-sky-700 text-white shadow-md transform scale-105" 
          : "text-sky-100 hover:bg-sky-800 hover:text-white"
      )}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-200 selection:text-sky-900">
      
      {/* Navigation */}
      <nav className="bg-sky-900 text-white shadow-lg sticky top-0 z-40 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
               <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                 <div className="bg-amber-500 p-1.5 rounded-sm">
                   <TrendingUp size={20} className="text-sky-900" />
                 </div>
                 <span className="text-lg font-bold tracking-tight">
                   {lang === 'en' ? (<span>Strategy<span className="text-sky-300">Hub</span></span>) : (<span>منصة <span className="text-sky-300">الاستراتيجية</span></span>)}
                 </span>
               </Link>
               <span className="mx-2 opacity-50 text-sky-400">|</span>
               <span className="text-sm md:text-base font-light">{data.title[lang]}</span>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex bg-sky-950/50 p-1 rounded-lg">
                <TabButton id="reality" label={t('tabs.reality')} />
                <TabButton id="website" label={t('tabs.website')} />
                <TabButton id="checklist" label={t('tabs.checklist')} />
              </div>
              
              <div className="h-6 w-px bg-sky-700 mx-2"></div>

              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 text-xs font-bold bg-sky-800 hover:bg-sky-700 px-3 py-1.5 rounded-full transition border border-sky-600 shadow-sm"
              >
                {lang === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white shadow-sm py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
             <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{data.title[lang]}</h1>
             <p className="mt-3 text-lg text-slate-600 leading-relaxed">{data.subtitle[lang]}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {data.metrics.map((metric, idx) => (
              <div key={idx} className={cn("p-4 rounded-xl border border-slate-100 shadow-sm transition hover:shadow-md", `bg-${metric.color}-50`)}>
                 <div className={cn("text-xs font-bold uppercase tracking-wider mb-1", `text-${metric.color}-600`)}>{metric.label[lang]}</div>
                 <div className={cn("text-2xl font-bold mb-1", `text-${metric.color}-900`)}>{metric.value[lang]}</div>
                 <div className="text-sm text-slate-600 font-medium">{metric.desc[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode='wait'>
          
          {/* TAB: REALITY */}
          {activeTab === 'reality' && (
            <motion.div 
              key="reality"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white shadow-md rounded-2xl overflow-hidden mb-8 border border-slate-100">
                <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <AlertOctagon size={20} className="text-sky-600" />
                    {t('tabs.reality')}
                  </h3>
                </div>
                <div className="p-6 md:p-8">
                  <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-strong:text-slate-900 leading-relaxed">
                    {renderMarkdown(data.content.reality.intro[lang])}
                  </div>

                  <div className="mt-10 bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-500 mb-6 text-center uppercase tracking-widest">{data.content.reality.chartTitle[lang]}</h4>
                    <MermaidChart chart={data.content.reality.chart[lang]} id="reality-chart" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white shadow-md rounded-2xl p-6 border border-red-100">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                       <div className="p-1 bg-red-100 rounded text-red-600"><AlertTriangle size={18} /></div>
                       {data.content.reality.friction.title[lang]}
                    </h4>
                    <ul className="space-y-3">
                      {data.content.reality.friction.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600 bg-red-50/50 p-2 rounded-lg">
                          <span className="text-red-500 mx-2 mt-0.5">•</span>
                          <span dangerouslySetInnerHTML={{ __html: item[lang].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                 </div>

                 <div className="bg-white shadow-md rounded-2xl p-6 border border-emerald-100">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                       <div className="p-1 bg-emerald-100 rounded text-emerald-600"><CheckCircle2 size={18} /></div>
                       {data.content.reality.opportunity.title[lang]}
                    </h4>
                    <ul className="space-y-3">
                      {data.content.reality.opportunity.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600 bg-emerald-50/50 p-2 rounded-lg">
                          <span className="text-emerald-500 mx-2 mt-0.5">•</span>
                          <span dangerouslySetInnerHTML={{ __html: item[lang].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>
            </motion.div>
          )}

          {/* TAB: WEBSITE */}
          {activeTab === 'website' && (
            <motion.div 
               key="website"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.2 }}
            >
               <div className="bg-sky-900 rounded-2xl p-8 mb-8 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-sky-800 rounded-full opacity-20"></div>
                  <h3 className="text-2xl font-bold mb-2 relative z-10">{data.content.website.headline[lang]}</h3>
                  <p className="opacity-90 relative z-10 text-sky-100 max-w-2xl">{data.content.website.subheadline[lang]}</p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {data.content.website.phases.map((phase, pIdx) => (
                    <div key={pIdx} className={cn("bg-white border-t-8 shadow-lg rounded-2xl overflow-hidden", pIdx === 0 ? "border-blue-500" : "border-emerald-500")}>
                       <div className="p-6">
                          <h4 className={cn("text-sm font-bold uppercase tracking-wide mb-6", pIdx === 0 ? "text-blue-600" : "text-emerald-600")}>
                            {phase.title[lang]}
                          </h4>
                          <div className="space-y-6">
                             {phase.items.map((item, iIdx) => (
                               <div key={iIdx} className={cn("pl-4 border-l-2 rtl:pl-0 rtl:pr-4 rtl:border-l-0 rtl:border-r-2", "border-slate-100 hover:border-slate-300 transition-colors duration-300")}>
                                  <h5 className="font-bold text-slate-900">{item.title[lang]}</h5>
                                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.desc[lang]}</p>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-center mb-8">{data.content.website.chartTitle[lang]}</h4>
                  <MermaidChart chart={data.content.website.chart[lang]} id="website-chart" />
               </div>
            </motion.div>
          )}

          {/* TAB: CHECKLIST */}
          {activeTab === 'checklist' && (
            <motion.div 
              key="checklist"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white shadow-lg rounded-2xl p-8 border border-slate-100">
                 <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div>
                       <h3 className="text-2xl font-bold text-slate-900">{data.content.checklist.headline[lang]}</h3>
                       <p className="text-slate-500 mt-1">{data.content.checklist.subheadline[lang]}</p>
                    </div>
                    <div className="text-center md:text-right bg-slate-50 px-6 py-3 rounded-xl border border-slate-100">
                       <span className="text-4xl font-bold text-sky-600 block">{calculateProgress()}%</span>
                       <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{data.content.checklist.readiness[lang]}</div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    {/* Render Phases if available */}
                    {data.content.checklist.phases ? (
                       <div className="space-y-8">
                         {(() => {
                            let globalIndex = 0;
                            return data.content.checklist.phases.map((phase, pIdx) => (
                               <div key={pIdx}>
                                  <h4 className="font-bold text-slate-800 mb-4 px-1 uppercase tracking-wide text-xs flex items-center gap-2">
                                     <div className="h-px bg-slate-200 flex-1"></div>
                                     <span className="bg-slate-100 px-2 py-1 rounded text-slate-600">{phase.title[lang]}</span>
                                     <div className="h-px bg-slate-200 flex-1"></div>
                                  </h4>
                                  <div className="space-y-3">
                                     {phase.items.map((item, iIdx) => {
                                        const currentIndex = globalIndex++;
                                        return <ChecklistItem key={iIdx} item={item} index={currentIndex} />;
                                     })}
                                  </div>
                               </div>
                            ));
                         })()}
                       </div>
                    ) : (
                       /* Render Flat List (Legacy) */
                       data.content.checklist.items.map((item, idx) => (
                          <ChecklistItem key={idx} item={item} index={idx} />
                       ))
                    )}
                 </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
