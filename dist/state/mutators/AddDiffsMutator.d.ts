import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
import { GameStateDiff } from "../../interfaces";
export default class AddDiffsMutator implements GameStateMutator {
    diffs: GameStateDiff[];
    constructor(diffs: GameStateDiff[]);
    applyTo(state: GameState): GameState;
}
