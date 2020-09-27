/// <reference types="react" />
import * as React from "react";
import { EntityListProps } from "../../interfaces";
import Entity from "../../Entity";
import Option from "../../Option";
declare abstract class EntityList<T extends EntityListProps> extends React.Component<T> {
    protected renderEntity(entity: Entity, option: Option, index?: number): JSX.Element;
    protected sort(entity: Entity): number;
    protected beforeRender(entities: number): void;
    protected abstract className(): string;
    render(): JSX.Element;
    shouldComponentUpdate(nextProps: EntityListProps, nextState: any): boolean;
}
export default EntityList;
