import axios from "axios"
import * as types from "./type"

export const getTransactions= (month=3,search="m",page,limit=10)=>async(dispatch)=>{
    // console.log(month)
    dispatch({type:types.LOADING})
    //https://s3.amazonaws.com/roxiler.com/product_transaction.json
    try {
        const resp = await axios.get(`https://roxilerbackend.onrender.com/product?month=${month}&search=${search}&page=${page}&per_page=${limit}`)
        // console.log(resp?.data)
        dispatch({type:types.TRANSACTIONS_SUCCESS,payload:resp?.data})
    } catch (error) {
        dispatch({type:types.ERROR})
        
    }

}



