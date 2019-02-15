import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ShoppingList.css';
import uuid from 'uuid';


export class ShoppingList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Some1' },
            { id: uuid(), name: 'Some2' },
            { id: uuid(), name: 'Some3' },
            { id: uuid(), name: 'Some4' }
        ]
    } // state


    addItem = () => {
        const name = prompt('New Item name');

        if (name.length > 3) {

            const newItem = {
                id: uuid(),
                name: name
            };

            this.setState(prevState => {
                return {
                    items: [...prevState.items, newItem]
                };
            });
        }
    }; // addItem


    removeItem(id) {
        this.setState(prevState => {
            return {
                items: prevState.items.filter(item => item.id !== id)
            };
        });
    } // removeItem


    render() {
        const { items } = this.state;

        return (
            <Container>
                <Button
                    className="mb-3"
                    color="dark"
                    onClick={this.addItem}
                >Add Item</Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {
                            items.map(({ id, name }) => {
                                return (
                                    <CSSTransition key={id} timeout={300} classNames="fade">
                                        <ListGroupItem>
                                            <Button
                                                className="remove-btn mr-2"
                                                color="danger"
                                                size="sm"
                                                onClick={() => { this.removeItem(id) }}
                                            >&times;</Button>

                                            {name}
                                        </ListGroupItem>
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    } // render
} //ShoppingList

export default ShoppingList
