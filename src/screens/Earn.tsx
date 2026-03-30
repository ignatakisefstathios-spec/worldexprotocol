import React from 'react';
import { stakingStrategies } from '@/lib/data/mockData';
import type { StakingStrategy } from '@/types';

interface EarnProps {
  onStrategySelect?: (strategy: StakingStrategy) => void;
  onVerifyIdentity?: () => void;
}

export const Earn: React.FC<EarnProps> = ({
  onStrategySelect,
  onVerifyIdentity,
}) => {


  const getRiskColor = (riskProfile: string) => {
    switch (riskProfile.toLowerCase()) {
      case 'conservative':
      case 'stable':
        return 'bg-primary';
      case 'balanced':
        return 'bg-tertiary';
      case 'calculated':
        return 'bg-secondary';
      default:
        return 'bg-primary';
    }
  };

  return (
    <div className="pt-20 pb-28 px-4 space-y-6">
      {/* Hero Section */}
      <section className="mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
              Institutional Arbitrage
            </h1>
            <p className="text-on-surface-variant max-w-xl text-base leading-relaxed">
              Access high-fidelity liquidation and price-stability modules on the World Chain ecosystem.
            </p>
          </div>
          <div className="flex gap-8 border-l border-outline-variant/20 pl-8 h-fit">
            <div className="space-y-1">
              <span className="font-label text-xs uppercase tracking-[0.05em] text-on-surface-variant">
                Balance
              </span>
              <div className="font-headline text-2xl font-bold text-primary">
                1,420.50 SWLD
              </div>
            </div>
            <div className="space-y-1">
              <span className="font-label text-xs uppercase tracking-[0.05em] text-on-surface-variant">
                Performance
              </span>
              <div className="font-headline text-2xl font-bold text-on-surface">
                1.2M Humans
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World ID Banner */}
      <div className="mb-8 p-6 rounded-lg bg-surface-container-low border border-primary/20 flex items-center justify-between overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="material-symbols-filled text-primary text-xl">fingerprint</span>
          </div>
          <div>
            <h3 className="font-headline font-bold text-lg text-on-surface">World ID Required</h3>
            <p className="text-sm text-on-surface-variant">
              All arbitrage modules require World ID verification for sybil-resistance.
            </p>
          </div>
        </div>
        <button
          onClick={onVerifyIdentity}
          className="relative z-10 px-6 py-2 bg-primary text-on-primary font-label text-sm font-bold rounded-full hover-brightness active-scale"
        >
          Verify Identity
        </button>
      </div>

      {/* Strategy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Strategy Card - WLD-USDC */}
        <div className="md:col-span-8 bg-surface-container-low p-8 rounded-lg flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8">
            <span className="bg-surface-container-lowest/80 backdrop-blur px-3 py-1 rounded text-[10px] font-label text-primary-container tracking-wider uppercase border border-primary/10">
              Silent Uniswap V3
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-on-surface-variant">swap_horiz</span>
              <span className="font-label text-xs uppercase tracking-[0.05em] text-on-surface-variant">
                {stakingStrategies[0].module}
              </span>
            </div>
            <h2 className="font-headline text-3xl font-bold mb-4 text-on-surface">
              {stakingStrategies[0].name}
            </h2>
            <p className="text-on-surface-variant max-w-md leading-relaxed">
              {stakingStrategies[0].description}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            <div className="flex items-end justify-between">
              <div className="font-headline text-5xl font-bold text-primary">
                {stakingStrategies[0].apy}% <span className="text-xl font-medium opacity-60">APY</span>
              </div>
              <div className="text-right">
                <span className="font-label text-[10px] uppercase text-on-surface-variant block mb-2">
                  Risk Profile: {stakingStrategies[0].riskProfile}
                </span>
                <div className="flex gap-1 h-2">
                  <div className="w-6 bg-error rounded-sm"></div>
                  <div className="w-6 bg-error/60 rounded-sm"></div>
                  <div className="w-6 bg-tertiary/40 rounded-sm"></div>
                  <div className="w-6 bg-tertiary rounded-sm"></div>
                  <div className="w-6 bg-primary/40 rounded-sm"></div>
                  <div className="w-6 bg-primary rounded-sm"></div>
                </div>
              </div>
            </div>
            <button
              onClick={() => onStrategySelect?.(stakingStrategies[0])}
              className="w-full h-14 bg-primary text-on-primary font-label font-bold rounded-full hover-scale active-scale hover-brightness"
            >
              Contribute Capital
            </button>
          </div>
        </div>

        {/* Side Strategy Cards */}
        <div className="md:col-span-4 space-y-6">
          {stakingStrategies.slice(1, 3).map((strategy) => (
            <div
              key={strategy.id}
              onClick={() => onStrategySelect?.(strategy)}
              className="bg-surface-container p-6 rounded-lg flex flex-col justify-between relative overflow-hidden cursor-pointer hover:bg-surface-container-high transition-colors active-scale"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-surface-container-lowest px-2 py-0.5 rounded text-[8px] font-label text-primary-container tracking-tighter uppercase">
                  {strategy.infrastructure}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">
                    {strategy.id === 'eth-liquidation' ? 'water_drop' : 'balance'}
                  </span>
                  <span className="font-label text-[10px] uppercase text-on-surface-variant">
                    {strategy.module}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface">{strategy.name}</h3>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  {strategy.description}
                </p>
              </div>
              <div className="mt-8">
                <div className="font-headline text-2xl font-bold text-primary mb-4">
                  {strategy.apy}% <span className="text-sm opacity-50">APY</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1 h-1">
                    <div className={`flex-1 rounded-full ${getRiskColor(strategy.riskProfile)}`}></div>
                    <div className={`flex-1 rounded-full ${getRiskColor(strategy.riskProfile)}`}></div>
                    <div className={`flex-1 rounded-full ${getRiskColor(strategy.riskProfile)}`}></div>
                    <div className="flex-1 rounded-full bg-primary/20"></div>
                  </div>
                  <button className="w-full py-3 border border-outline-variant hover:bg-surface-container-high transition-colors font-label text-xs uppercase tracking-widest rounded-full text-on-surface">
                    Allocate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MEV Backrunning - Wide Card */}
        <div className="md:col-span-12 bg-surface-container-low p-6 rounded-lg flex flex-col md:flex-row gap-6 relative overflow-hidden">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">rocket_launch</span>
                <span className="font-label text-[10px] uppercase text-on-surface-variant">
                  {stakingStrategies[3].module}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">{stakingStrategies[3].name}</h3>
              <p className="text-sm text-on-surface-variant mt-2">
                {stakingStrategies[3].description}
              </p>
            </div>
            <div className="font-headline text-3xl font-bold text-primary mt-4">
              {stakingStrategies[3].apy}% <span className="text-base opacity-50">APY</span>
            </div>
          </div>
          <div className="w-full md:w-64 flex flex-col justify-end gap-4 border-l border-outline-variant/10 pl-6">
            <div className="space-y-2">
              <span className="font-label text-[10px] uppercase text-on-surface-variant">Infrastructure</span>
              <div className="p-3 bg-surface-container-lowest rounded border border-outline-variant/20 flex items-center justify-between">
                <span className="text-[10px] font-headline font-bold text-on-surface">Silent Uniswap V3</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#aca3ff]"></span>
              </div>
            </div>
            <button className="w-full h-12 bg-on-surface text-surface-container-lowest font-label font-bold rounded-full hover:opacity-90 transition-all active-scale">
              Contribute
            </button>
            <div className="flex gap-0.5 h-1 w-full">
              <div className="flex-1 bg-primary rounded-full"></div>
              <div className="flex-1 bg-primary rounded-full"></div>
              <div className="flex-1 bg-primary rounded-full"></div>
              <div className="flex-1 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <footer className="mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between gap-8">
        <div className="max-w-md">
          <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
            Fee disclosure: 0.1% protocol fee used for WDX buyback and vault redistribution. 
            Participation involves systemic risk. By contributing, you acknowledge the terms in the protocol documentation.
          </p>
          <div className="flex items-center gap-4 text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
            <span>Status: Active Sovereign</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>Version 2.4.0-Stable</span>
          </div>
        </div>
        <div className="flex gap-4 h-fit">
          <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">description</span>
          </div>
          <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">help_center</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Earn;
