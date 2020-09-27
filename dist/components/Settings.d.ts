/// <reference types="react" />
import * as React from "react";
export interface SettingsProps extends React.ClassAttributes<Settings> {
    locale: string;
    onSelectLocale?: (locale: string, loaded?: () => void) => void;
    isLogVisible: boolean;
    replayBlob?: Blob;
    replayFilename?: string;
    onToggleLog: () => void;
    onClose?: () => void;
}
export default class Settings extends React.Component<SettingsProps> {
    protected downloadXML(): void;
    render(): JSX.Element;
}
