/* 
  -We need to bring in our necessary components.
  -We want to display a message when users add to their items
*/

import React from 'react';

export default class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            showInput: false,
            items: [
                'pears',
                'screwdriver',
                'hat'
            ]
        }
    }

    showUpdatedMessage() {
        /*
            We want functionality that will set this.state.message to 'Items Updated!' and display for 3 seconds
        */
    }

    toggleShowInput() {
        /*
            We want functionality that will toggle this.state.showInput.
        */
    }
    
    addItem(item) {
        /*
            -We will pass this method down in a prop.
            -We want to take in an item, add it to our items in state, and toggle this.state.showInput.
        */
    }
    
    render() {
        const { message, showInput, items } = this.state;

        /*
            -We'll display our items within a ul tag, so it makes sense to map them out as li tags.
            -Note how we're still properly adding a key attribute to each tag!
        */
        const itemsMapped = items.map((item, i) => <li key={i}>{item}</li>);

        return (
            <section>
                <p className='updated-message'>{message}</p>
                {
                    /* We want a button to 
                        -toggle this.state.showInput to true
                        -disappear when this.state.showInput is true
                    */
                }
                { 
                    /*
                        -When this.state.showInput is:
                            -true, we want to bring ItemInput into the view
                                -We'll want to pass this.addItem in as a prop
                            -false, not show ItemInput
                    */
                }
                <ul className='item-list'>
                    {itemsMapped}
                </ul>
            </section>
        )
    }
}