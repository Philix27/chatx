'use client';
import { Navbar, Tabs, TextH, TextP } from '@/comps';
import React, { useState } from 'react';

export default function SwapPage() {
  return (
    <>
      <Navbar title={'Quick Swap'} isBack />
      <div className="mb-10">
        <TextP v={'p5'}>Quick Swap</TextP>
      </div>
    </>
  );
}
