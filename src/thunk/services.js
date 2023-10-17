import { getPost } from "../http/services";
import { onLoadTodos } from "../Redux/Actions";

export const getTodos = () => {
  return async (dispatch) => {
    try {
      const response = await getPost();
      console.log(response.data);
      dispatch(onLoadTodos(response.data));
    } catch (err) {
      console.log("error");
    }
  };
};
