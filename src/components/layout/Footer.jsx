import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
    const t = useTranslations('Dashboard');
    
    return (
      <footer className="bg-slate-900 text-slate-400 py-12 mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-slate-500">
            Strategies for High-Performance UAE Businesses
          </p>
          <div className="flex flex-col items-center gap-2">
             <Link href="/methodology" className="text-sm font-medium text-sky-600 hover:text-sky-500 transition-colors mb-2">
                {t('methodology')}
             </Link>
             <p className="text-xs opacity-50">&copy; 2026 StrategyHub Research. Confidential.</p>
             <p className="text-xs text-brand-500 font-mono mt-2">{t('designedBy')}</p>
          </div>

        </div>
      </footer>
    );
  }
