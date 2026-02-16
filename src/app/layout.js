import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../components/ui/LanguageContext";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ 
  subsets: ["arabic"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-ibm-arabic"
});

export const metadata = {
  title: "Industry Strategic Briefs | StrategyHub",
  description: "Operational playbooks for high-performance UAE businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSansArabic.variable} font-sans bg-slate-50`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
