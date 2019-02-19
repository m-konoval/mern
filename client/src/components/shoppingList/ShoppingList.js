import React, { Component } from 'react';


// REDUX
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    getItems,
    deleteItem
} from '../../actions/itemActions';


// LAYOUT
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ShoppingList.css';


class ShoppingList extends Component {
    componentDidMount() {
        this.props.getItems();
    } // componentDidMount


    onDeleteItem(id) {
        this.props.deleteItem(id);
    } // onDeleteItem


    render() {
        const { items } = this.props.item;

        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {
                            items.map(({ _id, name }) => {
                                return (
                                    <CSSTransition key={_id} timeout={300} classNames="fade">
                                        <ListGroupItem>
                                            <Button
                                                className="remove-btn mr-2"
                                                color="danger"
                                                size="sm"
                                                onClick={() => { this.onDeleteItem(_id) }}
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
ShoppingList.propTypes = { // eslint-disable-line
    getItems: propTypes.func.isRequired,
    deleteItem: propTypes.func.isRequired,
    item: propTypes.object.isRequired
};


// Callback for chenge state to props
const mapStateToProps = (state) => ({
    item: state.item
});


// export
export default connect(mapStateToProps, {
    getItems,
    deleteItem
})(ShoppingList);
