import React, { Component } from 'react';
import axios from 'axios';
import './createcharacter.css'



class CreateCharacter extends Component {
	state = {
		"id": '',
		newCharacter: {}
	}

	componentDidUpdate = (props) => {
		this.props.idUpdate();
		this.setState({"id": this.props.id});
		console.log(this.state.id + " info passed to character");
	}

	postDataHandler = () => {
		const data = {
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

			skills: {
				acrobatics: this.state.skills.acrobatics,
				animal: this.state.skills.animal,
				arcana: this.state.skills.arcana,
				athletics: this.state.skills.athletics,
				deception: this.state.skills.deception,
				history: this.state.skills.history,
				insight: this.state.skills.insight,
				intimidation: this.state.skills.intimidation,
				investigation: this.state.skills.investigation,
				medicine: this.state.skills.medicine,
				nature: this.state.skills.nature,
				perception: this.state.skills.perception,
				performance: this.state.skills.performance,
				persuasion: this.state.skills.persuasion,
				religion: this.state.skills.religion,
				sleight: this.state.skills.sleights,
				stealth: this.state.skills.stealth,
				survival: this.state.skills.survival,
			},

			ac: this.state.ac,
			initiative: this.state.initiative,
			speed: this.state.speed,
			hp: this.state.hp,
			thp: this.state.thp,
			hitDice: this.state.hitDice,

			attacksSpellcasting: [{
				name: this.state.attacksSpellcasting.name,
				atk: this.state.attacksSpellcasting.atk,
				dmgType: this.state.attacksSpellcasting.dmgType,
			},
			{
				name: this.state.attacksSpellcasting.name,
				atk: this.state.attacksSpellcasting.atk,
				dmgType: this.state.attacksSpellcasting.dmgType,
			},
			{
				name: this.state.attacksSpellcasting.name,
				atk: this.state.attacksSpellcasting.atk,
				dmgType: this.state.attacksSpellcasting.dmgType,
			}],

			money: {
				platinum: this.state.money.platinum,
				gold: this.state.money.gold,
				electrum: this.state.money.electrum,
				silver: this.state.money.silver,
				copper: this.state.money.copper,
			},

			inventory: this.state.inventory,

			characterNotes: {
				traits: this.state.characterNotes.traits,
				ideals: this.state.characterNotes.traits,
				bonds: this.state.characterNotes.traits,
				flaws: this.state.characterNotes.traits,
			},

			featsTraits: this.state.featsTraits
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
					<input type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />

					<label>Class</label>
					<input type="text" value={this.state.class} onChange={(event) => this.setState({ class: event.target.value })} />

					<label>Race</label>
					<input type="text" value={this.state.race} onChange={(event) => this.setState({ race: event.target.value })} />

					<label>Age</label>
					<input type="text" value={this.state.age} onChange={(event) => this.setState({ age: event.target.value })} />

					<label>Level</label>
					<input type="text" value={this.state.level} onChange={(event) => this.setState({ level: event.target.value })} />
				</section>

				{/* Stats */}
				<section id="stats">
					<h4>Stats</h4>
					<label>Strength</label>
					<input type="text" value={this.state.str} onChange={(event) => this.setState({ str: event.target.value })} />

					<label>Dexterity</label>
					<input type="text" value={this.state.dex} onChange={(event) => this.setState({ dex: event.target.value })} />

					<label>Constitution</label>
					<input type="text" value={this.state.con} onChange={(event) => this.setState({ con: event.target.value })} />

					<label>Intelligence</label>
					<input type="text" value={this.state.int} onChange={(event) => this.setState({ int: event.target.value })} />

					<label>Wisdom</label>
					<input type="text" value={this.state.wis} onChange={(event) => this.setState({ wis: event.target.value })} />

					<label>Charisma</label>
					<input type="text" value={this.state.cha} onChange={(event) => this.setState({ cha: event.target.value })} />
				</section>

				{/* Skills */}
				<section id="skills">
					<h4>Stats</h4>
				
					<label>Acrobatics (Dex)</label>
					<input type="radio" value={this.state.acrobatics} onChange={(event) => this.setState({ acrobatics: event.target.value })} />

					<label>Animal Handling (Wis)</label>
					<input type="radio" value={this.state.animal} onChange={(event) => this.setState({ animal: event.target.value })} />

					<label>Arcana (Int)</label>
					<input type="radio" value={this.state.arcana} onChange={(event) => this.setState({ arcana: event.target.value })} />

					<label>Athletics (Str)</label>
					<input type="radio" value={this.state.race} onChange={(event) => this.setState({ dex: event.target.value })} />

					<label>Deception (Cha)</label>
					<input type="radio" value={this.state.age} onChange={(event) => this.setState({ con: event.target.value })} />

					<label>History (Int)</label>
					<input type="radio" value={this.state.history} onChange={(event) => this.setState({ history: event.target.value })} />

					<label>Insight (Wis)</label>
					<input type="radio" value={this.state.insight} onChange={(event) => this.setState({ insight: event.target.value })} />

					<label>Intimidation (Cha)</label>
					<input type="radio" value={this.state.intimidation} onChange={(event) => this.setState({ intimidation: event.target.value })} />

					<label>Investigation (Int)</label>
					<input type="radio" value={this.state.investigation} onChange={(event) => this.setState({ investigation: event.target.value })} />

					<label>Medicine (Wis)</label>
					<input type="radio" value={this.state.medicine} onChange={(event) => this.setState({ medicine: event.target.value })} />

					<label>Nature (Int)</label>
					<input type="radio" value={this.state.nature} onChange={(event) => this.setState({ nature: event.target.value })} />

					<label>Perception (Wis)</label>
					<input type="radio" value={this.state.perception} onChange={(event) => this.setState({ perception: event.target.value })} />

					<label>Performance (Cha)</label>
					<input type="radio" value={this.state.performance} onChange={(event) => this.setState({ performance: event.target.value })} />

					<label>Persuasion (Cha)</label>
					<input type="radio" value={this.state.persuasion} onChange={(event) => this.setState({ persuasion: event.target.value })} />

					<label>Religion (Int)</label>
					<input type="radio" value={this.state.religion} onChange={(event) => this.setState({ religion: event.target.value })} />

					<label>Sleight of Hand (Dex)</label>
					<input type="radio" value={this.state.sleight} onChange={(event) => this.setState({ sleight: event.target.value })} />

					<label>Stealth (Dex)</label>
					<input type="radio" value={this.state.stealth} onChange={(event) => this.setState({ stealth: event.target.value })} />

					<label>Survival (Wis)</label>
					<input type="radio" value={this.state.survival} onChange={(event) => this.setState({ survival: event.target.value })} />
				</section>

				<section id="">
					<label>Armor Class</label>
					<input type="text" value={this.state.ac} onChange={(event) => this.setState({ ac: event.target.value })} />

					<label>Initiative</label>
					<input type="text" value={this.state.initiative} onChange={(event) => this.setState({ initiative: event.target.value })} />

					<label>Speed</label>
					<input type="text" value={this.state.speed} onChange={(event) => this.setState({ speed: event.target.value })} />

					<label>Hit Points</label>
					<input type="text" value={this.state.hp} onChange={(event) => this.setState({ hp: event.target.value })} />

					<label>Temporary Hit Points</label>
					<input type="input" value={this.state.thp} onChange={(event) => this.setState({ thp: event.target.value })} />

					<label>Hit Dice</label>
					<input type="text" value={this.state.hitDice} onChange={(event) => this.setState({ hitDice: event.target.value })} />

					<label>Survival (Wis)</label>
					<input type="radio" value={this.state.survival} onChange={(event) => this.setState({ survival: event.target.value })} />
				</section>

				<section id="attackSpells">
					<h4>Attacks & Spellcasting</h4>
					<label>Spell Name</label>
					<input type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
					<label>Attack</label>
					<input type="text" value={this.state.atk} onChange={(event) => this.setState({ atk: event.target.value })} />
					<label>Damage Type</label>
					<input type="text" value={this.state.dmgType} onChange={(event) => this.setState({ dmgType: event.target.value })} />

					<label>Spell Name</label>
					<input type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
					<label>Attack</label>
					<input type="text" value={this.state.atk} onChange={(event) => this.setState({ atk: event.target.value })} />
					<label>Damage Type</label>
					<input type="text" value={this.state.dmgType} onChange={(event) => this.setState({ dmgType: event.target.value })} />

					<label>Spell Name</label>
					<input type="text" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
					<label>Attack</label>
					<input type="text" value={this.state.atk} onChange={(event) => this.setState({ atk: event.target.value })} />
					<label>Damage Type</label>
					<input type="text" value={this.state.dmgType} onChange={(event) => this.setState({ dmgType: event.target.value })} />
				</section>

			<section id="money">
					<label>Platinum</label>
					<input type="text" value={this.state.platinum} onChange={(event) => this.setState({ platinum : event.target.value })} />
			
					<label>Gold</label>
					<input type="text" value={this.state.gold} onChange={(event) => this.setState({ gold: event.target.value })} />
					
					<label>Electrum</label>
					<input type="text" value={this.state.electrum} onChange={(event) => this.setState({ electrum: event.target.value })} />

					<label>Silver</label>
					<input type="text" value={this.state.silver} onChange={(event) => this.setState({ silver: event.target.value })} />

					<label>Copper</label>
					<input type="text" value={this.state.copper} onChange={(event) => this.setState({ copper: event.target.value })} />
			</section>

			<section id='inventory'>
					<label>Inventory</label>
					<input type="textbox" value={this.state.inventory} onChange={(event) => this.setState({ inventory: event.target.value })} />
			</section>

			<section id="character-notes">
					<label>Traits</label>
					<input type="textbox" value={this.state.traits} onChange={(event) => this.setState({ traits: event.target.value })} />

					<label>Ideals</label>
					<input type="textbox" value={this.state.ideals} onChange={(event) => this.setState({ ideals: event.target.value })} />

					<label>Bonds</label>
					<input type="textbox" value={this.state.bonds} onChange={(event) => this.setState({ bonds: event.target.value })} />

					<label>Flaws</label>
					<input type="textbox" value={this.state.flaws} onChange={(event) => this.setState({ flaws: event.target.value })} />
			</section>

				<label>Features & Traits</label>
				<input type="textbox" value={this.state.featsTraits} onChange={(event) => this.setState({ featsTraits: event.target.value })} />

				<button onClick={this.postDataHandler}>Submit</button>
			</form>
		)
	}
};

export default CreateCharacter;