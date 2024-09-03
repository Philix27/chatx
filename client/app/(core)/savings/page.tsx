'use client';
import { Navbar, Tabs, TextH, TextP } from '@/comps';
import React, { useState } from 'react';
import SavingsList from './list';
import CreateLockedSavings from './create';

export default function Savings() {
  const [isSwap, setIsSwap] = useState(true);

  return (
    <>
      <Navbar title={'Savings'} />
      <div className="mb-10">
        <Tabs
          data={[
            {
              title: 'Create',
              isActive: isSwap,
              onClick: () => setIsSwap(true),
            },
            {
              title: 'History',
              isActive: !isSwap,
              onClick: () => setIsSwap(false),
            },
          ]}
        />
        {isSwap ? <SavingsList /> : <CreateLockedSavings />}
      </div>
    </>
  );
}
