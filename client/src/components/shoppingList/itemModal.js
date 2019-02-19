import React, { Component } from 'react';


// REDUX
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createItem } from '../../actions/itemActions';


// LAYOUT
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';


class itemModal extends Component {
    state = {
        modal: false,
        itemName: ''
    }; // state


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    } // toggle


    onChangeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    } // onChangeHandle


    onSubmitHandle = (e) => {
        e.preventDefault();

        if (this.state.itemName.length > 3)
            this.props.createItem({ name: this.state.itemName });

        this.setState({
            modal: !this.state.modal,
            itemModal: ''
        });

    }; // onSubmitHandle


    render() {
        return (
            <div>
                <Button
                    className="mb-3"
                    color="dark"
                    onClick={this.toggle}
                >Add Item</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>

                    <ModalHeader toggle={this.toggle}>Add new Item</ModalHeader>

                    <ModalBody>
                        <Form onSubmit={this.onSubmitHandle}>
                            <FormGroup>

                                <Label for="item">Item Name: </Label>
                                <Input
                                    type="text"
                                    name="itemName"
                                    id="item"
                                    placeholder="Type item name"
                                    value={this.state.itemName}
                                    onChange={this.onChangeHandle} />

                                <Button
                                    block
                                    className="mt-3"
                                    color="dark"
                                >Add</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    } // render
} // itemModal


itemModal.propTypes = { // eslint-disable-line
    createItem: propTypes.func.isRequired,
};


// Callback for chenge state to props
const mapStateToProps = (state) => ({
    item: state.item
});


// export
export default connect(mapStateToProps, {
    createItem
})(itemModal);