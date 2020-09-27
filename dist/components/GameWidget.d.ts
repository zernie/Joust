/// <reference types="react" />
import * as React from "react";
import { AssetDirectoryProps, CardArtDirectory, CardOracle, EventHandlerProps, InteractiveBackend, KeybindingProps, LocaleProps, MulliganOracle, StreamScrubber, StripBattletagsProps } from "../interfaces";
import GameState from "../state/GameState";
import * as Immutable from "immutable";
import GameStateSink from "../state/GameStateSink";
import { CardData } from "hearthstonejson-client";
export interface GameWidgetProps extends AssetDirectoryProps, CardArtDirectory, EventHandlerProps, LocaleProps, KeybindingProps, StripBattletagsProps, React.ClassAttributes<GameWidget> {
    sink: GameStateSink;
    startupTime: number;
    interaction?: InteractiveBackend;
    scrubber?: StreamScrubber;
    getImageURL?: (cardId: string) => string;
    exitGame?: () => void;
    cardOracle?: CardOracle;
    mulliganOracle?: MulliganOracle;
    width?: any;
    height?: any;
    debug?: boolean;
    logger?: (error: Error) => void;
    startRevealed?: boolean;
    onToggleReveal?: (reveal: boolean) => void;
    startSwapped?: boolean;
    onToggleSwap?: (swap: boolean) => void;
    onFullscreen?: (fullscreen: boolean) => void;
    onReady?: () => void;
    playerNames?: string[];
    selectLocale?: (locale: string, loaded?: () => void) => void;
    loadingError?: boolean;
    replayBlob?: Blob;
    replayFilename?: string;
}
export interface State {
    gameState: GameState;
    swapPlayers: boolean;
    isFullscreen: boolean;
    isFullscreenAvailable: boolean;
    fullscreenError: boolean;
    cardOracle: Immutable.Map<number, string>;
    mulliganOracle: Immutable.Map<number, boolean>;
    cards: null | Immutable.Map<string, CardData>;
    cardsByDbfId: null | Immutable.Map<number, CardData>;
    isRevealingCards: boolean;
    isLogVisible: boolean;
    isLogMounted: boolean;
}
export default class GameWidget extends React.Component<GameWidgetProps, State> {
    private cb;
    private cardOracleCb;
    private mulliganOracleCb;
    private ref;
    private fullscreenErrorTimeout;
    private hasCheckedForSwap;
    private swapPlayers;
    constructor(props: GameWidgetProps, context?: any);
    componentDidMount(): void;
    private track(event, values, tags?);
    protected setGameState(gameState: GameState): void;
    private clearFullscreenErrorTimeout();
    componentWillUnmount(): void;
    protected onClickExit(e: any): void;
    protected onAttainFullscreen(): void;
    protected onReleaseFullscreen(): void;
    isFullscreenAvailable(): boolean;
    enterFullscreen(): void;
    exitFullscreen(): void;
    protected updateCardOracle(cards: Immutable.Map<number, string>): void;
    protected updateMulliganOracle(mulligans: Immutable.Map<number, boolean>): void;
    setCards(cards: CardData[]): void;
    protected triggerResize(): void;
    private checkForSwap();
    render(): React.ReactNode;
    shouldComponentUpdate(nextProps: Readonly<GameWidgetProps>, nextState: Readonly<State>, nextContext: any): boolean;
}
