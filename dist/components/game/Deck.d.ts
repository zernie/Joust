/// <reference types="react" />
import EntityList from "./EntityList";
import { EntityListProps } from "../../interfaces";
export interface DeckProps extends EntityListProps {
    fatigue: number;
    hideFatigue?: boolean;
}
export default class Deck extends EntityList<DeckProps> {
    protected className(): string;
    render(): JSX.Element;
    shouldComponentUpdate(nextProps: DeckProps, nextState: any): boolean;
}
