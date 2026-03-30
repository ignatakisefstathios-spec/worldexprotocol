import React from 'react';
import type { Screen } from '@/types';

interface NavItem {
  id: Screen;
  label: string;
  icon: string;
}

interface BottomNavBarProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
  items?: NavItem[];
}

const defaultItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid_view' },
  { id: 'earn', label: 'Earn', icon: 'payments' },
  { id: 'vault', label: 'Vault', icon: 'account_balance_wallet' },
  { id: 'rewards', label: 'Rewards', icon: 'redeem' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeScreen,
  onNavigate,
  items = defaultItems,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-t border-outline-variant/20 flex justify-around items-center px-4 py-3 pb-safe rounded-t-[20px] bottom-nav-shadow">
      {items.map((item) => {
        const isActive = item.id === activeScreen;
        
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 active-scale
              ${isActive 
                ? 'text-primary bg-primary/10 scale-90' 
                : 'text-on-surface-variant hover:text-primary'
              }
            `}
          >
            <span 
              className="material-symbols-outlined mb-1"
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest font-label">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
