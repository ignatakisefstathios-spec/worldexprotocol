// Worldex Protocol Types

export interface Pool {
  id: string;
  name: string;
  module: string;
  apy: number;
  tvl: number;
  tvlFormatted: string;
  riskLevel: 'low' | 'medium' | 'high';
  description: string;
  icon: string;
  badge?: string;
}

export interface UserPosition {
  poolId: string;
  stakedAmount: number;
  stakedFormatted: string;
  accruedRewards: number;
  rewardsFormatted: string;
  healthFactor: number;
}

export interface StakingStrategy {
  id: string;
  name: string;
  module: string;
  apy: number;
  leverage: number;
  description: string;
  riskProfile: string;
  infrastructure: string;
}

export interface Course {
  id: string;
  title: string;
  category: 'security' | 'yield' | 'fundamentals' | 'advanced';
  duration: string;
  reward: number;
  rewardFormatted: string;
  progress: number;
  completed: boolean;
  image?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  prizePool: number;
}

export interface TokenBalance {
  symbol: string;
  name: string;
  balance: number;
  balanceFormatted: string;
  usdValue: number;
  icon: string;
}

export interface Transaction {
  id: string;
  type: 'stake' | 'unstake' | 'claim' | 'swap' | 'deposit' | 'withdraw';
  amount: number;
  token: string;
  timestamp: number;
  status: 'pending' | 'completed' | 'failed';
  hash?: string;
}

export interface RoadmapPhase {
  id: string;
  name: string;
  quarter: string;
  status: 'completed' | 'active' | 'upcoming' | 'vision';
  description: string;
  icon: string;
}

export interface GrantAllocation {
  category: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface ProtocolStats {
  totalValueLocked: number;
  tvlFormatted: string;
  uniqueUsers: number;
  totalTransactions: number;
  wdxPrice: number;
  wdxPriceFormatted: string;
  swldPeg: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: number;
  read: boolean;
}

// MiniKit Types
export interface VerifyPayload {
  action: string;
  signal?: string;
  verification_level: 'orb' | 'device';
}

export interface PaymentPayload {
  reference: string;
  to: string;
  tokens: {
    symbol: string;
    token_amount: string;
  }[];
  description: string;
}

export interface WalletAuthPayload {
  nonce: string;
  statement?: string;
  requestId?: string;
}

// Navigation Types
export type Screen = 
  | 'dashboard'
  | 'earn'
  | 'vault'
  | 'rewards'
  | 'settings'
  | 'learn'
  | 'swap'
  | 'staking'
  | 'protocol'
  | 'archive'
  | 'ledger'
  | 'governance'
  | 'security';

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  surface: string;
  background: string;
  error: string;
  success: string;
  warning: string;
}
