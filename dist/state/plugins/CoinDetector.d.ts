import GameStateTrackerPlugin from "../GameStateTrackerPlugin";
import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
export default class CoinDetector extends GameStateTrackerPlugin {
    onBeforeMutate(mutator: GameStateMutator, state: GameState): void | GameState;
    private isCoin(potentialCoin, state);
}
