import * as ActionTypes from './ActionTypes';

export const Comments = (state = {comments:[],errMess:null}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state,errMess:null,comments:action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess:action.payload};
        case ActionTypes.COMMENTS_LOADING:
            return {...state, isLoading: true, errMess: null, comments:[]};
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return { ...state, comments: state.comments.concat(comment)};  
        default:
          return state;
      }
};