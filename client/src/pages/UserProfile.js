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


    componentDidMount() {
        axios.get('http://localhost:3001/api/character/'+this.props.id)
			.then(response => {
                console.log(response);
                this.setState({characters: response.data})
                console.log(this.state.characters);
			}).catch((err) => {
				console.log(err);
		})
    }
    

    render(props) {
        return (
             <div className="profile-page">
                <div className="character-section">
                    <h1>Characters</h1>
                    {this.state.characters.map(character => (
                        <CharacterCard 
                        key={character._id}
                        name={character.name}
                        class={character.class}
                        level={character.level}
                        />
                    ))}
                    
                    <button onClick={this.handleClick}>Add Character</button>
                    { this.state.showComponent ? 
                    <CreateCharacter id={this.props.id} /> : 
                    null
                    } 
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