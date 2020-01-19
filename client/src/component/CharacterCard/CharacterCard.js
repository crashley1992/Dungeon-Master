import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './character-card.css';
import axios from 'axios';
// import CreateCharacter from 'CreateCharacter';

const CharacterCard = (props) => {
		return(
			<div className="card">
				<h4 className="character-name">Character Name: {props.name}</h4>
				<h6 className="class-name">Character Class: {props.class}</h6>
				<h6 className="level">Character Level: {props.level}</h6>
			</div>
		)
};

export default CharacterCard;