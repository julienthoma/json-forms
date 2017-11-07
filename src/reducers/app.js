import * as actions from '../actions';

export default (state = {}, { type, payload, error }) => {
  switch (type) {
    case actions.UPDATE_FIELD:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.field]: {
            ...state.data[payload.field],
            value: payload.value
          }
        }
      }

    default:
      return state;
  }
};
