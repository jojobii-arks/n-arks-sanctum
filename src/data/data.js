import { readable } from 'svelte/store';
import rawData from '../data/ngs-augment-data-20220426.json';

class Augment {
	constructor(augObj) {
		for (let prop in augObj) {
			if (augObj[prop] === 0) {
				return;
			}
			this[prop] = augObj[prop];
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
	getById: id => out.data.filter(ele => ele.id === id)
};

export const augments = readable(out);
