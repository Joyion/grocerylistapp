import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import storeReducer from "../reducers/store.reducer.";
import filterReducer from "../reducers/filter.reducer";
import itemReducer from "../reducers/item.reducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
    combineReducers({
      store: storeReducer,
      filter: filterReducer,
      items: itemReducer
 
    }),
    composeEnhancers(applyMiddleware(thunk)))

export default store;