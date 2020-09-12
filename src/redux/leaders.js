import {LEADERS} from '../shared/leaders';
import * as ActionTypes from './ActionTypes';

export const Leaders=(state={leaders:LEADERS,errMess:null,isLoading:true},action)=>{
   
    switch(action.type){
        case ActionTypes.LEADERS_LOADING:
            return {...state,leaders:LEADERS,isLoading:true,errMess:null};
        case ActionTypes.ADD_LEADERS:
            return {...state,leaders:action.payload,isLoading:false,errMess:null};
        case ActionTypes.LEADERS_FAILED:
            return {...state,isLoading:false,errMess:action.payload};
        default: return state;
    }

};