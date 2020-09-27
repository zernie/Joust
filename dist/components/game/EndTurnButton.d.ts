/// <reference types="react" />
import * as React from "react";
import { OptionProps } from "../../interfaces";
import Player from "../../Player";
export interface EndTurnButtonProps extends OptionProps, React.ClassAttributes<EndTurnButton> {
    onlyOption?: boolean;
    currentPlayer: Player;
}
export default class EndTurnButton extends React.Component<EndTurnButtonProps> {
    endTurn(): void;
    render(): JSX.Element;
}
