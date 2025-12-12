import React, { useState } from 'react';
import { Shield, Globe, AlertTriangle, TrendingUp, CheckCircle2, Filter, Search, BarChart3 } from 'lucide-react';

const DashboardBuyer: React.FC = () => {
  const factories = [
    { name: "Dhaka Textiles Ltd", trust: 960, status: "Certified", trend: "up", skillLevel: "High (65% L4+)", capacity: "120k", onboarding: "Instant" },
    { name: "Chittagong Garments", trust: 780, status: "At Risk", trend: "down", skillLevel: "Med (30% L4+)", capacity: "80k", onboarding: "Pending" },
    { name: "Savar Knitwear", trust: 920, status: "Certified", trend: "up", skillLevel: "High (72% L4+)", capacity: "200k", onboarding: "Instant" },
    { name: "Gazipur Fashions", trust: 450, status: "Critical", trend: "down", skillLevel: "Low (10% L4+)", capacity: "50k", onboarding: "Blocked" },
  ];

  const [filterMode, setFilterMode] = useState(false);

  return (
    <div className="min-h-screen bg-brand-black text-white p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Buyer Header */}
        <div className="flex flex-col md:flex-row justify-between items-end pb-8 border-b border-white/10">
          <div>
             <h2 className="text-sm text-brand-blue font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <span>Comply Chain AI</span>
                <span className="bg-brand-blue/20 text-brand-blue text-[10px] px-2 py-0.5 rounded">ML Powered</span>
             </h2>
             <h1 className="text-4xl font-black">AI-Matched Supplier Network</h1>
             <p className="text-gray-400 text-sm mt-2">Predictive analytics • Real-time risk monitoring • Smart recommendations</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-6">
            <div className="text-right">
               <p className="text-sm text-gray-400">Active Suppliers</p>
               <p className="text-2xl font-bold">34</p>
            </div>
            <div className="text-right">
               <p className="text-sm text-gray-400">Value Protected</p>
               <p className="text-2xl font-bold text-brand-accent">$251M</p>
            </div>
          </div>
        </div>

          {/* AI Recommendation Banner */}
        <div className="bg-gradient-to-r from-brand-blue/10 to-purple-900/10 border border-brand-blue/30 p-6 rounded-2xl">
           <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                 <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                       <BarChart3 className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                       <h3 className="font-bold text-white text-lg">AI Recommendations for Your Order</h3>
                       <p className="text-xs text-gray-400">Based on your requirements: 50k units, denim, 15-day delivery</p>
                    </div>
                 </div>
                <div className="flex gap-3 flex-wrap">
                    <div className="bg-black/40 px-4 py-2 rounded-lg border border-brand-blue/20">
                       <div className="text-xs text-gray-400">Best Match</div>
                       <div className="text-white font-bold">Dhaka Textiles Ltd</div>
                       <div className="text-[10px] text-brand-blue">96% compatibility</div>
                    </div>
                    <div className="bg-black/40 px-4 py-2 rounded-lg border border-purple-500/20">
                       <div className="text-xs text-gray-400">Alternative</div>
                       <div className="text-white font-bold">Savar Knitwear</div>
                       <div className="text-[10px] text-purple-400">89% compatibility</div>
                    </div>
                    <div className="bg-black/40 px-4 py-2 rounded-lg border border-white/10">
                       <div className="text-xs text-gray-400">Risk Score</div>
                       <div className="text-brand-accent font-bold text-xl">Low</div>
                       <div className="text-[10px] text-gray-500">0.8% failure prob.</div>
                    </div>
                 </div>
              </div>
              <div className="flex flex-col gap-2">
               <button className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-500 transition-colors whitespace-nowrap">
                 View AI Analysis
               </button>
               <button className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors whitespace-nowrap">
                 Request Intro to Best Match
               </button>
              </div>
           </div>
        </div>

        {/* Discovery Bar */}
        <div className="bg-brand-gray/20 border border-white/5 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center">
           <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Ask AI to find suppliers... (e.g., 'denim specialists with 90+ score')" 
                className="w-full bg-black/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue transition-colors"
              />
              <div className="absolute right-3 top-3">
                 <span className="text-[10px] bg-brand-blue/20 text-brand-blue px-2 py-0.5 rounded font-bold">AI Search</span>
              </div>
           </div>
           <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <FilterBtn label="Score > 90%" active />
              <FilterBtn label="Skill: Expert > 40%" />
              <FilterBtn label="Lead Time < 15d" />
              <FilterBtn label="Denim Specialized" />
           </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {/* Trust Matrix */}
           <div className="lg:col-span-2 bg-brand-gray/20 rounded-2xl border border-white/5 overflow-hidden">
             <div className="p-6 border-b border-white/5 flex justify-between items-center">
               <h3 className="font-bold text-lg">Verified Factory Marketplace</h3>
               <span className="text-xs text-gray-400">Real-time Data Sync</span>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                 <thead className="bg-black/20 text-gray-500 text-xs uppercase tracking-wider">
                   <tr>
                     <th className="p-4">Factory</th>
                     <th className="p-4">Veritex Score</th>
                     <th className="p-4">Workforce Skill</th>
                     <th className="p-4">Capacity</th>
                     <th className="p-4">Status</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                   {factories.map((f, i) => (
                     <tr key={i} className="hover:bg-white/5 transition-colors cursor-pointer group">
                       <td className="p-4 font-bold text-white group-hover:text-brand-blue transition-colors">{f.name}</td>
                       <td className="p-4">
                         <div className="flex items-center gap-3">
                           <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                             <div 
                                className={`h-full rounded-full ${f.trust > 800 ? 'bg-brand-accent' : f.trust > 500 ? 'bg-brand-warning' : 'bg-brand-danger'}`} 
                                style={{width: `${f.trust / 10}%`}}
                             ></div>
                           </div>
                           <span className="font-mono text-xs">{f.trust}</span>
                        </div>
                       </td>
                       <td className="p-4 text-xs font-mono text-gray-300">{f.skillLevel}</td>
                       <td className="p-4 text-xs text-gray-400">{f.capacity}</td>
                       <td className="p-4">
                         <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                           f.status === 'Certified' ? 'bg-brand-accent/10 text-brand-accent' : 
                           f.status === 'At Risk' ? 'bg-brand-warning/10 text-brand-warning' : 
                           'bg-brand-danger/10 text-brand-danger'
                         }`}>
                           {f.status}
                         </span>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>

           {/* Live Feed */}
           <div className="bg-brand-gray/20 rounded-2xl border border-white/5 p-6">
             <h3 className="font-bold text-lg mb-6 flex items-center justify-between">
               <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-brand-blue" />
                  AI Monitoring Feed
               </div>
               <span className="text-xs text-brand-accent font-mono">Real-time</span>
             </h3>
             <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:w-px before:bg-gradient-to-b before:from-brand-blue/50 before:to-transparent">
                <FeedItem 
                  time="10:32 AM"
                  factory="Gazipur Fashions"
                  msg="Cutting section - 3 workers no safety glasses"
                  type="critical"
                />
                <FeedItem 
                  time="09:15 AM"
                  factory="Dhaka Textiles"
                  msg="Fire Exit B - Clear Check Passed"
                  type="success"
                />
                <FeedItem 
                  time="08:45 AM"
                  factory="Chittagong Garments"
                  msg="Quality Check - Stitching defect rate spiked 15%"
                  type="warning"
                />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const FeedItem: React.FC<{time: string, factory: string, msg: string, type: 'critical'|'success'|'warning'}> = ({time, factory, msg, type}) => (
  <div className="relative pl-8">
    <div className={`absolute left-0 top-1 w-5 h-5 rounded-full border-4 border-brand-black ${
      type === 'critical' ? 'bg-brand-danger' : type === 'success' ? 'bg-brand-accent' : 'bg-brand-warning'
    }`}></div>
    <div className="text-xs text-gray-500 font-mono mb-1">{time}</div>
    <div className="font-bold text-sm text-white">{factory}</div>
    <div className="text-sm text-gray-400">{msg}</div>
  </div>
);

const FilterBtn: React.FC<{label: string, active?: boolean}> = ({label, active}) => (
  <button className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${active ? 'bg-brand-blue text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
    {label}
  </button>
);

export default DashboardBuyer;