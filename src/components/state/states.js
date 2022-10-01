
import {createGlobalState} from "react-hooks-global-state"

const {setGlobalState, useGlobalState} = createGlobalState({
data:[],
sdata:[],
location:{}
})

export {setGlobalState, useGlobalState}