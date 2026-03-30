import React from 'react';
import { 
  coreProblems, 
  keyMetrics, 
  wdxTokenomics, 
  swldInfo,
  revenueStreams,
  roadmapPhases,
  grantAllocations,
  // securityFeatures, // Available for future use
  complianceFeatures
} from '@/lib/data/mockData';

export const Protocol: React.FC = () => {
  return (
    <div className="pt-20 pb-28 px-4 space-y-8 max-w-2xl mx-auto">
      {/* Hero Header */}
      <section className="space-y-4">
        <div className="inline-flex px-3 py-1 rounded-full bg-surface-container-high text-primary font-label text-[10px] tracking-widest uppercase">
          Protocol Thesis
        </div>
        <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface leading-tight">
          Bot-Resistant DeFi for Verified Humans
        </h1>
        <p className="text-on-surface-variant font-body text-sm leading-relaxed">
          Worldex Protocol implements cryptographic identity proofing to eliminate parasitic bot behavior from decentralized liquidity layers.
        </p>
        <div className="archive-gradient p-[1px] rounded-lg">
          <div className="bg-surface-container-lowest rounded-[11px] p-5">
            <p className="italic font-body text-primary text-base leading-snug">
              "DeFi Infrastructure built for humans, not bots."
            </p>
          </div>
        </div>
      </section>

      {/* Core Problems */}
      <section className="space-y-4">
        <h3 className="font-label text-xs tracking-[0.2em] text-outline uppercase">The Core Problem</h3>
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-surface-container-low p-5 rounded-lg relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-error mb-3 text-2xl">warning</span>
              <h4 className="font-headline text-lg font-bold mb-2 text-on-surface">{coreProblems[0].title}</h4>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                {coreProblems[0].description}
              </p>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
              <span className="material-symbols-outlined text-[100px]">smart_toy</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {coreProblems.slice(1).map((problem, index) => (
              <div key={index} className="bg-surface-container-low p-4 rounded-lg">
                <span className="material-symbols-outlined text-error mb-2 text-xl">{problem.icon}</span>
                <h4 className="font-headline text-sm font-bold mb-1 uppercase tracking-tighter text-on-surface">
                  {problem.title}
                </h4>
                <p className="font-body text-[10px] text-on-surface-variant">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution - World ID Gating */}
      <section className="space-y-4">
        <h3 className="font-label text-xs tracking-[0.2em] text-outline uppercase">Our Solution</h3>
        <div className="space-y-3">
          <div className="bg-surface-container border border-outline-variant/20 rounded-lg p-5 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="material-symbols-filled text-primary text-2xl">verified_user</span>
            </div>
            <h4 className="font-headline text-xl font-bold text-primary mb-2">World ID Gating</h4>
            <p className="font-body text-xs text-on-surface-variant mb-4">
              Verified humanness via biometric proof-of-personhood before any transaction execution.
            </p>
            <div className="w-full h-36 rounded-lg overflow-hidden relative mb-3 bg-gradient-to-br from-primary/10 to-surface-container">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary/20">fingerprint</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                <span className="font-label text-[10px] text-primary bg-on-primary-container px-2 py-1 rounded">
                  INSTITUTIONAL GRADE
                </span>
                <span className="font-label text-[8px] text-outline">ENCRYPTION: AES-256</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="space-y-4">
        <h3 className="font-label text-xs tracking-[0.2em] text-outline uppercase">Key Metrics</h3>
        <div className="grid grid-cols-2 gap-3">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-surface-container-low p-5 rounded-lg flex flex-col justify-between h-32">
              <div>
                <span className="font-label text-[10px] text-outline tracking-widest uppercase">
                  {metric.label}
                </span>
                <div className="font-headline text-2xl font-bold text-on-surface mt-2">
                  {metric.value}<span className="text-primary">{metric.label.includes('TVL') ? 'M' : 'K'}</span>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`metric-segment ${i < 3 ? 'bg-' + metric.color : 'bg-' + metric.color + '/20'}`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WDX-SWLD Flywheel */}
      <section className="space-y-4">
        <h3 className="font-label text-xs tracking-[0.2em] text-outline uppercase">Economic Engine</h3>
        
        {/* Burn-to-Mint Highlight */}
        <div className="relative overflow-hidden bg-primary/10 rounded-2xl p-5 border border-primary/20">
          <div className="absolute -right-8 -top-8 w-28 h-28 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="flex justify-between items-center relative z-10">
            <div className="space-y-1">
              <p className="font-label text-[10px] text-primary uppercase tracking-[0.2em]">Core Engine</p>
              <h2 className="font-headline text-base font-bold text-on-surface uppercase">Burn-to-Mint</h2>
            </div>
            <div className="text-right">
              <p className="font-data text-2xl font-bold text-primary tracking-tighter">
                {wdxTokenomics.burnToMintEfficiency}%
              </p>
              <p className="font-label text-[9px] text-primary/60 uppercase tracking-widest leading-none">
                Efficiency
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary shadow-[0_0_10px_#aca3ff]"
                style={{ width: `${wdxTokenomics.burnToMintEfficiency}%` }}
              ></div>
            </div>
            <span className="font-data text-[10px] text-primary">{wdxTokenomics.burnToMintLatency} LATENCY</span>
          </div>
        </div>

        {/* SWLD Euro-Peg */}
        <div className="bg-surface-container-lowest rounded-2xl p-5 border border-white/10">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-1">
              <h2 className="font-headline text-base font-bold text-on-surface tracking-tight">
                SWLD Euro-Peg
              </h2>
              <p className="font-label text-[10px] text-tertiary uppercase tracking-wider font-semibold">
                Institutional Grade Stablecoin
              </p>
            </div>
            <span className="material-symbols-outlined text-tertiary">verified</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-label text-[8px] text-outline uppercase mb-1 tracking-widest">
                Collateral Ratio
              </p>
              <p className="font-data text-3xl font-light text-on-surface leading-none tracking-tighter">
                {swldInfo.collateralRatio}<span className="text-lg text-primary opacity-50">%</span>
              </p>
            </div>
            <div className="text-right">
              <p className="font-body text-[10px] text-on-surface-variant italic leading-tight">
                Hard-pegged 1:1 EUR<br/>via Transmuter v2
              </p>
            </div>
          </div>
        </div>

        {/* Revenue Streams */}
        <div className="space-y-2">
          <h3 className="font-headline text-xs font-semibold text-outline uppercase tracking-[0.15em]">
            Protocol Yield Sources
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {revenueStreams.map((stream, index) => (
              <div 
                key={index} 
                className="bg-surface-container-low p-3 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-sm">{stream.icon}</span>
                  <span className="font-label text-[10px] text-on-surface-variant uppercase">{stream.source}</span>
                </div>
                <p className="font-data text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  {stream.percentage}%
                </p>
                <div className="h-0.5 w-6 bg-primary/20 mt-1 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-headline text-xl font-bold text-on-surface tracking-tight">Security Framework</h2>
          <span className="font-label text-[10px] tracking-widest uppercase text-primary/60">Shield-v1.2</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-3 text-primary">
              <span className="material-symbols-outlined text-xl">verified_user</span>
              <h3 className="font-headline font-bold text-base">Compliance</h3>
            </div>
            <ul className="space-y-2">
              {complianceFeatures.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-body">{feature.name}</span>
                  <span className={feature.status === 'ready' ? 'text-tertiary font-bold' : 'text-outline'}>
                    {feature.status.toUpperCase()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-3 text-primary">
              <span className="material-symbols-outlined text-xl">security</span>
              <h3 className="font-headline font-bold text-base">Defense</h3>
            </div>
            <ul className="space-y-2">
              {complianceFeatures.slice(2).map((feature, index) => (
                <li key={index} className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant font-body">{feature.name}</span>
                  <span className="material-symbols-filled text-primary text-sm">check_circle</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 12-Month Roadmap */}
      <section className="space-y-4">
        <h2 className="font-headline text-xl font-bold text-on-surface tracking-tight">12-Month Roadmap</h2>
        <div className="relative space-y-3">
          <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-outline-variant/20"></div>
          {roadmapPhases.map((phase) => (
            <div key={phase.id} className="relative flex items-center gap-4 group">
              <div 
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 ring-4 ring-background
                  ${phase.status === 'completed' 
                    ? 'bg-primary text-on-primary' 
                    : phase.status === 'active'
                      ? 'bg-surface-container-high text-primary border border-primary/30'
                      : phase.status === 'upcoming'
                        ? 'bg-surface-container-low text-outline border border-outline-variant/20'
                        : 'bg-surface-container-lowest text-outline border border-outline-variant/20 opacity-50'
                  }
                `}
              >
                <span className="material-symbols-outlined text-base">{phase.icon}</span>
              </div>
              <div 
                className={`
                  bg-surface-container-low p-4 rounded-xl flex-grow border
                  ${phase.status === 'active' ? 'border-primary/20' : 'border-outline-variant/10'}
                  ${phase.status === 'vision' ? 'opacity-50' : ''}
                `}
              >
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-headline font-bold text-sm tracking-wide uppercase text-on-surface">
                    {phase.name}
                  </h4>
                  <span 
                    className={`
                      font-label text-[10px] px-2 py-0.5 rounded
                      ${phase.status === 'completed' 
                        ? 'text-primary bg-primary/10' 
                        : phase.status === 'active'
                          ? 'text-tertiary bg-tertiary/10'
                          : 'text-outline'
                      }
                    `}
                  >
                    {phase.quarter} - {phase.status.toUpperCase()}
                  </span>
                </div>
                <p className="font-body text-xs text-on-surface-variant">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grant Request */}
      <section className="bg-surface-container p-6 rounded-xl border border-primary/20 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
        <div className="flex items-center justify-between relative z-10">
          <div>
            <h3 className="font-headline text-xl font-bold text-primary">Grant Request</h3>
            <p className="font-body text-sm text-on-surface-variant mt-1">Operational Scaling Capital</p>
          </div>
          <div className="text-right">
            <span className="font-headline text-2xl font-bold text-on-surface tracking-tighter">
              $250,000
            </span>
            <p className="font-label text-[10px] uppercase text-outline">Total Requested</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="h-4 w-full bg-surface-container-highest rounded-full overflow-hidden flex gap-0.5">
            {grantAllocations.map((allocation, index) => (
              <div 
                key={index}
                className="h-full"
                style={{ 
                  width: `${allocation.percentage}%`,
                  backgroundColor: allocation.color 
                }}
                title={allocation.category}
              ></div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
            {grantAllocations.map((allocation, index) => (
              <div key={index} className="flex items-center gap-2">
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: allocation.color }}
                ></span>
                <span>{allocation.category} (${allocation.amount / 1000}k)</span>
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full h-12 bg-primary text-on-primary font-headline font-bold rounded-full tracking-widest hover:brightness-110 active-scale transition-all flex items-center justify-center gap-2">
          FUND THE ARCHIVE
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </section>

      {/* Conclusion */}
      <div className="text-center py-6">
        <p className="font-headline font-medium text-outline text-xs tracking-[0.2em] uppercase opacity-60">
          Building the Future of Sovereign Finance.
        </p>
      </div>
    </div>
  );
};

export default Protocol;
