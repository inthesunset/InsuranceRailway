import { ADD_BAODAN, DELETE_BAODAN, TOGGLE_BAODAN } from '../types/baodan';
const initialState = {
  baodan: [],
  baodan_ids: [],
};


const baodan = (state = initialState, action) => {
  switch (action.type){
    case ADD_BAODAN: {
      return {
        baodan_ids: [...state.baodan_ids, action.payload.baodan_id],
        baodan: [...state.baodan, {...action.payload.baodan_data, baodan_id:action.payload.baodan_id}],
      };
    }
    case DELETE_BAODAN: {
      var id_index = state.baodan_ids.indexOf(action.payload);
      return {
        baodan_ids: [...state.baodan_ids.slice(0, id_index), ...state.baodan_ids.slice(id_index+1,)],
        baodan: [...state.baodan.slice(0, id_index), ...state.baodan.slice(id_index+1,)],
      };
    }
    case TOGGLE_BAODAN: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default baodan;
