/// <reference types="react" />
import * as React from "react";
export interface LocaleSelectorProps extends React.ClassAttributes<LocaleSelector> {
    locale: string;
    selectLocale: (locale: string, loaded?: () => void) => void;
    disabled?: boolean;
}
export interface LocaleSelectorState {
    loading?: boolean;
}
export default class LocaleSelector extends React.Component<LocaleSelectorProps, LocaleSelectorState> {
    constructor(props: LocaleSelectorProps, context: any);
    protected changeLocale(e: any): void;
    render(): JSX.Element;
}
