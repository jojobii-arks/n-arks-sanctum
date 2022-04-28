import { writable } from "svelte/store";

function GearHandler (type, name) {
		let funcs = writable();
		for (let func in funcs) {
			this[func] = funcs[func];
		}
		this.type = type;
		this.name = name;
		this.augments = [];
		if (type === 'unit') {
			this.icon = './src/assets/icons/unit.svg';
		} else {
			this.icon = './src/assets/icons/weapon.svg';
		}
	}



export let gear = new GearHandler('unit', 'Unit Name');
