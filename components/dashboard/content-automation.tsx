"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  FileText, 
  Settings, 
  Sparkles, 
  Calendar,
  TrendingUp,
  Brain,
  Target,
  Clock
} from "lucide-react";

export function ContentAutomation() {
  const [contentSettings, setContentSettings] = useState({
    enabled: true,
    frequency: [3], // posts per week
    industry: "technology",
    contentTypes: ["educational", "insights", "personal"],
    tone: "professional",
    includeHashtags: true,
    maxHashtags: [5],
    includeEmojis: false,
    autoPost: true,
    topics: "AI, LinkedIn automation, professional growth"
  });

  const industries = [
    { value: "technology", label: "Technology" },
    { value: "business", label: "Business" },
    { value: "finance", label: "Finance" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "creative", label: "Creative" },
    { value: "consulting", label: "Consulting" },
    { value: "custom", label: "Custom" }
  ];

  const contentTypeOptions = [
    { id: "educational", label: "Educational", description: "How-to guides, tips" },
    { id: "insights", label: "Industry Insights", description: "Trends, analysis" },
    { id: "personal", label: "Personal Stories", description: "Experiences, lessons" },
    { id: "polls", label: "Polls & Questions", description: "Engagement posts" },
    { id: "quotes", label: "Inspirational", description: "Quotes, motivation" },
    { id: "news", label: "News Commentary", description: "Industry updates" }
  ];

  const toneOptions = [
    { value: "professional", label: "Professional" },
    { value: "conversational", label: "Conversational" },
    { value: "authoritative", label: "Authoritative" },
    { value: "friendly", label: "Friendly" },
    { value: "thought-leader", label: "Thought Leader" }
  ];

  const handleContentTypeToggle = (typeId: string) => {
    const updated = contentSettings.contentTypes.includes(typeId)
      ? contentSettings.contentTypes.filter(t => t !== typeId)
      : [...contentSettings.contentTypes, typeId];
    
    setContentSettings({...contentSettings, contentTypes: updated});
  };

  return (
    <Card className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-xl hover:border-gray-300/60 transition-all duration-300 rounded-xl">
      <CardHeader className="bg-gradient-to-r from-yellow-50/80 to-orange-50/80 rounded-t-xl">
        <CardTitle className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
            Content Automation
          </span>
        </CardTitle>
        <CardDescription className="text-gray-600 mt-2 font-medium">
          AI-powered content generation and intelligent posting automation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Master Toggle */}
        <div className="flex items-center justify-between p-5 bg-gradient-to-r from-indigo-50/80 to-blue-50/80 rounded-xl border border-indigo-200/60 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg shadow-lg">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-900">AI Content Generation</p>
              <p className="text-sm text-gray-600 font-medium">
                Automatically create and post engaging content
              </p>
            </div>
          </div>
          <Switch
            checked={contentSettings.enabled}
            onCheckedChange={(enabled) => setContentSettings({...contentSettings, enabled})}
            className="data-[state=checked]:bg-indigo-500"
          />
        </div>

        {contentSettings.enabled && (
          <div className="space-y-6">
            {/* Posting Frequency */}
            <div className="space-y-4">
              <Label className="flex items-center space-x-3 text-base font-semibold text-gray-900">
                <div className="p-1.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
                <span>Posting Frequency</span>
              </Label>
              <div className="p-4 bg-gradient-to-br from-emerald-50/60 to-green-50/60 rounded-xl border border-emerald-200/60">
                <Slider
                  value={contentSettings.frequency}
                  onValueChange={(value) => setContentSettings({...contentSettings, frequency: value})}
                  max={7}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
                  <span>1 post/week</span>
                  <span className="font-bold text-emerald-600">
                    {contentSettings.frequency[0]} posts/week
                  </span>
                  <span>7 posts/week</span>
                </div>
              </div>
            </div>

            {/* Industry Selection */}
            <div className="space-y-3">
              <Label className="text-base font-semibold text-gray-900">Industry Focus</Label>
              <Select
                value={contentSettings.industry}
                onValueChange={(industry) => setContentSettings({...contentSettings, industry})}
              >
                <SelectTrigger className="bg-white/80 border-gray-200/60 focus:border-indigo-400 focus:ring-indigo-400/20 rounded-lg h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-sm border-gray-200/60 rounded-xl">
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value} className="hover:bg-indigo-50/80">
                      {industry.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Content Types */}
            <div className="space-y-4">
              <Label className="flex items-center space-x-3 text-base font-semibold text-gray-900">
                <div className="p-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <FileText className="h-4 w-4 text-white" />
                </div>
                <span>Content Types</span>
              </Label>
              <div className="grid grid-cols-1 gap-3">
                {contentTypeOptions.map((type) => (
                  <div
                    key={type.id}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                      contentSettings.contentTypes.includes(type.id)
                        ? 'border-indigo-400/60 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 shadow-lg'
                        : 'border-gray-200/60 bg-white/60 hover:border-gray-300/80 hover:bg-white/80'
                    }`}
                    onClick={() => handleContentTypeToggle(type.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm text-gray-900">{type.label}</p>
                        <p className="text-xs text-gray-600 font-medium mt-1">
                          {type.description}
                        </p>
                      </div>
                      {contentSettings.contentTypes.includes(type.id) && (
                        <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold shadow-lg">
                          Active
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Writing Tone */}
            <div className="space-y-3">
              <Label className="text-base font-semibold text-gray-900">Writing Tone</Label>
              <Select
                value={contentSettings.tone}
                onValueChange={(tone) => setContentSettings({...contentSettings, tone})}
              >
                <SelectTrigger className="bg-white/80 border-gray-200/60 focus:border-indigo-400 focus:ring-indigo-400/20 rounded-lg h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-sm border-gray-200/60 rounded-xl">
                  {toneOptions.map((tone) => (
                    <SelectItem key={tone.value} value={tone.value} className="hover:bg-indigo-50/80">
                      {tone.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Content Topics */}
            <div className="space-y-3">
              <Label className="text-base font-semibold text-gray-900">Content Topics</Label>
              <Textarea
                placeholder="Enter topics you want to focus on (e.g., AI, automation, leadership)"
                value={contentSettings.topics}
                onChange={(e) => setContentSettings({...contentSettings, topics: e.target.value})}
                className="min-h-[100px] bg-white/80 border-gray-200/60 focus:border-indigo-400 focus:ring-indigo-400/20 rounded-lg resize-none"
              />
              <p className="text-xs text-gray-600 font-medium bg-gray-50/80 p-2 rounded-lg">
                Separate topics with commas. The AI will generate content around these themes.
              </p>
            </div>

            {/* Hashtags Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-xl border border-blue-200/60">
                <Label className="text-base font-semibold text-gray-900">Include Hashtags</Label>
                <Switch
                  checked={contentSettings.includeHashtags}
                  onCheckedChange={(includeHashtags) => 
                    setContentSettings({...contentSettings, includeHashtags})
                  }
                  className="data-[state=checked]:bg-blue-500"
                />
              </div>
              
              {contentSettings.includeHashtags && (
                <div className="space-y-3 p-4 bg-gradient-to-br from-blue-50/40 to-indigo-50/40 rounded-xl border border-blue-200/40">
                  <Label className="text-sm font-semibold text-gray-900">Maximum Hashtags</Label>
                  <div className="px-2">
                    <Slider
                      value={contentSettings.maxHashtags}
                      onValueChange={(value) => 
                        setContentSettings({...contentSettings, maxHashtags: value})
                      }
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
                      <span>1 hashtag</span>
                      <span className="font-bold text-blue-600">
                        {contentSettings.maxHashtags[0]} hashtags
                      </span>
                      <span>10 hashtags</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Auto-posting */}
            <div className="flex items-center justify-between p-5 bg-gradient-to-r from-emerald-50/80 to-green-50/80 rounded-xl border border-emerald-200/60 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg shadow-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Auto-posting</p>
                  <p className="text-sm text-gray-600 font-medium">
                    Automatically publish generated content at optimal times
                  </p>
                </div>
              </div>
              <Switch
                checked={contentSettings.autoPost}
                onCheckedChange={(autoPost) => setContentSettings({...contentSettings, autoPost})}
                className="data-[state=checked]:bg-emerald-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-6 border-t border-gray-200/60">
              <Button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg h-11" size="sm">
                <Target className="h-4 w-4 mr-2" />
                Generate Sample Content
              </Button>
              <Button className="bg-white/80 border-gray-200/60 text-gray-700 hover:bg-white hover:border-gray-300/80 transition-all duration-200 rounded-lg h-11" variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Advanced Settings
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}