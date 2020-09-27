/// <reference types="react" />
import * as React from "react";
export interface DurabilityProps extends React.ClassAttributes<Durability> {
    durability: number;
    damage: number;
    default?: number;
}
export default class Durability extends React.Component<DurabilityProps> {
    render(): JSX.Element;
}
