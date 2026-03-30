import React from 'react';
import { useMiniKit } from '@/contexts/MiniKitProvider';

interface TopAppBarProps {
  title?: string;
  subtitle?: string;
  showBalance?: boolean;
  balance?: string;
  showVerified?: boolean;
  onSettingsClick?: () => void;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  title = 'WORLDEX PRO',
  subtitle,
  showBalance = true,
  balance = '$12,840.50',
  showVerified = true,
  onSettingsClick,
}) => {
  const { isVerified } = useMiniKit();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-ambient">
      <div className="flex justify-between items-center px-6 h-16 w-full">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-primary/20">
            <span className="material-symbols-filled text-primary text-sm">verified_user</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-[0.2em] text-primary uppercase font-headline">
              {title}
            </span>
            {subtitle && (
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">
                {subtitle}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {showVerified && (
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-xl border border-outline-variant/20">
              <span className="material-symbols-filled text-primary text-sm">verified</span>
              <span className="font-label text-[10px] font-bold tracking-widest text-primary uppercase">
                {isVerified ? 'VERIFIED' : 'VERIFY'}
              </span>
            </div>
          )}
          
          {showBalance && (
            <div className="bg-surface-container-low px-3 py-1.5 rounded-xl border border-outline-variant/20">
              <span className="text-sm font-label font-medium text-on-surface">{balance}</span>
            </div>
          )}
          
          {onSettingsClick && (
            <button
              onClick={onSettingsClick}
              className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface-variant">settings</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;
