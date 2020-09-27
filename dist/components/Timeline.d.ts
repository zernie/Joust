/// <reference types="react" />
import * as React from "react";
import * as Immutable from "immutable";
import { StreamScrubberInhibitor } from "../interfaces";
import GameState from "../state/GameState";
export interface TimelineProps extends React.ClassAttributes<Timeline> {
    at: number;
    duration: number;
    seek: (time: number) => void;
    turnMap?: Immutable.Map<number, GameState>;
    disabled?: boolean;
    swapPlayers?: boolean;
}
export interface TimelineState {
    isDragging?: boolean;
}
export default class Timeline extends React.Component<TimelineProps, TimelineState> implements StreamScrubberInhibitor {
    private ref;
    private mouseMove;
    private mouseUp;
    private touchMove;
    private touchEnd;
    constructor(props: TimelineProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected onMouseDown(e: any): void;
    protected onMouseMove(e: any): void;
    protected onMouseUp(e: any): void;
    protected onTouchStart(e: any): void;
    protected onTouchMove(e: any): void;
    protected seek(x: number): void;
    render(): JSX.Element;
    isInhibiting(): boolean;
}
