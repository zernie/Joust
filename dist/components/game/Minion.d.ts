/// <reference types="react" />
import EntityInPlay from "./EntityInPlay";
import { EntityInPlayProps } from "../../interfaces";
export default class Minion extends EntityInPlay<EntityInPlayProps> {
    constructor(props: EntityInPlayProps, context?: any);
    jsx(): JSX.Element[];
}
