import ReportDashboard from '@/components/reports/ReportDashboard';
import { realEstateData } from '@/data/real-estate';

export default function RealEstatePage() {
  return <ReportDashboard data={realEstateData} />;
}
