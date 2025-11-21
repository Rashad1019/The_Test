import React from 'react';
import { Trend } from '../types';
import { Zap, Users, TrendingUp, Layers } from 'lucide-react';

interface TrendCardProps {
  trend: Trend;
}

const TrendCard: React.FC<TrendCardProps> = ({ trend }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-6 h-6 text-yellow-400" />;
      case 'Users': return <Users className="w-6 h-6 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-green-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-purple-400" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/20"></div>
      
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <div className="rounded-lg bg-slate-800/80 p-3 ring-1 ring-white/10">
            {getIcon(trend.icon)}
          </div>
          {trend.stat && (
            <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
              {trend.stat}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-1">{trend.title}</h3>
        <p className="text-sm font-medium text-indigo-300 mb-3">{trend.subtitle}</p>
        <p className="text-slate-400 text-sm leading-relaxed">
          {trend.description}
        </p>
      </div>
    </div>
  );
};

export default TrendCard;