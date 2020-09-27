/// <reference types="node" />
import * as Stream from "stream";
export default class TexturePreloader extends Stream.Writable {
    cardArt: (cardId: string) => string;
    assets: (asset: string) => string;
    protected fired: {};
    protected cardArtQueue: string[];
    protected images: HTMLImageElement[];
    private working;
    protected assetQueue: string[];
    constructor(cardArt?: (cardId: string) => string, assets?: (asset: string) => string);
    _write(chunk: any, encoding: string, callback: Function): void;
    consume(): void;
    canPreload(): boolean;
    isDone(): boolean;
}
