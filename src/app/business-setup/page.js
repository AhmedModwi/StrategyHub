import ReportDashboard from '../../components/reports/ReportDashboard';
import { businessSetupData } from '../../data/business-setup';

export default function BusinessSetupPage() {
  return <ReportDashboard data={businessSetupData} />;
}
