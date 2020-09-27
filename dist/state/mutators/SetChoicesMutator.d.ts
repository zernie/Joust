import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
import Choices from "../../Choices";
export default class SetChoicesMutator implements GameStateMutator {
    player: number;
    choices: Choices;
    constructor(player: number, choices: Choices);
    applyTo(state: GameState): GameState;
}
