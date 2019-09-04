import React, { Component} from 'react';
import Animal from './Animal';

class Hello extends Component {
    render() {
        let listItems = this.props.person.favorites.map((animal, idx) => {
            return <Animal key={idx} name={animal} />;
        })

        return (
            <div>
                <h1>Hello {this.props.person.personName}!</h1>
                <h3>You are {this.props.person.personAge} years old~</h3>
                <p>You love: </p>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default Hello;