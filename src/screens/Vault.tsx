import React, { useState } from 'react';
import { lwethStakingInfo } from '@/lib/data/mockData';

interface VaultProps {
  onStake?: (amount: string) => void;
}

export const Vault: React.FC<VaultProps> = ({ onStake }) => {
  const [stakeAmount, setStakeAmount] = useState('');
  const estimatedLweth = stakeAmount ? (parseFloat(stakeAmount) * 0.984).toFixed(4) : '0.00';

  return (
    <div className="pt-20 pb-28 px-4 space-y-6">
      {/* Hero Stats Bento */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
        <div className="md:col-span-8 p-6 rounded-xl bg-surface-container-low border-l-4 border-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="relative z-10">
            <span className="font-label text-xs tracking-[0.2em] text-on-surface-variant uppercase mb-2 block">
              Protocol Asset
            </span>
            <h2 className="text-3xl font-black tracking-tighter mb-3 italic text-on-surface">
              LIQUID WORLD ETH
            </h2>
            <p className="text-on-surface-variant max-w-md leading-relaxed mb-4 text-sm">
              Non-rebasing liquid staking on World Chain. LWETH increases in value relative to ETH as staking rewards accrue directly to the token.
            </p>
            <div className="flex gap-8">
              <div>
                <span className="font-label text-[10px] tracking-widest text-on-surface-variant block uppercase">
                  Projected APY
                </span>
                <span className="text-xl font-bold text-primary">{lwethStakingInfo.projectedAPY}%</span>
              </div>
              <div>
                <span className="font-label text-[10px] tracking-widest text-on-surface-variant block uppercase">
                  Total Staked
                </span>
                <span className="text-xl font-bold font-label text-on-surface">
                  {lwethStakingInfo.totalStakedFormatted} <span className="text-sm font-normal text-on-surface-variant">ETH</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-4 p-6 rounded-xl bg-surface-container-highest flex flex-col justify-between">
          <div>
            <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase block mb-4">
              Network Security
            </span>
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-tertiary">shield_person</span>
              <span className="font-bold text-lg text-on-surface">{lwethStakingInfo.ethBond} ETH Bond</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Node operators provide an {lwethStakingInfo.ethBond} ETH bond per validator, ensuring skin in the game and protocol safety.
            </p>
          </div>
          <div className="pt-4 border-t border-outline-variant/30">
            <div className="flex justify-between items-center">
              <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
                Operator Fee
              </span>
              <span className="font-bold text-tertiary">{lwethStakingInfo.operatorFee}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Staking Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Input Panel */}
        <div className="space-y-6">
          <div className="bg-surface-container p-5 rounded-xl space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-label text-xs tracking-widest text-on-surface-variant uppercase">
                Stake ETH
              </label>
              <span className="font-label text-[10px] text-on-surface-variant">Balance: 12.450 ETH</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary/40 rounded-xl p-4 text-2xl font-bold placeholder:text-surface-container-highest transition-all text-on-surface"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg">
                <span className="material-symbols-filled text-sm text-primary">stat_3</span>
                <span className="font-label font-bold text-xs text-on-surface">ETH</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary-dim">south</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end">
              <label className="font-label text-xs tracking-widest text-on-surface-variant uppercase">
                Receive LWETH
              </label>
              <span className="font-label text-[10px] text-on-surface-variant">
                1 ETH ≈ 0.984 LWETH
              </span>
            </div>
            <div className="relative">
              <div className="w-full bg-surface-container-low rounded-xl p-4 text-2xl font-bold text-on-surface-variant/50">
                {estimatedLweth}
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 bg-surface-container-highest rounded-lg">
                <span className="material-symbols-filled text-sm text-secondary">token</span>
                <span className="font-label font-bold text-xs text-on-surface">LWETH</span>
              </div>
            </div>
            
            <button
              onClick={() => onStake?.(stakeAmount)}
              disabled={!stakeAmount || parseFloat(stakeAmount) <= 0}
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-dim text-on-primary font-black tracking-widest rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              STAKE ASSETS
              <span className="material-symbols-outlined">bolt</span>
            </button>
            
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-sm">energy_savings_leaf</span>
              <span className="font-label text-[10px] tracking-widest text-tertiary uppercase">
                Gasless transaction enabled
              </span>
            </div>
          </div>
        </div>

        {/* Ledger Details */}
        <div className="space-y-4">
          <h3 className="font-label text-xs tracking-[0.3em] text-on-surface-variant uppercase border-b border-outline-variant/20 pb-3">
            Transaction Protocol
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Exchange Rate', value: `1 LWETH = ${lwethStakingInfo.exchangeRate} ETH` },
              { label: 'Transaction Cost', value: 'GASLESS', highlight: true },
              { label: 'Reward Model', value: 'Non-Rebasing', badge: true },
              { label: 'Unstaking Period', value: lwethStakingInfo.unstakingPeriod },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <span className="text-sm text-on-surface-variant">{item.label}</span>
                {item.badge ? (
                  <span className="font-label text-[10px] px-2 py-0.5 bg-surface-container-highest rounded-sm uppercase tracking-wider text-on-surface">
                    {item.value}
                  </span>
                ) : (
                  <span className={`font-label text-sm font-medium ${item.highlight ? 'text-tertiary' : 'text-on-surface'}`}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
          
          <div className="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/10">
            <h4 className="font-label text-[10px] tracking-widest text-on-surface uppercase mb-2">
              Architectural Note
            </h4>
            <p className="text-xs leading-relaxed text-on-surface-variant">
              Liquid World ETH (LWETH) is an ERC-4626 compatible vault token. Unlike rebasing tokens, your balance of LWETH remains constant, while its underlying value in ETH increases every epoch as validator rewards are compounded into the vault.
            </p>
          </div>
          
          <div className="relative group cursor-pointer overflow-hidden rounded-xl">
            <div className="w-full h-28 bg-gradient-to-br from-primary/20 to-surface-container-low flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary/30">hub</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <span className="font-label text-[10px] tracking-widest text-primary uppercase block mb-1">
                Node Security
              </span>
              <span className="text-sm font-bold text-on-surface">Verified Validator Set</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
