/// <reference types="react" />
import * as React from "react";
import GameWidget from "./GameWidget";
import { CardData } from "hearthstonejson-client";
import { CardOracle, InteractiveBackend, MulliganOracle } from "../interfaces";
import GameStateSink from "../state/GameStateSink";
import GameStateScrubber from "../state/GameStateScrubber";
export declare const enum Widget {
    SETUP = 0,
    GAME = 1,
}
export interface DebugState {
    currentWidget?: Widget;
    cards?: CardData[];
    sink?: GameStateSink;
    scrubber?: GameStateScrubber;
    interaction?: InteractiveBackend;
    cardOracle?: CardOracle;
    mulliganOracle?: MulliganOracle;
    locale?: string;
    replayBlob?: Blob;
    replayFilename?: string;
}
export interface DebugProps extends React.ClassAttributes<DebugApplication> {
    replay?: string;
}
export default class DebugApplication extends React.Component<DebugProps, DebugState> {
    private gameWidget;
    private hsjson;
    constructor(props: DebugProps);
    componentDidMount(): void;
    render(): JSX.Element;
    onMountGameWidget(widget: GameWidget): void;
    componentDidUpdate(prevProps: any, prevState: DebugState): void;
    protected onSetup(sink: GameStateSink, replayBlob: Blob, replayFilename: string, interaction?: InteractiveBackend, scrubber?: GameStateScrubber, cardOracle?: CardOracle, mulliganOracle?: MulliganOracle): void;
    protected loadLocale(locale: string, cb?: () => void): void;
    protected exitGame(): void;
}
