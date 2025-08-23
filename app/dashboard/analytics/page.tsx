import { Metadata } from "next";
import {
  DashboardLayout,
  AnalyticsPanel
} from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Analytics - LinkedinPilot 🚁",
  description: "Track your LinkedIn automation performance and engagement metrics",
};

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Analytics Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Analytics & Performance
            </h1>
            <p className="text-gray-600 mt-2">
              Monitor your LinkedIn growth and engagement metrics
            </p>
          </div>
        </div>

        {/* Analytics Content */}
        <AnalyticsPanel />
      </div>
    </DashboardLayout>
  );
}