import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const ACTIONS = {
    FETCH_DATA : 'fetch-data',
    GET_DATA : 'get-data',
    GOT_ERROR : 'got-error',
    HAS_NEXT : 'has-next'
}

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
const reducer = (state, action)=>{
    switch(action.type){
        case 'fetch-data' : return{
            ...state,
            loading : action.value
        }
        case 'get-data': return{
                ...state,
                loading : false,
                jobs : action.value
            }
        
        case 'got-error' : return{
            loading: false,
            error: true,
            jobs: [],
            msg : action.err
        }
        case 'has-next' : return{
            ...state,
            hasNext : action.value
        }
    }
}


export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, {loading : true, error : false, jobs : []})
    useEffect(()=>{
        const cancelToken1 = axios.CancelToken.source();
        dispatch({type : ACTIONS.FETCH_DATA, value : true})
        axios.get(BASE_URL, {
            cancelToken : cancelToken1.token,
            params : {
                markdown : true,
                page : page,
                ...params
            }
        }).then(res=>{
            dispatch({type : ACTIONS.GET_DATA, value : res.data})
        }).catch(err => {
            if(axios.isCancel(err)) return
            dispatch({type : ACTIONS.GOT_ERROR, value : err})
        })
        const cancelToken2 = axios.CancelToken.source();
        axios.get(BASE_URL, {
            cancelToken : cancelToken2.token,
            params : {
                markdown : true,
                page : page + 1,
                ...params
            }
        }).then(res=>{
            dispatch({type : ACTIONS.HAS_NEXT, value : res.data.length !== 0})
        }).catch(err => {
            if(axios.isCancel(err)) return
            dispatch({type : ACTIONS.GOT_ERROR, value : err})
        })
        return ()=>{
            cancelToken1.cancel();
            cancelToken2.cancel();
        }
    },[params,page])

    return (
        state
    )
}


