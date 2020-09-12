import * as ActionTypes from './ActionTypes';

export const InitialFeedback={
    firstname:'',
    lastname:'',
    telnum:'',
    email:'',
    agree:'',
    contactType:'',
    message:''
};


export const addFeedback=(state={feedback:[]},action)=>{
    switch(action.type){
        case ActionTypes.ADD_FEEDBACK:
            
            return {...state,feedback:state.feedback.concat(action.payload)};
        default: 
            return state;
    }
}