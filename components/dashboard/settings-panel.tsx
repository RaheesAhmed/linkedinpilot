"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  Brain, 
  Server, 
  Globe,
  Key,
  Save,
  Plus,
  Trash2,
  CheckCircle,
  AlertCircle,
  Palette,
  Bell,
  Shield
} from "lucide-react";

interface MCPServer {
  id: string;
  name: string;
  endpoint: string;
  apiKey?: string;
  status: "connected" | "disconnected" | "error";
}

export function SettingsPanel() {
  const [systemPrompt, setSystemPrompt] = useState(`You are LinkedinPilot, an advanced AI assistant specialized in LinkedIn automation and professional networking. Your role is to:

1. Generate high-quality, engaging LinkedIn content
2. Provide strategic advice for professional networking
3. Analyze profiles and suggest optimizations
4. Automate engagement while maintaining authenticity
5. Research industry trends and insights

Always maintain a professional, helpful, and insightful tone. Focus on providing value and building genuine professional relationships.`);

  const [mcpServers, setMcpServers] = useState<MCPServer[]>([
    {
      id: "1",
      name: "Tavily Search",
      endpoint: "tavily://search",
      apiKey: "****-****-****",
      status: "connected"
    },
    {
      id: "2", 
      name: "Unipile LinkedIn",
      endpoint: "unipile://linkedin",
      apiKey: "****-****-****",
      status: "connected"
    }
  ]);

  const [newServer, setNewServer] = useState({
    name: "",
    endpoint: "",
    apiKey: ""
  });

  const [settings, setSettings] = useState({
    autoSave: true,
    notifications: true,
    darkMode: false,
    rateLimiting: true,
    safeMode: true,
    apiTimeout: "30",
    maxRetries: "3",
    language: "en"
  });

  const addMCPServer = () => {
    if (newServer.name && newServer.endpoint) {
      const server: MCPServer = {
        id: Date.now().toString(),
        name: newServer.name,
        endpoint: newServer.endpoint,
        apiKey: newServer.apiKey,
        status: "disconnected"
      };
      setMcpServers([...mcpServers, server]);
      setNewServer({ name: "", endpoint: "", apiKey: "" });
    }
  };

  const removeMCPServer = (id: string) => {
    setMcpServers(mcpServers.filter(server => server.id !== id));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "error": return <AlertCircle className="h-4 w-4 text-red-500" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const handleSaveSettings = () => {
    // TODO: Implement settings save logic
    console.log("Saving settings...", { systemPrompt, mcpServers, settings });
  };

  return (
    <div className="space-y-6">
      {/* System Prompt Configuration */}
      <Card className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-xl hover:border-gray-300/60 transition-all duration-300 rounded-xl">
        <CardHeader className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-t-xl">
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              System Prompt
            </span>
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2 font-medium">
            Configure the AI agent's behavior and personality for optimal performance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 p-6">
          <div className="space-y-3">
            <Label htmlFor="system-prompt" className="text-base font-semibold text-gray-900">
              System Prompt
            </Label>
            <Textarea
              id="system-prompt"
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              rows={8}
              className="font-mono text-sm bg-white/80 border-gray-200/60 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg resize-none"
              placeholder="Enter your custom system prompt..."
            />
          </div>
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50/80 to-blue-50/60 rounded-lg border border-gray-200/60">
            <p className="text-sm text-gray-600 font-medium">
              {systemPrompt.length} characters
            </p>
            <Button size="sm" onClick={() => setSystemPrompt("")} className="bg-white/80 border-gray-200/60 text-gray-700 hover:bg-white hover:border-gray-300/80 transition-all duration-200 rounded-lg" variant="outline">
              Reset to Default
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* MCP Servers Configuration */}
      <Card className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-xl hover:border-gray-300/60 transition-all duration-300 rounded-xl">
        <CardHeader className="bg-gradient-to-r from-emerald-50/80 to-green-50/80 rounded-t-xl">
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg shadow-lg">
              <Server className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              MCP Servers
            </span>
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2 font-medium">
            Manage Model Context Protocol server connections for enhanced capabilities
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          {/* Existing Servers */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-gray-900">Connected Servers</h4>
            {mcpServers.map((server) => (
              <div key={server.id} className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-xl hover:bg-white/80 hover:shadow-lg hover:border-gray-300/60 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-200/60">
                    {getStatusIcon(server.status)}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{server.name}</p>
                    <p className="text-xs text-gray-600 font-medium">{server.endpoint}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge 
                    className={`text-xs font-semibold shadow-lg ${
                      server.status === "connected" 
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" 
                        : "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
                    }`}
                  >
                    {server.status}
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeMCPServer(server.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50/80 transition-all duration-200 rounded-lg"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent"></div>

          {/* Add New Server */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-gray-900">Add New Server</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="server-name" className="text-sm font-semibold text-gray-900">
                  Server Name
                </Label>
                <Input
                  id="server-name"
                  value={newServer.name}
                  onChange={(e) => setNewServer({...newServer, name: e.target.value})}
                  placeholder="e.g., Custom Search API"
                  className="bg-white/80 border-gray-200/60 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="server-endpoint" className="text-sm font-semibold text-gray-900">
                  Endpoint
                </Label>
                <Input
                  id="server-endpoint"
                  value={newServer.endpoint}
                  onChange={(e) => setNewServer({...newServer, endpoint: e.target.value})}
                  placeholder="protocol://endpoint"
                  className="bg-white/80 border-gray-200/60 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="server-key" className="text-sm font-semibold text-gray-900">
                  API Key (Optional)
                </Label>
                <Input
                  id="server-key"
                  type="password"
                  value={newServer.apiKey}
                  onChange={(e) => setNewServer({...newServer, apiKey: e.target.value})}
                  placeholder="Enter API key"
                  className="bg-white/80 border-gray-200/60 focus:border-emerald-400 focus:ring-emerald-400/20 rounded-lg"
                />
              </div>
            </div>
            <Button onClick={addMCPServer} size="sm" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg">
              <Plus className="h-4 w-4 mr-2" />
              Add Server
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* General Settings */}
      <Card className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-xl hover:border-gray-300/60 transition-all duration-300 rounded-xl">
        <CardHeader className="bg-gradient-to-r from-purple-50/80 to-violet-50/80 rounded-t-xl">
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg shadow-lg">
              <Settings className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              General Settings
            </span>
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2 font-medium">
            Configure application behavior and preferences for optimal experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          {/* Application Settings */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-gray-900">Application</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50/60 to-indigo-50/60 rounded-xl border border-blue-200/60">
                <div>
                  <p className="font-bold text-sm text-gray-900">Auto-save Settings</p>
                  <p className="text-xs text-gray-600 font-medium">Automatically save changes as you make them</p>
                </div>
                <Switch
                  checked={settings.autoSave}
                  onCheckedChange={(checked) => setSettings({...settings, autoSave: checked})}
                  className="data-[state=checked]:bg-blue-500"
                />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50/60 to-green-50/60 rounded-xl border border-emerald-200/60">
                <div>
                  <p className="font-bold text-sm text-gray-900">Notifications</p>
                  <p className="text-xs text-gray-600 font-medium">Enable system notifications and alerts</p>
                </div>
                <Switch
                  checked={settings.notifications}
                  onCheckedChange={(checked) => setSettings({...settings, notifications: checked})}
                  className="data-[state=checked]:bg-emerald-500"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50/60 to-amber-50/60 rounded-xl border border-yellow-200/60">
                <div>
                  <p className="font-bold text-sm text-gray-900">Safe Mode</p>
                  <p className="text-xs text-gray-600 font-medium">Enhanced safety checks and rate limiting</p>
                </div>
                <Switch
                  checked={settings.safeMode}
                  onCheckedChange={(checked) => setSettings({...settings, safeMode: checked})}
                  className="data-[state=checked]:bg-yellow-500"
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent"></div>

          {/* API Settings */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-gray-900">API Configuration</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="api-timeout" className="text-sm font-semibold text-gray-900">
                  API Timeout (seconds)
                </Label>
                <Input
                  id="api-timeout"
                  type="number"
                  value={settings.apiTimeout}
                  onChange={(e) => setSettings({...settings, apiTimeout: e.target.value})}
                  className="bg-white/80 border-gray-200/60 focus:border-purple-400 focus:ring-purple-400/20 rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-retries" className="text-sm font-semibold text-gray-900">
                  Max Retries
                </Label>
                <Input
                  id="max-retries"
                  type="number"
                  value={settings.maxRetries}
                  onChange={(e) => setSettings({...settings, maxRetries: e.target.value})}
                  className="bg-white/80 border-gray-200/60 focus:border-purple-400 focus:ring-purple-400/20 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent"></div>

          {/* Localization */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-gray-900">Localization</h4>
            <div className="space-y-2">
              <Label htmlFor="language" className="text-sm font-semibold text-gray-900">
                Language
              </Label>
              <Select value={settings.language} onValueChange={(value) => setSettings({...settings, language: value})}>
                <SelectTrigger className="w-48 bg-white/80 border-gray-200/60 focus:border-purple-400 focus:ring-purple-400/20 rounded-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-sm border-gray-200/60 rounded-xl">
                  <SelectItem value="en" className="hover:bg-purple-50/80">English</SelectItem>
                  <SelectItem value="es" className="hover:bg-purple-50/80">Spanish</SelectItem>
                  <SelectItem value="fr" className="hover:bg-purple-50/80">French</SelectItem>
                  <SelectItem value="de" className="hover:bg-purple-50/80">German</SelectItem>
                  <SelectItem value="zh" className="hover:bg-purple-50/80">Chinese</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Settings */}
      <div className="flex justify-end space-x-4 pt-6">
        <Button className="bg-white/80 border-gray-200/60 text-gray-700 hover:bg-white hover:border-gray-300/80 transition-all duration-200 rounded-lg" variant="outline">
          Reset All
        </Button>
        <Button onClick={handleSaveSettings} className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg">
          <Save className="h-4 w-4 mr-2" />
          Save Settings
        </Button>
      </div>
    </div>
  );
}