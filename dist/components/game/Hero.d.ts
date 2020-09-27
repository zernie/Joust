/// <reference types="react" />
import * as Immutable from "immutable";
import EntityInPlay from "./EntityInPlay";
import { CardOracleProps, EntityInPlayProps } from "../../interfaces";
import Entity from "../../Entity";
export interface HeroProps extends EntityInPlayProps, CardOracleProps {
    secrets: Immutable.Map<number, Entity>;
}
export default class Hero extends EntityInPlay<HeroProps> {
    constructor(props: HeroProps, context?: any);
    protected jsx(): JSX.Element[];
}
