import type { 
  Pool, 
  StakingStrategy, 
  Course, 
  QuizQuestion, 
  TokenBalance, 
  RoadmapPhase,
  GrantAllocation,
  ProtocolStats,
  UserPosition
} from '@/types';

// Active Pools Data
export const pools: Pool[] = [
  {
    id: 'wld-usdc-arbitrage',
    name: 'WLD-USDC Arbitrage',
    module: 'Stability Module v2',
    apy: 28.30,
    tvl: 2400000,
    tvlFormatted: '$2.4M',
    riskLevel: 'high',
    description: 'Captures price inefficiencies across decentralized venues using flash-swap infrastructure.',
    icon: 'account_balance',
    badge: 'HIGH YIELD',
  },
  {
    id: 'eth-liquidation',
    name: 'ETH Liquidation Pool',
    module: 'Collateral Recovery',
    apy: 15.60,
    tvl: 1100000,
    tvlFormatted: '$1.1M',
    riskLevel: 'low',
    description: 'Automated collateral liquidation for lending protocols. Priority execution via private RPC nodes.',
    icon: 'gavel',
    badge: 'LOW RISK',
  },
  {
    id: 'swld-peg-stability',
    name: 'SWLD Peg Stability',
    module: 'Algorithmic Maintenance',
    apy: 8.40,
    tvl: 3500000,
    tvlFormatted: '$3.5M',
    riskLevel: 'low',
    description: 'Maintains the algorithmic peg of Sovereign World assets against protocol reserves.',
    icon: 'balance',
  },
  {
    id: 'mev-backrunning',
    name: 'MEV-Backrunning',
    module: 'Zero-Risk Execution',
    apy: 12.20,
    tvl: 800000,
    tvlFormatted: '$800K',
    riskLevel: 'medium',
    description: 'Zero-risk backrunning of large trades on World Chain. Protects users from toxic sandwich attacks.',
    icon: 'rocket_launch',
  },
];

// Staking Strategies
export const stakingStrategies: StakingStrategy[] = [
  {
    id: 'wld-usdc',
    name: 'WLD-USDC Arbitrage',
    module: 'Module A-28',
    apy: 28.3,
    leverage: 1,
    description: 'Captures price inefficiencies across decentralized venues using flash-swap infrastructure optimized for World Chain latency.',
    riskProfile: 'Calculated',
    infrastructure: 'Silent Uniswap V3',
  },
  {
    id: 'eth-liquidation',
    name: 'ETH Liquidation Pool',
    module: 'Module L-15',
    apy: 15.6,
    leverage: 1,
    description: 'Automated collateral liquidation for lending protocols. Priority execution via private RPC nodes.',
    riskProfile: 'Conservative',
    infrastructure: 'Silent Uniswap V3',
  },
  {
    id: 'swld-peg',
    name: 'SWLD Peg Stability',
    module: 'Module S-08',
    apy: 8.4,
    leverage: 1,
    description: 'Maintains the algorithmic peg of Sovereign World assets against protocol reserves.',
    riskProfile: 'Stable',
    infrastructure: 'Silent Uniswap V3',
  },
  {
    id: 'mev-backrunning',
    name: 'MEV-Backrunning',
    module: 'Module M-12',
    apy: 12.2,
    leverage: 1,
    description: 'Zero-risk backrunning of large trades on World Chain. Protects users from toxic sandwich attacks while capturing value.',
    riskProfile: 'Balanced',
    infrastructure: 'Silent Uniswap V3',
  },
];

// User Positions
export const userPositions: UserPosition[] = [
  {
    poolId: 'wld-usdc-arbitrage',
    stakedAmount: 1420.50,
    stakedFormatted: '1,420.50',
    accruedRewards: 12.84,
    rewardsFormatted: '+12.84',
    healthFactor: 1.84,
  },
];

// Educational Courses
export const courses: Course[] = [
  {
    id: 'defi-risk-management',
    title: 'DeFi Risk Management & Yield Optimization',
    category: 'advanced',
    duration: '45 MINS',
    reward: 250,
    rewardFormatted: '250 WDX',
    progress: 0,
    completed: false,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
  },
  {
    id: 'world-id-proof',
    title: 'World ID: The Proof of Personhood Standard',
    category: 'security',
    duration: '20 MINS',
    reward: 100,
    rewardFormatted: '100 WDX',
    progress: 100,
    completed: true,
  },
  {
    id: 'blockchain-basics',
    title: 'Blockchain Basics: Understanding L2 Scaling',
    category: 'fundamentals',
    duration: '30 MINS',
    reward: 150,
    rewardFormatted: '150 WDX',
    progress: 30,
    completed: false,
  },
  {
    id: 'liquidity-pools',
    title: 'Liquidity Pools & Automated Market Makers',
    category: 'fundamentals',
    duration: '25 MINS',
    reward: 125,
    rewardFormatted: '125 WDX',
    progress: 0,
    completed: false,
  },
  {
    id: 'impermanent-loss',
    title: 'Understanding Impermanent Loss',
    category: 'yield',
    duration: '35 MINS',
    reward: 175,
    rewardFormatted: '175 WDX',
    progress: 0,
    completed: false,
  },
];

// Quiz Questions
export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is the primary mechanism that prevents "Impermanent Loss" in single-sided staking?',
    options: [
      'Algorithmic Rebalancing',
      'Protocol Owned Liquidity (POL)',
      'Arbitrage Incentivization',
    ],
    correctAnswer: 1,
    prizePool: 50000,
  },
  {
    id: 'q2',
    question: 'What is the minimum collateralization ratio for minting SWLD?',
    options: [
      '100%',
      '125%',
      '150%',
    ],
    correctAnswer: 2,
    prizePool: 50000,
  },
  {
    id: 'q3',
    question: 'Which World Chain primitive enables gasless transactions for verified humans?',
    options: [
      'World ID',
      'MiniKit',
      'Superchain',
    ],
    correctAnswer: 0,
    prizePool: 50000,
  },
];

// Token Balances
export const tokenBalances: TokenBalance[] = [
  {
    symbol: 'WLD',
    name: 'Worldcoin',
    balance: 12450.32,
    balanceFormatted: '12,450.32',
    usdValue: 28450.50,
    icon: 'https://cryptologos.cc/logos/worldcoin-wld-logo.svg',
  },
  {
    symbol: 'WDX',
    name: 'Worldex Token',
    balance: 5000.00,
    balanceFormatted: '5,000.00',
    usdValue: 12500.00,
    icon: '',
  },
  {
    symbol: 'SWLD',
    name: 'StableWorld',
    balance: 1420.50,
    balanceFormatted: '1,420.50',
    usdValue: 1420.50,
    icon: '',
  },
  {
    symbol: 'LWETH',
    name: 'Liquid World ETH',
    balance: 2.45,
    balanceFormatted: '2.45',
    usdValue: 7250.00,
    icon: '',
  },
];

// Roadmap Phases
export const roadmapPhases: RoadmapPhase[] = [
  {
    id: 'phase-1',
    name: 'Foundation',
    quarter: 'Q1',
    status: 'completed',
    description: 'Smart contract audits and genesis liquidity pool orchestration.',
    icon: 'foundation',
  },
  {
    id: 'phase-2',
    name: 'Stability',
    quarter: 'Q2',
    status: 'active',
    description: 'MiCA compliance reporting tools and institutional custody bridges.',
    icon: 'shield',
  },
  {
    id: 'phase-3',
    name: 'Liquidity',
    quarter: 'Q3',
    status: 'upcoming',
    description: 'Cross-chain liquidity aggregation and institutional fiat ramps.',
    icon: 'water_drop',
  },
  {
    id: 'phase-4',
    name: 'Intelligence',
    quarter: 'Q4',
    status: 'vision',
    description: 'AI-driven risk scoring and autonomous treasury optimization.',
    icon: 'psychology',
  },
];

// Grant Allocation
export const grantAllocations: GrantAllocation[] = [
  {
    category: 'Audit & Verification',
    amount: 100000,
    percentage: 40,
    color: '#aca3ff',
  },
  {
    category: 'Security Infrastructure',
    amount: 75000,
    percentage: 30,
    color: '#e1ca4d',
  },
  {
    category: 'Bug Bounty',
    amount: 50000,
    percentage: 20,
    color: '#c7c2ea',
  },
  {
    category: 'Legal / MiCA',
    amount: 25000,
    percentage: 10,
    color: '#928f9c',
  },
];

// Protocol Stats
export const protocolStats: ProtocolStats = {
  totalValueLocked: 7800000,
  tvlFormatted: '$7.8M',
  uniqueUsers: 12450,
  totalTransactions: 89234,
  wdxPrice: 2.50,
  wdxPriceFormatted: '$2.50',
  swldPeg: 1.00,
};

// Navigation Items
export const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid_view' },
  { id: 'earn', label: 'Earn', icon: 'payments' },
  { id: 'vault', label: 'Vault', icon: 'account_balance_wallet' },
  { id: 'rewards', label: 'Rewards', icon: 'redeem' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
];

// Secondary Navigation (for desktop)
export const secondaryNavigation = [
  { id: 'protocol', label: 'Protocol', icon: 'hub' },
  { id: 'archive', label: 'Archive', icon: 'inventory_2' },
  { id: 'ledger', label: 'Ledger', icon: 'menu_book' },
  { id: 'governance', label: 'Governance', icon: 'gavel' },
  { id: 'security', label: 'Security', icon: 'verified_user' },
];

// Yield Mechanism Info
export const yieldMechanismInfo = {
  title: 'Yield Mechanism',
  description: 'Yield is programmatically extracted from liquidation penalties and cross-exchange price discrepancies. By providing liquidity, you facilitate World Chain\'s price-stability architecture.',
  verifiedEntities: 420,
};

// LWETH Staking Info
export const lwethStakingInfo = {
  projectedAPY: 3.9,
  totalStaked: 142850.21,
  totalStakedFormatted: '142,850.21',
  ethBond: 8,
  operatorFee: 14,
  exchangeRate: 1.0162,
  unstakingPeriod: '~4-7 Days',
};

// Leveraged Staking Info
export const leveragedStakingInfo = {
  currentAPR: 24.50,
  baseYield: 8.20,
  leverageMultiplier: 2.5,
  leverageBonus: 16.30,
  healthFactor: 1.84,
};

// WDX Tokenomics
export const wdxTokenomics = {
  totalSupply: 100000000,
  totalSupplyFormatted: '100M',
  burnToMintEfficiency: 99.98,
  burnToMintLatency: '~1.2s',
  airdropSplit: {
    instant: 50,
    vested: 50,
  },
  deflationaryCurve: true,
};

// SWLD Stablecoin Info
export const swldInfo = {
  peg: 1.00,
  pegCurrency: 'EUR',
  collateralRatio: 150,
  mintFee: 0.02,
  burnFee: 0.02,
};

// Revenue Streams
export const revenueStreams = [
  { source: 'DEX Fees', percentage: 0.05, icon: 'swap_horiz' },
  { source: 'Transmuter Fees', percentage: 0.12, icon: 'shield_with_heart' },
];

// Security Features
export const securityFeatures = [
  {
    title: 'World ID Gating',
    description: 'Every participant is verified via biometric proof-of-personhood, eliminating Sybil attacks and ensuring a human-centric economy.',
    icon: 'verified_user',
    color: 'primary',
  },
  {
    title: 'Regulatory Alignment',
    description: 'We work proactively with global regulators to ensure that DeFi can scale while maintaining consumer protection standards.',
    icon: 'account_balance',
    color: 'secondary',
  },
  {
    title: 'Real-time Audits',
    description: 'Our smart contracts are subject to continuous, automated security audits and public bug bounties to ensure capital safety.',
    icon: 'analytics',
    color: 'tertiary',
  },
];

// Compliance Features
export const complianceFeatures = [
  { name: 'MiCA Reporting Modules', status: 'ready' },
  { name: 'Institutional KYC/AML', status: 'integrated' },
  { name: 'TWAP Oracles (v3)', status: 'active' },
  { name: '48h Timelock Control', status: 'active' },
];

// Core Problems
export const coreProblems = [
  {
    title: 'Bot Extraction',
    description: 'High-frequency bots extract billions in value yearly through front-running and sandwich attacks, penalizing human participants.',
    icon: 'warning',
  },
  {
    title: 'Sybil Drift',
    description: 'Unchecked wallet creation dilutes governance and rewards.',
    icon: 'groups_2',
  },
  {
    title: 'MEV Drag',
    description: 'Invisible taxes on every transaction for retail users.',
    icon: 'trending_down',
  },
];

// Key Metrics
export const keyMetrics = [
  { label: 'Target TVL', value: '50M', color: 'primary' },
  { label: 'Target DAU', value: '5K', color: 'tertiary' },
];
