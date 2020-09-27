/// <reference types="react" />
import * as React from "react";
export interface AttackProps extends React.ClassAttributes<Attack> {
    attack: number;
    default?: number;
}
export default class Attack extends React.Component<AttackProps> {
    render(): JSX.Element;
}
