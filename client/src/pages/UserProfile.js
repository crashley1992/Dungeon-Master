import React, {Component} from 'react';
import axios from 'axios';
import CharacterCard from '../component/CharacterCard/CharacterCard';
import GroupCard from '../component/GroupCard/GroupCard';

class UserProfile extends Component {
    state = {
        characters: [],
        groups: []
    };

    render(props) {
        return (
             <div className="profile-page">
                <div className="character-section">
                    <h1>Characters</h1>
                    <button className="create-character-btn">Add Character</button>
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