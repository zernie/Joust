import Launcher from "./Launcher";
import { GameWidgetProps } from "./components/GameWidget";
export declare function renderHSReplay(target: string, url: string, opts?: GameWidgetProps): void;
export declare function launcher(target: string | HTMLElement): Launcher;
export declare function release(): string;
export declare function destroy(target: any): void;
