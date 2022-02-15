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

export interface SevenDotsMetadataInterface extends utils.Interface {
  contractName: "SevenDotsMetadata";
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "OWNER_ROLE()": FunctionFragment;
    "addCols(uint256,uint256)": FunctionFragment;
    "calcAttributes(bytes32)": FunctionFragment;
    "calcSvg(bytes32)": FunctionFragment;
    "countDots(bytes32)": FunctionFragment;
    "decode(bytes32)": FunctionFragment;
    "encode(uint256[7])": FunctionFragment;
    "getColDots(uint256,uint256)": FunctionFragment;
    "getColor(uint256,uint256)": FunctionFragment;
    "getDots(bytes32)": FunctionFragment;
    "getLength(uint256)": FunctionFragment;
    "getRarityPoints(bytes32)": FunctionFragment;
    "getRect(uint256,uint256,uint256)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize()": FunctionFragment;
    "merge(bytes32,bytes32)": FunctionFragment;
    "mergeDna(uint256[7],uint256[7])": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
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
    functionFragment: "addCols",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calcAttributes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "calcSvg", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "countDots",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "decode", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "encode",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getColDots",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getColor",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getDots", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getLength",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRarityPoints",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRect",
    values: [BigNumberish, BigNumberish, BigNumberish]
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
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "merge",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mergeDna",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
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
  decodeFunctionResult(functionFragment: "addCols", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calcAttributes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "calcSvg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "countDots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "encode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getColDots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getColor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRarityPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRect", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mergeDna", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
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
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
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

export interface SevenDotsMetadata extends BaseContract {
  contractName: "SevenDotsMetadata";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SevenDotsMetadataInterface;

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

    addCols(
      col1: BigNumberish,
      col2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calcAttributes(
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    calcSvg(seed: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    countDots(seed: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    decode(seed: BytesLike, overrides?: CallOverrides): Promise<[BigNumber[]]>;

    encode(dna: BigNumberish[], overrides?: CallOverrides): Promise<[string]>;

    getColDots(
      col: BigNumberish,
      col_i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getColor(
      col: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getDots(seed: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getLength(
      col: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRarityPoints(
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRect(
      x: BigNumberish,
      y: BigNumberish,
      c: BigNumberish,
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
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    merge(
      b1: BytesLike,
      b2: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    mergeDna(
      dna1: BigNumberish[],
      dna2: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

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

  addCols(
    col1: BigNumberish,
    col2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcAttributes(seed: BytesLike, overrides?: CallOverrides): Promise<string>;

  calcSvg(seed: BytesLike, overrides?: CallOverrides): Promise<string>;

  countDots(seed: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  decode(seed: BytesLike, overrides?: CallOverrides): Promise<BigNumber[]>;

  encode(dna: BigNumberish[], overrides?: CallOverrides): Promise<string>;

  getColDots(
    col: BigNumberish,
    col_i: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getColor(
    col: BigNumberish,
    i: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDots(seed: BytesLike, overrides?: CallOverrides): Promise<string>;

  getLength(col: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getRarityPoints(
    seed: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRect(
    x: BigNumberish,
    y: BigNumberish,
    c: BigNumberish,
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  merge(
    b1: BytesLike,
    b2: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  mergeDna(
    dna1: BigNumberish[],
    dna2: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

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

    addCols(
      col1: BigNumberish,
      col2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcAttributes(seed: BytesLike, overrides?: CallOverrides): Promise<string>;

    calcSvg(seed: BytesLike, overrides?: CallOverrides): Promise<string>;

    countDots(seed: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    decode(seed: BytesLike, overrides?: CallOverrides): Promise<BigNumber[]>;

    encode(dna: BigNumberish[], overrides?: CallOverrides): Promise<string>;

    getColDots(
      col: BigNumberish,
      col_i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getColor(
      col: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDots(seed: BytesLike, overrides?: CallOverrides): Promise<string>;

    getLength(col: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getRarityPoints(
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRect(
      x: BigNumberish,
      y: BigNumberish,
      c: BigNumberish,
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

    initialize(overrides?: CallOverrides): Promise<void>;

    merge(
      b1: BytesLike,
      b2: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    mergeDna(
      dna1: BigNumberish[],
      dna2: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

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

    addCols(
      col1: BigNumberish,
      col2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcAttributes(
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcSvg(seed: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    countDots(seed: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    decode(seed: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    encode(dna: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;

    getColDots(
      col: BigNumberish,
      col_i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getColor(
      col: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDots(seed: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getLength(col: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getRarityPoints(
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRect(
      x: BigNumberish,
      y: BigNumberish,
      c: BigNumberish,
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
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    merge(
      b1: BytesLike,
      b2: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mergeDna(
      dna1: BigNumberish[],
      dna2: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

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

    addCols(
      col1: BigNumberish,
      col2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcAttributes(
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcSvg(
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    countDots(
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decode(
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    encode(
      dna: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getColDots(
      col: BigNumberish,
      col_i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getColor(
      col: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDots(
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLength(
      col: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRarityPoints(
      seed: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRect(
      x: BigNumberish,
      y: BigNumberish,
      c: BigNumberish,
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
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    merge(
      b1: BytesLike,
      b2: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mergeDna(
      dna1: BigNumberish[],
      dna2: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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
