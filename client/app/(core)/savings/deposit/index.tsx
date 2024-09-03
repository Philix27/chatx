'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { FormData, durationTransformer, schema } from './schema';
import { AppStores } from '@/lib';
import { useDeposit } from './useDeposit';
import { AppButton } from '@/comps';

export default function DepositSection() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // const { formattedBalance, userAddress } = useMain()
  const { depositFunds } = useDeposit();
  const store = AppStores.useChat();

  const submitData = async (formData: FormData) => {
    try {
      // await ContractFn.deposit({
      //   userAddress: userAddress as `0x${string}`,
      //   // userAddress: account.address as `0x${string}`,
      //   purpose: formData.purpose,
      //   timeInSeconds: durationTransformer(formData.duration),
      //   amount: formData.amount,
      // })
      await depositFunds({
        purpose: formData.purpose,
        timeInSeconds: durationTransformer(formData.duration),
        amount: formData.amount,
      });
      toast('Deposit Successful');
    } catch (error) {
      toast('Oops an error occured');
    }
  };

  return (
    <div className={`px-4`}>
      <div className={`w-ful my-4 flex justify-between rounded-lg border-2 border-primary bg-accent p-5`}>
        <div>
          <p className="text-sm">Wallet Balance:</p>
          <h1 className="text-xl font-extrabold">{store.balance}cUSD</h1>
        </div>
        <img src={'./wallet2.png'} className="h-full w-[70px]" />
      </div>
      <div className="mx-3">
        <p>Lock your savings with few clicks</p>
      </div>
      <div className={`mx-2 my-4 flex flex-col items-center justify-center`}>
        <form onSubmit={handleSubmit(submitData)}>
          <div className={` w-full space-y-5 pb-4`}>
            <input
              type="number"
              placeholder="Amount"
              {...register('amount', { valueAsNumber: true })}
              className={`w-full border-2 border-primary p-2  text-black`}
            />
            {errors.amount && <span className={`text-red-700`}>{errors.amount.message}</span>}

            <input
              type="text"
              placeholder="Purpose"
              maxLength={10}
              {...register('purpose')}
              className={`w-full border-2 border-primary p-2`}
            />
            {errors.purpose?.message && <span className={`text-red-700`}>{errors.purpose.message}</span>}

            <select id="duration" {...register('duration')} className={`w-full border-2 border-primary p-2`}>
              <option value="duration">Select Duration</option>
              <option value="1week">1 week</option>
              <option value="2weeks">2 weeks</option>
              <option value="3weeks">1 months</option>
              <option value="4weeks">2 months</option>
              <option value="5weeks">3 months</option>
            </select>
            {errors.duration?.message && <span className={`text-red-700`}>{errors.duration.message}</span>}

            <div className={`w-full space-x-2 border-2 border-primary p-2`}>
              <label>
                <input {...register('sholdLock')} type="checkbox" placeholder="lock" className={`mr-2`} />
                Locked
              </label>
            </div>
            {errors.sholdLock?.message && <span className={`text-red-700`}>{errors.sholdLock.message}</span>}
          </div>

          <div className={`mt-6  flex items-center justify-center`}>
            <AppButton className="w-[70%]">Next</AppButton>
          </div>
        </form>
      </div>
    </div>
  );
}
