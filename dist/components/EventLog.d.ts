/// <reference types="react" />
import * as React from "react";
import GameState from "../state/GameState";
import { CardDataProps, CardOracleProps, EventLogItemData, HistoryEntry, StripBattletagsProps } from "../interfaces";
export interface EventLogProps extends CardDataProps, CardOracleProps, StripBattletagsProps, React.ClassAttributes<EventLog> {
    state: GameState;
    tail: HistoryEntry;
    currentTime: number;
    isHidden?: boolean;
}
export interface EventLogState {
    lines: EventLogItemData[];
}
export default class EventLog extends React.Component<EventLogProps, EventLogState> {
    constructor(props: EventLogProps);
    shouldComponentUpdate(nextProps: EventLogProps, nextState: EventLogState): boolean;
    componentWillReceiveProps(nextProps: EventLogProps): void;
    private parseHistory(tail);
    private simplify(input);
    render(): JSX.Element;
    private analyzeGameStateDiff(prev, curr);
    private getTurn(prev, curr);
    private analyzeDescriptors(prev, curr);
    private analyzeDiffs(state);
    private getLine(diff);
    private getInPlayLine(diff, state, entity, lid);
    private getZoneChangeLine(diff, cardType);
    private getCardData(state, id);
    private setLidEntity(lid, state, id);
    private setLidTarget(lid, state, id);
    private setLidPlayer(lid, state, predicate);
    private newLogItemData(state, entityId?);
}
