import React from 'react';
import { pools, yieldMechanismInfo } from '@/lib/data/mockData';
import type { Pool } from '@/types';

interface DashboardProps {
  onPoolSelect?: (pool: Pool) => void;
  onContribute?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onPoolSelect,
  onContribute,
}) => {
  return (
    <div className="pt-20 pb-28 px-4 space-y-6">
      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="font-headline text-3xl font-extrabold tracking-tight mb-2 leading-tight text-on-surface">
          Institutional-grade Arbitrage
        </h1>
        <p className="font-body text-on-surface-variant text-sm leading-relaxed">
          Access high-fidelity liquidation protocols and price-stability mechanisms reserved for verified sovereign entities.
        </p>
      </section>

      {/* Active Opportunities */}
      <section className="space-y-4">
        <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">
          ACTIVE OPPORTUNITIES
        </div>
        
        {pools.slice(0, 2).map((pool) => (
          <div
            key={pool.id}
            onClick={() => onPoolSelect?.(pool)}
            className="bg-surface-container-low p-5 rounded-xl border-l-2 border-primary relative overflow-hidden cursor-pointer hover:bg-surface-container transition-colors active-scale"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl">{pool.icon}</span>
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-headline font-bold text-lg text-on-surface">{pool.name}</h3>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">
                  {pool.module}
                </p>
              </div>
              {pool.badge && (
                <div className="bg-primary/10 px-2 py-1 rounded text-primary text-[10px] font-bold font-label">
                  {pool.badge}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-label text-[10px] text-on-surface-variant block uppercase tracking-tighter">
                  Net APY
                </span>
                <span className="font-label text-2xl font-bold text-primary">
                  {pool.apy.toFixed(2)}%
                </span>
              </div>
              <div>
                <span className="font-label text-[10px] text-on-surface-variant block uppercase tracking-tighter">
                  TVL Locked
                </span>
                <span className="font-label text-2xl font-bold text-on-surface">
                  {pool.tvlFormatted}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Yield Mechanism */}
      <section className="bg-surface-container rounded-xl p-6 border border-outline-variant/10">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-tertiary text-sm">info</span>
          <h4 className="font-label text-xs font-bold uppercase tracking-widest text-on-surface">
            {yieldMechanismInfo.title}
          </h4>
        </div>
        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">
          {yieldMechanismInfo.description}
        </p>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-primary-dim border border-surface-container"></div>
            <div className="w-6 h-6 rounded-full bg-secondary-dim border border-surface-container"></div>
            <div className="w-6 h-6 rounded-full bg-tertiary-dim border border-surface-container"></div>
          </div>
          <span className="font-label text-[10px] text-on-surface-variant">
            {yieldMechanismInfo.verifiedEntities}+ Verified Entities Contributing
          </span>
        </div>
      </section>

      {/* Deposit Interface */}
      <section>
        <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">
          CONTRIBUTE ASSETS
        </div>
        
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-1 mb-4">
          <div className="flex justify-between items-center p-4">
            <div className="flex flex-col">
              <span className="font-label text-[10px] text-on-surface-variant uppercase mb-1">
                Select Amount
              </span>
              <input
                type="text"
                placeholder="0.00"
                className="bg-transparent border-none p-0 text-2xl font-label font-bold focus:ring-0 text-on-surface placeholder-outline w-32"
              />
            </div>
            <div className="bg-surface-container-high px-3 py-2 rounded-lg flex items-center gap-2 border border-outline-variant/30">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xs">token</span>
              </div>
              <span className="font-label font-bold text-sm text-on-surface">WLD</span>
              <span className="material-symbols-outlined text-xs text-on-surface-variant">expand_more</span>
            </div>
          </div>
        </div>

        {/* World ID Gating */}
        <div className="flex items-start gap-3 mb-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
          <span className="material-symbols-filled text-primary">verified</span>
          <div>
            <h5 className="font-label text-[11px] font-bold text-primary uppercase tracking-widest mb-1">
              World ID Required
            </h5>
            <p className="font-body text-[12px] text-on-surface-variant leading-tight">
              These pools utilize sybil-protection. Access is strictly limited to verified human operators.
            </p>
          </div>
        </div>

        <button
          onClick={onContribute}
          className="w-full py-4 bg-gradient-to-r from-primary to-primary-dim rounded-xl font-headline font-bold text-on-primary flex items-center justify-center gap-2 active-scale hover-brightness"
        >
          <span>Contribute to Pool</span>
          <span className="material-symbols-outlined text-sm">bolt</span>
        </button>
      </section>
    </div>
  );
};

export default Dashboard;
