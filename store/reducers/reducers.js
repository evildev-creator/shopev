import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

import {
    products, 
    semiAuth, 
    revolver, 
    ak, 
    tactical, 
    leverAction, 
    derringer,
    ars,
    aks,
    boltAction,
    hunting,
    rftactical,
    selfdefense,
    rim,
    handAmmuni,
    rifleammuni,
    topSellers,
    riflescope,
redDotscope,
nightvision,
binoculars,
rangefinder,
handgunsight,
flash,
weaponlights
} from '../json-data/products';

let store

import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY, 
    ADD_SHIPPING,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_TO_COMPARE,
    REMOVE_ITEM_FROM_COMPARE
} from '../actions/action-types/action-names'

const initialState = {
    products: products,
    semiAuth: semiAuth,
    revolver: revolver,
    ak: ak,
    tactical: tactical,
    leverAction: leverAction,
    derringer: derringer,
    ars: ars,
    aks: aks,
    boltAction: boltAction,
    hunting: hunting,
    rftactical: rftactical,
    selfdefense:selfdefense,
    rim:rim,
    handAmmuni:handAmmuni,
    rifleammuni: rifleammuni,
    topSellers: topSellers,
    riflescope: riflescope,
redDotscope: redDotscope,
nightvision: nightvision,
binoculars: binoculars,
rangefinder: rangefinder,
handgunsight: handgunsight,
flash: flash,
weaponlights: weaponlights,
    addedItems:[],
    addedItemsToCompare:[],
    total: 0,
    shipping: 0
}

export const reducers = (state = initialState, action) => {
   
    if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(item => item.id === action.id) 
        || state.semiAuth.find(item => item.id === action.id)
        || state.revolver.find(item => item.id === action.id)
        || state.ak.find(item => item.id === action.id)
        || state.tactical.find(item => item.id === action.id)
        || state.leverAction.find(item => item.id === action.id)
        || state.derringer.find(item => item.id === action.id)
        || state.ars.find(item => item.id === action.id)
        || state.aks.find(item => item.id === action.id)
        || state.boltAction.find(item => item.id === action.id)
        || state.hunting.find(item => item.id === action.id)
        || state.rftactical.find(item => item.id === action.id)
        || state.selfdefense.find(item => item.id === action.id)
        || state.rim.find(item => item.id === action.id)
        || state.handAmmuni.find(item => item.id === action.id) 
        || state.rifleammuni.find(item => item.id === action.id)
        || state.topSellers.find(item => item.id === action.id)
        || state.riflescope.find(item => item.id === action.id)
        || state.redDotscope.find(item => item.id === action.id)
        || state.nightvision.find(item => item.id === action.id)
        || state.binoculars.find(item => item.id === action.id)
        || state.rangefinder.find(item => item.id === action.id)
        || state.handgunsight.find(item => item.id === action.id)
        || state.flash.find(item => item.id === action.id)
        || state.weaponlights.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if(existed_item){
            addedItem.quantity += 1 
            return {
                ...state,
                total: state.total + addedItem.price 
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === ADD_TO_COMPARE){
        let addedItemToCompare = state.products.find(item => item.id === action.id)
        || state.semiAuth.find(item => item.id === action.id)
        || state.revolver.find(item => item.id === action.id)
        || state.ak.find(item => item.id === action.id)
        || state.tactical.find(item => item.id === action.id)
        || state.leverAction.find(item => item.id === action.id)
        || state.derringer.find(item => item.id === action.id)
        || state.ars.find(item => item.id === action.id)
        || state.aks.find(item => item.id === action.id)
        || state.boltAction.find(item => item.id === action.id)
        || state.hunting.find(item => item.id === action.id)
        || state.rftactical.find(item => item.id === action.id) 
        || state.selfdefense.find(item => item.id === action.id) 
        || state.rim.find(item => item.id === action.id)
        || state.handAmmuni.find(item => item.id === action.id) 
        || state.rifleammuni.find(item => item.id === action.id)
        || state.topSellers.find(item => item.id === action.id)  
        || state.riflescope.find(item => item.id === action.id)
        || state.redDotscope.find(item => item.id === action.id)
        || state.nightvision.find(item => item.id === action.id)
        || state.binoculars.find(item => item.id === action.id)
        || state.rangefinder.find(item => item.id === action.id)
        || state.handgunsight.find(item => item.id === action.id)
        || state.flash.find(item => item.id === action.id)
        || state.weaponlights.find(item => item.id === action.id)

        
        addedItemToCompare.quantity = 1;
        
        return {
            ...state,
            addedItemsToCompare: [...state.addedItemsToCompare, addedItemToCompare]
        }
    }

    if(action.type === ADD_QUANTITY_WITH_NUMBER){
        let addedItem = state.products.find(item => item.id === action.id)
        || state.semiAuth.find(item => item.id === action.id)
        || state.revolver.find(item => item.id === action.id)
        || state.ak.find(item => item.id === action.id)
        || state.tactical.find(item => item.id === action.id)
        || state.leverAction.find(item => item.id === action.id)
        || state.derringer.find(item => item.id === action.id)
        || state.ars.find(item => item.id === action.id)
        || state.aks.find(item => item.id === action.id)
        || state.boltAction.find(item => item.id === action.id)
        || state.hunting.find(item => item.id === action.id)
        || state.rftactical.find(item => item.id === action.id) 
        || state.selfdefense.find(item => item.id === action.id) 
        || state.rim.find(item => item.id === action.id)
        || state.handAmmuni.find(item => item.id === action.id) 
        || state.rifleammuni.find(item => item.id === action.id)
        || state.topSellers.find(item => item.id === action.id)
        || state.riflescope.find(item => item.id === action.id)
        || state.redDotscope.find(item => item.id === action.id)
        || state.nightvision.find(item => item.id === action.id)
        || state.binoculars.find(item => item.id === action.id)
        || state.rangefinder.find(item => item.id === action.id)
        || state.handgunsight.find(item => item.id === action.id)
        || state.flash.find(item => item.id === action.id)
        || state.weaponlights.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.price * action.qty
            }
        } else {
            addedItem.quantity = action.qty;
            //calculating the total
            let newTotal = state.total + addedItem.price * action.qty
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove = state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === REMOVE_ITEM_FROM_COMPARE){
        let new_items = state.addedItemsToCompare.filter(item=> action.id !== item.id)
        
        return {
            ...state,
            addedItemsToCompare: new_items
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === SUB_QUANTITY){  
        let addedItem = state.products.find(item=> item.id === action.id) 
        || state.semiAuth.find(item => item.id === action.id)
        || state.revolver.find(item => item.id === action.id)
        || state.ak.find(item => item.id === action.id)
        || state.tactical.find(item => item.id === action.id)
        || state.leverAction.find(item => item.id === action.id)
        || state.derringer.find(item => item.id === action.id)
        || state.ars.find(item => item.id === action.id)
        || state.aks.find(item => item.id === action.id)
        || state.boltAction.find(item => item.id === action.id)
        || state.hunting.find(item => item.id === action.id)
        || state.rftactical.find(item => item.id === action.id) 
        || state.selfdefense.find(item => item.id === action.id) 
        || state.rim.find(item => item.id === action.id)
        || state.handAmmuni.find(item => item.id === action.id) 
        || state.rifleammuni.find(item => item.id === action.id)
        || state.topSellers.find(item => item.id === action.id)
        || state.riflescope.find(item => item.id === action.id)
        || state.redDotscope.find(item => item.id === action.id)
        || state.nightvision.find(item => item.id === action.id)
        || state.binoculars.find(item => item.id === action.id)
        || state.rangefinder.find(item => item.id === action.id)
        || state.handgunsight.find(item => item.id === action.id)
        || state.flash.find(item => item.id === action.id)
        || state.weaponlights.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === ADD_SHIPPING){
        return {
            ...state,
            shipping: state.shipping += 6
        }
    }

    if(action.type === 'SUB_SHIPPING'){
        return {
            ...state,
            shipping: state.shipping -= 6
        }
    }

    if(action.type === RESET_CART){
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0
        }
    }
    
    else {
        return state
    }
}



const persistConfig = {
    key: 'primary',
    storage,
}
  
  const persistedReducer = persistReducer(persistConfig, reducers)
  
  function makeStore(initialState) {
    return createStore(
      persistedReducer,
      initialState,
      composeWithDevTools(applyMiddleware())
    )
  }
  
  export const initializeStore = (preloadedState) => {
    let _store = store ?? makeStore(preloadedState)
  
    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
      _store = makeStore({
        ...store.getState(),
        ...preloadedState,
      })
      // Reset the current store
      store = undefined
    }
  
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store
  
    return _store
  }
  
  export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
  }