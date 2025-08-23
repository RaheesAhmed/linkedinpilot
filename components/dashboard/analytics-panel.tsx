"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Eye,
  Heart,
  MessageCircle,
  Share,
  Users,
  Target,
  Download,
  RefreshCw
} from "lucide-react";

interface MetricData {
  name: string;
  current: number;
  previous: number;
  change: number;
  trend: "up" | "down" | "neutral";
  icon: any;
  color: string;
}

export function AnalyticsPanel() {
  const [timeRange, setTimeRange] = useState("7d");
  const [loading, setLoading] = useState(false);

  const metrics: MetricData[] = [
    {
      name: "Profile Views",
      current: 2340,
      previous: 1890,
      change: 23.8,
      trend: "up",
      icon: Eye,
      color: "blue"
    },
    {
      name: "Post Likes",
      current: 1876,
      previous: 1654,
      change: 13.4,
      trend: "up",
      icon: Heart,
      color: "red"
    },
    {
      name: "Comments",
      current: 234,
      previous: 189,
      change: 23.8,
      trend: "up",
      icon: MessageCircle,
      color: "green"
    },
    {
      name: "Shares",
      current: 89,
      previous: 67,
      change: 32.8,
      trend: "up",
      icon: Share,
      color: "purple"
    },
    {
      name: "New Connections",
      current: 156,
      previous: 134,
      change: 16.4,
      trend: "up",
      icon: Users,
      color: "orange"
    },
    {
      name: "Engagement Rate",
      current: 8.2,
      previous: 6.1,
      change: 34.4,
      trend: "up",
      icon: TrendingUp,
      color: "emerald"
    }
  ];

  const topPosts = [
    {
      id: "1",
      content: "Just launched our AI automation tool that increased LinkedIn engagement by 300%! Here's what we learned...",
      engagement: {
        likes: 234,
        comments: 45,
        shares: 12,
        views: 3400
      },
      engagementRate: 8.5,
      date: "2 days ago"
    },
    {
      id: "2", 
      content: "5 LinkedIn automation mistakes that could get your account banned. Thread 🧵",
      engagement: {
        likes: 189,
        comments: 67,
        shares: 8,
        views: 2890
      },
      engagementRate: 9.1,
      date: "4 days ago"
    },
    {
      id: "3",
      content: "The psychology behind viral LinkedIn content - a data-driven analysis of 10,000 posts",
      engagement: {
        likes: 156,
        comments: 34,
        shares: 15,
        views: 2340
      },
      engagementRate: 8.8,
      date: "6 days ago"
    }
  ];

  const handleRefresh = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 bg-gradient-to-br from-blue-100/80 to-blue-200/60 border border-blue-200/60",
      red: "text-red-600 bg-gradient-to-br from-red-100/80 to-red-200/60 border border-red-200/60", 
      green: "text-green-600 bg-gradient-to-br from-green-100/80 to-green-200/60 border border-green-200/60",
      purple: "text-purple-600 bg-gradient-to-br from-purple-100/80 to-purple-200/60 border border-purple-200/60",
      orange: "text-orange-600 bg-gradient-to-br from-orange-100/80 to-orange-200/60 border border-orange-200/60",
      emerald: "text-emerald-600 bg-gradient-to-br from-emerald-100/80 to-emerald-200/60 border border-emerald-200/60"
    };
    return colorMap[color as keyof typeof colorMap] || "text-gray-600 bg-gradient-to-br from-gray-100/80 to-gray-200/60 border border-gray-200/60";
  };

  return (
    <Card className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-xl hover:border-gray-300/60 transition-all duration-300 rounded-xl">
      <CardHeader className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                Analytics & Performance
              </span>
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2 font-medium">
              Track your LinkedIn growth and engagement with advanced insights
            </CardDescription>
          </div>
          <div className="flex items-center space-x-3">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-36 bg-white/80 border-gray-200/60 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-sm border-gray-200/60 rounded-xl">
                <SelectItem value="24h" className="hover:bg-blue-50/80">Last 24h</SelectItem>
                <SelectItem value="7d" className="hover:bg-blue-50/80">Last 7 days</SelectItem>
                <SelectItem value="30d" className="hover:bg-blue-50/80">Last 30 days</SelectItem>
                <SelectItem value="90d" className="hover:bg-blue-50/80">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRefresh}
              disabled={loading}
              className="bg-white/80 border-gray-200/60 text-gray-700 hover:bg-white hover:border-gray-300/80 transition-all duration-200 rounded-lg"
            >
              {loading ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <div 
              key={metric.name}
              className="p-5 bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-xl hover:bg-white/80 hover:shadow-lg hover:border-gray-300/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2.5 rounded-xl shadow-lg ${getColorClasses(metric.color)}`}>
                  <metric.icon className="h-5 w-5" />
                </div>
                <div className="flex items-center space-x-1">
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  ) : metric.trend === "down" ? (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  ) : null}
                  <span className={`text-sm font-bold px-2 py-1 rounded-lg ${
                    metric.trend === "up" ? "text-green-700 bg-green-100/80" : 
                    metric.trend === "down" ? "text-red-700 bg-red-100/80" : 
                    "text-gray-700 bg-gray-100/80"
                  }`}>
                    {metric.change > 0 ? "+" : ""}{metric.change.toFixed(1)}%
                  </span>
                </div>
              </div>
              <div>
                <p className={`text-2xl font-bold bg-gradient-to-r ${metric.color === 'blue' ? 'from-blue-600 to-indigo-600' :
                  metric.color === 'red' ? 'from-red-600 to-pink-600' :
                  metric.color === 'green' ? 'from-green-600 to-emerald-600' :
                  metric.color === 'purple' ? 'from-purple-600 to-violet-600' :
                  metric.color === 'orange' ? 'from-orange-600 to-amber-600' :
                  metric.color === 'emerald' ? 'from-emerald-600 to-teal-600' :
                  'from-gray-600 to-gray-700'} bg-clip-text text-transparent`}>
                  {metric.name === "Engagement Rate" ? 
                    `${metric.current}%` : 
                    metric.current.toLocaleString()
                  }
                </p>
                <p className="text-sm font-semibold text-gray-900 mt-1">{metric.name}</p>
                <p className="text-xs text-gray-600 font-medium mt-1">
                  vs {metric.previous.toLocaleString()} last period
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Top Performing Posts */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
              <span>Top Performing Posts</span>
            </h3>
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg" variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
          
          <div className="space-y-3">
            {topPosts.map((post, index) => (
              <Card key={post.id} className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-lg hover:border-gray-300/60 transition-all duration-300 rounded-xl">
                <CardContent className="pt-5">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center border border-blue-200/60 shadow-lg">
                        <span className="text-sm font-bold text-blue-600">
                          #{index + 1}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <p className="text-sm leading-relaxed text-gray-800 font-medium">{post.content}</p>
                      
                      <div className="grid grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-gradient-to-br from-red-50/60 to-pink-50/60 rounded-lg border border-red-100/60">
                          <p className="text-lg font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                            {post.engagement.likes}
                          </p>
                          <p className="text-xs text-gray-600 font-semibold mt-1">Likes</p>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-blue-50/60 to-indigo-50/60 rounded-lg border border-blue-100/60">
                          <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            {post.engagement.comments}
                          </p>
                          <p className="text-xs text-gray-600 font-semibold mt-1">Comments</p>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-green-50/60 to-emerald-50/60 rounded-lg border border-green-100/60">
                          <p className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            {post.engagement.shares}
                          </p>
                          <p className="text-xs text-gray-600 font-semibold mt-1">Shares</p>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-purple-50/60 to-violet-50/60 rounded-lg border border-purple-100/60">
                          <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                            {post.engagement.views.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-600 font-semibold mt-1">Views</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-semibold shadow-lg">
                          {post.engagementRate}% engagement rate
                        </Badge>
                        <span className="text-xs text-gray-600 font-medium bg-gray-100/60 px-2 py-1 rounded-md">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Goals Progress */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-3">
            <div className="p-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg">
              <Target className="h-5 w-5 text-white" />
            </div>
            <span>Monthly Goals</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3 p-4 bg-gradient-to-br from-blue-50/60 to-indigo-50/60 rounded-xl border border-blue-200/60">
              <div className="flex justify-between text-sm">
                <span className="font-semibold text-gray-900">New Connections</span>
                <span className="font-bold text-blue-600">340 / 400</span>
              </div>
              <Progress value={85} className="h-3 bg-blue-100/60 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-indigo-600" />
              <p className="text-xs text-gray-600 font-medium">
                15 days remaining • On track
              </p>
            </div>
            
            <div className="space-y-3 p-4 bg-gradient-to-br from-emerald-50/60 to-green-50/60 rounded-xl border border-emerald-200/60">
              <div className="flex justify-between text-sm">
                <span className="font-semibold text-gray-900">Engagement Rate</span>
                <span className="font-bold text-emerald-600">8.2% / 10%</span>
              </div>
              <Progress value={82} className="h-3 bg-emerald-100/60 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-green-600" />
              <p className="text-xs text-gray-600 font-medium">
                Exceeding expectations!
              </p>
            </div>
            
            <div className="space-y-3 p-4 bg-gradient-to-br from-purple-50/60 to-violet-50/60 rounded-xl border border-purple-200/60">
              <div className="flex justify-between text-sm">
                <span className="font-semibold text-gray-900">Content Posts</span>
                <span className="font-bold text-purple-600">18 / 20</span>
              </div>
              <Progress value={90} className="h-3 bg-purple-100/60 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-violet-600" />
              <p className="text-xs text-gray-600 font-medium">
                2 posts behind schedule
              </p>
            </div>
            
            <div className="space-y-3 p-4 bg-gradient-to-br from-orange-50/60 to-amber-50/60 rounded-xl border border-orange-200/60">
              <div className="flex justify-between text-sm">
                <span className="font-semibold text-gray-900">Profile Views</span>
                <span className="font-bold text-orange-600">2,340 / 3,000</span>
              </div>
              <Progress value={78} className="h-3 bg-orange-100/60 [&>div]:bg-gradient-to-r [&>div]:from-orange-500 [&>div]:to-amber-600" />
              <p className="text-xs text-gray-600 font-medium">
                Great progress this month
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}