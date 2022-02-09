/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace SevenDotsAuctionHouse {
  export type AuctionStruct = {
    highestBid: BigNumberish;
    highestBidder: string;
    end: BigNumberish;
    seed: BytesLike;
    id: BigNumberish;
  };

  export type AuctionStructOutput = [
    BigNumber,
    string,
    number,
    string,
    number
  ] & {
    highestBid: BigNumber;
    highestBidder: string;
    end: number;
    seed: string;
    id: number;
  };
}

export interface SevenDotsAuctionHouseInterface extends utils.Interface {
  contractName: "SevenDotsAuctionHouse";
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "OWNER_ROLE()": FunctionFragment;
    "allAuctions()": FunctionFragment;
    "allAuctionsCount()": FunctionFragment;
    "bidOnAuction(uint24,uint256)": FunctionFragment;
    "buyNow(uint24)": FunctionFragment;
    "cleanAuction(uint24)": FunctionFragment;
    "closedAuctionCount()": FunctionFragment;
    "closedAuctions()": FunctionFragment;
    "createAuction()": FunctionFragment;
    "fillAuctions()": FunctionFragment;
    "freeAuctionSlots()": FunctionFragment;
    "generateColor(uint256)": FunctionFragment;
    "generateField(uint256)": FunctionFragment;
    "generateSeed(uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "mintNewToken(address)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "openAuctionCount()": FunctionFragment;
    "openAuctions()": FunctionFragment;
    "redeemAuction(uint24)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setWETH(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OWNER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allAuctions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allAuctionsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bidOnAuction",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyNow",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cleanAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closedAuctionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "closedAuctions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createAuction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fillAuctions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "freeAuctionSlots",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "generateColor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "generateField",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "generateSeed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mintNewToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "openAuctionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "openAuctions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "setWETH", values: [string]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OWNER_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allAuctionsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bidOnAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyNow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cleanAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closedAuctionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closedAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fillAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freeAuctionSlots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateColor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateField",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateSeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintNewToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openAuctionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setWETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Bid(uint256,address,uint256,address,address,uint256,uint256)": EventFragment;
    "Create(uint256,bytes32,address)": EventFragment;
    "End(uint256,bytes32,address,uint256,bytes32,address,uint256,uint256)": EventFragment;
    "Redeem(uint256,uint256,address,uint256,uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Bid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Create"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "End"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export type AdminChangedEvent = TypedEvent<
  [string, string],
  { previousAdmin: string; newAdmin: string }
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export type BeaconUpgradedEvent = TypedEvent<[string], { beacon: string }>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export type BidEvent = TypedEvent<
  [BigNumber, string, BigNumber, string, string, BigNumber, BigNumber],
  {
    _id: BigNumber;
    _oldHighestBidder: string;
    id: BigNumber;
    oldHighestBidder: string;
    highestBidder: string;
    highestBid: BigNumber;
    time: BigNumber;
  }
>;

export type BidEventFilter = TypedEventFilter<BidEvent>;

export type CreateEvent = TypedEvent<
  [BigNumber, string, string],
  { _id: BigNumber; seed: string; creator: string }
>;

export type CreateEventFilter = TypedEventFilter<CreateEvent>;

export type EndEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, string, string, BigNumber, BigNumber],
  {
    _id: BigNumber;
    _seed: string;
    _highestBidder: string;
    id: BigNumber;
    seed: string;
    highestBidder: string;
    highestBid: BigNumber;
    time: BigNumber;
  }
>;

export type EndEventFilter = TypedEventFilter<EndEvent>;

export type RedeemEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, BigNumber],
  {
    _id: BigNumber;
    id: BigNumber;
    highestBidder: string;
    highestBid: BigNumber;
    time: BigNumber;
  }
>;

export type RedeemEventFilter = TypedEventFilter<RedeemEvent>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export type UpgradedEvent = TypedEvent<[string], { implementation: string }>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface SevenDotsAuctionHouse extends BaseContract {
  contractName: "SevenDotsAuctionHouse";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SevenDotsAuctionHouseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    OWNER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    allAuctions(
      overrides?: CallOverrides
    ): Promise<[SevenDotsAuctionHouse.AuctionStructOutput[]]>;

    allAuctionsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    bidOnAuction(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyNow(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cleanAuction(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    closedAuctionCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    closedAuctions(
      overrides?: CallOverrides
    ): Promise<[SevenDotsAuctionHouse.AuctionStructOutput[]]>;

    createAuction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fillAuctions(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    freeAuctionSlots(overrides?: CallOverrides): Promise<[BigNumber]>;

    generateColor(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    generateField(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    generateSeed(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      _token: string,
      _rewardToken: string,
      _treasury: string,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintNewToken(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openAuctionCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    openAuctions(
      overrides?: CallOverrides
    ): Promise<[SevenDotsAuctionHouse.AuctionStructOutput[]]>;

    redeemAuction(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWETH(
      _weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  OWNER_ROLE(overrides?: CallOverrides): Promise<string>;

  allAuctions(
    overrides?: CallOverrides
  ): Promise<SevenDotsAuctionHouse.AuctionStructOutput[]>;

  allAuctionsCount(overrides?: CallOverrides): Promise<BigNumber>;

  bidOnAuction(
    auctionId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyNow(
    auctionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cleanAuction(
    auctionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  closedAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;

  closedAuctions(
    overrides?: CallOverrides
  ): Promise<SevenDotsAuctionHouse.AuctionStructOutput[]>;

  createAuction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fillAuctions(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  freeAuctionSlots(overrides?: CallOverrides): Promise<BigNumber>;

  generateColor(
    edition: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  generateField(
    edition: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  generateSeed(
    edition: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    _token: string,
    _rewardToken: string,
    _treasury: string,
    _metadata: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintNewToken(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;

  openAuctions(
    overrides?: CallOverrides
  ): Promise<SevenDotsAuctionHouse.AuctionStructOutput[]>;

  redeemAuction(
    auctionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWETH(
    _weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    OWNER_ROLE(overrides?: CallOverrides): Promise<string>;

    allAuctions(
      overrides?: CallOverrides
    ): Promise<SevenDotsAuctionHouse.AuctionStructOutput[]>;

    allAuctionsCount(overrides?: CallOverrides): Promise<BigNumber>;

    bidOnAuction(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buyNow(auctionId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    cleanAuction(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    closedAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;

    closedAuctions(
      overrides?: CallOverrides
    ): Promise<SevenDotsAuctionHouse.AuctionStructOutput[]>;

    createAuction(overrides?: CallOverrides): Promise<void>;

    fillAuctions(overrides?: CallOverrides): Promise<void>;

    freeAuctionSlots(overrides?: CallOverrides): Promise<BigNumber>;

    generateColor(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateField(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateSeed(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _token: string,
      _rewardToken: string,
      _treasury: string,
      _metadata: string,
      overrides?: CallOverrides
    ): Promise<void>;

    mintNewToken(to: string, overrides?: CallOverrides): Promise<void>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    openAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;

    openAuctions(
      overrides?: CallOverrides
    ): Promise<SevenDotsAuctionHouse.AuctionStructOutput[]>;

    redeemAuction(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setWETH(_weth: string, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    "Bid(uint256,address,uint256,address,address,uint256,uint256)"(
      _id?: BigNumberish | null,
      _oldHighestBidder?: string | null,
      id?: null,
      oldHighestBidder?: null,
      highestBidder?: null,
      highestBid?: null,
      time?: null
    ): BidEventFilter;
    Bid(
      _id?: BigNumberish | null,
      _oldHighestBidder?: string | null,
      id?: null,
      oldHighestBidder?: null,
      highestBidder?: null,
      highestBid?: null,
      time?: null
    ): BidEventFilter;

    "Create(uint256,bytes32,address)"(
      _id?: null,
      seed?: null,
      creator?: null
    ): CreateEventFilter;
    Create(_id?: null, seed?: null, creator?: null): CreateEventFilter;

    "End(uint256,bytes32,address,uint256,bytes32,address,uint256,uint256)"(
      _id?: BigNumberish | null,
      _seed?: BytesLike | null,
      _highestBidder?: string | null,
      id?: null,
      seed?: null,
      highestBidder?: null,
      highestBid?: null,
      time?: null
    ): EndEventFilter;
    End(
      _id?: BigNumberish | null,
      _seed?: BytesLike | null,
      _highestBidder?: string | null,
      id?: null,
      seed?: null,
      highestBidder?: null,
      highestBid?: null,
      time?: null
    ): EndEventFilter;

    "Redeem(uint256,uint256,address,uint256,uint256)"(
      _id?: BigNumberish | null,
      id?: null,
      highestBidder?: null,
      highestBid?: null,
      time?: null
    ): RedeemEventFilter;
    Redeem(
      _id?: BigNumberish | null,
      id?: null,
      highestBidder?: null,
      highestBid?: null,
      time?: null
    ): RedeemEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    OWNER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    allAuctions(overrides?: CallOverrides): Promise<BigNumber>;

    allAuctionsCount(overrides?: CallOverrides): Promise<BigNumber>;

    bidOnAuction(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyNow(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cleanAuction(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    closedAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;

    closedAuctions(overrides?: CallOverrides): Promise<BigNumber>;

    createAuction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fillAuctions(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    freeAuctionSlots(overrides?: CallOverrides): Promise<BigNumber>;

    generateColor(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateField(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateSeed(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _token: string,
      _rewardToken: string,
      _treasury: string,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintNewToken(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openAuctionCount(overrides?: CallOverrides): Promise<BigNumber>;

    openAuctions(overrides?: CallOverrides): Promise<BigNumber>;

    redeemAuction(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWETH(
      _weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    OWNER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allAuctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allAuctionsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bidOnAuction(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyNow(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cleanAuction(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    closedAuctionCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closedAuctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createAuction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fillAuctions(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    freeAuctionSlots(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    generateColor(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    generateField(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    generateSeed(
      edition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _token: string,
      _rewardToken: string,
      _treasury: string,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintNewToken(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openAuctionCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    openAuctions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemAuction(
      auctionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWETH(
      _weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
