import * as React from "react";

export interface DurabilityProps extends React.ClassAttributes<Durability> {
	durability: number;
	damage: number;
	default?: number;
}

export default class Durability extends React.Component<DurabilityProps> {
	public render(): JSX.Element {
		const classNames = ["durability"];
		if (this.props.damage > 0) {
			classNames.push("negative");
		} else if (
			this.props.default !== null &&
			this.props.durability > this.props.default
		) {
			classNames.push("positive");
		}
		return (
			<div className={classNames.join(" ")}>
				{this.props.durability - this.props.damage}
			</div>
		);
	}
}
