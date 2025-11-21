import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const adoptionData = [
  { year: '2023', usage: 23 },
  { year: '2024', usage: 40 },
  { year: '2025', usage: 58 },
];

const barrierData = [
  { name: 'Cost', value: 55 },
  { name: 'Security', value: 52 },
  { name: 'Expertise', value: 45 }, // Inferred/Generic value for visual balance based on text "lack of internal expertise"
];

const COLORS = ['#ef4444', '#f97316', '#eab308'];

const AdoptionChart: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Chart 1: Adoption Curve */}
      <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-2">SMB GenAI Adoption Surge</h3>
        <p className="text-sm text-slate-400 mb-6">Usage percentage among US small businesses</p>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={adoptionData}>
              <defs>
                <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="year" stroke="#94a3b8" tickMargin={10} />
              <YAxis stroke="#94a3b8" unit="%" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                itemStyle={{ color: '#818cf8' }}
              />
              <Area 
                type="monotone" 
                dataKey="usage" 
                stroke="#6366f1" 
                fillOpacity={1} 
                fill="url(#colorUsage)" 
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-center">
            <p className="text-xs text-emerald-400 font-mono bg-emerald-400/10 inline-block px-2 py-1 rounded">
                +35% Growth Year-over-Year
            </p>
        </div>
      </div>

      {/* Chart 2: Barriers */}
      <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6">
        <h3 className="text-lg font-semibold text-white mb-2">Top Implementation Barriers</h3>
        <p className="text-sm text-slate-400 mb-6">Percentage of SMBs reporting challenges</p>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barrierData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
              <XAxis type="number" stroke="#94a3b8" unit="%" />
              <YAxis dataKey="name" type="category" stroke="#94a3b8" width={80} />
              <Tooltip 
                 cursor={{fill: 'rgba(255,255,255,0.05)'}}
                 contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30}>
                {barrierData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex justify-between px-4 text-xs text-slate-500">
            <span>Cost & Tools</span>
            <span>Security</span>
            <span>Expertise</span>
        </div>
      </div>
    </div>
  );
};

export default AdoptionChart;