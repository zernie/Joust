/// <reference types="react" />
import * as Immutable from "immutable";
import EntityList from "./EntityList";
import Entity from "../../Entity";
import Option from "../../Option";
import { EntityListProps } from "../../interfaces";
export interface HandProps extends EntityListProps {
    setAside?: Immutable.Iterable<number, Entity>;
}
export default class Hand extends EntityList<HandProps> {
    shouldComponentUpdate(nextProps: HandProps, nextState: any): boolean;
    protected className(): string;
    protected renderEntity(entity: Entity, option: Option, index?: number): JSX.Element;
}
