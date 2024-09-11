'use client';

import { celo, celoAlfajores, mainnet, sepolia } from '@wagmi/core/chains';
import { createConfig, http, injected } from '@wagmi/core';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { defineChain } from 'viem';
import {
  XMTPProvider,
  attachmentContentTypeConfig,
  reactionContentTypeConfig,
  replyContentTypeConfig,
} from '@xmtp/react-sdk';
import { Web3AuthConnectorInstance } from './web3Connector';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

export const fhenixFrontier = defineChain({
  id: 8008135,
  name: 'Fhenix Frontier',
  network: 'fhenixFrontier',
  nativeCurrency: { name: 'tFHE', symbol: 'tFHE', decimals: 18 },
  rpcUrls: {
    public: {
      http: ['https://api.helium.fhenix.zone'],
    },
    default: {
      http: ['https://api.helium.fhenix.zone'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Fhenix',
      url: ' https://explorer.helium.fhenix.zone',
    },
  },
});

const contentTypeConfigs = [attachmentContentTypeConfig, reactionContentTypeConfig, replyContentTypeConfig];

const configX = createConfig({
  chains: [celoAlfajores],
  transports: {
    [fhenixFrontier.id]: http(),
    [celoAlfajores.id]: http(),
    // [celo.id]: http(),
    // [sepolia.id]: http(),
  },
  ssr: true,
  connectors: [Web3AuthConnectorInstance([celoAlfajores]), injected()],
});

const queryClient = new QueryClient();

export function Web3Providers(props: { children: ReactNode }) {
  return (
    <WagmiProvider config={configX}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <XMTPProvider contentTypeConfigs={contentTypeConfigs}>{props.children}</XMTPProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
