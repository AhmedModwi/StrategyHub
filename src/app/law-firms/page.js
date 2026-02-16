import ReportDashboard from '@/components/reports/ReportDashboard';
import { lawFirmsData } from '@/data/law-firms';

export default function LawFirmsPage() {
  return <ReportDashboard data={lawFirmsData} />;
}
