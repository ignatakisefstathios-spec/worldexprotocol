# Worldex Protocol - World Chain Mini-App

> **Identity-Verified DeFi Infrastructure for Humans. Built for the Sovereign Archive.**

[![World Chain](https://img.shields.io/badge/World%20Chain-Mini--App-purple)](https://worldcoin.org/world-chain)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com)

---

## 🎯 Project Overview

Worldex Protocol is a **bot-resistant, human-only DeFi super-app** built exclusively for World Chain. By leveraging World ID's unique proof-of-personhood, Worldex eliminates bot attacks, Sybil attacks, and airdrop farming while providing institutional-grade financial infrastructure.

### Core Features

- **🆔 World ID Verification** - Biometric proof-of-personhood gating
- **💰 SWLD Stablecoin** - Euro-pegged (€1.00), 150%+ over-collateralized
- **📈 Institutional Arbitrage** - 8-28% APY strategies for verified humans
- **⚡ LWETH Liquid Staking** - Non-rebasing liquid staking on World Chain
- **🛡️ MEV Protection** - Zero-risk backrunning via Silent Uniswap V3
- **🔥 Deflationary WDX** - Buy-and-burn mechanics from protocol fees

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 20+** (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **npm** or **pnpm**
- **Git**
- **Worldcoin Developer Account** - [Sign up here](https://developer.worldcoin.org)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/worldex-protocol.git
cd worldex-protocol

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your credentials
# VITE_WORLDCOIN_APP_ID=your_app_id
# VITE_WORLDCOIN_API_KEY=your_api_key

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
worldex-protocol/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions for Vercel deployment
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── navigation/         # TopAppBar, BottomNavBar
│   │   └── ui/                 # shadcn/ui components
│   ├── contexts/
│   │   └── MiniKitProvider.tsx # World ID / MiniKit integration
│   ├── contracts/
│   │   └── abis.ts             # Smart contract ABIs
│   ├── hooks/                  # Custom React hooks
│   ├── lib/
│   │   └── data/
│   │       └── mockData.ts     # Mock data for development
│   ├── screens/                # Main app screens
│   │   ├── Dashboard.tsx       # Main dashboard / Earn overview
│   │   ├── Earn.tsx            # Institutional arbitrage strategies
│   │   ├── Vault.tsx           # LWETH liquid staking
│   │   ├── Learn.tsx           # Educational courses & quizzes
│   │   └── Protocol.tsx        # Protocol pitch deck
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── App.tsx                 # Main app component
│   ├── index.css               # Global styles
│   └── main.tsx                # Entry point
├── .env.example                # Environment variables template
├── index.html                  # HTML entry point
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vercel.json                 # Vercel deployment config
└── vite.config.ts              # Vite configuration
```

---

## 🛠️ Development Workflow

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run typecheck    # Run TypeScript type checking
npm run lint         # Run ESLint
```

### Adding New Screens

1. Create a new file in `src/screens/YourScreen.tsx`
2. Add the screen component to `src/App.tsx`
3. Update the navigation in `BottomNavBar.tsx` if needed

### Customizing the Theme

Edit `tailwind.config.js` to modify:
- Colors (primary, secondary, surface palette)
- Fonts (headline, body, label)
- Border radius
- Shadows

---

## 🔐 World ID Integration

### Setting up World ID

1. Go to [Worldcoin Developer Portal](https://developer.worldcoin.org)
2. Create a new Mini App
3. Copy your **App ID** and **API Key**
4. Add them to `.env.local`:

```env
VITE_WORLDCOIN_APP_ID=app_your_app_id
VITE_WORLDCOIN_API_KEY=sk_your_api_key
```

### Using MiniKit in Components

```tsx
import { useMiniKit } from '@/contexts/MiniKitProvider';
import { MiniKit, VerificationLevel } from '@worldcoin/minikit-js';

function MyComponent() {
  const { isInstalled, isVerified } = useMiniKit();

  const handleVerify = async () => {
    if (!MiniKit.isInstalled()) {
      alert('Please open this app in World App');
      return;
    }

    const { finalPayload } = await MiniKit.commandsAsync.verify({
      action: 'verify_human',
      verification_level: VerificationLevel.Orb,
    });

    if (finalPayload.status === 'success') {
      // User verified successfully
      console.log('Verification success:', finalPayload);
    }
  };

  return (
    <button onClick={handleVerify}>
      {isVerified ? 'Verified' : 'Verify with World ID'}
    </button>
  );
}
```

---

## 📱 Screens Overview

### Dashboard (`/dashboard`)
- Hero section with protocol overview
- Active opportunities (pools)
- Yield mechanism explanation
- Deposit interface with World ID gating

### Earn (`/earn`)
- Institutional arbitrage strategies
- Strategy cards with APY and risk profiles
- World ID verification banner
- Asymmetric grid layout

### Vault (`/vault`)
- LWETH liquid staking interface
- Real-time exchange rate display
- Gasless transaction indicator
- Transaction protocol details

### Learn (`/learn`)
- Educational course tracks
- Progress tracking
- Interactive quiz with WDX rewards
- Protocol compliance standards

### Protocol (`/protocol`)
- Full protocol pitch deck
- Core problems & solutions
- WDX-SWLD flywheel economics
- 12-month roadmap
- Grant allocation breakdown

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Option 2: GitHub Integration

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

#### Option 3: GitHub Actions (Automated)

1. Add secrets to your GitHub repository:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

2. Push to `main` branch - automatic deployment!

### Environment Variables for Production

In Vercel dashboard, add these environment variables:

| Variable | Description |
|----------|-------------|
| `VITE_WORLDCOIN_APP_ID` | Your Worldcoin App ID |
| `VITE_WORLDCOIN_API_KEY` | Your Worldcoin API Key |

---

## 🔗 Smart Contract Integration

### Contract Addresses (Placeholder)

Update these in `src/contracts/abis.ts` after deployment:

```typescript
export const CONTRACT_ADDRESSES = {
  worldChain: {
    wdxToken: '0x...',        // WDX Token
    swldToken: '0x...',       // SWLD Stablecoin
    transmuter: '0x...',      // Peg Stability Module
    arbitragePool: '0x...',   // Arbitrage Pool
    lwethStaking: '0x...',    // LWETH Staking
    worldIdVerifier: '0x...', // World ID Verifier
  }
};
```

### Using Contract ABIs

```tsx
import { ABIS, CONTRACT_ADDRESSES } from '@/contracts/abis';
import { createPublicClient, http } from 'viem';
import { worldChain } from 'viem/chains';

const client = createPublicClient({
  chain: worldChain,
  transport: http(),
});

// Read contract
const balance = await client.readContract({
  address: CONTRACT_ADDRESSES.worldChain.wdxToken,
  abi: ABIS.wdxToken,
  functionName: 'balanceOf',
  args: [userAddress],
});
```

---

## 🧪 Testing in World App

### Local Development with ngrok

```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Expose via ngrok
npx ngrok http 5173

# Copy the ngrok HTTPS URL
# Update your Mini App URL in Worldcoin Developer Portal
```

### Testing Checklist

- [ ] App loads correctly in World App
- [ ] World ID verification works
- [ ] Wallet connection succeeds
- [ ] All screens navigate properly
- [ ] Bottom navigation is responsive
- [ ] Safe area insets work on mobile
- [ ] Dark mode looks correct

---

## 📚 Resources

### Worldcoin Documentation
- [MiniKit JS SDK](https://docs.world.org/mini-apps/quick-start/installing)
- [World ID Integration](https://docs.world.org/world-id)
- [World Chain](https://docs.world.org/world-chain)

### Development Tools
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [shadcn/ui Components](https://ui.shadcn.com)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🆘 Support

- **Discord**: [Worldcoin Developers](https://discord.gg/worldcoin)
- **Email**: your-email@example.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/worldex-protocol/issues)

---

## 🙏 Acknowledgments

- **Patrick Collins** - Smart contract architecture inspiration
- **Sam Altman** - World ID vision
- **Gary Gensler** - Regulatory compliance guidance (MiCA-ready)
- **Worldcoin Team** - MiniKit SDK and World Chain

---

<p align="center">
  <strong>Built for verified humans only. 🌍</strong>
</p>
