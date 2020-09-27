/// <reference types="react" />
import * as React from "react";
import { EntityInPlayProps, EntityInPlayState } from "../../interfaces";
declare abstract class EntityInPlay<P extends EntityInPlayProps> extends React.Component<P, EntityInPlayState> {
    private baseClassName;
    protected abstract jsx(): any;
    constructor(baseClassName: string, props: P, context?: any);
    protected playWithClick(): boolean;
    protected getClassNames(): string[];
    click(e: any): void;
    protected startHovering(e: any): void;
    protected stopHovering(e: any): void;
    render(): JSX.Element;
}
export default EntityInPlay;
