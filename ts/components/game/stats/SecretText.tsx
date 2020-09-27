import * as React from "react";

export interface SecretTextProps extends React.ClassAttributes<SecretText> {
	text: string;
	title?: string;
}

export default class SecretText extends React.Component<SecretTextProps> {
	public render(): JSX.Element {
		return (
			<div className={"secret-text"} title={this.props.title}>
				{this.props.text}
			</div>
		);
	}
}
