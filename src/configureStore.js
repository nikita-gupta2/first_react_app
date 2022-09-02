import {createStore, combineReducers, applyMiddleware } from 'redux';
import {Dishes} from "./redux/dishes";
import {createForms} from "react-redux-form";
import {Leaders} from "./redux/leaders";
import {Comments} from "./redux/comments";
import {Promotions} from "./redux/promotions";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { IntialFeedback } from './redux/forms';
export const ConfigureStore = () => {
const store = createStore(

        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback:IntialFeedback
            })
            }),
            applyMiddleware(thunk, logger)
);
return store;
}