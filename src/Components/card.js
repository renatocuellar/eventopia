import React from 'react';

class Card extends React.Component {
    render() {
        return <section>
            <container>
                <img src="" alt="Event Brand" />
            </container>
            <container>
                <img src="" alt="Avatar" />
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