import { ADD_SEARCH_CONDITION, ADD_FILTER_SEARCH_RESULT, SELECTED_BAODAN_AFTER_FILTER } from '../types/search';
const initialState = {
  search_condition: {},
  search_result: [],
  selected_baodan: {},
};

const search = (state = initialState, action) => {
  switch (action.type){
    case ADD_SEARCH_CONDITION: {
      console.log("in reducer search add condition:"+ JSON.stringify(action.payload.search_condition));
      return {
        search_condition: action.payload.search_condition,
        search_result: state.search_result,
        selected_baodan: state.selected_baodan,
      };
    }
    case ADD_FILTER_SEARCH_RESULT: {
      console.log("in reducer search result:"+ JSON.stringify(action.payload.search_result));
      return {
        search_condition: state.search_condition,
        search_result: action.payload.search_result,
        selected_baodan: state.selected_baodan,
      }
    }
    case SELECTED_BAODAN_AFTER_FILTER: {
      return {
        search_condition: state.search_condition,
        search_result: state.search_result,
        selected_baodan: action.payload.selected_baodan,
      }
    }
    default: {
      return state;
    }
  }
}

export default search;
