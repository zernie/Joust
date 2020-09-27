/// <reference types="react" />
import * as React from "react";
export interface ArmorProps extends React.ClassAttributes<Armor> {
    armor: number;
}
export default class Armor extends React.Component<ArmorProps> {
    render(): JSX.Element;
}
