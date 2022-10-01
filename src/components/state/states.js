
import {createGlobalState} from "react-hooks-global-state"

const {setGlobalState, useGlobalState} = createGlobalState({
data:[],
sdata:[],
location:{},
comments:[]
})

export {setGlobalState, useGlobalState}