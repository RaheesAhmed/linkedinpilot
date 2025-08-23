"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Plus, 
  Settings, 
  CheckCircle, 
  AlertCircle, 
  Trash2,
  RefreshCw,
  Linkedin,
  User
} from "lucide-react";

interface LinkedInAccount {
  id: string;
  name: string;
  email: string;
  status: "connected" | "error" | "pending";
  lastSync: string;
  engagement: {
    posts: number;
    connections: number;
    engagement_rate: number;
  };
}

export function AccountManager() {
  const [accounts, setAccounts] = useState<LinkedInAccount[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com", 
      status: "connected",
      lastSync: "2 minutes ago",
      engagement: {
        posts: 12,
        connections: 1250,
        engagement_rate: 8.2
      }
    }
  ]);

  const [showAddAccount, setShowAddAccount] = useState(false);
  const [newAccount, setNewAccount] = useState({
    email: "",
    password: "",
    authMethod: "credentials"
  });

  const handleAddAccount = () => {
    // TODO: Integrate with Unipile API to connect LinkedIn account
    console.log("Adding account:", newAccount);
    setShowAddAccount(false);
    setNewAccount({ email: "", password: "", authMethod: "credentials" });
  };

  const handleRefreshAccount = (accountId: string) => {
    // TODO: Refresh account connection status
    console.log("Refreshing account:", accountId);
  };

  const handleRemoveAccount = (accountId: string) => {
    setAccounts(accounts.filter(acc => acc.id !== accountId));
  };

  return (
    <Card className="bg-white/60  border-gray-200/60 hover:bg-white/80 hover:shadow-xl hover:border-gray-300/60 transition-all duration-300 rounded-xl">
      <CardHeader className="bg-gradient-to-r from-indigo-50/80 to-purple-50/80 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg">
                <Linkedin className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent">
                LinkedIn Accounts
              </span>
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2 font-medium">
              Manage your connected LinkedIn accounts with advanced automation
            </CardDescription>
          </div>
          <Button 
            size="sm" 
            onClick={() => setShowAddAccount(!showAddAccount)}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Account
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Add Account Form */}
        {showAddAccount && (
          <Card className="border-2 border-dashed border-indigo-200/60 bg-gradient-to-br from-indigo-50/40 to-purple-50/40 backdrop-blur-sm hover:border-indigo-300/80 transition-all duration-300 rounded-xl">
            <CardContent className="pt-6">
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    LinkedIn Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={newAccount.email}
                    onChange={(e) => setNewAccount({...newAccount, email: e.target.value})}
                    className="bg-white/80 border-gray-200/60 focus:border-indigo-400 focus:ring-indigo-400/20 rounded-lg transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={newAccount.password}
                    onChange={(e) => setNewAccount({...newAccount, password: e.target.value})}
                    className="bg-white/80 border-gray-200/60 focus:border-indigo-400 focus:ring-indigo-400/20 rounded-lg transition-all duration-200"
                  />
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg border border-gray-200/60">
                  <Switch id="two-factor" className="data-[state=checked]:bg-indigo-500" />
                  <Label htmlFor="two-factor" className="text-sm font-medium text-gray-700">
                    Account has 2FA enabled
                  </Label>
                </div>
                <div className="flex space-x-3 pt-2">
                  <Button 
                    onClick={handleAddAccount} 
                    size="sm"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-lg flex-1"
                  >
                    Connect Account
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAddAccount(false)}
                    size="sm"
                    className="border-gray-300/60 text-gray-600 hover:bg-gray-50/80 hover:border-gray-400/60 transition-all duration-200 rounded-lg flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Connected Accounts */}
        <div className="space-y-4">
          {accounts.map((account) => (
            <Card key={account.id} className="bg-white/60 backdrop-blur-sm border-gray-200/60 hover:bg-white/80 hover:shadow-xl hover:border-gray-300/60 transition-all duration-300 hover:-translate-y-1 rounded-xl">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center shadow-lg border border-indigo-200/60">
                      <User className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{account.name}</h3>
                      <p className="text-sm text-gray-600 font-medium">{account.email}</p>
                      <div className="flex items-center space-x-3 mt-2">
                        <Badge 
                          variant={account.status === 'connected' ? 'secondary' : 'destructive'}
                          className={`text-xs font-semibold ${
                            account.status === 'connected' 
                              ? 'bg-green-100/80 text-green-700 border-green-200/60' 
                              : 'bg-red-100/80 text-red-700 border-red-200/60'
                          }`}
                        >
                          {account.status === 'connected' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {account.status === 'error' && <AlertCircle className="w-3 h-3 mr-1" />}
                          {account.status}
                        </Badge>
                        <span className="text-xs text-gray-500 font-medium bg-gray-100/60 px-2 py-1 rounded-md">
                          Last sync: {account.lastSync}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleRefreshAccount(account.id)}
                      className="hover:bg-indigo-50/80 hover:text-indigo-600 transition-all duration-200 rounded-lg"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:bg-indigo-50/80 hover:text-indigo-600 transition-all duration-200 rounded-lg"
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleRemoveAccount(account.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50/80 transition-all duration-200 rounded-lg"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent my-6"></div>

                {/* Account Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50/60 to-indigo-50/60 rounded-lg border border-blue-100/60">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {account.engagement.posts}
                    </p>
                    <p className="text-xs text-gray-600 font-semibold mt-1">Posts</p>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-emerald-50/60 to-green-50/60 rounded-lg border border-emerald-100/60">
                    <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      {account.engagement.connections.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-600 font-semibold mt-1">Connections</p>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-purple-50/60 to-pink-50/60 rounded-lg border border-purple-100/60">
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {account.engagement.engagement_rate}%
                    </p>
                    <p className="text-xs text-gray-600 font-semibold mt-1">Engagement</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {accounts.length === 0 && !showAddAccount && (
          <div className="text-center py-12 px-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Linkedin className="h-8 w-8 text-indigo-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No LinkedIn accounts connected
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              Add your first account to start automating your LinkedIn presence
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}