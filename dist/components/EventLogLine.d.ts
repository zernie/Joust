/// <reference types="react" />
import * as React from "react";
import { CardDataProps, CardOracleProps, EventLogItemData, StripBattletagsProps } from "../interfaces";
import { CardData } from "hearthstonejson-client";
export interface EventLogLineProps extends CardDataProps, CardOracleProps, EventLogItemData, StripBattletagsProps, React.ClassAttributes<EventLogLine> {
    inactive: boolean;
    first?: boolean;
}
export interface EventLogLineState {
    entityData?: CardData;
    targetData?: CardData;
}
export default class EventLogLine extends React.Component<EventLogLineProps, EventLogLineState> {
    constructor(props: EventLogLineProps);
    shouldComponentUpdate(nextProps: EventLogLineProps): boolean;
    componentWillReceiveProps(nextProps: EventLogLineProps): void;
    render(): JSX.Element;
    private indent();
    private parseLine(strings);
    private getStatusKeyword();
    private lookupEntity(id);
    private getPlayerName();
}
