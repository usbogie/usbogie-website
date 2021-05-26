import React from 'react';

import profPic from '../henry.png';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="Home p-2">
                <h2 className="header p-3">Hey, I'm Henry!</h2>
                <div className="imgContainer">
                    <img className="profPic" src={profPic} alt="profile pic" />
                </div>
            </div>
        ); 
    }
}

export default Home;