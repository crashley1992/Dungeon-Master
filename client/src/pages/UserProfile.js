import React, {Component} from 'react';
import axios from 'axios';
import CreateCharacter from './CreateCharacter';
import CharacterCard from '../component/CharacterCard/CharacterCard';
import GroupCard from '../component/GroupCard/GroupCard';

class UserProfile extends Component {
    state = {
        characters: [],
        groups: [],
        showComponent: null,
        id: ''
    };

    handleClick = () => {
        this.setState({ showComponent: true })
        console.log('The link was clicked.');
    };

    passID = (props) => {
		this.props.idUpdate();
		this.setState({id: this.props.id});
	}

    render(props) {
        return (
             <div className="profile-page">
                <div className="character-section">
                    <h1>Characters</h1>
                    <button onClick={this.handleClick}>Add Character</button>
                    { this.state.showComponent ? 
                    <CreateCharacter passID={this.passID} /> : 
                    null
                    } 
                    <CharacterCard />
                </div>
                <div className="group-section">
                    <h1>Groups</h1>
                    <button className="create-group-btn">Add Group</button>
                    <GroupCard />
                </div>
            </div>
        )
    }
}

export default UserProfile;