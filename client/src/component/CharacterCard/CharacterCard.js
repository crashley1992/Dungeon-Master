import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './character-card.css';
import axios from 'axios';
// import CreateCharacter from 'CreateCharacter';

class CharacterCard extends Component {
	state = {
		// savedCharacters: [],
		initialized: true
	}

	componentDidMount() {
		this.getCharacters();
	}

	getCharacters = () => {
		axios.get('/api/character')
			.then(res => {
				// this.setState({ savedCharacters: res.data })
			})
			.catch(err => console.log(err))
	}

	render() {
		return (
			<Card className="character-card">
				{/* <Card.Header>{savedCharacters.name || "You Have No Characters"}</Card.Header> */}
				<Card.Body>
					<Card.Title></Card.Title>
					<Card.Text>

					</Card.Text>
				</Card.Body>
			</Card>
		)
		
	}		
	
};

export default CharacterCard;