import React, { useState } from 'react';
import { Trend, Competitor } from './types';
import TrendCard from './components/TrendCard';
import CompetitorCard from './components/CompetitorCard';
import AdoptionChart from './components/AdoptionChart';
import StartupList from './components/StartupList';
import { LayoutDashboard, BarChart3, Users, Zap, Menu, X } from 'lucide-react';

// Data Injection
const trendsData: Trend[] = [
  {
    id: 1,
    title: "Strategic Necessity",
    subtitle: "From Experiment to Core",
    description: "AI strategy now dictates competitive advantage. Companies are shifting from 'if' to 'how quickly', moving towards a portfolio approach of quick wins and 'moonshots'.",
    icon: "Zap",
    stat: "Priority #1"
  },
  {
    id: 2,
    title: "Agentic AI Workforce",
    subtitle: "Digital Employees",
    description: "The rise of 'AI employees' that complete end-to-end workflows. Initial fears of displacement are countered by SMBs increasing workforce size while using AI.",
    icon: "Users",
    stat: "2x Workforce Potential"
  },
  {
    id: 3,
    title: "Operational Speed",
    subtitle: "50% Faster R&D",
    description: "Product development lifecycles cut in half. AI is becoming a value play rather than volume, driving sustainability and efficiency in resource-heavy sectors.",
    icon: "TrendingUp",
    stat: "-30% Costs"
  },
  {
    id: 4,
    title: "Sector Disruption",
    subtitle: "Consumer & Finance",
    description: "Dynamic pricing in consumer markets, 80% of Canva users are SMBs, and a regulatory shift in Health towards self-governance accelerating drug discovery.",
    icon: "Layers",
    stat: "$8.65B Ecommerce"
  }
];

const competitorsData: Competitor[] = [
  {
    name: "HubSpot AI",
    tier: "All-in-One Platform",
    price: "$50/mo",
    features: ["CRM & Content Creation", "Email Automation", "Lead Scoring", "Unified System"],
    target: "SMBs needing integration",
    color: "border-orange-500/20 hover:border-orange-500"
  },
  {
    name: "Salesforce",
    tier: "Einstein / Agentforce",
    price: "$75/user",
    features: ["Predictive Scoring", "Agentforce 360", "Auto-Drafting", "Enterprise Grade"],
    target: "Sales-heavy orgs",
    color: "border-blue-500/20 hover:border-blue-500"
  },
  {
    name: "Google",
    tier: "Workspace / Gemini",
    price: "Free Trial*",
    features: ["Docs/Sheets Integration", "Real-time Translation", "Email Summarization", "Data Organization"],
    target: "Productivity & Collab",
    color: "border-emerald-500/20 hover:border-emerald-500"
  },
  {
    name: "Canva AI",
    tier: "Visual Design",
    price: "$15/mo",
    features: ["Text-to-Image", "Magic Edit", "Professional Graphics", "Zero Design Skills needed"],
    target: "Marketing Teams",
    color: "border-purple-500/20 hover:border-purple-500"
  },
  {
    name: "Jasper AI",
    tier: "Copywriter",
    price: "$39-$99/mo",
    features: ["Brand Voice Consistency", "High-Converting Copy", "Marketing Focus", "Ad Variations"],
    target: "Content Creators",
    color: "border-indigo-500/20 hover:border-indigo-500"
  }
];

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
                <BarChart3 size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Vision<span className="text-indigo-500">2025</span></span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
              <a href="#trends" className="hover:text-white transition-colors">Trends</a>
              <a href="#adoption" className="hover:text-white transition-colors">Adoption Data</a>
              <a href="#comparison" className="hover:text-white transition-colors">Tool Comparison</a>
              <a href="#spending" className="hover:text-white transition-colors">Market Leaders</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-4">
             <a href="#trends" className="block text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Trends</a>
             <a href="#adoption" className="block text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Adoption Data</a>
             <a href="#comparison" className="block text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Tool Comparison</a>
          </div>
        )}
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-24">

        {/* Hero Section */}
        <section className="relative text-center space-y-6 py-10">
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
            2025 Industry Report
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">AI Inflection Point</span> Has Arrived
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Transitioning from experimental technology to core operational necessity. 
            Strategies now prioritize vision, sustained adoption, and agentic workforce augmentation.
          </p>
        </section>

        {/* Major Trends Grid */}
        <section id="trends" className="scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Major Trends 2025</h2>
            <div className="h-px flex-1 bg-slate-800 ml-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendsData.map(trend => (
              <TrendCard key={trend.id} trend={trend} />
            ))}
          </div>
        </section>

        {/* Adoption Stats */}
        <section id="adoption" className="scroll-mt-20">
          <div className="flex items-center justify-between mb-8">
             <h2 className="text-2xl font-bold text-white">SMB Adoption & Barriers</h2>
             <div className="h-px flex-1 bg-slate-800 ml-6"></div>
          </div>
          <AdoptionChart />
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-indigo-600/10 border border-indigo-500/20 p-4 text-center">
              <p className="text-2xl font-bold text-indigo-400">84%</p>
              <p className="text-sm text-slate-400">Willing to automate Marketing</p>
            </div>
            <div className="rounded-xl bg-purple-600/10 border border-purple-500/20 p-4 text-center">
              <p className="text-2xl font-bold text-purple-400">59%</p>
              <p className="text-sm text-slate-400">Willing to automate Service</p>
            </div>
             <div className="rounded-xl bg-emerald-600/10 border border-emerald-500/20 p-4 text-center">
              <p className="text-2xl font-bold text-emerald-400">82%</p>
              <p className="text-sm text-slate-400">Increased Workforce Size</p>
            </div>
          </div>
        </section>

        {/* Competitor Comparison */}
        <section id="comparison" className="scroll-mt-20">
           <div className="flex items-center justify-between mb-8">
             <h2 className="text-2xl font-bold text-white">Tool Comparison</h2>
             <div className="h-px flex-1 bg-slate-800 ml-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {competitorsData.map((comp, index) => (
              <CompetitorCard key={index} competitor={comp} />
            ))}
          </div>
          
          <div className="mt-8 p-4 rounded-lg bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-sm text-slate-400">
            <span>
              <strong className="text-white">Value Play:</strong> Budget implementations possible for &lt;$100/mo using combos like Tidio ($29) + Canva ($15) + QuickBooks ($17.50).
            </span>
          </div>
        </section>

        {/* Startup Spending */}
        <section id="spending" className="scroll-mt-20 pb-20">
           <div className="flex items-center justify-between mb-8">
             <h2 className="text-2xl font-bold text-white">Startup Spending Landscape</h2>
             <div className="h-px flex-1 bg-slate-800 ml-6"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <StartupList />
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-indigo-900/20 to-slate-900 border border-slate-800 p-6 flex flex-col justify-center">
                <LayoutDashboard className="w-12 h-12 text-indigo-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Spending Insight</h3>
                <p className="text-slate-300 mb-4">
                  <strong>Creative Tools</strong> represent the largest category of expenditure.
                </p>
                <p className="text-slate-400 text-sm">
                  Spending data from June–August 2025 shows horizontal applications lead investment. AI is democratizing specialized skills like design and coding.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-800/50">
                  <p className="text-xs font-mono text-indigo-400 mb-1">HOT SECTOR</p>
                  <p className="font-semibold text-white">Agentic AI & Vibe Coding (Replit)</p>
                </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-slate-500">
          <p>&copy; 2025 Industry Insights. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;