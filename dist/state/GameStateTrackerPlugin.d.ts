import GameStateMutator from "./GameStateMutator";
import GameState from "./GameState";
declare abstract class GameStateTrackerPlugin {
    onBeforeMutate(mutator: GameStateMutator, state: GameState): void | GameState;
    onAfterMutate(mutator: GameStateMutator, state: GameState): void | GameState;
}
export default GameStateTrackerPlugin;
