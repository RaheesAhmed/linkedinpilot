"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Calendar,
  Target,
  Zap,
  Clock,
  CheckCircle
} from "lucide-react";

export function DashboardOverview() {
  const metrics = [
    {
      title: "Post Engagement",
      value: "156%",
      change: "+23%",
      trend: "up",
      icon: TrendingUp,
      description: "vs last month"
    },
    {
      title: "New Connections",
      value: "89",
      change: "+12",
      trend: "up", 
      icon: Users,
      description: "this week"
    },
    {
      title: "Comments Made",
      value: "247",
      change: "+34",
      trend: "up",
      icon: MessageCircle,
      description: "this week"
    },
    {
      title: "Posts Scheduled",
      value: "15",
      change: "5 pending",
      trend: "neutral",
      icon: Calendar,
      description: "next 7 days"
    }
  ];

  const automationStatus = [
    { name: "Content Generation", status: "active", progress: 85 },
    { name: "Auto Engagement", status: "active", progress: 92 },
    { name: "Connection Requests", status: "paused", progress: 0 },
    { name: "Profile Optimization", status: "complete", progress: 100 }
  ];

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title} className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-lg hover:border-gray-300/60 transition-all duration-300 hover:-translate-y-1 rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-gray-700">
                {metric.title}
              </CardTitle>
              <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50">
                <metric.icon className="h-5 w-5 text-indigo-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{metric.value}</div>
              <div className="flex items-center space-x-2 text-sm mt-2">
                <span className={`font-medium px-2 py-1 rounded-full text-xs ${
                  metric.trend === 'up' ? 'text-emerald-700 bg-emerald-50' : 
                  metric.trend === 'down' ? 'text-red-700 bg-red-50' : 
                  'text-gray-700 bg-gray-50'
                }`}>
                  {metric.change}
                </span>
                <span className="text-gray-500">{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Automation Status & Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Automation Status */}
        <Card className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-50 to-cyan-50">
                <Zap className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="text-lg font-bold text-gray-900">Automation Status</span>
            </CardTitle>
            <CardDescription className="text-gray-600 font-medium">
              Current status of your LinkedIn automation tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {automationStatus.map((item) => (
              <div key={item.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">{item.name}</span>
                  <Badge 
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      item.status === 'active' ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white' :
                      item.status === 'complete' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' : 
                      'bg-gray-100 text-gray-700 border border-gray-300'
                    }`}
                  >
                    {item.status === 'active' && <Zap className="w-3 h-3 mr-1" />}
                    {item.status === 'complete' && <CheckCircle className="w-3 h-3 mr-1" />}
                    {item.status === 'paused' && <Clock className="w-3 h-3 mr-1" />}
                    {item.status}
                  </Badge>
                </div>
                <div className="relative">
                  <Progress value={item.progress} className="h-3 bg-gray-100 rounded-full overflow-hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" 
                       style={{ width: `${item.progress}%` }}></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Goals */}
        <Card className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-lg transition-all duration-300 rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50">
                <Target className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-lg font-bold text-gray-900">Weekly Goals</span>
            </CardTitle>
            <CardDescription className="text-gray-600 font-medium">
              Track your LinkedIn growth objectives
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">New Connections</span>
                <span className="text-sm font-bold text-gray-900 bg-gray-50 px-2 py-1 rounded-lg">89 / 100</span>
              </div>
              <div className="relative">
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-500" style={{ width: '89%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Content Posts</span>
                <span className="text-sm font-bold text-gray-900 bg-gray-50 px-2 py-1 rounded-lg">5 / 7</span>
              </div>
              <div className="relative">
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-all duration-500" style={{ width: '71%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Engagement Rate</span>
                <span className="text-sm font-bold text-gray-900 bg-gray-50 px-2 py-1 rounded-lg">8.2% / 10%</span>
              </div>
              <div className="relative">
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-500" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Profile Views</span>
                <span className="text-sm font-bold text-gray-900 bg-gray-50 px-2 py-1 rounded-lg">156 / 200</span>
              </div>
              <div className="relative">
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full transition-all duration-500" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}