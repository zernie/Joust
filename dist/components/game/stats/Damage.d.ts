/// <reference types="react" />
import * as React from "react";
export interface DamageProps extends React.ClassAttributes<Damage> {
    damage: number;
}
export default class Damage extends React.Component<DamageProps> {
    shouldComponentUpdate(nextProps: DamageProps): boolean;
    render(): JSX.Element;
}
