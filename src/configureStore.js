import {createStore, combineReducers, applyMiddleware } from 'redux';
import {Dishes} from "./redux/dishes";
import {Leaders} from "./redux/leaders";
import {Comments} from "./redux/comments";
import {Promotions} from "./redux/promotions";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export const ConfigureStore = () => {
const store = createStore(

        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
            }),
            applyMiddleware(thunk, logger)
);
return store;
}