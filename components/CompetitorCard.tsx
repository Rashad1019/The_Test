import React from 'react';
import { Competitor } from '../types';
import { CheckCircle2, DollarSign } from 'lucide-react';

interface CompetitorCardProps {
  competitor: Competitor;
}

const CompetitorCard: React.FC<CompetitorCardProps> = ({ competitor }) => {
  // Helper to extract numeric price for approximate sorting visuals or just coloring
  const isFreeTier = competitor.price.toLowerCase().includes('free');

  return (
    <div className={`flex flex-col rounded-2xl border bg-slate-900/80 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${competitor.color}`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white">{competitor.name}</h3>
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{competitor.tier}</span>
      </div>

      <div className="mb-6 flex items-baseline">
        {!isFreeTier && <DollarSign className="h-5 w-5 self-start text-slate-400" />}
        <span className="text-3xl font-bold tracking-tight text-white">
          {competitor.price.replace(/[^0-9a-zA-Z$.]/g, ' ').split(' ')[0]}
        </span>
        <span className="ml-1 text-sm text-slate-400">
            {competitor.price.includes('month') ? '/mo' : ''}
        </span>
      </div>
      
      <div className="mb-6 rounded-lg bg-slate-950/50 p-3">
        <p className="text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-indigo-400">Best For:</span> {competitor.target}
        </p>
      </div>

      <div className="flex-1">
        <h4 className="mb-3 text-sm font-semibold text-slate-200">Key Features</h4>
        <ul className="space-y-3">
          {competitor.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircle2 className="mr-2 h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
              <span className="text-sm text-slate-400">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-800">
        <button className="w-full rounded-lg bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CompetitorCard;