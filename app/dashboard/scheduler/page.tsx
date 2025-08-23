import { Metadata } from "next";
import {
  DashboardLayout,
  SchedulerPanel
} from "@/components/dashboard";

export const metadata: Metadata = {
  title: "Content Scheduler - LinkedinPilot 🚁",
  description: "Schedule and manage your LinkedIn content calendar",
};

export default function SchedulerPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Scheduler Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Content Scheduler
            </h1>
            <p className="text-gray-600 mt-2">
              Plan and schedule your LinkedIn posts for optimal engagement
            </p>
          </div>
        </div>

        {/* Scheduler Content */}
        <SchedulerPanel />
      </div>
    </DashboardLayout>
  );
}