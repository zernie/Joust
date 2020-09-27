/// <reference types="react" />
import { EntityInPlayProps } from "../../interfaces";
import EntityInPlay from "./EntityInPlay";
export default class Weapon extends EntityInPlay<EntityInPlayProps> {
    constructor(props: EntityInPlayProps, context?: any);
    jsx(): JSX.Element[];
}
