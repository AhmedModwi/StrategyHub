import ReportDashboard from '../../components/reports/ReportDashboard';
import { clinicsData } from '../../data/clinics';

export default function ClinicsPage() {
  return <ReportDashboard data={clinicsData} />;
}
