'use client';

import Link from 'next/link';
import { ArrowLeft, Building2, Scale, Stethoscope, Plane, Briefcase, TrendingUp } from 'lucide-react';
import { useLanguage } from '../components/ui/LanguageContext';
import { useTranslations } from 'next-intl';

export default function Home() {
  const { lang, toggleLang } = useLanguage();
  const t = useTranslations('Navigation');
  const tLanding = useTranslations('Landing');

  const industries = [
    { id: 'real-estate', name: t('realEstate'), icon: Building2, color: 'bg-emerald-100 text-emerald-600', href: '/real-estate' },
    { id: 'law-firms', name: t('lawFirms'), icon: Scale, color: 'bg-slate-100 text-slate-600', href: '/law-firms' },
    { id: 'clinics', name: t('clinics'), icon: Stethoscope, color: 'bg-blue-100 text-blue-600', href: '/clinics' },
    { id: 'travel', name: t('travel'), icon: Plane, color: 'bg-sky-100 text-sky-600', href: '/travel' },
    { id: 'business-setup', name: t('businessSetup'), icon: Briefcase, color: 'bg-amber-100 text-amber-600', href: '/business-setup' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      {/* Header */}
      <nav className="bg-sky-900 text-white shadow-lg sticky top-0 z-40 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="bg-amber-500 p-1.5 rounded-sm">
               <TrendingUp size={20} className="text-sky-900" />
             </div>
             <span className="text-xl font-bold tracking-tight">
               {lang === 'en' ? (<span>Strategy<span className="text-sky-300">Hub</span></span>) : (<span>منصة <span className="text-sky-300">الاستراتيجية</span></span>)}
             </span>
          </div>

          <button
            onClick={toggleLang}
            className="flex items-center gap-2 text-xs font-bold bg-sky-800 hover:bg-sky-700 px-3 py-1.5 rounded-full transition border border-sky-600 shadow-sm"
          >
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-6 md:p-12">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {tLanding('title')}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {tLanding('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link 
              key={industry.id} 
              href={industry.href}
              className="group relative bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col items-center text-center space-y-4"
            >
              <div className={`p-4 rounded-full ${industry.color} group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {industry.name}
                </h3>
                <span className="inline-flex items-center text-sm font-medium text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-200">
                  {tLanding('readReport')} <ArrowLeft className={`w-4 h-4 ${lang === 'ar' ? 'mr-1' : 'ml-1 rotate-180'}`} />
                </span>
              </div>
            </Link>
          ))}
        </div>


        {/* Methodology Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
           <h3 className="text-2xl font-bold text-slate-900 mb-4">{tLanding('methodologyTitle')}</h3>
           <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">{tLanding('methodologyDesc')}</p>
           <Link 
             href="/methodology" 
             className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-900 hover:bg-sky-800 transition-colors shadow-md"
           >
             {tLanding('viewMethodology')}
           </Link>
        </div>
      </main>
    </div>
  );
}
