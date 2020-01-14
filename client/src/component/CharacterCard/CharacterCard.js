import React from 'react';
import Card from 'react-bootstrap/Card';
import './character-card.css';
// import axios from 'axios';

const CharacterCard = (props) => {

	return (
		<Card className="character-card">
			<Card.Header>{props.name || "You Have No Characters"}</Card.Header>
			<Card.Body>
			<Card.Title></Card.Title>
				<Card.Text>

          </Card.Text>
			</Card.Body>
		</Card>
	)
	
};

export default CharacterCard;