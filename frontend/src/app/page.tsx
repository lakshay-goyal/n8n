"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Slider } from "@/components/ui/slider";
import { 
  Zap, 
  Bot, 
  Workflow, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Globe, 
  Database, 
  Mail, 
  MessageSquare,
  Calendar,
  FileText,
  TrendingUp,
  Shield,
  Cpu,
  Rocket,
  Users,
  Star,
  PlayCircle,
  ChevronRight,
  Network,
  GitBranch,
  Code,
  Layers
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

export default function Home(){
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [automationProgress, setAutomationProgress] = useState(75);

  const features = [
    {
      icon: <Workflow className="w-8 h-8 text-pink-600" />,
      title: "Visual Workflow Builder",
      description: "Drag-and-drop interface to create complex automation workflows without coding",
      badge: "Popular"
    },
    {
      icon: <Bot className="w-8 h-8 text-pink-600" />,
      title: "AI-Powered Automation",
      description: "Leverage GPT-4 and Claude to intelligently process and transform your data",
      badge: "AI"
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-600" />,
      title: "500+ Integrations",
      description: "Connect with all your favorite tools including Slack, Gmail, Notion, and more",
      badge: "Growing"
    },
    {
      icon: <Database className="w-8 h-8 text-pink-600" />,
      title: "Data Transformation",
      description: "Clean, enrich, and transform data between different formats effortlessly",
      badge: "Advanced"
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-600" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards",
      badge: "Secure"
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-600" />,
      title: "Real-Time Execution",
      description: "Lightning-fast automation with instant triggers and real-time monitoring",
      badge: "Fast"
    }
  ];

  const integrations = [
    { name: "Slack", icon: MessageSquare, color: "bg-purple-100 text-purple-600" },
    { name: "Gmail", icon: Mail, color: "bg-red-100 text-red-600" },
    { name: "Notion", icon: FileText, color: "bg-gray-100 text-gray-600" },
    { name: "Calendar", icon: Calendar, color: "bg-blue-100 text-blue-600" },
    { name: "Database", icon: Database, color: "bg-green-100 text-green-600" },
    { name: "OpenAI", icon: Sparkles, color: "bg-pink-100 text-pink-600" }
  ];

  const useCases = [
    {
      title: "Marketing Automation",
      description: "Automate email campaigns, social media posting, and lead nurturing workflows",
      metrics: { saved: "15 hours/week", roi: "300%" }
    },
    {
      title: "Sales Pipeline",
      description: "Sync CRM data, automate follow-ups, and generate reports automatically",
      metrics: { saved: "20 hours/week", roi: "250%" }
    },
    {
      title: "Customer Support",
      description: "Route tickets, send automated responses, and escalate issues intelligently",
      metrics: { saved: "25 hours/week", roi: "400%" }
    },
    {
      title: "Data Processing",
      description: "Extract, transform, and load data from multiple sources automatically",
      metrics: { saved: "30 hours/week", roi: "500%" }
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out automation",
      features: [
        "100 workflow executions/month",
        "5 active workflows",
        "Basic integrations",
        "Community support",
        "7-day execution history"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "per month",
      description: "For growing teams and businesses",
      features: [
        "10,000 executions/month",
        "Unlimited workflows",
        "All integrations",
        "Priority support",
        "30-day execution history",
        "Custom functions",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations",
      features: [
        "Unlimited executions",
        "Unlimited workflows",
        "Dedicated support",
        "Custom SLA",
        "Unlimited history",
        "Advanced security",
        "On-premise option",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Operations",
      company: "TechFlow Inc",
      avatar: "SC",
      rating: 5,
      quote: "This platform transformed our operations. We automated 80% of our manual processes and saved 100+ hours monthly."
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Director",
      company: "GrowthLab",
      avatar: "MR",
      rating: 5,
      quote: "The AI capabilities are mind-blowing. We can now personalize customer interactions at scale without hiring more staff."
    },
    {
      name: "Emily Watson",
      role: "CTO",
      company: "DataSync Pro",
      avatar: "EW",
      rating: 5,
      quote: "Best automation tool we've used. The visual builder makes it easy for non-technical team members to create workflows."
    }
  ];

  const faqs = [
    {
      question: "How difficult is it to set up my first automation?",
      answer: "Most users create their first workflow in under 10 minutes. Our visual builder is intuitive and requires no coding knowledge. We also provide 100+ templates to get you started instantly."
    },
    {
      question: "What integrations do you support?",
      answer: "We support 500+ integrations including Slack, Gmail, Notion, Salesforce, HubSpot, Stripe, and many more. We're constantly adding new integrations based on user requests."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption (AES-256), are SOC 2 Type II certified, and comply with GDPR and HIPAA. Your data is encrypted both in transit and at rest."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time with no penalties. Your workflows will continue to run until the end of your billing period."
    },
    {
      question: "Do you offer API access?",
      answer: "Yes! All plans include full API access. You can programmatically create, modify, and execute workflows using our comprehensive REST API."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center gap-2">
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-200">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered
            </Badge>
            <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-200">
              <Shield className="w-3 h-3 mr-1" />
              Enterprise Ready
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Automate Anything with{" "}
            <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent">
              AI Workflows
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect your apps, automate your workflows, and unlock productivity with our AI-powered automation platform. 
            No coding required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg px-8 py-6"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">See AutoFlow AI in Action</DialogTitle>
                  <DialogDescription>
                    Watch how easy it is to create powerful automations in minutes
                  </DialogDescription>
                </DialogHeader>
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <PlayCircle className="w-20 h-20 text-pink-600 mx-auto" />
                    <p className="text-gray-600">Interactive Demo Video</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-pink-200 hover:bg-pink-50 text-lg px-8 py-6"
              onClick={() => toast.success("Starting your free trial!")}
            >
              Start Free Trial
              <Rocket className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-pink-600" />
              <span className="text-sm text-gray-600">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-pink-600" />
              <span className="text-sm text-gray-600">Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-pink-600" />
              <span className="text-sm text-gray-600">Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Card className="border-pink-100 bg-gradient-to-br from-white to-pink-50">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">10M+</div>
              <p className="text-gray-600">Workflows Executed</p>
            </CardContent>
          </Card>
          <Card className="border-pink-100 bg-gradient-to-br from-white to-pink-50">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
              <p className="text-gray-600">Integrations</p>
            </CardContent>
          </Card>
          <Card className="border-pink-100 bg-gradient-to-br from-white to-pink-50">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">50K+</div>
              <p className="text-gray-600">Active Users</p>
            </CardContent>
          </Card>
          <Card className="border-pink-100 bg-gradient-to-br from-white to-pink-50">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge className="bg-pink-100 text-pink-700 mb-4">Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-pink-600">Automate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to make automation simple, scalable, and secure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card className="border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-pink-100 rounded-lg">
                        {feature.icon}
                      </div>
                      <Badge variant="secondary" className="bg-pink-50 text-pink-700 border-pink-200">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mt-4">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" className="text-pink-600 hover:text-pink-700 p-0">
                      Learn more <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-gray-600">
                    Explore detailed documentation and video tutorials to get the most out of this feature.
                  </p>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">View Docs</Button>
                    <Button size="sm" className="bg-pink-600 text-white hover:bg-pink-700">Try Now</Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* Integrations Showcase */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge className="bg-pink-100 text-pink-700 mb-4">Integrations</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect with Your <span className="text-pink-600">Favorite Tools</span>
          </h2>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {integrations.map((integration, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <Card className="border-pink-100">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                    <div className={`w-16 h-16 rounded-full ${integration.color} flex items-center justify-center`}>
                      <integration.icon className="w-8 h-8" />
                    </div>
                    <p className="font-semibold text-gray-800">{integration.name}</p>
                    <Badge variant="outline" className="border-pink-200 text-pink-700">
                      Available
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-pink-300 hover:bg-pink-50">
            View All 500+ Integrations
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Use Cases with Tabs */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge className="bg-pink-100 text-pink-700 mb-4">Use Cases</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="text-pink-600">Every Team</span>
          </h2>
        </div>

        <Tabs defaultValue="marketing" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto bg-pink-50 p-1 rounded-lg">
            <TabsTrigger 
              value="marketing"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Marketing
            </TabsTrigger>
            <TabsTrigger 
              value="sales"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm"
            >
              <Users className="w-4 h-4 mr-2" />
              Sales
            </TabsTrigger>
            <TabsTrigger 
              value="support"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Support
            </TabsTrigger>
            <TabsTrigger 
              value="data"
              className="data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm"
            >
              <Database className="w-4 h-4 mr-2" />
              Data
            </TabsTrigger>
          </TabsList>

          {useCases.map((useCase, index) => (
            <TabsContent 
              key={index} 
              value={["marketing", "sales", "support", "data"][index]}
              className="mt-6"
            >
              <Card className="border-pink-100">
                <CardHeader>
                  <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-base">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Alert className="border-pink-200 bg-pink-50">
                      <TrendingUp className="h-4 w-4 text-pink-600" />
                      <AlertTitle className="text-pink-900">Time Saved</AlertTitle>
                      <AlertDescription className="text-pink-700 text-lg font-semibold">
                        {useCase.metrics.saved}
                      </AlertDescription>
                    </Alert>
                    <Alert className="border-pink-200 bg-pink-50">
                      <Rocket className="h-4 w-4 text-pink-600" />
                      <AlertTitle className="text-pink-900">Average ROI</AlertTitle>
                      <AlertDescription className="text-pink-700 text-lg font-semibold">
                        {useCase.metrics.roi}
                      </AlertDescription>
                    </Alert>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-gray-600 mb-2">Automation Progress</p>
                    <Progress value={automationProgress} className="h-3" />
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-500">0%</span>
                      <span className="text-xs font-semibold text-pink-600">{automationProgress}% Complete</span>
                      <span className="text-xs text-gray-500">100%</span>
                    </div>
                    <Slider 
                      value={[automationProgress]} 
                      onValueChange={(value) => setAutomationProgress(value[0])}
                      max={100}
                      step={5}
                      className="mt-4"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
                    View Template
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge className="bg-pink-100 text-pink-700 mb-4">Process</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-pink-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600">Get started in three simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-pink-100 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
            </div>
            <CardHeader className="pt-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-pink-100 rounded-full">
                  <Network className="w-10 h-10 text-pink-600" />
                </div>
              </div>
              <CardTitle className="text-xl">Choose Your Apps</CardTitle>
              <CardDescription>
                Select from 500+ integrations or use our webhook connector
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-pink-100 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
            </div>
            <CardHeader className="pt-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-pink-100 rounded-full">
                  <GitBranch className="w-10 h-10 text-pink-600" />
                </div>
              </div>
              <CardTitle className="text-xl">Build Your Workflow</CardTitle>
              <CardDescription>
                Use our visual builder to create complex automations with ease
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-pink-100 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
            </div>
            <CardHeader className="pt-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-pink-100 rounded-full">
                  <Zap className="w-10 h-10 text-pink-600" />
                </div>
              </div>
              <CardTitle className="text-xl">Activate & Relax</CardTitle>
              <CardDescription>
                Watch your workflows run automatically and save hours of work
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge className="bg-pink-100 text-pink-700 mb-4">Pricing</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-pink-600">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`border-2 ${
                plan.popular 
                  ? 'border-pink-500 shadow-xl shadow-pink-100 relative' 
                  : 'border-pink-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className={plan.popular ? 'pt-8' : ''}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600">/{plan.period}</span>}
                  {plan.price === "Custom" && <span className="text-gray-600 text-lg ml-2">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <Separator className="bg-pink-100" />
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white'
                      : 'border-2 border-pink-200 hover:bg-pink-50'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    toast.success(`Selected ${plan.name} plan!`);
                  }}
                >
                  {plan.price === "Custom" ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom plan? We've got you covered.</p>
          <Button variant="outline" className="border-pink-300 hover:bg-pink-50">
            Talk to Sales
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge className="bg-pink-100 text-pink-700 mb-4">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="text-pink-600">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600">See what our customers have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-pink-100">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12 border-2 border-pink-200">
                    <AvatarFallback className="bg-gradient-to-br from-pink-400 to-pink-600 text-white font-bold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="border-pink-200 text-pink-700">
                  {testimonial.company}
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge className="bg-pink-100 text-pink-700 mb-4">FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-pink-600">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-pink-100">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-pink-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
            Contact Support
            <MessageSquare className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <Card className="border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white shadow-2xl shadow-pink-100">
          <CardContent className="pt-16 pb-16 text-center space-y-8">
            <div className="flex justify-center gap-2 mb-4">
              <Badge className="bg-pink-600 text-white hover:bg-pink-700">
                <Cpu className="w-3 h-3 mr-1" />
                AI-Powered
              </Badge>
              <Badge className="bg-pink-600 text-white hover:bg-pink-700">
                <Code className="w-3 h-3 mr-1" />
                No Code Required
              </Badge>
              <Badge className="bg-pink-600 text-white hover:bg-pink-700">
                <Layers className="w-3 h-3 mr-1" />
                500+ Apps
              </Badge>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Workflow?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of teams already automating their work with AutoFlow AI.
              Start your free trial today—no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg px-10 py-6"
                onClick={() => toast.success("Welcome aboard! 🚀")}
              >
                Start Free Trial
                <Rocket className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-pink-300 hover:bg-pink-50 text-lg px-10 py-6"
              >
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-pink-600" />
                <span className="text-sm text-gray-600">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-pink-600" />
                <span className="text-sm text-gray-600">Enterprise-grade security</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-100 bg-gradient-to-br from-white to-pink-50">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                  AutoFlow AI
                </span>
              </div>
              <p className="text-gray-600">
                Automate your workflow with AI-powered automation platform.
              </p>
              <div className="flex gap-3 pt-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="outline" className="border-pink-200 hover:bg-pink-50">
                        <Globe className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Website</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Templates</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <Separator className="bg-pink-100 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 AutoFlow AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-pink-600 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};