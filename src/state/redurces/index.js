import{combineReducers} from 'redux';
import ammountRedurcers from './amountRedurcer';

const reducers = combineReducers({
    ammount: ammountRedurcers
})
export default reducers