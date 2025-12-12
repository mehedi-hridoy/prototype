import React from 'react';
import { ViewState } from '../types';
import { ArrowRight, ShieldCheck, PlayCircle, Smartphone, Building2, Globe2, BarChart3, Clock, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';

interface LandingPageProps {
  onViewChange: (view: ViewState) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onViewChange }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden border-b border-brand-gray">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gray/40 via-brand-black to-brand-black"></div>
        
        {/* Abstract RMG Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
           <img 
            src="https://images.unsplash.com/photo-1596489396264-9642643a6d79?q=80&w=2000&auto=format&fit=crop"
            alt="Factory Floor"
            className="w-full h-full object-cover grayscale"
           />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/5 text-brand-accent text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-accent mr-2 animate-pulse"></span>
            Live in 200+ Factories in Dhaka EPZ
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight mb-6">
            Smart Supply Chain <br/>
            <span className="veritex-gradient">Intelligence.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            AI-powered compliance & training platform. <span className="text-white font-medium">Factories</span> get certified. <span className="text-white font-medium">Workers</span> upskill. <span className="text-white font-medium">Brands</span> source with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => onViewChange('dashboard-owner')}
              className="group px-8 py-4 bg-brand-accent text-brand-black font-bold text-lg rounded-xl hover:bg-white transition-all flex items-center justify-center shadow-[0_0_40px_rgba(0,224,85,0.3)]"
            >
              <Building2 className="w-5 h-5 mr-2 opacity-80" />
              Factory Demo
            </button>
            <button 
              onClick={() => onViewChange('worker-app')}
              className="group px-8 py-4 bg-brand-gray text-white border border-white/10 font-bold text-lg rounded-xl hover:bg-brand-gray/80 transition-all flex items-center justify-center"
            >
              <Smartphone className="w-5 h-5 mr-2 opacity-80" />
              Worker App
            </button>
            <button 
              onClick={() => onViewChange('dashboard-buyer')}
              className="group px-8 py-4 bg-brand-blue text-white font-bold text-lg rounded-xl hover:bg-blue-400 transition-all flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              <Globe2 className="w-5 h-5 mr-2 opacity-80" />
              Buyer View
            </button>
          </div>
        </div>
      </section>

      {/* AI Technology Core */}
      <section className="py-24 bg-brand-dark border-b border-brand-gray/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/5 text-brand-blue text-xs font-bold mb-6 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-blue mr-2 animate-pulse"></span>
              Powered by Advanced AI
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Three AI Engines,<br/>
              <span className="veritex-gradient">One Platform</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Computer vision, natural language processing, and predictive analytics working together to transform supply chains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Engine 1: Compliance */}
            <div className="bg-brand-gray/20 border border-brand-accent/30 rounded-2xl p-8 hover:border-brand-accent transition-all group">
              <div className="w-16 h-16 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Compliance Monitor</h3>
              <p className="text-gray-400 mb-6">
                Computer vision analyzes 24/7 camera feeds to detect safety violations, blocked exits, overcrowding, and missing PPE in real-time.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-accent mr-2 font-bold">•</span>
                  <span><strong className="text-white">Real-time Detection:</strong> 12ms latency, 98.5% accuracy</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-accent mr-2 font-bold">•</span>
                  <span><strong className="text-white">Predictive Alerts:</strong> Warns of violations 14 days before audit</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-accent mr-2 font-bold">•</span>
                  <span><strong className="text-white">Multi-Standard:</strong> Tracks 45+ global compliance metrics</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-accent mr-2 font-bold">•</span>
                  <span><strong className="text-white">Auto-Documentation:</strong> Generates audit-ready reports</span>
                </li>
              </ul>
            </div>

            {/* AI Engine 2: Learning Assistant */}
            <div className="bg-brand-gray/20 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 transition-all group">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PlayCircle className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Learning Assistant</h3>
              <p className="text-gray-400 mb-6">
                NLP-powered personal tutor adapts to each worker's pace, language preference, and learning style with voice-based interaction.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span><strong className="text-white">Multilingual Support:</strong> Bangla, Hindi, English + 12 dialects</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span><strong className="text-white">Adaptive Learning:</strong> AI adjusts difficulty based on performance</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span><strong className="text-white">Voice Assessment:</strong> Speak answers, AI evaluates in real-time</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-500 mr-2 font-bold">•</span>
                  <span><strong className="text-white">Skill Gap Analysis:</strong> Identifies missing competencies</span>
                </li>
              </ul>
            </div>

            {/* AI Engine 3: Smart Matching */}
            <div className="bg-brand-gray/20 border border-brand-blue/30 rounded-2xl p-8 hover:border-brand-blue transition-all group">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Recommendation Engine</h3>
              <p className="text-gray-400 mb-6">
                Machine learning matches buyers with optimal factories based on capacity, skills, compliance history, and production patterns.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-blue mr-2 font-bold">•</span>
                  <span><strong className="text-white">Smart Matching:</strong> Find perfect suppliers in seconds</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-blue mr-2 font-bold">•</span>
                  <span><strong className="text-white">Risk Prediction:</strong> Forecasts delivery delays & quality issues</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-blue mr-2 font-bold">•</span>
                  <span><strong className="text-white">Price Optimization:</strong> Fair pricing based on verified metrics</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-blue mr-2 font-bold">•</span>
                  <span><strong className="text-white">Alternative Suggestions:</strong> Backup suppliers auto-recommended</span>
                </li>
              </ul>
            </div>
          </div>

          {/* AI Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-black/40 rounded-xl border border-white/5">
              <div className="text-4xl font-black text-brand-accent mb-2">98.5%</div>
              <div className="text-gray-400 text-sm">AI Accuracy Rate</div>
            </div>
            <div className="text-center p-6 bg-black/40 rounded-xl border border-white/5">
              <div className="text-4xl font-black text-purple-500 mb-2">12ms</div>
              <div className="text-gray-400 text-sm">Detection Latency</div>
            </div>
            <div className="text-center p-6 bg-black/40 rounded-xl border border-white/5">
              <div className="text-4xl font-black text-brand-blue mb-2">2.4M+</div>
              <div className="text-gray-400 text-sm">AI Training Hours</div>
            </div>
            <div className="text-center p-6 bg-black/40 rounded-xl border border-white/5">
              <div className="text-4xl font-black text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Continuous Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder 1: Factory Owner */}
      <section className="py-24 bg-brand-black border-b border-brand-gray/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
               <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm">For Factory Owners</h2>
               <h3 className="text-4xl md:text-5xl font-black">"AI-Powered Smart Factory"</h3>
               <p className="text-xl text-gray-400">Computer vision monitors compliance 24/7. AI predicts audit failures before they happen. Become a certified smart factory in 48 hours.</p>
               
               <div className="space-y-4 bg-brand-gray/20 p-6 rounded-2xl border border-brand-gray mt-6">
                 <h4 className="font-bold text-white text-lg">Factory Owner Benefits:</h4>
                 <ul className="space-y-3 text-gray-300">
                   <li className="flex items-start">
                     <span className="text-brand-accent mr-2 font-bold">✓</span>
                     <span><strong className="text-white">Zero Audit Surprises:</strong> Real-time compliance monitoring 24/7</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-brand-accent mr-2 font-bold">✓</span>
                     <span><strong className="text-white">90% Fewer Chargebacks:</strong> AI-powered quality control reduces defects</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-brand-accent mr-2 font-bold">✓</span>
                     <span><strong className="text-white">15% Higher Efficiency:</strong> Trained workforce produces more, faster</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-brand-accent mr-2 font-bold">✓</span>
                     <span><strong className="text-white">Premium Pricing:</strong> Certified factories command 20-30% higher rates</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-brand-accent mr-2 font-bold">✓</span>
                     <span><strong className="text-white">Team Training Packages:</strong> Udemy-style organization training for entire workforce</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-brand-accent mr-2 font-bold">✓</span>
                     <span><strong className="text-white">Compliance Certification:</strong> Blockchain-verified factory credentials</span>
                   </li>
                 </ul>
               </div>
               
               <div className="grid grid-cols-2 gap-6 mt-8">
                 <StatBox label="Audit Readiness" value="100%" sub="Always-on AI Monitoring" />
                 <StatBox label="Chargebacks" value="-90%" sub="Via Zero-Defect Line" />
                 <StatBox label="Efficiency" value="+15%" sub="Skilled Worker Retention" />
                 <StatBox label="ROI" value="18x" sub="Net Annual Saving" />
               </div>
               
               <button onClick={() => onViewChange('dashboard-owner')} className="flex items-center text-brand-accent font-bold mt-4 hover:underline">
                 See Guardian Dashboard <ArrowRight className="w-4 h-4 ml-2" />
               </button>
             </div>
             
             <div className="relative rounded-2xl overflow-hidden border border-brand-gray/50 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop" 
                  alt="Factory Dashboard" 
                  className="w-full h-auto opacity-80 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur p-4 rounded-xl border border-white/10">
                   <div className="flex justify-between items-center">
                      <span className="text-white font-bold">Live Line Efficiency</span>
                      <span className="text-brand-accent font-mono">94.2% ▲</span>
                   </div>
                   <div className="w-full bg-gray-700 h-1 mt-2 rounded-full">
                      <div className="bg-brand-accent w-[94%] h-full rounded-full"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stakeholder 2: Workers */}
      <section className="py-24 bg-brand-dark border-b border-brand-gray/30 relative overflow-hidden">
        {/* BG decoration */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative">
                <div className="relative z-10 mx-auto w-64 h-[500px] bg-black rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden">
                   {/* Mobile Screen Mockup */}
                   <div className="bg-gray-900 h-full w-full relative">
                      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-purple-900/50 to-transparent z-0"></div>
                      <div className="relative z-10 p-6 pt-12">
                         <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-brand-accent">
                               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                               <div className="font-bold text-white">Rahim Islam</div>
                               <div className="text-[10px] text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded-full inline-block">Level 2 Operator</div>
                            </div>
                         </div>
                         <div className="space-y-3">
                            <div className="bg-gray-800 p-3 rounded-xl border border-gray-700">
                               <div className="flex justify-between mb-1 text-xs text-gray-400"><span>Progress to Level 3</span><span>85%</span></div>
                               <div className="w-full bg-gray-900 h-1.5 rounded-full"><div className="bg-purple-500 w-[85%] h-full rounded-full"></div></div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-xl border border-gray-700 flex items-center gap-3">
                               <PlayCircle className="text-white w-8 h-8" />
                               <div>
                                  <div className="text-xs text-purple-400">Next Lesson (Bangla)</div>
                                  <div className="text-sm font-bold text-white">Advanced Stitching</div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute top-20 -right-10 md:right-20 bg-black/90 p-4 rounded-xl border border-purple-500/30 shadow-xl backdrop-blur-md z-20 animate-bounce">
                   <div className="text-xs text-purple-400 uppercase">Wage Potential</div>
                   <div className="text-xl font-bold text-white">+15% / month</div>
                </div>
             </div>

             <div className="order-1 md:order-2 space-y-6">
               <h2 className="text-purple-500 font-bold uppercase tracking-widest text-sm">For Workers</h2>
               <h3 className="text-4xl md:text-5xl font-black">"Your AI Tutor"</h3>
               <p className="text-xl text-gray-400">Personal AI assistant speaks your language. Voice-based lessons adapt to your pace. Learn at work, get certified, earn more.</p>
               
               <ul className="space-y-4 mt-4">
                  <FeatureItem icon={<PlayCircle className="text-purple-500"/>} text="3-min Bangla Video Lessons" />
                  <FeatureItem icon={<Smartphone className="text-purple-500"/>} text="Voice-based AI Assessment" />
                  <FeatureItem icon={<ShieldCheck className="text-purple-500"/>} text="Blockchain-verified Certificates" />
                  <FeatureItem icon={<TrendingUp className="text-purple-500"/>} text="Portable Skill Passport" />
               </ul>
               
               <button onClick={() => onViewChange('worker-app')} className="flex items-center text-purple-500 font-bold mt-4 hover:underline">
                 Try Worker App <ArrowRight className="w-4 h-4 ml-2" />
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* Stakeholder 3: Buyers */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
               <h2 className="text-brand-blue font-bold uppercase tracking-widest text-sm">For Global Brands & Buyers</h2>
               <h3 className="text-4xl md:text-5xl font-black">"AI-Matched Suppliers"</h3>
               <p className="text-xl text-gray-400">Let AI find your perfect factory in seconds. Predictive analytics forecast risks before orders ship. Zero surprises, maximum transparency.</p>
               
               <div className="space-y-4 bg-brand-gray/20 p-6 rounded-2xl border border-brand-blue/30 mb-6">
                 <h4 className="font-bold text-white text-lg">Buyer Benefits:</h4>
                 <ul className="space-y-3 text-gray-300">
                   <li className="flex items-start">
                     <span className="text-brand-blue mr-2 font-bold">✓</span>
                     <span><strong className="text-white">48-Hour Onboarding:</strong> Instant supplier verification vs. 3-month audits</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-brand-blue mr-2 font-bold">✓</span>
                     <span><strong className="text-white">Real-Time Compliance:</strong> Live monitoring of labor standards, safety, and quality</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-brand-blue mr-2 font-bold">✓</span>
                     <span><strong className="text-white">Skill-Based Filtering:</strong> Search factories by verified worker capabilities</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-brand-blue mr-2 font-bold">✓</span>
                     <span><strong className="text-white">Zero Reputational Risk:</strong> AI-verified compliance eliminates PR disasters</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-brand-blue mr-2 font-bold">✓</span>
                     <span><strong className="text-white">Predictable Quality:</strong> Track defect rates and efficiency in real-time</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-brand-blue mr-2 font-bold">✓</span>
                     <span><strong className="text-white">Transparent Pricing:</strong> Fair rates based on verified capabilities</span>
                   </li>
                 </ul>
               </div>
               
               <div className="bg-brand-gray/20 p-6 rounded-2xl border border-brand-gray">
                  <div className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Instant Supplier Filter</div>
                  <div className="flex flex-wrap gap-2">
                     <FilterTag text="Compliance Score > 90%" active />
                     <FilterTag text="Stitching Skills: Level 4+" active />
                     <FilterTag text="Capacity: 50k units/mo" />
                     <FilterTag text="Lead Time < 15 days" />
                  </div>
                  <div className="mt-6 flex items-center justify-between text-white border-t border-gray-700 pt-4">
                     <div>
                        <div className="text-2xl font-bold">12</div>
                        <div className="text-xs text-gray-500">Verified Matches</div>
                     </div>
                     <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-bold">Connect</button>
                  </div>
               </div>

               <button onClick={() => onViewChange('dashboard-buyer')} className="flex items-center text-brand-blue font-bold mt-4 hover:underline">
                 Open Buyer Window <ArrowRight className="w-4 h-4 ml-2" />
               </button>
             </div>
             
             <div className="relative">
                <div className="absolute inset-0 bg-brand-blue/20 blur-[100px]"></div>
                <div className="relative bg-brand-gray/10 rounded-2xl p-6 border border-brand-blue/30 backdrop-blur-sm">
                   <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                         <Globe2 className="w-8 h-8 text-brand-blue" />
                         <span className="font-bold text-xl">Global Sourcing Map</span>
                      </div>
                      <div className="text-right">
                         <div className="text-xs text-gray-400">Onboarding Time</div>
                         <div className="text-xl font-bold text-white">2 Days <span className="text-xs font-normal text-gray-500 line-through">90 Days</span></div>
                      </div>
                   </div>
                   {/* Abstract Map Dots */}
                   <div className="grid grid-cols-4 gap-4 opacity-50">
                      {[...Array(12)].map((_,i) => (
                         <div key={i} className="h-2 w-full bg-brand-blue rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                      ))}
                   </div>
                   <div className="mt-8">
                      <div className="text-xs text-gray-400 mb-2">Real-time Defect Rates (Portfolio)</div>
                      <div className="h-32 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={[{v:4}, {v:3}, {v:3.5}, {v:2}, {v:1.5}, {v:0.8}, {v:0.5}]}>
                             <Area type="monotone" dataKey="v" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Training & Certification Section */}
      <section className="py-24 bg-gradient-to-b from-brand-black to-brand-dark border-t border-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              AI-Powered <span className="veritex-gradient">Training Platform</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Udemy-style learning for garment workers and factories. Get certified, increase wages, and prove your skills.
            </p>
          </div>

          {/* Training Packages */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Individual Package */}
            <div className="bg-brand-gray/20 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Individual</h3>
                <Smartphone className="w-10 h-10 text-purple-500" />
              </div>
              <div className="mb-6">
                <div className="text-4xl font-black text-white mb-2">Free</div>
                <div className="text-gray-400 text-sm">Pay per certification</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Unlimited access to all courses</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Bangla & English video lessons</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>AI voice-based assessments</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Blockchain certificates ($5/cert)</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Portable skill passport</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Track wage increase potential</span>
                </li>
              </ul>
              <button className="w-full bg-purple-500 text-white font-bold py-3 rounded-xl hover:bg-purple-400 transition-all group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                Start Learning Free
              </button>
            </div>

            {/* Team/Factory Package */}
            <div className="bg-gradient-to-b from-brand-accent/10 to-transparent border-2 border-brand-accent rounded-2xl p-8 relative transform scale-105 shadow-[0_0_50px_rgba(0,224,85,0.2)]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-accent text-brand-black px-4 py-1 rounded-full text-xs font-bold uppercase">
                Most Popular
              </div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Team Training</h3>
                <Building2 className="w-10 h-10 text-brand-accent" />
              </div>
              <div className="mb-6">
                <div className="text-4xl font-black text-white mb-2">$499<span className="text-xl text-gray-400">/mo</span></div>
                <div className="text-gray-400 text-sm">Up to 100 workers</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-accent mr-2 font-bold">✓</span>
                  <span><strong className="text-white">Everything in Individual</strong></span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-accent mr-2 font-bold">✓</span>
                  <span>Bulk certification (unlimited)</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-accent mr-2 font-bold">✓</span>
                  <span>Factory dashboard & analytics</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-accent mr-2 font-bold">✓</span>
                  <span>Custom training paths</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-accent mr-2 font-bold">✓</span>
                  <span>Compliance monitoring</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-accent mr-2 font-bold">✓</span>
                  <span>Factory certification badge</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-accent mr-2 font-bold">✓</span>
                  <span>Priority buyer visibility</span>
                </li>
              </ul>
              <button className="w-full bg-brand-accent text-brand-black font-bold py-3 rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(0,224,85,0.3)]">
                Start 14-Day Trial
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-brand-gray/20 border border-brand-blue/30 rounded-2xl p-8 hover:border-brand-blue transition-all group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Enterprise</h3>
                <Globe2 className="w-10 h-10 text-brand-blue" />
              </div>
              <div className="mb-6">
                <div className="text-4xl font-black text-white mb-2">Custom</div>
                <div className="text-gray-400 text-sm">Multi-factory networks</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-blue mr-2">✓</span>
                  <span><strong className="text-white">Everything in Team</strong></span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-blue mr-2">✓</span>
                  <span>Unlimited factories & workers</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-blue mr-2">✓</span>
                  <span>White-label platform option</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-blue mr-2">✓</span>
                  <span>API access & integrations</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-blue mr-2">✓</span>
                  <span>Custom course development</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-brand-blue mr-2">✓</span>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <button className="w-full bg-brand-blue text-white font-bold py-3 rounded-xl hover:bg-blue-400 transition-all group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Training Topics/Sections */}
          <div className="bg-brand-gray/10 rounded-2xl p-8 border border-brand-gray">
            <h3 className="text-3xl font-bold text-center mb-12">Available Training Sections</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <TrainingSection 
                icon="🧵"
                title="Stitching Skills"
                courses="12 courses"
                level="Beginner to Expert"
              />
              <TrainingSection 
                icon="✂️"
                title="Pattern Making"
                courses="8 courses"
                level="Intermediate+"
              />
              <TrainingSection 
                icon="📐"
                title="Quality Control"
                courses="10 courses"
                level="All Levels"
              />
              <TrainingSection 
                icon="🔍"
                title="Compliance"
                courses="6 courses"
                level="Management"
              />
              <TrainingSection 
                icon="⚡"
                title="Machine Operation"
                courses="15 courses"
                level="Beginner to Expert"
              />
              <TrainingSection 
                icon="📊"
                title="Production Planning"
                courses="7 courses"
                level="Advanced"
              />
              <TrainingSection 
                icon="🛡️"
                title="Safety & Standards"
                courses="9 courses"
                level="All Levels"
              />
              <TrainingSection 
                icon="🌟"
                title="Leadership"
                courses="5 courses"
                level="Supervisors"
              />
            </div>
          </div>

          {/* Certification Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-brand-gray/20 rounded-xl border border-brand-gray">
              <div className="text-4xl font-black text-brand-accent mb-2">8,500+</div>
              <div className="text-gray-400 text-sm">Certified Workers</div>
            </div>
            <div className="text-center p-6 bg-brand-gray/20 rounded-xl border border-brand-gray">
              <div className="text-4xl font-black text-purple-500 mb-2">15%</div>
              <div className="text-gray-400 text-sm">Avg. Wage Increase</div>
            </div>
            <div className="text-center p-6 bg-brand-gray/20 rounded-xl border border-brand-gray">
              <div className="text-4xl font-black text-brand-blue mb-2">200+</div>
              <div className="text-gray-400 text-sm">Partner Factories</div>
            </div>
            <div className="text-center p-6 bg-brand-gray/20 rounded-xl border border-brand-gray">
              <div className="text-4xl font-black text-white mb-2">98%</div>
              <div className="text-gray-400 text-sm">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-20 border-t border-brand-gray bg-brand-dark text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Trusted Infrastructure</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
               {/* Logos placeholders */}
               <div className="text-xl font-black text-white">POLYGON</div>
               <div className="text-xl font-black text-white">BGMEA</div>
               <div className="text-xl font-black text-white">BetterWork</div>
               <div className="text-xl font-black text-white">Microsoft Startups</div>
            </div>
         </div>
      </section>

    </div>
  );
};

const StatBox: React.FC<{label: string, value: string, sub: string}> = ({label, value, sub}) => (
  <div className="p-4 bg-brand-gray/20 rounded-xl border border-brand-gray">
    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</div>
    <div className="text-3xl font-black text-white mb-1">{value}</div>
    <div className="text-gray-400 text-xs">{sub}</div>
  </div>
);

const FeatureItem: React.FC<{icon: React.ReactNode, text: string}> = ({icon, text}) => (
  <li className="flex items-center text-lg text-gray-300">
    <div className="mr-3 p-2 bg-gray-800 rounded-lg">{icon}</div>
    {text}
  </li>
);

const FilterTag: React.FC<{text: string, active?: boolean}> = ({text, active}) => (
  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${active ? 'bg-brand-blue/20 border-brand-blue text-brand-blue' : 'bg-transparent border-gray-600 text-gray-500'}`}>
    {text}
  </span>
);

const TrainingSection: React.FC<{icon: string, title: string, courses: string, level: string}> = ({icon, title, courses, level}) => (
  <div className="bg-brand-gray/30 p-6 rounded-xl border border-brand-gray hover:border-brand-accent transition-all group cursor-pointer">
    <div className="text-4xl mb-3">{icon}</div>
    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-brand-accent transition-colors">{title}</h4>
    <div className="text-sm text-gray-400">{courses}</div>
    <div className="text-xs text-gray-500 mt-1">{level}</div>
  </div>
);

export default LandingPage;