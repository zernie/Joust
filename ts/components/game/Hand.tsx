import * as React from "react";
import * as Immutable from "immutable";
import EntityList from "./EntityList";
import Entity from "../../Entity";
import Option from "../../Option";
import Card from "./Card";
import { EntityListProps } from "../../interfaces";

export interface HandProps extends EntityListProps {
	setAside?: Immutable.Iterable<number, Entity>;
}

export default class Hand extends EntityList<HandProps> {
	public shouldComponentUpdate(nextProps: HandProps, nextState) {
		return (
			this.props.setAside !== nextProps.setAside ||
			super.shouldComponentUpdate(nextProps, nextState)
		);
	}

	protected className(): string {
		return "hand";
	}

	protected renderEntity(entity: Entity, option: Option, index?: number) {
		const style = {};

		let wasHidden = false;

		let customHealth;
		let customAtk;
		let customCost;

		if (this.props.hideCards) {
			entity = new Entity(entity.id, entity.getTags());
		} else if (
			!entity.cardId &&
			this.props.cardOracle &&
			this.props.cardOracle.has(+entity.id)
		) {
			const cardId = this.props.cardOracle.get(entity.id);
			entity = new Entity(entity.id, entity.getTags(), cardId);
			if (cardId === "OG_280") {
				const proxyId = this.props.cardOracle.findKey(
					(x) => x === "OG_279",
				);
				const proxy = proxyId && this.props.setAside.get(proxyId);
				if (proxy) {
					customHealth = proxy.getHealth();
					customAtk = proxy.getAtk();
				}
			}
			wasHidden = true;
		}

		return (
			<Card
				entity={entity}
				option={option}
				style={style}
				optionCallback={this.props.optionCallback}
				assetDirectory={this.props.assetDirectory}
				cards={this.props.cards}
				isHidden={wasHidden}
				controller={this.props.controller}
				cardArtDirectory={this.props.cardArtDirectory}
				customHealth={customHealth}
				customAtk={customAtk}
				customCost={customCost}
				setAside={this.props.setAside}
			/>
		);
	}
}
