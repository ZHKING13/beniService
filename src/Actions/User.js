import axios from "axios";

export const loginUser =  (email,password)=>async (dispatch)=>{
  try {
    dispatch({
      type:"LoginRequest"
    })
    const {data} = await axios.post("/api/v1/login", {email,password},{
      headers:{
        "content-types":"application/json"
      }
    })
    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    })
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error,
    })
  }
}

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    })
    const {data} = await axios.get("api/v1/me")
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    })
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error,
    })
  }
}

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getUserRequest"
    })
    const {data} = axios.get("api/v1/find/"+id)
    dispatch({
      type: "getUserSuccess",
      payload: data.user,
    })
  } catch (error) {
    dispatch({
      type: "getUserFailure",
      payload: error,
    })
  }
}
