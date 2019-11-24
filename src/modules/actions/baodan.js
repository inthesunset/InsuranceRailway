import { ADD_BAODAN, DELETE_BAODAN, TOGGLE_BAODAN} from '../types/baodan';
let baodan_index = 0;

export const add_baodan = (baodan_data) => ({
  type: ADD_BAODAN,
  payload: {
    baodan_data: baodan_data,
    baodan_id: ++baodan_index,
  }
});

export const delete_baodan = (baodan_id) => ({
  type: DELETE_BAODAN,
  payload: baodan_id,
});

export const toggle_baodan = (baodan_id) => ({
  type: TOGGLE_BAODAN,
  payload: baodan_id,
});
