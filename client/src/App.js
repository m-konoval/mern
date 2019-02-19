import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';


// Styles Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';


// Components
import AppNavBar from './components/AppNavBar';
import ItemModal from './components/shoppingList/itemModal';
import ShoppingList from './components/shoppingList/ShoppingList';


// App component
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <AppNavBar />

                    <Container>
                        <ItemModal />
                        <ShoppingList />
                    </Container>
                </Fragment>
            </Provider>
        );
    } // render
} // App

export default App;
