import { useState } from 'react';
import { MiniKitProvider } from '@/contexts/MiniKitProvider';
import { TopAppBar } from '@/components/navigation/TopAppBar';
import { BottomNavBar } from '@/components/navigation/BottomNavBar';
import { Dashboard } from '@/screens/Dashboard';
import { Earn } from '@/screens/Earn';
import { Vault } from '@/screens/Vault';
import { Learn } from '@/screens/Learn';
import { Protocol } from '@/screens/Protocol';
import type { Screen, Pool, StakingStrategy, Course } from '@/types';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

function AppContent() {
  const [activeScreen, setActiveScreen] = useState<Screen>('dashboard');
  const [balance] = useState('$12,840.50');

  const handleNavigate = (screen: Screen) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePoolSelect = (pool: Pool) => {
    toast.info(`Selected pool: ${pool.name}`, {
      description: `APY: ${pool.apy}% | TVL: ${pool.tvlFormatted}`,
    });
  };

  const handleStrategySelect = (strategy: StakingStrategy) => {
    toast.info(`Selected strategy: ${strategy.name}`, {
      description: `APY: ${strategy.apy}% | Risk: ${strategy.riskProfile}`,
    });
  };

  const handleCourseSelect = (course: Course) => {
    toast.info(`Selected course: ${course.title}`, {
      description: `Duration: ${course.duration} | Reward: ${course.rewardFormatted}`,
    });
  };

  const handleQuizAnswer = (_questionId: string, _answerIndex: number) => {
    toast.success('Answer submitted!', {
      description: 'Correct! 50,000 WDX will be deposited to your wallet.',
    });
  };

  const handleContribute = () => {
    toast.success('Contribution initiated', {
      description: 'Please confirm the transaction in your wallet.',
    });
  };

  const handleStake = (amount: string) => {
    toast.success('Staking initiated', {
      description: `Staking ${amount} ETH for LWETH`,
    });
  };

  const handleVerifyIdentity = () => {
    toast.info('World ID Verification', {
      description: 'Please verify your identity using World ID.',
    });
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return (
          <Dashboard 
            onPoolSelect={handlePoolSelect}
            onContribute={handleContribute}
          />
        );
      case 'earn':
        return (
          <Earn 
            onStrategySelect={handleStrategySelect}
            onVerifyIdentity={handleVerifyIdentity}
          />
        );
      case 'vault':
        return <Vault onStake={handleStake} />;
      case 'rewards':
      case 'learn':
        return (
          <Learn 
            onCourseSelect={handleCourseSelect}
            onQuizAnswer={handleQuizAnswer}
          />
        );
      case 'protocol':
        return <Protocol />;
      case 'settings':
        return (
          <div className="pt-24 pb-28 px-4">
            <h1 className="text-2xl font-bold text-on-surface mb-4">Settings</h1>
            <p className="text-on-surface-variant">Settings screen coming soon...</p>
          </div>
        );
      default:
        return <Dashboard onPoolSelect={handlePoolSelect} />;
    }
  };

  // Determine which navigation items to show based on screen
  const isSecondaryNav = ['protocol', 'archive', 'ledger', 'governance', 'security'].includes(activeScreen);

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <TopAppBar 
        title={isSecondaryNav ? 'The Sovereign Archive' : 'WORLDEX PRO'}
        subtitle={isSecondaryNav ? 'PROTOCOL V.1.0' : undefined}
        showBalance={!isSecondaryNav}
        balance={balance}
        showVerified={true}
      />
      
      <main className="min-h-screen">
        {renderScreen()}
      </main>

      <BottomNavBar 
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
      />
      
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#1a1919',
            color: '#ffffff',
            border: '1px solid #494847',
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <MiniKitProvider>
      <AppContent />
    </MiniKitProvider>
  );
}

export default App;
