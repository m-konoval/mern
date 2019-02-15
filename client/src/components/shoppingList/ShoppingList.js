import React, { Component } from 'react';


// REDUX
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';


// layouts
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

    componentDidMount() {
        this.props.getItems();
    } // componentDidMount


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
        const { items } = this.props.item;

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


// Add types for Props
ShoppingList.PropTypes = { // eslint-disable-line
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};


// Callback for chenge state to props
const mapStateToProps = (state) => ({
    item: state.item
});


// export
export default connect(mapStateToProps, { getItems })(ShoppingList);
