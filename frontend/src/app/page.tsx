"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  MessageCircle, 
  Linkedin, 
  Shield, 
  Zap, 
  Users, 
  ArrowRight,
  Check,
  Lock,
  Eye,
  ChevronDown,
  Bot
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], display: "swap" });

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [cookie, setCookie] = useState("");
  const [userAgent, setUserAgent] = useState("");
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    if (!cookie.trim() || !userAgent.trim()) {
      alert("Please provide both LinkedIn cookie and User-Agent");
      return;
    }
    
    setIsLoading(true);
    // Simulate connection process
    setTimeout(() => {
      setIsConnected(true);
      setIsLoading(false);
      setShowConnectModal(false);
    }, 1500);
  };

  const handleSendMessage = async (messageText?: string) => {
    const userMessage = messageText || message;
    if (!userMessage.trim()) return;
    
    setMessage("");
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    // Simulate AI response based on message type
    setTimeout(() => {
      let response = "";
      if (userMessage.toLowerCase().includes('connect') || userMessage.toLowerCase().includes('request')) {
        response = "I'll help you send targeted connection requests. I can analyze profiles, craft personalized messages, and send them strategically to avoid LinkedIn limits.";
      } else if (userMessage.toLowerCase().includes('post') || userMessage.toLowerCase().includes('content')) {
        response = "I can generate engaging LinkedIn posts for you! What topic or achievement would you like to share? I'll create content that drives engagement.";
      } else if (userMessage.toLowerCase().includes('message') || userMessage.toLowerCase().includes('follow')) {
        response = "I'll help you craft personalized follow-up messages. I can congratulate connections on new jobs, comment meaningfully on posts, or send strategic outreach messages.";
      } else {
        response = "I can help you with LinkedIn networking, content creation, and automation. Try asking me to 'send connection requests to startup founders' or 'write a post about AI trends'.";
      }
      
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response
      }]);
    }, 1000);
  };

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const suggestedActions = [
    "Send 30 connection requests to AI startup founders",
    "Write a LinkedIn post about networking automation",
    "Congratulate my connections on their new jobs"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-black flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-900">LinkedIn Agent</h1>
            </div>
            <div className="flex items-center space-x-4">
              {isConnected && (
                <div className="flex items-center space-x-2 text-sm text-black">
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  Connected
                </div>
              )}
              <Button
                onClick={() => setShowConnectModal(true)}
                className="bg-black hover:bg-neutral-900"
              >
                {isConnected ? "Dashboard" : "Get Started"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className={`${jakarta.className} space-y-6`}>
                <h1 className="text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Automate LinkedIn
                  <span className="block text-blue-600">Networking with AI</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Send connection requests, write engaging content, and grow your network — all through a simple AI assistant that works like ChatGPT for LinkedIn.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setShowConnectModal(true)}
                  className="bg-black hover:bg-neutral-900 text-lg px-8 py-3"
                >
                  Start Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={scrollToDemo}
                  className="text-lg px-8 py-3 border-slate-300"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  See It in Action
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Shield className="h-4 w-4 text-black" />
                  Privacy-first
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Lock className="h-4 w-4 text-black" />
                  No data shared
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-black" />
                  End-to-end secure
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-100 px-4 py-2 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <p className="text-sm text-slate-600 ml-4">LinkedIn Agent</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-black text-white px-4 py-2 rounded-lg max-w-[80%]">
                      Send connection requests to 50 startup founders in AI space
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg max-w-[80%]">
                      I&apos;ll find AI startup founders and send personalized connection requests. This will take about 10 minutes to complete safely within LinkedIn&apos;s limits.
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-black">
                    <div className="animate-pulse h-2 w-2 rounded-full bg-black"></div>
                    <span>AI is working...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className={`${jakarta.className} text-center space-y-4 mb-16`}>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Everything you need to grow on LinkedIn</h2>
            <p className="text-xl text-slate-600">From networking to content creation, all automated with AI</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className={`${jakarta.className} font-semibold text-slate-900 mb-2`}>Smart Networking</h3>
                  <p className="text-sm text-slate-600">Send 50+ targeted requests in minutes with personalized messages</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className={`${jakarta.className} font-semibold text-slate-900 mb-2`}>AI Messaging</h3>
                  <p className="text-sm text-slate-600">Personalized follow-ups and congratulations that feel human</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-yellow-50 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className={`${jakarta.className} font-semibold text-slate-900 mb-2`}>Content Automation</h3>
                  <p className="text-sm text-slate-600">Generate engaging LinkedIn posts that drive real engagement</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className={`${jakarta.className} font-semibold text-slate-900 mb-2`}>Privacy & Security</h3>
                  <p className="text-sm text-slate-600">Your credentials never leave your machine. Completely private.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className={`${jakarta.className} text-center space-y-4 mb-16`}>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">How it works</h2>
            <p className="text-xl text-slate-600">Get started in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold mx-auto">
                1
              </div>
              <h3 className={`${jakarta.className} font-semibold text-slate-900`}>Connect LinkedIn securely</h3>
              <p className="text-slate-600">Safely connect your account with our privacy-first approach</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto">
                2
              </div>
              <h3 className={`${jakarta.className} font-semibold text-slate-900`}>Chat with AI naturally</h3>
              <p className="text-slate-600">Type your networking goals like chatting with a friend</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-yellow-600 text-white flex items-center justify-center text-xl font-bold mx-auto">
                3
              </div>
              <h3 className={`${jakarta.className} font-semibold text-slate-900`}>Watch AI execute</h3>
              <p className="text-slate-600">Sit back as your networking tasks get completed automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className={`${jakarta.className} text-center space-y-4 mb-12`}>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Try it live</h2>
            <p className="text-xl text-slate-600">
              {isConnected ? "Your LinkedIn is connected! Try any command below:" : "See how natural it feels (connect LinkedIn to make it work)"}
            </p>
          </div>

          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-black" />
                  <span className={`${jakarta.className} font-semibold`}>AI Assistant</span>
                </div>
                {!isConnected && (
                  <Button
                    size="sm"
                    onClick={() => setShowConnectModal(true)}
                    className="bg-black hover:bg-neutral-900"
                  >
                    Connect to Try
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Suggested Actions */}
              {chatMessages.length === 0 && (
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                  <p className="text-sm text-slate-600 mb-3">Try these examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSendMessage(action)}
                        disabled={!isConnected}
                        className="text-sm"
                      >
                        {action}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {chatMessages.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-center">
                    <div className="space-y-3">
                      <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
                        <MessageCircle className="h-8 w-8 text-black" />
                      </div>
                      <p className="text-slate-600">
                        {isConnected 
                          ? "Hi! I&apos;m ready to help with your LinkedIn networking. What would you like to do?"
                          : "Connect your LinkedIn account to start chatting with AI"
                        }
                      </p>
                    </div>
                  </div>
                ) : (
                  chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          msg.role === 'user'
                            ? 'bg-black text-white'
                            : 'bg-slate-100 text-slate-900'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Chat Input */}
              <div className="border-t border-slate-200 p-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder={isConnected ? "Ask me anything about LinkedIn networking..." : "Connect LinkedIn first to try the AI"}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && isConnected && handleSendMessage()}
                    disabled={!isConnected}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!isConnected || !message.trim()}
                    className="bg-black hover:bg-neutral-900"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-8">
            <div className="h-20 w-20 rounded-full bg-black flex items-center justify-center mx-auto">
              <Lock className="h-10 w-10" />
            </div>
            <div className="space-y-4">
              <h2 className={`${jakarta.className} text-3xl font-bold`}>Your data stays yours</h2>
              <p className="text-xl text-slate-300">
                We never store or share your LinkedIn credentials. All requests run locally with end-to-end security.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <Shield className="h-8 w-8 text-neutral-300 mx-auto" />
                <h3 className={`${jakarta.className} font-semibold`}>Local Processing</h3>
                <p className="text-sm text-slate-400">All AI processing happens on your machine</p>
              </div>
              <div className="space-y-2">
                <Lock className="h-8 w-8 text-neutral-300 mx-auto" />
                <h3 className={`${jakarta.className} font-semibold`}>Encrypted Connection</h3>
                <p className="text-sm text-slate-400">End-to-end encryption for all communications</p>
              </div>
              <div className="space-y-2">
                <Eye className="h-8 w-8 text-neutral-300 mx-auto" />
                <h3 className={`${jakarta.className} font-semibold`}>Zero Tracking</h3>
                <p className="text-sm text-slate-400">We don&apos;t track or store your activity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl text-center text-white">
          <div className="space-y-8">
            <h2 className={`${jakarta.className} text-4xl font-extrabold tracking-tight`}>Ready to automate your LinkedIn growth?</h2>
            <p className="text-xl text-neutral-300">
              Free while in beta. Early users get lifetime perks.
            </p>
            <Button
              size="lg"
              onClick={() => setShowConnectModal(true)}
              className="bg-white text-black hover:bg-slate-100 text-lg px-8 py-3"
            >
              Join Beta Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-black flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-white">LinkedIn Agent</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>Not affiliated with LinkedIn. © 2024 LinkedIn Agent. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Connection Modal */}
      {showConnectModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5 text-black" />
                <span>Connect Your LinkedIn</span>
              </CardTitle>
              <CardDescription>
                Securely connect your LinkedIn account to start using the AI assistant
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cookie">LinkedIn Cookie (li_at)</Label>
                <Input
                  id="cookie"
                  type="password"
                  placeholder="li_at=..."
                  value={cookie}
                  onChange={(e) => setCookie(e.target.value)}
                  className="font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="userAgent">User-Agent</Label>
                <Input
                  id="userAgent"
                  placeholder="Mozilla/5.0..."
                  value={userAgent}
                  onChange={(e) => setUserAgent(e.target.value)}
                  className="font-mono text-sm"
                />
              </div>
              <div className="flex space-x-2">
                <Button 
                  onClick={handleConnect} 
                  disabled={isLoading}
                  className="flex-1 bg-black hover:bg-neutral-900"
                >
                  {isLoading ? "Connecting..." : "Connect"}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowConnectModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
              <p className="text-xs text-slate-500 text-center">
                Your credentials are stored securely and never shared
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}