/// <reference types="react" />
import * as React from "react";
export interface TooltipperProps extends React.ClassAttributes<Tooltipper> {
    title?: string;
    align?: "left" | "center" | "right";
    desktop?: string;
    mobile?: string;
    forceShow?: boolean;
}
export interface TooltipperState {
    isHovering?: boolean;
    mobile?: boolean;
}
export default class Tooltipper extends React.Component<TooltipperProps, TooltipperState> {
    constructor(props: TooltipperProps, context: any);
    protected readonly mobile: boolean;
    protected readonly desktop: boolean;
    protected readonly tooltip: string;
    protected startHovering(e: any): void;
    protected stopHovering(e: any): void;
    shouldShow(): boolean;
    render(): JSX.Element;
}
