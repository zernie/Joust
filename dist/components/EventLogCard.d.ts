/// <reference types="react" />
import * as React from "react";
import { CardDataProps } from "../interfaces";
export interface EventLogCardProps extends CardDataProps, React.ClassAttributes<EventLogCard> {
    cardId: string;
}
export default class EventLogCard extends React.Component<EventLogCardProps> {
    shouldComponentUpdate(nextProps: EventLogCardProps, nextState: any): boolean;
    render(): JSX.Element;
}
