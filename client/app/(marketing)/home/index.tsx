'use client';

import React from 'react';

import { JumbutronSection, HeroWithImg } from '../_comps';
import { useAppRouter, useWeb3Modal } from '@/lib';
import { AppButton, TextH } from '@/comps';
import { use3Wagmi } from '@/lib';
import { useAccount, useConnect } from 'wagmi';

export function HomeSection() {
  const router = useAppRouter();
  const { isConnected, login, address } = use3Wagmi();

  return (
    <div className={'flex flex-col items-center justify-center'} style={{ overscrollBehavior: 'none' }}>
      <HeroWithImg img={'/banner.png'}>
        <TextH v="h1" className={'text-[24px] font-extrabold md:text-[50px] text-card-foreground'}>
          <span className="text-primary tracking-wide"> Pocket Ramp </span>
        </TextH>
      </HeroWithImg>
      <div className="md:hidden my-5 flex flex-col items-center justify-center">
        {isConnected ? (
          <AppButton className="w-fit" onClick={() => router.go('/dashboard')}>
            Get Started
          </AppButton>
        ) : (
          <AppButton className="w-fit" onClick={login}>
            Login
          </AppButton>
        )}
      </div>
      <JumbutronSection
        title={'Swift exchange'}
        subtitle="Easy to use off-ramping service. We also help you develop a good saving habit."
      />
    </div>
  );
}
