export const defaultAction = () => (dispatch) => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_default_action",
  });
};
