import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Users, Box, Zap, Camera, Shield, TrendingUp, Award } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const DashboardOwner: React.FC = () => {
  const [score, setScore] = useState(87);
  
  // Simulate data logic
  useEffect(() => {
    const timer = setInterval(() => {
      setScore(prev => prev > 85 ? 86 : 88);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-white p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Status Bar */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center bg-brand-gray/30 p-6 rounded-2xl border border-white/5">
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <h1 className="text-2xl font-bold text-white">Factory Guardian A</h1>
              <span className="bg-brand-accent/20 text-brand-accent text-xs px-2 py-0.5 rounded border border-brand-accent/30 animate-pulse">AI MONITORING</span>
              <span className="bg-purple-500/20 text-purple-500 text-xs px-2 py-0.5 rounded border border-purple-500/30">12ms Latency</span>
            </div>
            <p className="text-gray-400 text-sm">Shift 1 • Dhaka EPZ Unit 4 • AI Models: Active</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Audit Readiness</p>
              <div className="flex items-end justify-end">
                <span className={`text-4xl font-black ${score < 90 ? 'text-brand-warning' : 'text-brand-accent'}`}>{score}/100</span>
                <span className="text-red-500 text-sm font-bold mb-1 ml-2">▼ 2%</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Main Feed + AI Overlay */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-black rounded-2xl border border-white/10 overflow-hidden relative group aspect-video">
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <div className="bg-black/70 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-brand-accent flex items-center border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mr-2 animate-pulse"></div>
                  CAM-04: FIRE EXIT
                </div>
                <div className="bg-red-500/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white flex items-center shadow-lg animate-pulse-fast">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  BLOCKAGE DETECTED (2m)
                </div>
              </div>

              <img 
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2000&auto=format&fit=crop" 
                alt="Factory Floor" 
                className="w-full h-full object-cover opacity-60"
              />
              
              {/* Bounding Box Mockup */}
              <div className="absolute bottom-10 right-1/4 w-40 h-56 border-2 border-red-500 bg-red-500/10 flex items-center justify-center">
                 <div className="bg-red-600 text-white text-[10px] px-1 absolute -top-4 left-0">OBSTRUCTION 98%</div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black to-transparent">
                 <div className="flex justify-between items-end">
                   <div className="flex gap-2">
                      <div className="h-10 w-16 bg-brand-gray/50 rounded border border-white/10 hover:border-brand-accent cursor-pointer"></div>
                      <div className="h-10 w-16 bg-brand-gray/50 rounded border border-brand-accent cursor-pointer"></div>
                      <div className="h-10 w-16 bg-brand-gray/50 rounded border border-white/10 hover:border-brand-accent cursor-pointer"></div>
                   </div>
                   <p className="text-xs text-gray-500 font-mono">AI LATENCY: 12ms</p>
                 </div>
              </div>
            </div>

            {/* Predictive Chart */}
            <div className="bg-brand-gray/20 p-6 rounded-2xl border border-white/5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Compliance Trend (7 Day)</h3>
                <span className="text-xs text-brand-warning">Predicted Fail in 14 days</span>
              </div>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={[
                    { d: 'M', v: 92 }, { d: 'T', v: 89 }, { d: 'W', v: 87 }, { d: 'T', v: 85 }, { d: 'F', v: 88 }, { d: 'S', v: 87 }, { d: 'S', v: 86 }
                  ]}>
                    <defs>
                      <linearGradient id="colorV" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="v" stroke="#F59E0B" fillOpacity={1} fill="url(#colorV)" />
                    <Tooltip contentStyle={{backgroundColor: '#111', border: '1px solid #333'}} itemStyle={{color: '#fff'}} />
                    <XAxis dataKey="d" stroke="#444" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Sidebar - Action & Skills */}
          <div className="space-y-6">
            
            {/* AI Prediction Alert */}
            <div className="bg-gradient-to-br from-brand-blue/10 to-purple-900/10 p-6 rounded-2xl border border-brand-blue/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">AI Predictive Alert</h3>
                  <p className="text-xs text-gray-400">Risk Analysis Engine</p>
                </div>
              </div>
              <div className="bg-black/40 p-4 rounded-xl border border-brand-warning/30 mb-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-brand-warning mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-bold mb-1">Audit Failure Predicted in 14 Days</p>
                    <p className="text-xs text-gray-400">Current trend suggests compliance score will drop below 70% threshold</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Confidence Level:</span>
                  <span className="font-bold text-white">87%</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Contributing Factors:</span>
                  <span className="font-bold text-brand-warning">3 Critical</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-brand-blue text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-500 transition-colors">
                View AI Recommendations
              </button>
            </div>
            
            {/* Action Items */}
            <div className="bg-brand-gray/20 p-6 rounded-2xl border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">AI-Detected Issues</h3>
                <span className="text-xs text-brand-accent font-mono">Real-time</span>
              </div>
              <div className="space-y-3">
                <ActionCard 
                  title="Fire Exit Blocked" 
                  location="Section B" 
                  time="2m ago" 
                  priority="critical" 
                />
                <ActionCard 
                  title="Overcrowding > 3/sqm" 
                  location="Canteen" 
                  time="15m ago" 
                  priority="high" 
                />
                <ActionCard 
                  title="Missing First Aid Box" 
                  location="Cutting Floor" 
                  time="1h ago" 
                  priority="medium" 
                />
              </div>
            </div>

            {/* Skill Passport Module */}
            <div className="bg-brand-gray/20 p-6 rounded-2xl border border-white/5">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Workforce Intelligence</h3>
                 <span className="text-brand-accent text-xs font-bold border border-brand-accent/20 px-2 py-0.5 rounded">Efficiency +15%</span>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                    <div>
                      <div className="text-2xl font-bold">482</div>
                      <div className="text-xs text-gray-500">Active Workers</div>
                    </div>
                    <div className="text-right">
                       <div className="text-xl font-bold text-brand-accent">92%</div>
                       <div className="text-xs text-gray-500">Retention Rate</div>
                    </div>
                 </div>
                 <div className="bg-brand-blue/10 p-3 rounded-lg border border-brand-blue/20">
                    <div className="flex items-center mb-2 justify-between">
                       <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-brand-blue mr-2" />
                          <span className="text-sm font-bold text-brand-blue">Skill Velocity</span>
                       </div>
                       <span className="text-xs text-white font-mono">12 Graduates Today</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full mb-1">
                       <div className="bg-brand-blue w-[65%] h-full rounded-full"></div>
                    </div>
                    <p className="text-[10px] text-gray-400">65% of workforce at Level 3+</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const ActionCard: React.FC<{title: string, location: string, time: string, priority: 'critical'|'high'|'medium'}> = ({title, location, time, priority}) => (
  <div className={`p-4 rounded-xl border-l-4 ${
    priority === 'critical' ? 'bg-red-500/10 border-red-500' : 
    priority === 'high' ? 'bg-orange-500/10 border-orange-500' : 
    'bg-yellow-500/10 border-yellow-500'
  } hover:bg-white/5 transition-colors cursor-pointer group`}>
    <div className="flex justify-between items-start mb-1">
      <h4 className="font-bold text-sm text-white group-hover:text-brand-blue transition-colors">{title}</h4>
      <span className="text-[10px] font-mono text-gray-500">{time}</span>
    </div>
    <p className="text-xs text-gray-400">{location}</p>
  </div>
);

export default DashboardOwner;