import { Metadata } from "next";
import {
  DashboardLayout
} from "@/components/dashboard";
import { SettingsPanel } from "@/components/dashboard/settings-panel";

export const metadata: Metadata = {
  title: "Settings - LinkedinPilot 🚁",
  description: "Configure system settings, prompts, and integrations",
};

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Settings Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Settings
            </h1>
            <p className="text-gray-600 mt-2">
              Configure system prompts, MCP servers, and other preferences
            </p>
          </div>
        </div>

        {/* Settings Content */}
        <SettingsPanel />
      </div>
    </DashboardLayout>
  );
}