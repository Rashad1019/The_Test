import React from 'react';
import { SpendingRank } from '../types';
import { ArrowRight, Trophy } from 'lucide-react';

const startups: SpendingRank[] = [
  { rank: 1, name: 'OpenAI', category: 'General LLM', description: 'Dominant market leader, high consumer & enterprise adoption.' },
  { rank: 2, name: 'Anthropic', category: 'General LLM', description: 'Strong second place, focus on safety and enterprise.' },
  { rank: 3, name: 'Replit', category: 'Dev Tools', description: 'Agentic product development, 15x revenue vs competitors.' },
  { rank: 4, name: 'Freepik', category: 'Creative', description: 'Leading the largest spending category (Creative Tools).' },
  { rank: 5, name: 'ElevenLabs', category: 'Audio/Voice', description: 'Top creative audio platform.' },
];

const StartupList: React.FC = () => {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
      <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-gradient-to-r from-slate-900 to-slate-800">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Trophy className="text-yellow-500 w-5 h-5" />
            Startup Spending Leaders
          </h3>
          <p className="text-slate-400 text-sm mt-1">Based on spending data (June-August 2025)</p>
        </div>
        <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">Ranked by Revenue</span>
      </div>
      
      <div className="divide-y divide-slate-800/50">
        {startups.map((startup) => (
          <div key={startup.name} className="group flex items-center p-4 hover:bg-slate-800/50 transition-colors">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-lg font-bold text-slate-400 group-hover:text-white group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
              {startup.rank}
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-baseline justify-between">
                <h4 className="text-base font-medium text-white group-hover:text-indigo-300 transition-colors">{startup.name}</h4>
                <span className="text-xs font-medium text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">{startup.category}</span>
              </div>
              <p className="text-sm text-slate-400 mt-0.5">{startup.description}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupList;