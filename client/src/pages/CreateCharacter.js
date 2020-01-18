import React, { Component } from 'react';
import axios from 'axios';
import './createcharacter.css'



class CreateCharacter extends Component {
	state = {
		id: '',
		name: "",
		class: "",
		race: "",
		age: "",
		level: "",

		stats: {
			str: "",
			dex: "",
			con: "",
			int: "",
			wis: "",
			cha: "",
		}, 

		// skills: {
		// 	acrobatics: this.state.skills.acrobatics,
		// 	animal: this.state.skills.animal,
		// 	arcana: this.state.skills.arcana,
		// 	athletics: this.state.skills.athletics,
		// 	deception: this.state.skills.deception,
		// 	history: this.state.skills.history,
		// 	insight: this.state.skills.insight,
		// 	intimidation: this.state.skills.intimidation,
		// 	investigation: this.state.skills.investigation,
		// 	medicine: this.state.skills.medicine,
		// 	nature: this.state.skills.nature,
		// 	perception: this.state.skills.perception,
		// 	performance: this.state.skills.performance,
		// 	persuasion: this.state.skills.persuasion,
		// 	religion: this.state.skills.religion,
		// 	sleight: this.state.skills.sleights,
		// 	stealth: this.state.skills.stealth,
		// 	survival: this.state.skills.survival,
		// },

		ac: "",
		initiative: "",
		speed: "",
		hp: "",
		// thp: this.state.thp,
		hitDice: ""

		// attacksSpellcasting: [{
		// 	name: this.state.attacksSpellcasting.name,
		// 	atk: this.state.attacksSpellcasting.atk,
		// 	dmgType: this.state.attacksSpellcasting.dmgType,
		// },
		// {
		// 	name: this.state.attacksSpellcasting.name,
		// 	atk: this.state.attacksSpellcasting.atk,
		// 	dmgType: this.state.attacksSpellcasting.dmgType,
		// },
		// {
		// 	name: this.state.attacksSpellcasting.name,
		// 	atk: this.state.attacksSpellcasting.atk,
		// 	dmgType: this.state.attacksSpellcasting.dmgType,
		// }],

		// money: {
		// 	platinum: this.state.money.platinum,
		// 	gold: this.state.money.gold,
		// 	electrum: this.state.money.electrum,
		// 	silver: this.state.money.silver,
		// 	copper: this.state.money.copper,
		// },

		// inventory: this.state.inventory,

		// characterNotes: {
		// 	traits: this.state.characterNotes.traits,
		// 	ideals: this.state.characterNotes.traits,
		// 	bonds: this.state.characterNotes.traits,
		// 	flaws: this.state.characterNotes.traits,
		// },

		// featsTraits: this.state.featsTraits
	}

	postDataHandler = (event) => {
		// this.props.passID();
		this.setState({name: this.state.name, class: this.state.class, race: this.state.race, level: this.state.level, stats: {str: this.state.stats.str, dex: this.state.stats.dex, con: this.state.stats.con, int: this.state.stats.int, wis: this.state.stats.wis, cha: this.state.stats.cha}, ac: this.state.ac, initiative: this.state.initiative, speed: this.state.speed, hp: this.state.hp, hitDice: this.state.hitDice});
		// this.setState({id: this.props.id});
		// console.log(this.state.id + " id passed");
		console.log("name: " + this.state.name);
		console.log("hit dice: " + this.state.hitDice);
		console.log("class: " + this.state.class);
		console.log("strength: " + this.state.stats.str);

		const data = {
			userID: this.props.id,
			name: this.state.name,
			class: this.state.class,
			race: this.state.race,
			age: this.state.age,
			level: this.state.level,

			stats: {
				str: this.state.stats.str,
				dex: this.state.stats.dex,
				con: this.state.stats.con,
				int: this.state.stats.int,
				wis: this.state.stats.wis,
				cha: this.state.stats.cha,
			}, 

			// skills: {
			// 	acrobatics: this.state.skills.acrobatics,
			// 	animal: this.state.skills.animal,
			// 	arcana: this.state.skills.arcana,
			// 	athletics: this.state.skills.athletics,
			// 	deception: this.state.skills.deception,
			// 	history: this.state.skills.history,
			// 	insight: this.state.skills.insight,
			// 	intimidation: this.state.skills.intimidation,
			// 	investigation: this.state.skills.investigation,
			// 	medicine: this.state.skills.medicine,
			// 	nature: this.state.skills.nature,
			// 	perception: this.state.skills.perception,
			// 	performance: this.state.skills.performance,
			// 	persuasion: this.state.skills.persuasion,
			// 	religion: this.state.skills.religion,
			// 	sleight: this.state.skills.sleights,
			// 	stealth: this.state.skills.stealth,
			// 	survival: this.state.skills.survival,
			// },

			ac: this.state.ac,
			initiative: this.state.initiative,
			speed: this.state.speed,
			hp: this.state.hp,
			// thp: this.state.thp,
			hitDice: this.state.hitDice

			// attacksSpellcasting: [{
			// 	name: this.state.attacksSpellcasting.name,
			// 	atk: this.state.attacksSpellcasting.atk,
			// 	dmgType: this.state.attacksSpellcasting.dmgType,
			// },
			// {
			// 	name: this.state.attacksSpellcasting.name,
			// 	atk: this.state.attacksSpellcasting.atk,
			// 	dmgType: this.state.attacksSpellcasting.dmgType,
			// },
			// {
			// 	name: this.state.attacksSpellcasting.name,
			// 	atk: this.state.attacksSpellcasting.atk,
			// 	dmgType: this.state.attacksSpellcasting.dmgType,
			// }],

			// money: {
			// 	platinum: this.state.money.platinum,
			// 	gold: this.state.money.gold,
			// 	electrum: this.state.money.electrum,
			// 	silver: this.state.money.silver,
			// 	copper: this.state.money.copper,
			// },

			// inventory: this.state.inventory,

			// characterNotes: {
			// 	traits: this.state.characterNotes.traits,
			// 	ideals: this.state.characterNotes.traits,
			// 	bonds: this.state.characterNotes.traits,
			// 	flaws: this.state.characterNotes.traits,
			// },

			// featsTraits: this.state.featsTraits
		}

		axios.post('http://localhost:3001/api/character/'+this.props.id, data)
			.then(response => {
				console.log(response);
			}).catch((err) => {
				console.log(err);
			})
	}

	render() {
		return (
			<form id="create-character">
				<h1>Create A New Character</h1>
				<section>
					<label>Character Name</label>
					<input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />

					<label>Class</label>
					<input type="text" value={this.state.class} onChange={(event) => this.setState({class: event.target.value})} />

					<label>Race</label>
					<input type="text" value={this.state.race} onChange={(event) => this.setState({race: event.target.value})} />

					<label>Age</label>
					<input type="text" value={this.state.age} onChange={(event) => this.setState({age: event.target.value})} />

					<label>Level</label>
					<input type="text" value={this.state.level} onChange={(event) => this.setState({level: event.target.value})} />
				</section>

				{/* Stats */}
				<section id="stats">
					<h4>Stats</h4>
					<label>Strength</label>
					<input type="text" value={this.state.str} onChange={(event) => this.setState({stats: {str: event.target.value}})} />

					<label>Dexterity</label>
					<input type="text" value={this.state.dex} onChange={(event) => this.setState({stats: {dex: event.target.value}})} />

					<label>Constitution</label>
					<input type="text" value={this.state.con} onChange={(event) => this.setState({stats: {con: event.target.value}})} />

					<label>Intelligence</label>
					<input type="text" value={this.state.int} onChange={(event) => this.setState({stats: {int: event.target.value}})} />

					<label>Wisdom</label>
					<input type="text" value={this.state.wis} onChange={(event) => this.setState({stats: {wis: event.target.value}})} />

					<label>Charisma</label>
					<input type="text" value={this.state.cha} onChange={(event) => this.setState({stats: {cha: event.target.value}})} />
				</section>

				{/* Skills */}
				{/* <section id="skills">
					<h4>Stats</h4>
				
					<label>Acrobatics (Dex)</label>
					<input type="radio" value={this.state.acrobatics} onChange={this.handleChange} />

					<label>Animal Handling (Wis)</label>
					<input type="radio" value={this.state.animal} onChange={this.handleChange} />

					<label>Arcana (Int)</label>
					<input type="radio" value={this.state.arcana} onChange={this.handleChange} />

					<label>Athletics (Str)</label>
					<input type="radio" value={this.state.race} onChange={this.handleChange} />

					<label>Deception (Cha)</label>
					<input type="radio" value={this.state.age} onChange={this.handleChange} />

					<label>History (Int)</label>
					<input type="radio" value={this.state.history} onChange={this.handleChange} />

					<label>Insight (Wis)</label>
					<input type="radio" value={this.state.insight} onChange={this.handleChange} />

					<label>Intimidation (Cha)</label>
					<input type="radio" value={this.state.intimidation} onChange={this.handleChange} />

					<label>Investigation (Int)</label>
					<input type="radio" value={this.state.investigation} onChange={this.handleChange} />

					<label>Medicine (Wis)</label>
					<input type="radio" value={this.state.medicine} onChange={this.handleChange} />

					<label>Nature (Int)</label>
					<input type="radio" value={this.state.nature} onChange={this.handleChange} />

					<label>Perception (Wis)</label>
					<input type="radio" value={this.state.perception} onChange={this.handleChange} />

					<label>Performance (Cha)</label>
					<input type="radio" value={this.state.performance} onChange={this.handleChange} />

					<label>Persuasion (Cha)</label>
					<input type="radio" value={this.state.persuasion} onChange={this.handleChange} />

					<label>Religion (Int)</label>
					<input type="radio" value={this.state.religion} onChange={this.handleChange} />

					<label>Sleight of Hand (Dex)</label>
					<input type="radio" value={this.state.sleight} onChange={this.handleChange} />

					<label>Stealth (Dex)</label>
					<input type="radio" value={this.state.stealth} onChange={this.handleChange} />

					<label>Survival (Wis)</label>
					<input type="radio" value={this.state.survival} onChange={this.handleChange} />
				</section> */}

				<section id="">
					<label>Armor Class</label>
					<input type="text" value={this.state.ac} onChange={(event) => this.setState({ac: event.target.value})} />

					<label>Initiative</label>
					<input type="text" value={this.state.initiative} onChange={(event) => this.setState({initiative: event.target.value})} />

					<label>Speed</label>
					<input type="text" value={this.state.speed} onChange={(event) => this.setState({speed: event.target.value})} />

					<label>Hit Points</label>
					<input type="text" value={this.state.hp} onChange={(event) => this.setState({hp: event.target.value})} />

					{/* <label>Temporary Hit Points</label>
					<input type="input" value={this.state.thp} onChange={this.handleChange} /> */}

					<label>Hit Dice</label>
					<input type="text" value={this.state.hitDice} onChange={(event) => this.setState({hitDice: event.target.value})} />
				</section>

				{/* <section id="attackSpells">
					<h4>Attacks & Spellcasting</h4>
					<label>Spell Name</label>
					<input type="text" value={this.state.name} onChange={this.handleChange} />
					<label>Attack</label>
					<input type="text" value={this.state.atk} onChange={this.handleChange} />
					<label>Damage Type</label>
					<input type="text" value={this.state.dmgType} onChange={this.handleChange} />

					<label>Spell Name</label>
					<input type="text" value={this.state.name} onChange={this.handleChange} />
					<label>Attack</label>
					<input type="text" value={this.state.atk} onChange={this.handleChange} />
					<label>Damage Type</label>
					<input type="text" value={this.state.dmgType} onChange={this.handleChange} />

					<label>Spell Name</label>
					<input type="text" value={this.state.name} onChange={this.handleChange} />
					<label>Attack</label>
					<input type="text" value={this.state.atk} onChange={this.handleChange} />
					<label>Damage Type</label>
					<input type="text" value={this.state.dmgType} onChange={this.handleChange} />
				</section> */}

			{/* <section id="money">
					<label>Platinum</label>
					<input type="text" value={this.state.platinum} onChange={this.handleChange} />
			
					<label>Gold</label>
					<input type="text" value={this.state.gold} onChange={this.handleChange} />
					
					<label>Electrum</label>
					<input type="text" value={this.state.electrum} onChange={this.handleChange} />

					<label>Silver</label>
					<input type="text" value={this.state.silver} onChange={this.handleChange} />

					<label>Copper</label>
					<input type="text" value={this.state.copper} onChange={this.handleChange} />
			</section> */}

			{/* <section id='inventory'>
					<label>Inventory</label>
					<input type="textbox" value={this.state.inventory} onChange={this.handleChange} />
			</section> */}

			{/* <section id="character-notes">
					<label>Traits</label>
					<input type="textbox" value={this.state.traits} onChange={this.handleChange} />

					<label>Ideals</label>
					<input type="textbox" value={this.state.ideals} onChange={this.handleChange} />

					<label>Bonds</label>
					<input type="textbox" value={this.state.bonds} onChange={this.handleChange} />

					<label>Flaws</label>
					<input type="textbox" value={this.state.flaws} onChange={this.handleChange} />
			</section> */}

				{/* <label>Features & Traits</label>
				<input type="textbox" value={this.state.featsTraits} onChange={this.handleChange} /> */}

				<button onClick={this.postDataHandler}>Submit</button>
			</form>
		)
	}
};

export default CreateCharacter;