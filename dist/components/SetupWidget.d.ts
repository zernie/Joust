/// <reference types="react" />
import * as React from "react";
import { InteractiveBackend, MulliganOracle } from "../interfaces";
import GameStateScrubber from "../state/GameStateScrubber";
import GameStateSink from "../state/GameStateSink";
import { CardOracle } from "../interfaces";
export interface SetupWidgetProps extends React.ClassAttributes<SetupWidget> {
    defaultHostname: string;
    defaultPort: number;
    autoloadReplay?: string;
    onSetup: (sink: GameStateSink, replayBlob?: Blob, replayFilename?: string, interaction?: InteractiveBackend, scrubber?: GameStateScrubber, cardOracle?: CardOracle, mulliganOracle?: MulliganOracle) => void;
}
export interface SetupWidgetState {
    working?: boolean;
    hostname?: string;
    port?: number;
    websocket?: boolean;
    secureWebsocket?: boolean;
}
export default class SetupWidget extends React.Component<SetupWidgetProps, SetupWidgetState> {
    private forceWebsocket;
    constructor(props: SetupWidgetProps);
    componentDidMount(): void;
    render(): JSX.Element;
    protected onChangeHostname(e: any): void;
    protected onChangePort(e: any): void;
    protected onChangeWebsocket(e: any): void;
    protected onChangeSecureWebsocket(e: any): void;
    protected onSelectFile(e: any): void;
    protected preloadReplay(file: string): void;
    protected loadFile(file: any): void;
    protected onSubmitKettle(e: any): void;
}
