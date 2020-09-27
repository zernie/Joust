/// <reference types="react" />
import * as React from "react";
import GameState from "../state/GameState";
export interface TurnProps extends React.ClassAttributes<Turn> {
    state?: GameState;
    mulligan?: boolean;
    totalDuration: number;
    duration: number;
    turnNumber?: number;
    invert?: boolean;
}
export default class Turn extends React.Component<TurnProps> {
    render(): JSX.Element;
}
