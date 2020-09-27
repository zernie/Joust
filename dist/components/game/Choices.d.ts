/// <reference types="react" />
import * as Immutable from "immutable";
import EntityList from "./EntityList";
import Entity from "../../Entity";
import Option from "../../Option";
import { EntityListProps, MulliganOracleProps } from "../../interfaces";
import Choice from "../../Choice";
export interface ChoicesProps extends EntityListProps, MulliganOracleProps {
    isMulligan: boolean;
    choices: Immutable.Map<number, Choice>;
}
export default class Choices extends EntityList<ChoicesProps> {
    protected className(): string;
    protected sort(entity: Entity): number;
    private lookup(id);
    protected renderEntity(entity: Entity, option: Option, index?: number): JSX.Element;
}
