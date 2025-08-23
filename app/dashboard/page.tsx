import { Metadata } from "next";
import {
  DashboardLayout,
  DashboardOverview,
  AccountManager
} from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Dashboard - LinkedinPilot 🚁",
  description: "Control center for your LinkedIn automation and growth strategy",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-600 text-lg font-medium">
              Configure your AI-powered LinkedIn growth strategy
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl border border-emerald-200/50">
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm font-semibold text-emerald-700">
                AI Agent Active
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard Overview */}
        <DashboardOverview />

        {/* Main Dashboard Content */}
        <div className="space-y-8">
          <AccountManager />
        </div>
      </div>
    </DashboardLayout>
  );
}