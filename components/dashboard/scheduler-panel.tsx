"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { 
  Calendar, 
  Clock, 
  Plus,
  Edit,
  Trash2,
  Play,
  Pause,
  CheckCircle,
  AlertCircle,
  FileText
} from "lucide-react";

interface ScheduledPost {
  id: string;
  content: string;
  scheduledTime: string;
  status: "pending" | "published" | "failed" | "draft";
  type: "auto-generated" | "manual";
  engagement?: {
    likes: number;
    comments: number;
    views: number;
  };
}

export function SchedulerPanel() {
  const [schedulerEnabled, setSchedulerEnabled] = useState(true);
  const [optimalTiming, setOptimalTiming] = useState(true);
  
  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>([
    {
      id: "1",
      content: "Just discovered an amazing automation technique that increased our LinkedIn engagement by 250%! Here's the step-by-step process...",
      scheduledTime: "2024-01-15 09:30",
      status: "pending",
      type: "auto-generated"
    },
    {
      id: "2", 
      content: "The future of AI in professional networking is here. 5 trends that will shape how we connect in 2024 🚀",
      scheduledTime: "2024-01-15 14:15",
      status: "pending",
      type: "auto-generated"
    },
    {
      id: "3",
      content: "Sharing insights from our latest client success story. Sometimes the simplest solutions deliver the biggest impact...",
      scheduledTime: "2024-01-14 11:20",
      status: "published",
      type: "manual",
      engagement: {
        likes: 89,
        comments: 23,
        views: 1240
      }
    },
    {
      id: "4",
      content: "Quick tip: Use these 3 LinkedIn features most people ignore to 10x your visibility",
      scheduledTime: "2024-01-13 16:45", 
      status: "failed",
      type: "auto-generated"
    }
  ]);

  const optimalTimes = [
    { day: "Monday", time: "09:00", reason: "High engagement start of week" },
    { day: "Tuesday", time: "11:30", reason: "Peak professional hours" },
    { day: "Wednesday", time: "14:15", reason: "Mid-week attention spike" },
    { day: "Thursday", time: "10:45", reason: "Strong network activity" },
    { day: "Friday", time: "09:30", reason: "End of week sharing" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "text-orange-600 bg-orange-100";
      case "published": return "text-green-600 bg-green-100";
      case "failed": return "text-red-600 bg-red-100";
      case "draft": return "text-gray-600 bg-gray-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return Clock;
      case "published": return CheckCircle;
      case "failed": return AlertCircle;
      case "draft": return FileText;
      default: return Clock;
    }
  };

  const handleDeletePost = (postId: string) => {
    setScheduledPosts(scheduledPosts.filter(post => post.id !== postId));
  };

  const handleReschedulePost = (postId: string) => {
    // TODO: Implement rescheduling logic
    console.log("Rescheduling post:", postId);
  };

  return (
    <Card className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-xl hover:border-gray-300/60 transition-all duration-300 rounded-xl">
      <CardHeader className="bg-gradient-to-r from-indigo-50/80 to-purple-50/80 rounded-t-xl">
        <CardTitle className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
            Content Scheduler
          </span>
        </CardTitle>
        <CardDescription className="text-gray-600 mt-2 font-medium">
          Manage your content calendar and intelligent posting schedule
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Scheduler Controls */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-xl border border-blue-200/60 shadow-sm">
            <div>
              <p className="font-bold text-gray-900">Smart Scheduling</p>
              <p className="text-sm text-gray-600 font-medium">
                Auto-schedule posts at optimal times for maximum engagement
              </p>
            </div>
            <Switch
              checked={schedulerEnabled}
              onCheckedChange={setSchedulerEnabled}
              className="data-[state=checked]:bg-blue-500"
            />
          </div>

          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-emerald-50/80 to-green-50/80 rounded-xl border border-emerald-200/60 shadow-sm">
            <div>
              <p className="font-bold text-gray-900">Optimal Timing</p>
              <p className="text-sm text-gray-600 font-medium">
                Use AI to find best posting times based on audience activity
              </p>
            </div>
            <Switch
              checked={optimalTiming}
              onCheckedChange={setOptimalTiming}
              className="data-[state=checked]:bg-emerald-500"
            />
          </div>
        </div>

        {/* Optimal Times Display */}
        {optimalTiming && (
          <div className="space-y-4">
            <h3 className="font-bold text-base text-gray-900">Recommended Posting Times</h3>
            <div className="grid grid-cols-1 gap-3">
              {optimalTimes.map((timeSlot, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200/60 rounded-xl bg-gradient-to-r from-indigo-50/60 to-purple-50/60 hover:from-indigo-50/80 hover:to-purple-50/80 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold shadow-lg">
                      {timeSlot.day}
                    </Badge>
                    <span className="font-bold text-gray-900 text-sm">{timeSlot.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">
                    {timeSlot.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scheduled Posts */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-gray-900">Upcoming & Recent Posts</h3>
            <Button size="sm" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Post
            </Button>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {scheduledPosts.map((post) => {
              const StatusIcon = getStatusIcon(post.status);
              return (
                <Card key={post.id} className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-lg hover:border-gray-300/60 transition-all duration-300 rounded-xl">
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      {/* Post Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <StatusIcon className="h-4 w-4 text-gray-500" />
                          <div>
                            <Badge 
                              className={`text-xs font-semibold shadow-lg ${
                                post.status === 'pending' ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white' :
                                post.status === 'published' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' :
                                post.status === 'failed' ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white' :
                                'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
                              }`}
                            >
                              {post.status}
                            </Badge>
                            <p className="text-xs text-gray-600 font-medium mt-1">
                              {new Date(post.scheduledTime).toLocaleString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <Badge 
                            className={`text-xs font-semibold ${
                              post.type === 'auto-generated' 
                                ? 'bg-gradient-to-r from-blue-100/80 to-indigo-100/80 text-blue-700 border border-blue-200/60' 
                                : 'bg-gradient-to-r from-purple-100/80 to-violet-100/80 text-purple-700 border border-purple-200/60'
                            }`}
                          >
                            {post.type === "auto-generated" ? "AI Generated" : "Manual"}
                          </Badge>
                        </div>
                      </div>

                      {/* Post Content */}
                      <p className="text-sm leading-relaxed line-clamp-3 text-gray-800 font-medium">
                        {post.content}
                      </p>

                      {/* Engagement Stats (for published posts) */}
                      {post.status === "published" && post.engagement && (
                        <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-200/60">
                          <div className="text-center p-2 bg-gradient-to-br from-red-50/60 to-pink-50/60 rounded-lg border border-red-100/60">
                            <p className="text-lg font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                              {post.engagement.likes}
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">Likes</p>
                          </div>
                          <div className="text-center p-2 bg-gradient-to-br from-blue-50/60 to-indigo-50/60 rounded-lg border border-blue-100/60">
                            <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                              {post.engagement.comments}
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">Comments</p>
                          </div>
                          <div className="text-center p-2 bg-gradient-to-br from-purple-50/60 to-violet-50/60 rounded-lg border border-purple-100/60">
                            <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                              {post.engagement.views}
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">Views</p>
                          </div>
                        </div>
                      )}

                      {/* Post Actions */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200/60">
                        <div className="flex items-center space-x-2">
                          {post.status === "pending" && (
                            <>
                              <Button size="sm" className="bg-white/80 border-gray-200/60 text-gray-700 hover:bg-white hover:border-gray-300/80 transition-all duration-200 rounded-lg" variant="outline">
                                <Edit className="h-3 w-3 mr-1" />
                                Edit
                              </Button>
                              <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg" variant="outline">
                                <Play className="h-3 w-3 mr-1" />
                                Post Now
                              </Button>
                            </>
                          )}
                          {post.status === "failed" && (
                            <Button 
                              size="sm" 
                              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg"
                              variant="outline"
                              onClick={() => handleReschedulePost(post.id)}
                            >
                              <Clock className="h-3 w-3 mr-1" />
                              Reschedule
                            </Button>
                          )}
                        </div>
                        
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => handleDeletePost(post.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50/80 transition-all duration-200 rounded-lg"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200/60">
          <div className="text-center p-4 bg-gradient-to-br from-orange-50/60 to-amber-50/60 rounded-xl border border-orange-200/60">
            <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              {scheduledPosts.filter(p => p.status === "pending").length}
            </p>
            <p className="text-xs text-gray-600 font-semibold mt-1">Pending Posts</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-emerald-50/60 to-green-50/60 rounded-xl border border-emerald-200/60">
            <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              {scheduledPosts.filter(p => p.status === "published").length}
            </p>
            <p className="text-xs text-gray-600 font-semibold mt-1">Published This Week</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}