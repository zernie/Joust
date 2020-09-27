/// <reference types="react" />
import * as React from "react";
export interface SpeedSelectorProps extends React.ClassAttributes<SpeedSelector> {
    speed: number;
    speeds: number[];
    selectSpeed: (speed: number) => void;
    disabled?: boolean;
}
export default class SpeedSelector extends React.Component<SpeedSelectorProps> {
    protected changeSpeed(e: any): void;
    shouldComponentUpdate(nextProps: SpeedSelectorProps, nextState: any): boolean;
    render(): JSX.Element;
}
