import * as types from "./type"

const init={
   loading:false,
   error:false,
   tableData:[],
   totalRecords:0,
   

}

export const reducer = (state=init,{type,payload})=>{

    switch(type){
        
        case types.LOADING:
            return {
                ...state,
                loading:true
            } 
        case types.TRANSACTIONS_SUCCESS:
            return {
                ...state,
                loading:false,
                tableData:payload.data,
                totalRecords:payload.totalRecords
            }  
        case types.ERROR :
            return {
                ...state,
                loading:false,
                error:true
            }     
        default:
            return state
    }

}