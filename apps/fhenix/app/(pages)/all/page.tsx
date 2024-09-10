"use client"

import React from "react"
import { Button, Loader } from "@/comps"
import { FHE } from "@/contract"
import { shortAddress } from "@/shortAddress"
import { useAccount } from "wagmi"

export default function Page() {
  const { address } = useAccount()
  const {
    data,
    result: { isLoading, error },
  } = FHE.useGetAllTransactionsForUser(address!)

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <p className="text-destructive">{error.message}</p>
  }
  return (
    <div className="flex w-full flex-col">
      <p>All Transactions</p>

      {data.map((val, i) => (
        <div key={i} className="bg-card mb-2 flex flex-col rounded-md p-2">
          <div className="flex items-center justify-between">
            <p>Buyer:</p>
            <p> {shortAddress(val.buyer)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Amount:</p>

            <div className="flex items-center justify-between">
              <p> {Number(val.amount).toString()}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p>Seller:</p>
            <p> {shortAddress(val.seller)}</p>
          </div>

          <div className="flex items-center justify-between">
            Status:
            {val.isCompleted ? (
              <p className="text-green-500">Completed</p>
            ) : (
              <p className="text-orange-600">Pending</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            Dispute:
            {val.isDisputed ? (
              <p className="text-destructive">Disputed</p>
            ) : (
              <p className="text-green-500">No dispute</p>
            )}
          </div>
          <ReleaseFunds />
        </div>
      ))}
    </div>
  )
}

export function ReleaseFunds() {
  const {
    releaseFunds,
    result: { data, error },
  } = FHE.useReleaseFunds()
  const { requestRefund, result: requestRefundResult } = FHE.useRequestRefund()

  return (
    <div className="flex items-center justify-around">
      <Button
        onClick={() => {
          requestRefund(1)
        }}
      >
        Request refunds
      </Button>
      <Button
        onClick={() => {
          releaseFunds(0)
        }}
      >
        Release Funds
      </Button>
    </div>
  )
}
