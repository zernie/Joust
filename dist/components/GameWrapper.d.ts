/// <reference types="react" />
import Entity from "../Entity";
import * as React from "react";
import { AssetDirectoryProps, CardArtDirectory, CardDataProps, CardOracleProps, HideCardsProps, InteractiveBackend, MulliganOracleProps, StripBattletagsProps } from "../interfaces";
import GameState from "../state/GameState";
import { CardType } from "../enums";
export interface GameWrapperProps extends CardDataProps, CardOracleProps, MulliganOracleProps, AssetDirectoryProps, CardArtDirectory, HideCardsProps, StripBattletagsProps, React.ClassAttributes<GameWrapper> {
    state: GameState;
    interaction?: InteractiveBackend;
    swapPlayers?: boolean;
    hasStarted?: boolean;
    loadingError?: boolean;
    playerNames?: string[] | null;
}
export interface GameWrapperState {
    warnAboutBrowser?: boolean;
}
export default class GameWrapper extends React.Component<GameWrapperProps, GameWrapperState> {
    constructor(props: GameWrapperProps, context: any);
    render(): JSX.Element;
    private renderLoadingScreen(players?);
    static filterByCardType(cardType: CardType): (entity: Entity) => boolean;
}
