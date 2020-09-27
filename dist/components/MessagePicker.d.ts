/// <reference types="react" />
import * as React from "react";
export interface MessagePickerProps extends React.ClassAttributes<MessagePicker> {
    messages: string[];
    interval: number;
    random?: boolean;
}
export interface MessagePickerState {
    message?: number;
    sequence?: number[];
}
export default class MessagePicker extends React.Component<MessagePickerProps, MessagePickerState> {
    private interval;
    constructor(props: MessagePickerProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: MessagePickerProps): void;
    componentWillUnmount(): void;
    private scheduleUpdates();
    render(): JSX.Element;
    private generateSequence();
    private cycleMessage();
}
