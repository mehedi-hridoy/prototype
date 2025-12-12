import React from 'react';
import { ViewState } from '../types';
import { ShieldCheck, LayoutGrid, Globe, BookOpen, Smartphone } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-black/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer group" onClick={() => onViewChange('landing')}>
            <div className="relative mr-3">
              <ShieldCheck className="h-8 w-8 text-brand-accent transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-accent blur-lg opacity-20"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none">Comply<span className="text-brand-blue">Chain</span> AI</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none mt-1">Smart Compliance</span>
            </div>
          </div>
          
          <div className="block">
            <div className="ml-0 md:ml-10 flex items-center space-x-1 bg-brand-gray/30 p-1 rounded-full border border-white/5 overflow-x-auto scrollbar-none">
              <NavButton 
                active={currentView === 'landing'} 
                onClick={() => onViewChange('landing')}
                label="Platform"
              />
              <NavButton 
                active={currentView === 'dashboard-owner'} 
                onClick={() => onViewChange('dashboard-owner')}
                label="Factory"
                icon={<LayoutGrid className="w-3 h-3 mr-1.5" />}
              />
              <NavButton 
                active={currentView === 'worker-app'} 
                onClick={() => onViewChange('worker-app')}
                label="Worker App"
                icon={<Smartphone className="w-3 h-3 mr-1.5" />}
              />
              <NavButton 
                active={currentView === 'dashboard-buyer'} 
                onClick={() => onViewChange('dashboard-buyer')}
                label="Buyer"
                icon={<Globe className="w-3 h-3 mr-1.5" />}
              />
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-white text-brand-black px-6 py-2.5 rounded-lg font-bold hover:bg-brand-accent transition-colors flex items-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Book Pilot
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavButton: React.FC<{ active: boolean; onClick: () => void; label: string; icon?: React.ReactNode }> = ({ active, onClick, label, icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
      active 
        ? 'bg-brand-gray text-white shadow-lg border border-white/10' 
        : 'text-gray-400 hover:text-white hover:bg-brand-gray/50'
    }`}
  >
    {icon}
    {label}
  </button>
);

export default Navbar;