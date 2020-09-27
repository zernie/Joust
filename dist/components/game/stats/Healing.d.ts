/// <reference types="react" />
import * as React from "react";
export interface HealingProps extends React.ClassAttributes<Healing> {
    healing: number;
}
export default class Healing extends React.Component<HealingProps> {
    shouldComponentUpdate(nextProps: HealingProps): boolean;
    render(): JSX.Element;
}
