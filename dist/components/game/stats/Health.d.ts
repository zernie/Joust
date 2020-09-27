/// <reference types="react" />
import * as React from "react";
export interface HealthProps extends React.ClassAttributes<Health> {
    health: number;
    damage: number;
    default?: number;
}
export default class Health extends React.Component<HealthProps> {
    render(): JSX.Element;
}
