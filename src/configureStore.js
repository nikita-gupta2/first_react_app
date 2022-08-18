import {combineReducers,createStore} from 'redux';
import {Dishes} from "./redux/dishes";
import {Leaders} from "./redux/leaders";
import {Comments} from "./redux/comments";
import {Promotions} from "./redux/promotions";

export const ConfigureStore = () => {
const store = createStore(
        combineReducers({
            dishes:Dishes,
            leaders:Leaders,
            promotions:Promotions,
            comments:Comments
        })


);
return store;
}