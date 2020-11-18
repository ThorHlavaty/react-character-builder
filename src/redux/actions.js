export const SET_RACE = 'SET_RACE'
export const SET_CLASS = 'SET_CLASS'
export const SET_NAME = 'SET_NAME'
export const SET_HALFELFBONUSSTATS = 'SET_HALFELFBONUSSTATS'
export const RESET_HALFELFBONUSSTATS = 'RESET_HALFELFBONUSSTATS'
export const SET_STR = 'SET_STR' 
export const SET_DEX = 'SET_DEX' 
export const SET_CON = 'SET_CON' 
export const SET_WIS = 'SET_WIS' 
export const SET_INT = 'SET_INT' 
export const SET_CHA = 'SET_CHA' 
export const SET_STATCALC = 'SET_STATCALC'
export const SET_STATSUBMITTED = 'SET_STATSUBMITTED'



export function setRace(race) {
    return {
        type: SET_RACE,
        payload: {
            race
        }
    }
}

export function setClass(classSelection='') {
    return {
        type: SET_CLASS,
        payload: {
            classSelection 
        }
    }
}

export function setName(name) {
    return {
        type: SET_NAME,
        payload: {
            name
        }
    }
}

export function setHalfElfBonusStats(halfElfBonusStats) {
    return {
        type: SET_HALFELFBONUSSTATS,
        payload: {
            halfElfBonusStats
        }
    }
}

export function resetHalfElfBonusStats(halfElfBonusStats) {
    return {
        type: RESET_HALFELFBONUSSTATS,
        payload: {
            halfElfBonusStats
        }
    }
}

export function setStatCalc(statName, pointValue){
    return {
        type: SET_STATCALC,
        payload: {
            statName,
            pointValue
        }
    }
}

export function setStatSubmitted(statSubmitted){
    return {
        type: SET_STATSUBMITTED,
        payload: {
            statSubmitted
        }
    }
}

export function setDex(dex) {
    return {    
        type: SET_DEX,
        payload: {
            dex
        }
    }
}
export function setCon(con) {
    return {
        type: SET_CON,
        payload: {
            con
        }
    }
}
export function setWis(wis) {
    return {
        type: SET_WIS,
        payload: {
            wis
        }
    }
}
export function setInt(int) {
    return {
        type: SET_INT,
        payload: {
            int
        }
    }
}
export function setCha(cha) {
    return {
        type: SET_CHA,
        payload: {
            cha
        }
    }
}