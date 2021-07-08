import React from 'react';

import "./styles/card.css";
import eventLogo from '../Assets/Custom-Size–2.png';

class Card extends React.Component {
    render() {
        return <section className="Card">
            <container className="Card__header">
                <img src={eventLogo} alt="Event Brand" />
            </container>
            <container className="Card__section-name">
                <img className="Card__avatar" src="https://es.gravatar.com/userimage/128149858/f2293506755dd8c1022d06b6b2355bf8.jpg" alt="Avatar" />
                <h1>Renato <br/> Cuéllar</h1>
            </container>
            <container className="Card__section-info">
                <p>Frontend Engineer</p>
                <p>@renatocuellar_</p>
            </container>
            <container className="Card__footer">
                #ExpoGlobant
            </container>
        </section>;
    }
}

export default Card;