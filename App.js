/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, StyleSheet, StatusBar, View} from 'react-native';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import ItemList from './components/ItemList'
import Header from "./components/Header";
import itemApp from "./redux/reducers";


const store = createStore(itemApp, applyMiddleware(logger));

export default class App extends Component{

    componentDidMount() {
        // Set status bar text to white
        StatusBar.setHidden(false);
        StatusBar.setBarStyle("light-content");
    }

  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Header />
                <ItemList />
            </View>
        </Provider>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});