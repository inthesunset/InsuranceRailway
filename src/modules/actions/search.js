import { ADD_SEARCH_CONDITION, ADD_FILTER_SEARCH_RESULT, SELECTED_BAODAN_AFTER_FILTER } from '../types/search';

export const add_search_condition = (search_condition) => ({
  type: ADD_SEARCH_CONDITION,
  payload: {
    search_condition: search_condition,
  }
});

export const add_filter_search_result = (result) => ({
  type: ADD_FILTER_SEARCH_RESULT,
  payload: {
    search_result: result,
  }
});

export const selected_baodan_after_filter = (baodan) => ({
  type: SELECTED_BAODAN_AFTER_FILTER,
  payload: {
    selected_baodan: baodan,
  }
});
