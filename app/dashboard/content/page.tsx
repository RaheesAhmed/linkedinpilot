import { Metadata } from "next";
import {
  DashboardLayout,
  ContentAutomation
} from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Content Automation - LinkedinPilot 🚁",
  description: "Configure AI-powered content generation and automation settings",
};

export default function ContentPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Content Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Content Automation
            </h1>
            <p className="text-gray-600 mt-2">
              Configure AI-powered content generation and posting automation
            </p>
          </div>
        </div>

        {/* Content Automation Settings */}
        <ContentAutomation />
      </div>
    </DashboardLayout>
  );
}