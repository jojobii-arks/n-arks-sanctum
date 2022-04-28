import { readable } from 'svelte/store';
import rawData from '../data/ngs-augment-data-20220426.json';
import _ from 'lodash';

class Augment {
	constructor(augObj) {
		this.effects = {};
		for (let prop in augObj) {
			if (augObj[prop]) {
				if (prop.includes('[meta]')) {
					let newProp = prop.replace('[meta]', '');
					this[newProp] = augObj[prop];
				} else {
					this.effects[prop] = augObj[prop];
				}
			}
		}
	}
}

let outArray = [];
let currentId = 1;
rawData.forEach( element => {
	let aug = new Augment(element);
	aug.id = currentId++;
	outArray.push(aug)
	}
);

const out = {
	data: outArray,
	getById: id => out.data.find(ele => ele.id === id),
	getEffectIconPath: augObj => './src/assets/icons/effect/' + _.kebabCase(augObj) + '.svg',
	effectValueFormat: function (name, value) {
		if (name === 'expGrind') {
			return value;
		}
		if (['statHP', 'statPP'].includes(name)) {
			return (value > 0 ? '+' : '') + value;
		} else {
			return (value > 0 ? '+' : '') + value * 1000 / 10 + '%';
		}
	}
};

export const augments = readable(out);
