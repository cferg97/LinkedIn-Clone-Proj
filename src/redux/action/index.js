export const EDIT_PROFILE = "EDIT_PROFILE";
export const PROFILE_DETAILS = "PROFILE_DETAILS";
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2Zjk2NGM5NmRmYjAwMTUyMWE1YzAiLCJpYXQiOjE2NzA4Mzg2MjgsImV4cCI6MTY3MjA0ODIyOH0.S8B9Q1xNG-Qhgqc_VaASpoD_zvjiPjV0ZU2__qRPBEI",
  },
};
export const getProfile = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        options
      );
      if (response.ok) {
        const fetchedData = await response.json();
        console.log(fetchedData);
        dispatch({
          type: PROFILE_DETAILS,
          payload: fetchedData,
        });
      } else {
        console.log("error");
      }
    } catch (erro) {
      console.log("woohs nothing is found");
    }
  };
};

export const updateProfile = (changeVaules) => {
  const option = {
    method: "PUT",
    body: JSON.stringify(changeVaules),

    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2Zjk2NGM5NmRmYjAwMTUyMWE1YzAiLCJpYXQiOjE2NzA4Mzg2MjgsImV4cCI6MTY3MjA0ODIyOH0.S8B9Q1xNG-Qhgqc_VaASpoD_zvjiPjV0ZU2__qRPBEI",
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile",
        option
      );
      if (response.ok) {
        console.log(response);
      } else {
        console.log("error");
      }
    } catch (erro) {
      console.log("woohs nothing is found");
    }
  };
};
