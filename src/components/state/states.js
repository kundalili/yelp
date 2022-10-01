
import {createGlobalState} from "react-hooks-global-state"

const {setGlobalState, useGlobalState} = createGlobalState({
data:[],
sdata:[]
})

export {setGlobalState, useGlobalState}