'use client';

import { useLanguage } from './ui/LanguageContext';
import { methodologyData } from '@/data/methodology';
import { cn } from '@/lib/utils';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function MethodologyPage() {
  const { lang, toggleLang } = useLanguage();
  const data = methodologyData;

  const getScoreColor = (score) => {
    if (score >= 8) return 'text-emerald-600 font-bold';
    if (score >= 6) return 'text-amber-600 font-bold';
    return 'text-red-500 font-bold';
  };

  const getRowStyle = (cls) => {
    switch (cls) {
      case 'pursue': return 'bg-emerald-50 border-emerald-100 hover:bg-emerald-100/50';
      case 'deprioritize': return 'bg-amber-50 border-amber-100 hover:bg-amber-100/50';
      case 'avoid': return 'bg-red-50 border-red-100 hover:bg-red-100/50';
      default: return 'bg-white';
    }
  };

  const getBadgeStyle = (cls) => {
     switch (cls) {
      case 'pursue': return 'bg-emerald-500 text-white';
      case 'deprioritize': return 'bg-amber-500 text-white';
      case 'avoid': return 'bg-red-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

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
               <span className="text-sm md:text-base font-light font-mono text-sky-200">{lang === 'en' ? 'Methodology' : 'المنهجية'}</span>
            </div>

            <div className="flex items-center gap-4">
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

      {/* Hero / Header */}
      <div className="bg-white shadow-sm py-10 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">{data.title[lang]}</h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">{data.subtitle[lang]}</p>
          </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
            <div className="p-6 md:p-8">
              {/* Legend */}
              <div className="flex flex-wrap gap-4 mb-8 text-sm bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm"></div>
                      <span className="font-medium text-slate-700">{data.legend.pursue.label[lang]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm"></div>
                      <span className="font-medium text-slate-700">{data.legend.deprioritize.label[lang]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                      <span className="font-medium text-slate-700">{data.legend.avoid.label[lang]}</span>
                  </div>
              </div>

              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                    <tr>
                      {data.columns.map((col, idx) => (
                        <th key={idx} className={cn("px-4 py-3 font-bold whitespace-nowrap", col.highlight ? "bg-amber-50 text-amber-900 border-b-2 border-amber-200" : "")}>
                          {col.label[lang]}
                        </th>
                      ))}
                      <th className="px-4 py-3">{lang === 'en' ? 'Class' : 'التصنيف'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.segments.map((row) => (
                      <tr key={row.id} className={cn("border-b transition-colors last:border-0 hover:bg-slate-50", getRowStyle(row.class))}>
                        <td className="px-4 py-4">
                            <span className="font-bold text-slate-900 block text-base">{row.name[lang]}</span>
                            {row.rationale && <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">{row.rationale[lang]}</p>}
                        </td>
                        <td className={cn("px-4 py-4 text-center font-mono text-base bg-white/50", getScoreColor(row.scores.webDep))}>{row.scores.webDep}</td>
                        <td className={cn("px-4 py-4 text-center font-mono text-base bg-white/50", getScoreColor(row.scores.infraWeak))}>{row.scores.infraWeak}</td>
                        <td className={cn("px-4 py-4 text-center font-mono text-base bg-white/50", getScoreColor(row.scores.unmetNeed))}>{row.scores.unmetNeed}</td>
                        <td className={cn("px-4 py-4 text-center font-mono text-base bg-white/50", getScoreColor(row.scores.freelancerSuit))}>{row.scores.freelancerSuit}</td>
                        <td className={cn("px-4 py-4 text-center font-mono text-base bg-white/50", getScoreColor(row.scores.aiSens))}>{row.scores.aiSens}</td>
                        <td className={cn("px-4 py-4 text-center font-mono text-base bg-white/50", getScoreColor(row.scores.langRel))}>{row.scores.langRel}</td>
                        <td className={cn("px-4 py-4 text-center font-mono text-lg font-black text-amber-900 bg-amber-50/50 border-x border-amber-100/50")}>{row.scores.dmAccess}</td>
                        <td className="px-4 py-4 text-center font-mono text-lg font-black text-slate-900">{row.scores.total}</td>
                        <td className="px-4 py-4">
                           <span className={cn("px-2.5 py-1 rounded-md text-xs font-bold uppercase shadow-sm tracking-wide", getBadgeStyle(row.class))}>
                               {row.class}
                           </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

               <div className="mt-8 p-4 bg-sky-50 rounded-lg border border-sky-100 text-center flex items-center justify-center gap-2 text-sky-800">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <p className="text-sm font-medium">
                     {lang === 'en' ? 'Data Source: NotebookLM Deep Analysis + UAE Market Signals (February 2026)' : 'مصدر البيانات: تحليل NotebookLM العميق + إشارات سوق الإمارات (فبراير ٢٠٢٦)'}
                  </p>
               </div>
            </div>
          </div>
      </main>
    </div>
  );
}
