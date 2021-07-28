import { getDataAPI, postDataAPI } from "../../API/fetchData";
import { GLOBALTYPES } from "./globalTypes";

export const POST_TYPES = {
  CREATE_POST: "CREATE_POST",
  LOADING_POST: "LOADING_POST",
  GET_POSTS: "GET_POSTS",
  GET_POST: "GET_POST",
};

export const createNewsPost = (data) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await postDataAPI("createNewsPost", data);

    dispatch({
      type: POST_TYPES.CREATE_POST,
      payload: { ...res.data },
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { err },
    });
  }
};

export const allPost = (token) => async (dispatch) => {
  try {
    dispatch({ type: POST_TYPES.LOADING_POST, payload: true });
    const res = await getDataAPI("allPost", token);

    dispatch({
      type: POST_TYPES.GET_POSTS,
      payload: { ...res },
    });
    dispatch({ type: POST_TYPES.LOADING_POST, payload: false });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { err },
    });
  }
};

export const singlePost =
  ({ id }) =>
  async (dispatch) => {
    try {
      const res = await getDataAPI(`post/${id}`);
      // console.log(id);
      dispatch({
        type: POST_TYPES.GET_POST,
        payload: {
          data: res.data,
        },
      });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { err },
      });
    }
  };
