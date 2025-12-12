export type ViewState = 'landing' | 'dashboard-owner' | 'dashboard-buyer' | 'worker-app' | 'design-process';

export interface AuditPoint {
  id: string;
  name: string;
  status: 'pass' | 'fail' | 'warning';
  location: string;
  timestamp: string;
  description: string;
}

export interface ROIScenario {
  label: string;
  currentCost: number;
  newCost: number;
  savings: number;
}