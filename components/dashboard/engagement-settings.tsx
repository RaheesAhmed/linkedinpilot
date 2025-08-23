"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MessageCircle, 
  Users, 
  Target,
  Settings,
  Shield,
  Clock,
  Zap
} from "lucide-react";

export function EngagementSettings() {
  const [engagementSettings, setEngagementSettings] = useState({
    autoLike: true,
    autoComment: true,
    autoConnect: false,
    likesPerHour: [15],
    commentsPerHour: [3],
    connectionsPerDay: [5],
    targetAudience: "industry-professionals",
    commentStyle: "professional",
    connectionMessage: "Hi {{name}}, I'd love to connect and expand my professional network. Looking forward to sharing insights!",
    safetyMode: true,
    activityHours: {
      start: "09:00",
      end: "17:00"
    }
  });

  const targetAudienceOptions = [
    { value: "industry-professionals", label: "Industry Professionals" },
    { value: "potential-clients", label: "Potential Clients" },
    { value: "thought-leaders", label: "Thought Leaders" },
    { value: "peers", label: "Peers & Colleagues" },
    { value: "decision-makers", label: "Decision Makers" },
    { value: "custom", label: "Custom Criteria" }
  ];

  const commentStyles = [
    { value: "professional", label: "Professional", description: "Formal, business-focused" },
    { value: "friendly", label: "Friendly", description: "Warm, personable tone" },
    { value: "insightful", label: "Insightful", description: "Thoughtful, analytical" },
    { value: "supportive", label: "Supportive", description: "Encouraging, positive" }
  ];

  return (
    <Card className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-xl hover:border-gray-300/60 transition-all duration-300 rounded-xl">
      <CardHeader className="bg-gradient-to-r from-orange-50/80 to-red-50/80 rounded-t-xl">
        <CardTitle className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
            Engagement Automation
          </span>
        </CardTitle>
        <CardDescription className="text-gray-600 mt-2 font-medium">
          Automate likes, comments, and connections with intelligent algorithms
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Safety Mode */}
        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-yellow-50/80 to-amber-50/80 rounded-xl border border-yellow-200/60 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg shadow-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Safety Mode</p>
              <p className="text-sm text-gray-600 font-medium">
                Intelligent rate limiting prevents aggressive automation patterns
              </p>
            </div>
          </div>
          <Switch
            checked={engagementSettings.safetyMode}
            onCheckedChange={(safetyMode) => 
              setEngagementSettings({...engagementSettings, safetyMode})
            }
            className="data-[state=checked]:bg-yellow-500"
          />
        </div>

        {/* Auto-Like Settings */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50/60 to-pink-50/60 rounded-xl border border-red-200/60">
            <Label className="flex items-center space-x-3 text-base font-semibold text-gray-900">
              <div className="p-1.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <span>Auto-Like Posts</span>
            </Label>
            <Switch
              checked={engagementSettings.autoLike}
              onCheckedChange={(autoLike) => 
                setEngagementSettings({...engagementSettings, autoLike})
              }
              className="data-[state=checked]:bg-red-500"
            />
          </div>
          
          {engagementSettings.autoLike && (
            <div className="space-y-4 pl-4 ml-4 border-l-4 border-gradient-to-b from-red-300/60 to-pink-300/60 bg-gradient-to-br from-red-50/40 to-pink-50/40 p-4 rounded-r-xl">
              <Label className="text-sm font-semibold text-gray-900">Likes per Hour</Label>
              <div className="px-2">
                <Slider
                  value={engagementSettings.likesPerHour}
                  onValueChange={(value) => 
                    setEngagementSettings({...engagementSettings, likesPerHour: value})
                  }
                  max={30}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
                  <span>1/hour</span>
                  <span className="font-bold text-red-600">
                    {engagementSettings.likesPerHour[0]}/hour
                  </span>
                  <span>30/hour</span>
                </div>
              </div>
              {engagementSettings.likesPerHour[0] > 20 && (
                <div className="text-xs text-orange-700 bg-gradient-to-r from-orange-100/80 to-yellow-100/80 p-3 rounded-lg border border-orange-200/60 font-medium">
                  ⚠️ High frequency may trigger LinkedIn rate limits
                </div>
              )}
            </div>
          )}
        </div>

        {/* Auto-Comment Settings */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50/60 to-indigo-50/60 rounded-xl border border-blue-200/60">
            <Label className="flex items-center space-x-3 text-base font-semibold text-gray-900">
              <div className="p-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <span>Auto-Comment</span>
            </Label>
            <Switch
              checked={engagementSettings.autoComment}
              onCheckedChange={(autoComment) => 
                setEngagementSettings({...engagementSettings, autoComment})
              }
              className="data-[state=checked]:bg-blue-500"
            />
          </div>
          
          {engagementSettings.autoComment && (
            <div className="space-y-4 pl-4 ml-4 border-l-4 border-gradient-to-b from-blue-300/60 to-indigo-300/60 bg-gradient-to-br from-blue-50/40 to-indigo-50/40 p-4 rounded-r-xl">
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-900">Comments per Hour</Label>
                <div className="px-2">
                  <Slider
                    value={engagementSettings.commentsPerHour}
                    onValueChange={(value) => 
                      setEngagementSettings({...engagementSettings, commentsPerHour: value})
                    }
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
                    <span>1/hour</span>
                    <span className="font-bold text-blue-600">
                      {engagementSettings.commentsPerHour[0]}/hour
                    </span>
                    <span>10/hour</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-900">Comment Style</Label>
                <Select
                  value={engagementSettings.commentStyle}
                  onValueChange={(commentStyle) => 
                    setEngagementSettings({...engagementSettings, commentStyle})
                  }
                >
                  <SelectTrigger className="bg-white/80 border-gray-200/60 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-sm border-gray-200/60 rounded-xl">
                    {commentStyles.map((style) => (
                      <SelectItem key={style.value} value={style.value} className="hover:bg-blue-50/80">
                        <div>
                          <p className="font-semibold text-gray-900">{style.label}</p>
                          <p className="text-xs text-gray-600">{style.description}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>

        {/* Auto-Connect Settings */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50/60 to-green-50/60 rounded-xl border border-emerald-200/60">
            <Label className="flex items-center space-x-3 text-base font-semibold text-gray-900">
              <div className="p-1.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span>Auto-Connect</span>
            </Label>
            <Switch
              checked={engagementSettings.autoConnect}
              onCheckedChange={(autoConnect) => 
                setEngagementSettings({...engagementSettings, autoConnect})
              }
              className="data-[state=checked]:bg-emerald-500"
            />
          </div>
          
          {engagementSettings.autoConnect && (
            <div className="space-y-4 pl-4 ml-4 border-l-4 border-gradient-to-b from-emerald-300/60 to-green-300/60 bg-gradient-to-br from-emerald-50/40 to-green-50/40 p-4 rounded-r-xl">
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-900">Connections per Day</Label>
                <div className="px-2">
                  <Slider
                    value={engagementSettings.connectionsPerDay}
                    onValueChange={(value) => 
                      setEngagementSettings({...engagementSettings, connectionsPerDay: value})
                    }
                    max={20}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
                    <span>1/day</span>
                    <span className="font-bold text-emerald-600">
                      {engagementSettings.connectionsPerDay[0]}/day
                    </span>
                    <span>20/day</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-900">Target Audience</Label>
                <Select
                  value={engagementSettings.targetAudience}
                  onValueChange={(targetAudience) => 
                    setEngagementSettings({...engagementSettings, targetAudience})
                  }
                >
                  <SelectTrigger className="bg-white/80 border-gray-200/60 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-sm border-gray-200/60 rounded-xl">
                    {targetAudienceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="hover:bg-emerald-50/80">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-900">Connection Message Template</Label>
                <Textarea
                  placeholder="Personalized connection message..."
                  value={engagementSettings.connectionMessage}
                  onChange={(e) => 
                    setEngagementSettings({
                      ...engagementSettings, 
                      connectionMessage: e.target.value
                    })
                  }
                  className="min-h-[100px] bg-white/80 border-gray-200/60 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-lg resize-none"
                />
                <p className="text-xs text-gray-600 font-medium bg-gray-50/80 p-2 rounded-lg">
                  Use {'{name}'} for personalization. Keep it under 300 characters.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Activity Hours */}
        <div className="space-y-4">
          <Label className="flex items-center space-x-3 text-base font-semibold text-gray-900">
            <div className="p-1.5 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg">
              <Clock className="h-4 w-4 text-white" />
            </div>
            <span>Active Hours</span>
          </Label>
          <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-to-br from-purple-50/60 to-violet-50/60 rounded-xl border border-purple-200/60">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-900">Start Time</Label>
              <input
                type="time"
                value={engagementSettings.activityHours.start}
                onChange={(e) => setEngagementSettings({
                  ...engagementSettings,
                  activityHours: {
                    ...engagementSettings.activityHours,
                    start: e.target.value
                  }
                })}
                className="w-full p-3 border border-gray-200/60 rounded-lg bg-white/80 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-900">End Time</Label>
              <input
                type="time"
                value={engagementSettings.activityHours.end}
                onChange={(e) => setEngagementSettings({
                  ...engagementSettings,
                  activityHours: {
                    ...engagementSettings.activityHours,
                    end: e.target.value
                  }
                })}
                className="w-full p-3 border border-gray-200/60 rounded-lg bg-white/80 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-200"
              />
            </div>
          </div>
          <p className="text-xs text-gray-600 font-medium bg-gray-50/80 p-2 rounded-lg">
            Automation will only run during these hours to ensure natural engagement patterns
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-6 border-t border-gray-200/60">
          <Button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg h-11" size="sm">
            <Target className="h-4 w-4 mr-2" />
            Test Settings
          </Button>
          <Button className="bg-white/80 border-gray-200/60 text-gray-700 hover:bg-white hover:border-gray-300/80 transition-all duration-200 rounded-lg h-11" variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Advanced Rules
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}