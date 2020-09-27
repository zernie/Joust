/// <reference types="react" />
import EntityList from "./EntityList";
import Entity from "../../Entity";
import Option from "../../Option";
import { EntityListProps } from "../../interfaces";
export interface FieldProps extends EntityListProps {
    buffedEntities?: number[];
}
export default class Field extends EntityList<FieldProps> {
    shouldComponentUpdate(nextProps: FieldProps, nextState: any): boolean;
    protected className(): string;
    protected renderEntity(entity: Entity, option: Option): JSX.Element;
}
