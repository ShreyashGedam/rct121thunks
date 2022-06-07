import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./app/reducer";
import { authRuducer } from "./auth/reducer";

export const rootReducer = combineReducers({
   auth : authRuducer,
   posts : dataReducer
})

function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }

export const store = createStore(rootReducer,
    applyMiddleware(thunk))

console.log("State :",store.getState() )    