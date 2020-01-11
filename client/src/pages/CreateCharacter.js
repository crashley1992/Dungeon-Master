import React, { Component } from 'react';
import axios from 'axios';

class CreateCharacter extends Component{
	state = {
		name: '',
		class: '',
		race: '',
		age: ''
	}	

	postDataHandler = () => {
		const data = {
			name: this.state.name,
			class: this.state.class,
			race: this.state.race,
			age: this.state.age
		}

		axios.post('http://localhost:3001/character', data)
			.then(response => {
				console.log(response);
			}).catch((err) => {
				console.log(err);
			})
	}

	render() {
		return (
				<form className="create-character">
					<h1>Create A New Character</h1>
					<label>Character Name</label>
					<input type="text" value={this.state.charactername} onChange={(event) => this.setState({ name: event.target.value })} />
					<label>Class</label>
					<input type="text" value={this.state.class} onChange={(event) => this.setState({ class: event.target.value })} />
					<label>Race</label>
					<input type="text" value={this.state.race} onChange={(event) => this.setState({ race: event.target.value })} />
					<label>Age</label>
					<input type="text" value={this.state.age} onChange={(event) => this.setState({ age: event.target.value })} />
					<button onClick={this.postDataHandler}>Submit</button>
				</form>
			)
	}
};

	export default CreateCharacter;