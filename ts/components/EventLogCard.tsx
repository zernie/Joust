import * as React from "react";
import { CardDataProps } from "../interfaces";

export interface EventLogCardProps
	extends CardDataProps,
		React.ClassAttributes<EventLogCard> {
	cardId: string;
}

export default class EventLogCard extends React.Component<EventLogCardProps> {
	public shouldComponentUpdate(
		nextProps: EventLogCardProps,
		nextState: any,
	): boolean {
		return (
			this.props.cardId !== nextProps.cardId ||
			this.props.cards !== nextProps.cards
		);
	}

	public render(): JSX.Element {
		let description = "a card";
		const classNames = ["entity"];
		if (
			this.props.cards &&
			this.props.cardId &&
			this.props.cards.has(this.props.cardId)
		) {
			const card = this.props.cards.get(this.props.cardId);
			description = "[" + card.name + "]";
			if (card.type == "HERO" || card.type == "HERO_POWER") {
				classNames.push("special");
			} else if (card.rarity) {
				classNames.push(card.rarity.toString().toLowerCase());
			}
		}
		return <span className={classNames.join(" ")}>{description}</span>;
	}
}
