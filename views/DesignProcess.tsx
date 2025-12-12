import React from 'react';

const DesignProcess: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-gray-300 p-4 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* Intro */}
        <div className="border-b border-gray-800 pb-12">
          <h1 className="text-5xl font-black text-white mb-6">VERITEX BD <br/><span className="text-brand-blue">Strategic Design Case</span></h1>
          <p className="text-xl leading-relaxed">
            The core insight that drove this redesign: <strong className="text-white">"Trust Currency"</strong>. 
            The goal was to move from a defensive "Audit Tool" to a proactive "Growth Platform". 
            Factories use it to prove excellence; Buyers use it to eliminate risk.
          </p>
        </div>

        {/* 1. Core Insight */}
        <section>
          <div className="flex items-center mb-6">
            <span className="text-6xl font-black text-white/10 mr-4 -ml-2 select-none">01</span>
            <h2 className="text-3xl font-bold text-white">The Psychological Shift</h2>
          </div>
          <div className="bg-brand-gray/20 p-8 rounded-3xl border border-white/5">
             <div className="grid md:grid-cols-2 gap-12">
               <div>
                 <h4 className="text-brand-danger font-bold uppercase tracking-widest text-sm mb-4">Old Paradigm</h4>
                 <p className="text-2xl font-bold text-gray-500">"Prove you're not bad."</p>
                 <p className="mt-2 text-sm text-gray-400">Defensive, fear-based, reactive audits.</p>
               </div>
               <div>
                 <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4">New Paradigm</h4>
                 <p className="text-2xl font-bold text-white">"Demonstrate you're excellent."</p>
                 <p className="mt-2 text-sm text-gray-400">Proactive, data-driven, premium pricing.</p>
               </div>
             </div>
          </div>
        </section>

        {/* 2. Product Architecture */}
        <section>
          <div className="flex items-center mb-6">
            <span className="text-6xl font-black text-white/10 mr-4 -ml-2 select-none">02</span>
            <h2 className="text-3xl font-bold text-white">3-Layer Design System</h2>
          </div>
          <div className="space-y-4">
             <DesignCard 
               title="Layer 1: The Sentinel (Green)"
               desc="Visual language involves high-contrast signal green. It represents safety, profit, and 'System Online'. UI elements are large, glanceable status indicators for the factory floor."
             />
             <DesignCard 
               title="Layer 2: The Quality (Precision)"
               desc="Focused on 'Zero-Defect'. The UI shifts to precision bounding boxes and micro-interactions. Real-time feedback loops are critical here."
             />
             <DesignCard 
               title="Layer 3: The Trust (Blue)"
               desc="The Buyer's view. We introduced 'Brand Blue' to signify corporate stability and data verification. The Dashboard changes from 'Operational' to 'Strategic' view."
             />
          </div>
        </section>

        {/* 3. User Personas */}
        <section>
          <div className="flex items-center mb-6">
             <span className="text-6xl font-black text-white/10 mr-4 -ml-2 select-none">03</span>
            <h2 className="text-3xl font-bold text-white">Solving the Nightmares</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
              <PersonaCard 
                role="Factory Owner" 
                nightmare="Surprise Audit Failure" 
                solution="Always-On Audit Score" 
              />
              <PersonaCard 
                role="Global Buyer" 
                nightmare="PR Scandal / Black Swan" 
                solution="Risk Intelligence Matrix" 
              />
              <PersonaCard 
                role="Skilled Worker" 
                nightmare="Wage Stagnation" 
                solution="Blockchain Skill Passport" 
              />
          </div>
        </section>

      </div>
    </div>
  );
};

const DesignCard: React.FC<{title: string, desc: string}> = ({title, desc}) => (
  <div className="bg-brand-gray/20 p-6 rounded-xl border border-white/5 hover:border-white/20 transition-colors">
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </div>
);

const PersonaCard: React.FC<{role: string, nightmare: string, solution: string}> = ({role, nightmare, solution}) => (
  <div className="bg-black p-5 rounded-xl border border-white/10">
    <h4 className="font-bold text-brand-blue text-sm uppercase tracking-widest mb-4">{role}</h4>
    <p className="text-xs text-gray-500 uppercase mb-1">Nightmare</p>
    <p className="text-white font-medium mb-4">{nightmare}</p>
    <p className="text-xs text-gray-500 uppercase mb-1">Veritex Solution</p>
    <p className="text-brand-accent font-medium">{solution}</p>
  </div>
);

export default DesignProcess;