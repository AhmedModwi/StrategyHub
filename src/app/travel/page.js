import ReportDashboard from '../../components/reports/ReportDashboard';
import { travelData } from '../../data/travel';

export default function TravelPage() {
  return <ReportDashboard data={travelData} />;
}
