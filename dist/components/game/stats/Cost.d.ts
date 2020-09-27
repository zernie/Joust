/// <reference types="react" />
import * as React from "react";
export interface CostProps extends React.ClassAttributes<Cost> {
    cost: number;
    default?: number;
}
export default class Cost extends React.Component<CostProps> {
    render(): JSX.Element;
}
