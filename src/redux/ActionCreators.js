import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  return fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((err) => {
      dispatch(dishesFailed(err.message));
    });
};
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});
export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});
export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

// export const addComment = (dishId, rating, author, comment) => ({
//   type: ActionTypes.ADD_COMMENT,
//   payload: {
//     dishId: dishId,
//     rating: rating,
//     author: author,
//     comment: comment,
//   },
// });
export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((err) => {
      dispatch(commentsFailed(err.message));
    });
};
export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});
export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());
  return fetch(baseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((err) => {
      dispatch(promosFailed(err.message));
    });
};
export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});
export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});
export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});

//post comment actions
export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
    date: new Date().toISOString(),
  };
  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comment) => {
      dispatch(addComment(comment));
    })
    .catch((error) => {
      console.log("post comments", error.message);
      alert("Your comment could not be posted.Error:" + error.message);
    });
};
//
export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());
  return fetch(baseUrl + "leaders")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((leaders) => dispatch(addLeaders(leaders)))
    .catch((err) => {
      dispatch(leadersFailed(err.message));
    });
};
export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});
export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess,
});
export const addLeaders = (promos) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: promos,
});
