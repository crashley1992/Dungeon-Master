import React from 'react';
import Card from 'react-bootstrap/Card';
import './group-card.css';
import axios from 'axios';

const GroupCard = (props) => {
	return (
		<Card className="group-card">
			<Card.Header>{props.name || "You Have No Groups"}</Card.Header>
			<Card.Body>
				<Card.Title></Card.Title>
				<Card.Text>
          </Card.Text>
			</Card.Body>
		</Card>
	)

};


export default GroupCard;