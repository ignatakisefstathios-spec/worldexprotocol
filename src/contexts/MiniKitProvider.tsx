import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';

interface MiniKitContextType {
  isInstalled: boolean;
  isReady: boolean;
  error: Error | null;
  walletAddress: string | null;
  username: string | null;
  isVerified: boolean;
}

const MiniKitContext = createContext<MiniKitContextType>({
  isInstalled: false,
  isReady: false,
  error: null,
  walletAddress: null,
  username: null,
  isVerified: false,
});

export const useMiniKit = () => useContext(MiniKitContext);

interface MiniKitProviderProps {
  children: ReactNode;
}

export const MiniKitProvider: React.FC<MiniKitProviderProps> = ({ children }) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [walletAddress] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const initMiniKit = async () => {
      try {
        // Check if MiniKit is installed (running inside World App)
        const installed = MiniKit.isInstalled();
        setIsInstalled(installed);

        if (installed) {
          // Install MiniKit
          await MiniKit.install();
          setIsReady(true);

          // Try to get user info if available
          try {
            const userInfo = await MiniKit.getUserByAddress(walletAddress || '');
            if (userInfo) {
              setUsername(userInfo.username || null);
              setIsVerified(true);
            }
          } catch {
            // User not verified or not available
            setIsVerified(false);
          }
        }
      } catch (err) {
        setError(err as Error);
        console.error('MiniKit initialization error:', err);
      }
    };

    initMiniKit();
  }, [walletAddress]);

  return (
    <MiniKitContext.Provider
      value={{
        isInstalled,
        isReady,
        error,
        walletAddress,
        username,
        isVerified,
      }}
    >
      {children}
    </MiniKitContext.Provider>
  );
};

export default MiniKitProvider;
