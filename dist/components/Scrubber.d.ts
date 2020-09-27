/// <reference types="react" />
import * as React from "react";
import { KeybindingProps, LocaleProps, StreamScrubber } from "../interfaces";
export interface ScrubberProps extends KeybindingProps, LocaleProps, React.ClassAttributes<Scrubber> {
    scrubber: StreamScrubber;
    swapPlayers?: () => void;
    isSwapped?: boolean;
    isFullscreen?: boolean;
    isFullscreenAvailable?: boolean;
    fullscreenError?: boolean;
    onClickFullscreen?: () => void;
    onClickMinimize?: () => void;
    isRevealingCards?: boolean;
    canRevealCards?: boolean;
    onClickHideCards?: () => void;
    onClickRevealCards?: () => void;
    isLogVisible?: boolean;
    toggleLog?: () => void;
    onSelectLocale?: (locale: string, loaded?: () => void) => void;
    replayBlob?: Blob;
    replayFilename?: string;
}
export interface ScrubberState {
    playing?: boolean;
    canInteract?: boolean;
    canRewind?: boolean;
    canPlay?: boolean;
    speed?: number;
    duration?: number;
    currentTime?: number;
    isShowingSettings?: boolean;
}
export default class Scrubber extends React.Component<ScrubberProps, ScrubberState> {
    private static SPEEDS;
    constructor(props: ScrubberProps);
    componentDidMount(): void;
    componentWillUpdate(nextProps: ScrubberProps, nextState: ScrubberState): void;
    componentDidUpdate(prevProps: ScrubberProps, prevState: ScrubberState, prevContext: any): void;
    shouldComponentUpdate(nextProps: ScrubberProps, nextState: ScrubberState, nextContext: any): boolean;
    private updateListener;
    private registerListeners(props);
    private removeListeners(props);
    private onKeyDown(e);
    protected updateState(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    protected play(): void;
    protected pause(): void;
    protected rewind(): void;
    protected selectSpeed(speed: number): void;
    protected selectLocale(locale: string, loaded: () => void): void;
}
