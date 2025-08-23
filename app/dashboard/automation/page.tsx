import { Metadata } from "next";
import {
  DashboardLayout,
  EngagementSettings
} from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Automation Settings - LinkedinPilot 🚁",
  description: "Configure your LinkedIn automation and engagement settings",
};

export default function AutomationPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Automation Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Automation Settings
            </h1>
            <p className="text-gray-600 mt-2">
              Configure automated likes, comments, and connection requests
            </p>
          </div>
        </div>

        {/* Automation Content */}
        <EngagementSettings />
      </div>
    </DashboardLayout>
  );
}