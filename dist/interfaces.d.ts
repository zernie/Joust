/// <reference types="node" />
import * as React from "react";
import Entity from "./Entity";
import Option from "./Option";
import GameState from "./state/GameState";
import { EventEmitter } from "events";
import GameStateHistory from "./state/GameStateHistory";
import Player from "./Player";
import GameStateDescriptor from "./state/GameStateDescriptor";
import * as Immutable from "immutable";
import { CardData } from "hearthstonejson-client";
export interface EntityInPlayProps extends EntityProps, OptionProps, GameStateDescriptorStackProps, React.ClassAttributes<any> {
    isTarget?: boolean;
}
export interface EntityInPlayState {
    isHovering?: boolean;
}
export interface EntityListProps extends OptionCallbackProps, ControllerProps, CardDataProps, CardOracleProps, AssetDirectoryProps, CardArtDirectory, GameStateDescriptorStackProps, HideCardsProps, React.ClassAttributes<any> {
    entities: Immutable.Iterable<number, Entity>;
    options?: Immutable.Iterable<number, Option>;
    isTop?: boolean;
}
export interface ControllerProps {
    controller?: Player;
}
export interface EntityProps extends CardDataProps, ControllerProps, AssetDirectoryProps, CardArtDirectory {
    entity: Entity;
    damage?: number;
    healing?: number;
    buffed?: boolean;
}
export interface OptionCallbackProps {
    optionCallback?(option: Option, target?: number, position?: number): void;
}
export interface OptionProps extends OptionCallbackProps {
    option?: Option;
}
export interface JoustClient {
    isInteractive(): boolean;
}
export interface ActionHandler {
    sendOption(option: Option): void;
}
export interface KettleClient extends EventEmitter {
    connect(): void;
    disconnect(): void;
    write(buffer: Buffer): void;
}
export interface InteractiveBackend {
    startGame(): void;
    sendOption(option: Option, target?: number, position?: number): void;
    chooseEntities(entities: Entity[]): void;
    exitGame(): void;
}
export interface StreamScrubber extends EventEmitter {
    play(): void;
    pausePlayback(): void;
    toggle(): void;
    setSpeed(speed: number): void;
    seek(time: number): void;
    isPlaying(): boolean;
    isPlaybackPaused(): boolean;
    canInteract(): boolean;
    canRewind(): boolean;
    rewind(): void;
    fastForward(): void;
    getCurrentTime(): number;
    getCurrentTurn(): number;
    getSpeed(): number;
    canPlay(): boolean;
    getHistory(): GameStateHistory;
    getDuration(): number;
    setInhibitor(inhibitor: StreamScrubberInhibitor): void;
    nextTurn(): void;
    previousTurn(): void;
    skipBack(): void;
    nextAction(): void;
    previousAction(): void;
    hasEnded(): boolean;
}
export interface CardDataProps {
    cards?: Immutable.Map<string, CardData>;
    cardsByDbfId?: Immutable.Map<number, CardData>;
}
export interface CardOracleProps {
    cardOracle?: Immutable.Map<number, string>;
}
export interface MulliganOracleProps {
    mulliganOracle?: Immutable.Map<number, boolean>;
}
export interface CardOracle extends EventEmitter {
    getCardMap(): Immutable.Map<number, string>;
}
export interface MulliganOracle extends EventEmitter {
    getMulligans(): Immutable.Map<number, boolean>;
}
export interface AssetDirectoryProps {
    assetDirectory: (asset: string) => string;
}
export interface CardArtDirectory {
    cardArtDirectory: (cardId: string) => string;
}
export interface QueryCardMetadata {
    (build: number, cb: (cards: CardData[]) => void): void;
}
export interface LocaleProps {
    locale?: string;
}
export interface KeybindingProps {
    enableKeybindings?: boolean;
}
export interface StripBattletagsProps {
    stripBattletags?: boolean;
}
export interface StreamScrubberInhibitor {
    isInhibiting: () => boolean;
}
export interface RankProps extends AssetDirectoryProps, CardArtDirectory, React.ClassAttributes<any> {
    rank?: number;
    legendRank?: number;
}
export interface GameStateDescriptorStackProps {
    descriptors?: Immutable.Stack<GameStateDescriptor>;
}
export interface HideCardsProps {
    hideCards?: boolean;
}
export interface JoustEventHandler {
    (event: string, values: Object, tags?: Object): void;
}
export interface EventHandlerProps {
    events?: JoustEventHandler;
}
export interface HistoryEntry {
    state: GameState;
    next?: HistoryEntry;
    prev?: HistoryEntry;
}
export interface GameStateDiff {
    tag: number;
    entity: number;
    previous: number;
    current: number;
}
export interface EventLogItemData {
    type: LineType;
    time?: number;
    entityId?: number;
    targetId?: number;
    player?: string;
    data?: number;
    data2?: number;
    indent?: boolean;
}
export declare const enum LineType {
    Turn = 1,
    Draw = 2,
    Play = 3,
    Summon = 4,
    ArmorBuff = 5,
    AttackBuff = 6,
    HealthBuff = 7,
    AttackReduce = 8,
    HealthReduce = 9,
    Attack = 10,
    Death = 11,
    Get = 12,
    Trigger = 13,
    Damage = 14,
    Healing = 15,
    Remove = 16,
    Mulligan = 17,
    DivineShield = 18,
    Taunt = 19,
    CantBeDamaged = 20,
    Windfury = 21,
    Silenced = 22,
    Charge = 23,
    Frozen = 24,
    Stealth = 25,
    Concede = 26,
    Win = 27,
    Replace = 28,
    StatsBuff = 29,
    Cthun = 30,
    Discard = 31,
    GetToDeck = 32,
    DiscardFromDeck = 33,
    Steal = 34,
    DeckToPlay = 35,
    PlayToDeck = 36,
    PlayToHand = 37,
    Weapon = 38,
    TurnEnd = 39,
}
