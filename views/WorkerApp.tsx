import React from 'react';
import { ArrowLeft, PlayCircle, Award, CheckCircle2, Trophy, Mic } from 'lucide-react';

const WorkerApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4">
       {/* Mobile Frame */}
       <div className="w-full max-w-sm bg-black rounded-[2.5rem] border-4 border-gray-800 overflow-hidden shadow-2xl relative h-[800px] flex flex-col">
          
          {/* Status Bar */}
          <div className="h-12 bg-black flex justify-between items-center px-6 pt-2">
             <span className="text-xs text-white font-bold">9:41</span>
             <div className="flex gap-1">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
                <div className="w-4 h-4 bg-white rounded-sm"></div>
             </div>
          </div>

          {/* App Header */}
          <div className="p-6 pb-4">
             <div className="flex justify-between items-center mb-6">
                <div>
                   <h2 className="text-gray-400 text-xs uppercase">Welcome Back</h2>
                   <h1 className="text-2xl font-bold text-white">Rahim Islam</h1>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-brand-accent overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
             </div>
             
             {/* Level Card */}
             <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-5 rounded-2xl border border-purple-500/30 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10"><Trophy size={100} /></div>
                <div className="relative z-10">
                   <div className="flex justify-between items-start mb-2">
                      <span className="bg-white/20 text-xs px-2 py-1 rounded-lg">Stitching Operator</span>
                      <span className="font-bold text-xl">Level 2</span>
                   </div>
                   <div className="mt-4">
                      <div className="flex justify-between text-xs mb-1 text-purple-200">
                         <span>XP: 2,450 / 3,000</span>
                         <span>Level 3 (+15% Salary)</span>
                      </div>
                      <div className="w-full bg-black/30 h-2 rounded-full">
                         <div className="bg-brand-accent w-[85%] h-full rounded-full shadow-[0_0_10px_rgba(0,224,85,0.5)]"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Main Content - Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-6">
             
             {/* AI Learning Assistant */}
             <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4 rounded-xl border border-purple-500/30 mb-4">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Mic className="w-4 h-4 text-purple-500" />
                   </div>
                   <div className="flex-1">
                      <h4 className="text-white text-sm font-bold">Your AI Tutor</h4>
                      <p className="text-xs text-gray-400">Personalized learning path</p>
                   </div>
                   <div className="text-right">
                      <div className="text-xs text-purple-400 font-bold">Active</div>
                   </div>
                </div>
                <div className="bg-black/40 p-3 rounded-lg border border-purple-500/20">
                   <div className="flex items-start gap-2 mb-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                         <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="flex-1">
                         <p className="text-white text-xs mb-2">"Great progress, Rahim! You've mastered basic overlock. Ready for advanced techniques? This will unlock Level 3 and 15% salary increase."</p>
                      </div>
                   </div>
                   <button className="w-full bg-purple-500 hover:bg-purple-400 text-white py-2 rounded-lg text-xs font-bold transition-colors">
                      🎤 Ask AI Tutor (Voice)
                   </button>
                </div>
             </div>
             
             {/* Next Lesson */}
             <div>
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                   <PlayCircle className="text-brand-accent w-4 h-4" /> 
                   AI-Recommended for You
                </h3>
                <div className="bg-gray-900 rounded-xl p-3 flex gap-3 border border-gray-800 hover:border-brand-accent transition-colors cursor-pointer group">
                   <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?q=80&w=200&auto=format&fit=crop" className="opacity-60 w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="bg-black/50 rounded-full p-1"><PlayCircle className="text-white w-6 h-6" /></div>
                      </div>
                      <div className="absolute top-1 right-1 bg-purple-500 text-white text-[8px] px-1 py-0.5 rounded font-bold">AI Pick</div>
                   </div>
                   <div className="flex-1 py-1">
                      <h4 className="font-bold text-white text-sm mb-1">Advanced Overlock Tech.</h4>
                      <p className="text-xs text-gray-400 mb-2">Lesson 4 • 3 mins • 95% match</p>
                      <div className="flex gap-1 flex-wrap">
                         <span className="bg-purple-900/50 text-purple-300 text-[10px] px-2 py-1 rounded border border-purple-500/20">Bangla Audio</span>
                         <span className="bg-blue-900/50 text-blue-300 text-[10px] px-1.5 py-1 rounded">+250 XP</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Assessments */}
             <div>
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                   <Mic className="text-blue-400 w-4 h-4" /> 
                   AI Voice Assessment
                </h3>
                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
                   <div className="flex items-center gap-2 mb-3">
                      <div className="flex-1">
                         <p className="text-xs text-gray-400 mb-1">Speak your answers in Bangla or English</p>
                         <div className="flex items-center gap-1 text-[10px] text-purple-400">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>AI evaluates pronunciation & accuracy</span>
                         </div>
                      </div>
                   </div>
                   <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                      <Mic className="w-4 h-4" /> Start AI Voice Test
                   </button>
                   <p className="text-center text-[10px] text-gray-500 mt-2">98.5% accuracy • Real-time feedback</p>
                </div>
             </div>

             {/* Certificates */}
             <div>
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                   <Award className="text-yellow-500 w-4 h-4" /> 
                   My Passport
                </h3>
                <div className="space-y-2">
                   <CertificateItem title="Fire Safety Basics" date="Oct 12, 2024" hash="0x82...9a" />
                   <CertificateItem title="Basic Stitching L1" date="Sep 05, 2024" hash="0x11...b2" />
                </div>
             </div>

          </div>

          {/* Bottom Nav */}
          <div className="h-16 bg-gray-900 border-t border-gray-800 flex justify-around items-center px-2">
             <NavIcon icon={<PlayCircle />} label="Learn" active />
             <NavIcon icon={<Award />} label="Skills" />
             <NavIcon icon={<Trophy />} label="Jobs" />
          </div>

       </div>
    </div>
  );
};

const CertificateItem: React.FC<{title: string, date: string, hash: string}> = ({title, date, hash}) => (
   <div className="bg-gray-900 p-3 rounded-lg border border-gray-800 flex justify-between items-center">
      <div className="flex items-center gap-3">
         <div className="p-2 bg-yellow-500/10 rounded-full text-yellow-500">
            <Award className="w-4 h-4" />
         </div>
         <div>
            <div className="text-white text-sm font-bold">{title}</div>
            <div className="text-[10px] text-gray-500">{date}</div>
         </div>
      </div>
      <div className="text-[10px] font-mono text-gray-600 bg-black px-2 py-1 rounded">
         Block: {hash}
      </div>
   </div>
);

const NavIcon: React.FC<{icon: React.ReactNode, label: string, active?: boolean}> = ({icon, label, active}) => (
   <div className={`flex flex-col items-center gap-1 ${active ? 'text-brand-accent' : 'text-gray-500'}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { size: 20 })}
      <span className="text-[10px] font-medium">{label}</span>
   </div>
);

export default WorkerApp;