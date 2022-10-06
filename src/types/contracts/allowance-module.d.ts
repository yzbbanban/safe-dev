/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type AddDelegate = ContractEventLog<{
  safe: string;
  delegate: string;
  0: string;
  1: string;
}>;
export type DeleteAllowance = ContractEventLog<{
  safe: string;
  delegate: string;
  token: string;
  0: string;
  1: string;
  2: string;
}>;
export type ExecuteAllowanceTransfer = ContractEventLog<{
  safe: string;
  delegate: string;
  token: string;
  to: string;
  value: string;
  nonce: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type PayAllowanceTransfer = ContractEventLog<{
  safe: string;
  delegate: string;
  paymentToken: string;
  paymentReceiver: string;
  payment: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type RemoveDelegate = ContractEventLog<{
  safe: string;
  delegate: string;
  0: string;
  1: string;
}>;
export type ResetAllowance = ContractEventLog<{
  safe: string;
  delegate: string;
  token: string;
  0: string;
  1: string;
  2: string;
}>;
export type SetAllowance = ContractEventLog<{
  safe: string;
  delegate: string;
  token: string;
  allowanceAmount: string;
  resetTime: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;

export interface AllowanceModule extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): AllowanceModule;
  clone(): AllowanceModule;
  methods: {
    ALLOWANCE_TRANSFER_TYPEHASH(): NonPayableTransactionObject<string>;

    DOMAIN_SEPARATOR_TYPEHASH(): NonPayableTransactionObject<string>;

    NAME(): NonPayableTransactionObject<string>;

    VERSION(): NonPayableTransactionObject<string>;

    allowances(
      arg0: string,
      arg1: string,
      arg2: string
    ): NonPayableTransactionObject<{
      amount: string;
      spent: string;
      resetTimeMin: string;
      lastResetMin: string;
      nonce: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
    }>;

    delegates(
      arg0: string,
      arg1: number | string | BN
    ): NonPayableTransactionObject<{
      delegate: string;
      prev: string;
      next: string;
      0: string;
      1: string;
      2: string;
    }>;

    delegatesStart(arg0: string): NonPayableTransactionObject<string>;

    tokens(
      arg0: string,
      arg1: string,
      arg2: number | string | BN
    ): NonPayableTransactionObject<string>;

    setAllowance(
      delegate: string,
      token: string,
      allowanceAmount: number | string | BN,
      resetTimeMin: number | string | BN,
      resetBaseMin: number | string | BN
    ): NonPayableTransactionObject<void>;

    resetAllowance(
      delegate: string,
      token: string
    ): NonPayableTransactionObject<void>;

    deleteAllowance(
      delegate: string,
      token: string
    ): NonPayableTransactionObject<void>;

    executeAllowanceTransfer(
      safe: string,
      token: string,
      to: string,
      amount: number | string | BN,
      paymentToken: string,
      payment: number | string | BN,
      delegate: string,
      signature: string | number[]
    ): NonPayableTransactionObject<void>;

    getChainId(): NonPayableTransactionObject<string>;

    generateTransferHash(
      safe: string,
      token: string,
      to: string,
      amount: number | string | BN,
      paymentToken: string,
      payment: number | string | BN,
      nonce: number | string | BN
    ): NonPayableTransactionObject<string>;

    getTokens(
      safe: string,
      delegate: string
    ): NonPayableTransactionObject<string[]>;

    getTokenAllowance(
      safe: string,
      delegate: string,
      token: string
    ): NonPayableTransactionObject<string[]>;

    addDelegate(delegate: string): NonPayableTransactionObject<void>;

    removeDelegate(
      delegate: string,
      removeAllowances: boolean
    ): NonPayableTransactionObject<void>;

    getDelegates(
      safe: string,
      start: number | string | BN,
      pageSize: number | string | BN
    ): NonPayableTransactionObject<{
      results: string[];
      next: string;
      0: string[];
      1: string;
    }>;
  };
  events: {
    AddDelegate(cb?: Callback<AddDelegate>): EventEmitter;
    AddDelegate(
      options?: EventOptions,
      cb?: Callback<AddDelegate>
    ): EventEmitter;

    DeleteAllowance(cb?: Callback<DeleteAllowance>): EventEmitter;
    DeleteAllowance(
      options?: EventOptions,
      cb?: Callback<DeleteAllowance>
    ): EventEmitter;

    ExecuteAllowanceTransfer(
      cb?: Callback<ExecuteAllowanceTransfer>
    ): EventEmitter;
    ExecuteAllowanceTransfer(
      options?: EventOptions,
      cb?: Callback<ExecuteAllowanceTransfer>
    ): EventEmitter;

    PayAllowanceTransfer(cb?: Callback<PayAllowanceTransfer>): EventEmitter;
    PayAllowanceTransfer(
      options?: EventOptions,
      cb?: Callback<PayAllowanceTransfer>
    ): EventEmitter;

    RemoveDelegate(cb?: Callback<RemoveDelegate>): EventEmitter;
    RemoveDelegate(
      options?: EventOptions,
      cb?: Callback<RemoveDelegate>
    ): EventEmitter;

    ResetAllowance(cb?: Callback<ResetAllowance>): EventEmitter;
    ResetAllowance(
      options?: EventOptions,
      cb?: Callback<ResetAllowance>
    ): EventEmitter;

    SetAllowance(cb?: Callback<SetAllowance>): EventEmitter;
    SetAllowance(
      options?: EventOptions,
      cb?: Callback<SetAllowance>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AddDelegate", cb: Callback<AddDelegate>): void;
  once(
    event: "AddDelegate",
    options: EventOptions,
    cb: Callback<AddDelegate>
  ): void;

  once(event: "DeleteAllowance", cb: Callback<DeleteAllowance>): void;
  once(
    event: "DeleteAllowance",
    options: EventOptions,
    cb: Callback<DeleteAllowance>
  ): void;

  once(
    event: "ExecuteAllowanceTransfer",
    cb: Callback<ExecuteAllowanceTransfer>
  ): void;
  once(
    event: "ExecuteAllowanceTransfer",
    options: EventOptions,
    cb: Callback<ExecuteAllowanceTransfer>
  ): void;

  once(event: "PayAllowanceTransfer", cb: Callback<PayAllowanceTransfer>): void;
  once(
    event: "PayAllowanceTransfer",
    options: EventOptions,
    cb: Callback<PayAllowanceTransfer>
  ): void;

  once(event: "RemoveDelegate", cb: Callback<RemoveDelegate>): void;
  once(
    event: "RemoveDelegate",
    options: EventOptions,
    cb: Callback<RemoveDelegate>
  ): void;

  once(event: "ResetAllowance", cb: Callback<ResetAllowance>): void;
  once(
    event: "ResetAllowance",
    options: EventOptions,
    cb: Callback<ResetAllowance>
  ): void;

  once(event: "SetAllowance", cb: Callback<SetAllowance>): void;
  once(
    event: "SetAllowance",
    options: EventOptions,
    cb: Callback<SetAllowance>
  ): void;
}
