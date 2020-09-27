import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
import MetaData from "../../MetaData";
export default class EnrichDescriptorMutator implements GameStateMutator {
    metaData: MetaData;
    constructor(metaData: MetaData);
    applyTo(state: GameState): GameState;
}
