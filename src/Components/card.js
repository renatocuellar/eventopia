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
                <img className="Card__avatar" src="https://es.gravatar.com/gravatars/edit-rating/f2293506755dd8c1022d06b6b2355bf8" alt="Avatar" />
                <h2>Renato <br/> Cuéllar</h2>
            </container>
            <container>
                <p>Frontend Engineer</p>
                <p>@renatocuellar_</p>
            </container>
        </section>;
    }
}

export default Card;