import React, { useState } from 'react';
import { ViewState } from './types';
import LandingPage from './views/LandingPage';
import DashboardOwner from './views/DashboardOwner';
import DashboardBuyer from './views/DashboardBuyer';
import WorkerApp from './views/WorkerApp';
import DesignProcess from './views/DesignProcess';
import Navbar from './components/Navbar';
import { Bot, LineChart, ShieldCheck, PenTool } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onViewChange={setCurrentView} />;
      case 'dashboard-owner':
        return <DashboardOwner />;
      case 'dashboard-buyer':
        return <DashboardBuyer />;
      case 'worker-app':
        return <WorkerApp />;
      case 'design-process':
        return <DesignProcess />;
      default:
        return <LandingPage onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-accent selection:text-brand-black">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      <main className="pt-20">
        {renderView()}
      </main>
      
      {/* Sticky Bottom CTA for Mobile mostly, but good for all */}
      {currentView === 'landing' && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-black/90 backdrop-blur-md border-t border-brand-gray z-50 md:hidden">
          <button 
            onClick={() => setCurrentView('dashboard-owner')}
            className="w-full bg-brand-accent text-brand-black font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(0,214,50,0.4)] hover:scale-[1.02] transition-transform"
          >
            Start Pilot - Free for 60 Days
          </button>
        </div>
      )}
    </div>
  );
};

export default App;