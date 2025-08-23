"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChatSidebar, type Chat } from "@/components/chat/chat-sidebar";
import { 
  MessageSquare, 
  Lightbulb, 
  Code, 
  BookOpen, 
  Zap, 
  Settings,
  ArrowUp,
  Plus,
  Sparkles,
  File,
  X,
  User,
  Bot,
  Loader2,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Check,
  Search,
  Users,
  TrendingUp,
  FileText
} from "lucide-react";
import { MarkdownRenderer } from "@/components/chat/markdown-renderer";
import { ArtifactsPanel } from "@/components/chat/artifacts-panel";
import { chatMemory } from "@/lib/chat-memory";
import { Brain, History } from "lucide-react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  files?: Array<{
    name: string;
    type: string;
    size: number;
    content: string;
    id: string;
  }>;
}

export default function LinkedInPilotChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Array<{
    name: string;
    type: string;
    size: number;
    content: string;
    id: string;
  }>>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [chats, setChats] = useState<Chat[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [currentArtifact, setCurrentArtifact] = useState<{
    id: string;
    title: string;
    type: 'code' | 'markdown' | 'html' | 'text' | 'json';
    language?: string;
    content: string;
    filename?: string;
  } | null>(null);
  
  // State for button feedback
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const [likedMessageId, setLikedMessageId] = useState<string | null>(null);
  const [dislikedMessageId, setDislikedMessageId] = useState<string | null>(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedChats = localStorage.getItem('linkedin_pilot_chats');
    const savedCurrentChatId = localStorage.getItem('linkedin_pilot_current_chat_id');
    
    if (savedChats) {
      try {
        const parsedChats = JSON.parse(savedChats);
        const chatsWithDates = parsedChats.map((chat: any) => ({
          ...chat,
          timestamp: new Date(chat.timestamp)
        }));
        setChats(chatsWithDates);
      } catch (error) {
        console.error('Error parsing saved chats:', error);
      }
    }
    
    if (savedCurrentChatId) {
      setCurrentChatId(savedCurrentChatId);
      const savedMessages = localStorage.getItem(`linkedin_pilot_chat_messages_${savedCurrentChatId}`);
      if (savedMessages) {
        try {
          const parsedMessages = JSON.parse(savedMessages);
          const messagesWithDates = parsedMessages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }));
          setMessages(messagesWithDates);
        } catch (error) {
          console.error('Error parsing saved messages:', error);
        }
      }
    }
  }, []);

  // Save chats to localStorage whenever chats change
  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem('linkedin_pilot_chats', JSON.stringify(chats));
    }
  }, [chats]);

  // Save current chat messages and update memory whenever messages change
  useEffect(() => {
    if (currentChatId && messages.length > 0) {
      localStorage.setItem(`linkedin_pilot_chat_messages_${currentChatId}`, JSON.stringify(messages));
      
      // Update chat memory
      chatMemory.updateMemory(currentChatId, messages);
      
      // Update the chat's last message and timestamp
      setChats(prev => prev.map(chat => {
        if (chat.id === currentChatId) {
          const lastMessage = messages[messages.length - 1];
          return {
            ...chat,
            lastMessage: lastMessage.content.substring(0, 50) + (lastMessage.content.length > 50 ? '...' : ''),
            timestamp: new Date(),
            title: chat.title === 'New Chat' ? generateChatTitle(messages) : chat.title
          };
        }
        return chat;
      }));
    }
  }, [messages, currentChatId]);

  // Save current chat ID whenever it changes
  useEffect(() => {
    if (currentChatId) {
      localStorage.setItem('linkedin_pilot_current_chat_id', currentChatId);
    }
  }, [currentChatId]);

  // Auto-scroll to bottom when messages change or when loading
  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "auto" });
      }
    };

    if (messages.length > 0) {
      const timeout = setTimeout(scrollToBottom, 50);
      return () => clearTimeout(timeout);
    }
  }, [messages.length]);

  // Separate effect for streaming content updates
  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === 'assistant' && lastMessage.content) {
        const scrollToBottom = () => {
          if (messagesEndRef.current) {
            const container = messagesEndRef.current.parentElement;
            if (container) {
              const isNearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 150;
              
              if (isNearBottom) {
                messagesEndRef.current.scrollIntoView({ behavior: "auto" });
              }
            }
          }
        };

        const timeoutId = setTimeout(scrollToBottom, 100);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [messages]);

  // Generate a chat title based on the first user message
  const generateChatTitle = (msgs: Message[]): string => {
    const firstUserMessage = msgs.find(msg => msg.role === 'user');
    if (firstUserMessage) {
      const title = firstUserMessage.content.substring(0, 30);
      return title.length < firstUserMessage.content.length ? title + '...' : title;
    }
    return 'New Chat';
  };
  
  const quickActions = [
    {
      icon: Search,
      label: "Web Research",
      description: "Search for industry trends",
      prompt: "Search for the latest LinkedIn marketing trends and best practices"
    },
    {
      icon: FileText,
      label: "Create Content",
      description: "LinkedIn posts & articles",
      prompt: "Help me create a thought leadership post about professional development"
    },
    {
      icon: Users,
      label: "Profile Analysis",
      description: "Optimize LinkedIn profile",
      prompt: "Analyze my LinkedIn profile and suggest improvements for better visibility"
    },
    {
      icon: TrendingUp,
      label: "Career Strategy",
      description: "Professional growth",
      prompt: "Give me strategies for advancing my career in the tech industry"
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const newFile = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: file.name,
          type: file.type,
          size: file.size,
          content: content
        };
        
        setUploadedFiles(prev => [...prev, newFile]);
      };
      
      if (file.type.startsWith('text/') || 
          file.name.endsWith('.txt') || 
          file.name.endsWith('.md') || 
          file.name.endsWith('.csv') ||
          file.name.endsWith('.json') ||
          file.name.endsWith('.xml') ||
          file.name.endsWith('.html') ||
          file.name.endsWith('.css') ||
          file.name.endsWith('.js') ||
          file.name.endsWith('.ts') ||
          file.name.endsWith('.py') ||
          file.name.endsWith('.java') ||
          file.name.endsWith('.cpp') ||
          file.name.endsWith('.c') ||
          file.name.endsWith('.php') ||
          file.name.endsWith('.rb') ||
          file.name.endsWith('.go') ||
          file.name.endsWith('.rs')) {
        reader.readAsText(file);
      } else if (file.type === 'application/pdf') {
        reader.readAsDataURL(file);
      } else {
        reader.readAsText(file);
      }
    });

    event.target.value = '';
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  // Handle new chat creation
  const handleNewChat = () => {
    const newChatId = Date.now().toString();
    const newChat: Chat = {
      id: newChatId,
      title: "New Chat",
      lastMessage: "Start a conversation...",
      timestamp: new Date(),
      isActive: true
    };

    if (currentChatId && messages.length > 0) {
      localStorage.setItem(`linkedin_pilot_chat_messages_${currentChatId}`, JSON.stringify(messages));
    }

    setMessages([]);
    setCurrentChatId(newChatId);
    
    setChats(prev => [
      newChat,
      ...prev.map(chat => ({ ...chat, isActive: false }))
    ]);
  };

  // Handle chat selection
  const handleSelectChat = (chatId: string) => {
    if (chatId === currentChatId) return;

    if (currentChatId && messages.length > 0) {
      localStorage.setItem(`linkedin_pilot_chat_messages_${currentChatId}`, JSON.stringify(messages));
    }

    const savedMessages = localStorage.getItem(`linkedin_pilot_chat_messages_${chatId}`);
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        const messagesWithDates = parsedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(messagesWithDates);
      } catch (error) {
        console.error('Error loading chat messages:', error);
        setMessages([]);
      }
    } else {
      setMessages([]);
    }

    setCurrentChatId(chatId);
    
    setChats(prev => prev.map(chat => ({
      ...chat,
      isActive: chat.id === chatId
    })));
  };

  // Handle chat deletion
  const handleDeleteChat = (chatId: string) => {
    localStorage.removeItem(`linkedin_pilot_chat_messages_${chatId}`);
    
    const wasActive = chats.find(chat => chat.id === chatId)?.isActive;
    
    setChats(prev => {
      const filtered = prev.filter(chat => chat.id !== chatId);
      
      if (wasActive) {
        if (filtered.length > 0) {
          filtered[0].isActive = true;
          setCurrentChatId(filtered[0].id);
          
          const savedMessages = localStorage.getItem(`linkedin_pilot_chat_messages_${filtered[0].id}`);
          if (savedMessages) {
            try {
              const parsedMessages = JSON.parse(savedMessages);
              const messagesWithDates = parsedMessages.map((msg: any) => ({
                ...msg,
                timestamp: new Date(msg.timestamp)
              }));
              setMessages(messagesWithDates);
            } catch (error) {
              console.error('Error loading chat messages:', error);
              setMessages([]);
            }
          } else {
            setMessages([]);
          }
        } else {
          setCurrentChatId(null);
          setMessages([]);
          localStorage.removeItem('linkedin_pilot_current_chat_id');
        }
      }
      
      return filtered;
    });
  };

  // Handle chat rename
  const handleRenameChat = (chatId: string, newTitle: string) => {
    setChats(prev => prev.map(chat => 
      chat.id === chatId ? { ...chat, title: newTitle } : chat
    ));
  };

  const handleSendMessage = async () => {
    if ((!message.trim() && uploadedFiles.length === 0) || isLoading) return;

    if (!currentChatId) {
      const newChatId = Date.now().toString();
      const newChat: Chat = {
        id: newChatId,
        title: "New Chat",
        lastMessage: "Start a conversation...",
        timestamp: new Date(),
        isActive: true
      };

      setCurrentChatId(newChatId);
      setChats(prev => [
        newChat,
        ...prev.map(chat => ({ ...chat, isActive: false }))
      ]);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date(),
      files: uploadedFiles.length > 0 ? uploadedFiles : undefined
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = message.trim();
    setMessage("");
    setIsLoading(true);

    const assistantMessageId = Date.now().toString() + '_assistant';
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);

    try {
      const memoryContext = currentChatId ? chatMemory.loadContext(currentChatId) : '';
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage,
          files: uploadedFiles.length > 0 ? uploadedFiles : undefined,
          memoryContext: memoryContext
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedContent = '';

        try {
          while (true) {
            const { done, value } = await reader.read();
            
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const jsonStr = line.slice(6).trim();
                if (jsonStr === '[DONE]') {
                  break;
                }
                if (jsonStr === '') continue;

                try {
                  const data = JSON.parse(jsonStr);
                  
                  if (data.type === 'content') {
                    accumulatedContent += data.content;
                    
                    setMessages(prev => prev.map(msg => 
                      msg.id === assistantMessageId 
                        ? { ...msg, content: accumulatedContent }
                        : msg
                    ));
                  } else if (data.type === 'tool_calls') {
                    console.log('Tool calls:', data.tool_calls);
                  } else if (data.type === 'error') {
                    throw new Error(data.error || 'Streaming error');
                  }
                } catch (parseError) {
                  console.error('Error parsing streaming data:', parseError);
                }
              }
            }
          }
        } catch (streamError) {
          console.error('Streaming error:', streamError);
          throw streamError;
        } finally {
          reader.releaseLock();
        }

        if (!accumulatedContent) {
          throw new Error('No response received from the server');
        }
      } else {
        throw new Error('No response body received');
      }
    } catch (error: any) {
      console.error('Chat error:', error);
      
      setMessages(prev => {
        const filtered = prev.filter(msg => msg.id !== assistantMessageId);
        const errorMessage: Message = {
          id: Date.now().toString() + '_error',
          role: 'assistant',
          content: `I apologize, but I encountered an error: ${error.message || 'Something went wrong. Please try again.'}`,
          timestamp: new Date()
        };
        return [...filtered, errorMessage];
      });
    } finally {
      setIsLoading(false);
      setUploadedFiles([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <div className="h-screen bg-[#1e1e1e] text-white flex overflow-hidden">
      {/* Sidebar */}
      <ChatSidebar 
        chats={chats}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        onDeleteChat={handleDeleteChat}
        onRenameChat={handleRenameChat}
        className="h-full flex-shrink-0"
        onSettingsClick={() => {}} // No settings needed
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Main Content */}
        <main className="flex-1 flex flex-col px-6 py-4 max-w-4xl mx-auto w-full min-h-0">
          {/* Messages Area */}
          {messages.length > 0 ? (
            <div className="flex-1 overflow-y-auto mb-6 space-y-4 hide-scrollbar">
              {/* Memory Status Indicator */}
              {currentChatId && (() => {
                const memoryStatus = chatMemory.getMemoryStatus(currentChatId);
                return memoryStatus.hasMemory && (
                  <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-200 text-xs">
                      <Brain className="w-3 h-3" />
                      <span>Memory active • {memoryStatus.messageCount} messages remembered</span>
                    </div>
                  </div>
                );
              })()}
              {messages.map((msg) => (
                <div key={msg.id} className="group">
                  <div className="flex gap-4 max-w-none">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-[#1a1a1a] border border-[#2a2a2a]">
                      {msg.role === 'user' ? (
                        <User className="w-3.5 h-3.5 text-[#a1a1aa]" />
                      ) : (
                        <div className="text-xl">🚁</div>
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="text-sm text-[#e5e7eb] leading-relaxed">
                        {msg.role === 'assistant' ? (
                          msg.content ? (
                            <MarkdownRenderer 
                              content={msg.content}
                              onOpenArtifact={setCurrentArtifact}
                            />
                          ) : (
                            <div className="flex items-center text-sm text-[#a1a1aa]">
                              <div className="flex space-x-1">
                                <div className="w-1 h-1 bg-[#a1a1aa] rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                                <div className="w-1 h-1 bg-[#a1a1aa] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-1 h-1 bg-[#a1a1aa] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                              </div>
                            </div>
                          )
                        ) : (
                          <div className="whitespace-pre-wrap">
                            {msg.content}
                          </div>
                        )}
                      </div>
                      {msg.files && msg.files.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {msg.files.map((file) => (
                            <div key={file.id} className="inline-flex items-center gap-1.5 px-2 py-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-xs text-[#a1a1aa]">
                              <File className="w-3 h-3" />
                              <span>{file.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Action buttons for assistant messages */}
                      {msg.role === 'assistant' && msg.content && (
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="icon"
                            className={`h-7 w-7 rounded-lg transition-colors ${
                              copiedMessageId === msg.id 
                                ? 'text-green-400 bg-green-400/10' 
                                : 'text-[#a1a1aa] hover:text-white hover:bg-[#2a2a2a]'
                            }`}
                            onClick={async () => {
                              try {
                                await navigator.clipboard.writeText(msg.content);
                                setCopiedMessageId(msg.id);
                                setTimeout(() => setCopiedMessageId(null), 2000);
                              } catch (error) {
                                console.error('Failed to copy message:', error);
                              }
                            }}
                          >
                            {copiedMessageId === msg.id ? (
                              <Check className="w-3.5 h-3.5" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </Button>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            className={`h-7 w-7 rounded-lg transition-colors ${
                              likedMessageId === msg.id 
                                ? 'text-green-400 bg-green-400/10' 
                                : 'text-[#a1a1aa] hover:text-green-400 hover:bg-[#2a2a2a]'
                            }`}
                            onClick={() => {
                              if (likedMessageId === msg.id) {
                                setLikedMessageId(null);
                              } else {
                                setLikedMessageId(msg.id);
                                setDislikedMessageId(null);
                              }
                            }}
                          >
                            <ThumbsUp className="w-3.5 h-3.5" />
                          </Button>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            className={`h-7 w-7 rounded-lg transition-colors ${
                              dislikedMessageId === msg.id 
                                ? 'text-red-400 bg-red-400/10' 
                                : 'text-[#a1a1aa] hover:text-red-400 hover:bg-[#2a2a2a]'
                            }`}
                            onClick={() => {
                              if (dislikedMessageId === msg.id) {
                                setDislikedMessageId(null);
                              } else {
                                setDislikedMessageId(msg.id);
                                setLikedMessageId(null);
                              }
                            }}
                          >
                            <ThumbsDown className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      )}
                      
                      <div className="text-xs text-[#6b7280] opacity-0 group-hover:opacity-100 transition-opacity">
                        {msg.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Auto-scroll target */}
              <div ref={messagesEndRef} />
            </div>
          ) : (
            /* Welcome Section */
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#2a2a2a] border border-[#3a3a3a] rounded-xl flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
                    <span className="text-2xl">🚁</span>
                  </div>
                  <h1 className="text-3xl font-bold text-white">
                    LinkedIn Pilot
                  </h1>
                </div>
                <p className="text-[#a1a1aa] text-sm max-w-md">
                  Your professional AI assistant for LinkedIn optimization, content creation, and career development.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {quickActions.map((action) => (
                  <Button
                    key={action.label}
                    variant="ghost"
                    className="bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#2a2a2a] text-[#a1a1aa] hover:text-white transition-colors h-auto px-4 py-3 flex items-center gap-3 text-sm"
                    onClick={() => handleQuickAction(action.prompt)}
                  >
                    <action.icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">{action.label}</div>
                      <div className="text-xs text-[#6b7280]">{action.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input Section */}
          <div className="w-full max-w-3xl mx-auto">
            {/* Uploaded Files Display */}
            {uploadedFiles.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 text-sm"
                  >
                    <File className="w-3 h-3" />
                    <span className="truncate max-w-32">{file.name}</span>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="text-slate-400 hover:text-red-400 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            <div className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl">
              <div className="flex items-center p-4 gap-3">
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-[#a1a1aa] hover:text-white hover:bg-[#2a2a2a] rounded-lg h-9 w-9 flex-shrink-0"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept=".txt,.pdf,.csv,.md,.json,.xml,.html,.css,.js,.ts,.py,.java,.cpp,.c,.php,.rb,.go,.rs,.doc,.docx,.xls,.xlsx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
                
                <div className="flex-1 min-w-0 text-center">
                  <textarea
                    placeholder="Ask me about LinkedIn optimization, content creation..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    rows={1}
                    className="w-full bg-transparent text-white placeholder-[#6b7280] text-sm border-none outline-none resize-none focus:text-white min-h-[1.25rem] max-h-32 overflow-y-auto"
                    style={{ 
                      color: 'white',
                      height: 'auto',
                      minHeight: '1.25rem'
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = 'auto';
                      target.style.height = Math.min(target.scrollHeight, 128) + 'px';
                    }}
                  />
                </div>
                
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim() && uploadedFiles.length === 0}
                    size="icon"
                    className="bg-white hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg h-8 w-8 text-black"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </main>

       
      </div>

      {/* Artifacts Panel */}
      {currentArtifact && (
        <ArtifactsPanel
          artifact={currentArtifact}
          onClose={() => setCurrentArtifact(null)}
        />
      )}
    </div>
  );
}
