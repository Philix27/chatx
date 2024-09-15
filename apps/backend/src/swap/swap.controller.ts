import { Controller, Get, Post } from '@nestjs/common';
import { SwapService } from './swap.service';
import {
  IQuickSwap,
  IQuickSwap_BuyRq,
  IQuickSwap_BuyRs,
  IQuickSwap_GetRatesParams,
  IQuickSwap_GetRatesRs,
  IQuickSwap_GetTransactionsParams,
  IQuickSwap_GetTransactionsRs,
  IQuickSwap_SellRq,
  IQuickSwap_SellRs,
} from '@repo/rpc';

@Controller('/swap')
export class SwapController implements IQuickSwap {
  constructor(private readonly appService: SwapService) {}

  @Get()
  async get_rates(
    params: IQuickSwap_GetRatesParams,
  ): Promise<IQuickSwap_GetRatesRs> {
    return await this.appService.get_rates(params);
  }

  @Get()
  async get_transactions(
    params: IQuickSwap_GetTransactionsParams,
  ): Promise<IQuickSwap_GetTransactionsRs> {
    return await this.appService.get_transactions(params);
  }

  @Post()
  async buy(body: IQuickSwap_BuyRq): Promise<IQuickSwap_BuyRs> {
    return await this.appService.buy(body);
  }

  @Post()
  async sell(body: IQuickSwap_SellRq): Promise<IQuickSwap_SellRs> {
    return await this.appService.sell(body);
  }
}
