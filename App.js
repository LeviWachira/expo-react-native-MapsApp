import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PlacesNavigator from './navigation/PlacesNavigator';
import placesReducer from './store/places-reducer';


const rootReducer = combineReducers({
  places: placesReducer
});

//store code must be below the reducer code
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

  return (
    <Provider store={store} >
      <PlacesNavigator />
    </Provider>
  );
}


