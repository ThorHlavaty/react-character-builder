import { combineReducers } from "redux";

const {  SET_RACE, SET_CLASS, SET_NAME, SET_HALFELFBONUSSTATS, SET_STATSUBMITTED, RESET_HALFELFBONUSSTATS, SET_STATCALC } = require("./actions");



function raceReducer(state='', action) {
    switch (action.type) {
        case SET_RACE:
            return action.payload.race
        
        
            
            default:
            return state;
    }
}

function halfElfBonusStatsReducer(state=[], action){
    switch (action.type) {
        case SET_HALFELFBONUSSTATS:
            return state.concat(action.payload.halfElfBonusStats)
        
        case RESET_HALFELFBONUSSTATS:
            return []

        default:
            return state;
    }
}

function classReducer(state='', action) {
    switch (action.type) {
        case SET_CLASS:
            return action.payload.classSelection
        
        
            
            default:
            return state;
    }
}

function nameReducer(state='', action) {
    switch (action.type) {
        case SET_NAME:
            return action.payload.name
        
        
            
            default:
            return state;
    }
}



function pointCalculatorReducer(state={"Strength":[0,8],"Dexterity":[0,8],"Constitution":[0,8],"Wisdom":[0,8],"Intelligence":[0,8],"Charisma":[0,8]}, action) {
    switch (action.type) {
        case SET_STATCALC:
            return {...state, [action.payload.statName]:action.payload.pointValue}
            
            default:
            return state;
    }
}

function statSubmittedReducer(state=false, action) {
    switch (action.type) {
        case SET_STATSUBMITTED:
            return action.payload.statSubmitted
        
        
            
            default:
            return state;
    }
}

export const rootReducer = combineReducers({
    race: raceReducer,
    classSelection: classReducer,
    name: nameReducer,
    halfElfBonusStats: halfElfBonusStatsReducer,
    pointCalculator: pointCalculatorReducer,
    statSubmitted: statSubmittedReducer
})