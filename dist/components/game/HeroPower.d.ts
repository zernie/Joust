/// <reference types="react" />
import { EntityInPlayProps } from "../../interfaces";
import EntityInPlay from "./EntityInPlay";
export interface HeroPowerProps extends EntityInPlayProps {
    activated?: boolean;
}
export default class HeroPower extends EntityInPlay<HeroPowerProps> {
    constructor(props: HeroPowerProps, context?: any);
    protected playWithClick(): boolean;
    protected getClassNames(): string[];
    protected jsx(): JSX.Element[];
}
