import * as Immutable from "immutable";
import Entity from "../../Entity";
import GameState from "../GameState";
import GameStateMutator from "../GameStateMutator";
import Option from "../../Option";
export default class SetOptionsMutator implements GameStateMutator {
    options: Immutable.Map<number, Option>;
    constructor(options: Immutable.Map<number, Option>);
    applyTo(state: GameState): GameState;
    protected buildOptionTree(options: Immutable.Map<number, Option>, entities: Immutable.Map<number, Entity>): Immutable.Map<number, Immutable.Map<number, Immutable.Map<number, Option>>>;
}
