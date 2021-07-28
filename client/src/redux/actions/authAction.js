import { postDataAPI } from '../../API/fetchData'
import { GLOBALTYPES } from './globalTypes'
// export const TYPES = {
//     AUTH:'AUTH'
// } 

export const login = (data) => async(dispatch) => {
    try {
        dispatch({ type:GLOBALTYPES.ALERT, payload:{loading:true}})
        const res = await postDataAPI('login', data)
   
        // console.log(res)

        dispatch({
            type:GLOBALTYPES.AUTH,
            payload:{
                token:res.data.access_token,
                // user:res.data.user
                username: res.data.user.username,
                id: res.data.user._id,
                email:res.data.user.email
            }
            
        })
        
        localStorage.setItem("firstLogin",true)
        dispatch({
            type:GLOBALTYPES.ALERT,
            payload:{
                success:res.data.msg
            }
        })
    }catch (err) {
        dispatch({
            type:GLOBALTYPES.ALERT,
            payload:{
                error:err.response.data.msg
            }
        })

    }
}

// export const refreshToken = () => async (dispatch) => {
//     const firstLogin = localStorage.getItem("firstLogin")
//     if(firstLogin){
//         dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
//         try{
//             const res = await postDataAPI('refresh_token')
//             dispatch({
//                 type:GLOBALTYPES.AUTH,
//                 payload:{
//                     token:res.data.access_token,
//                     user:res.data.user
//                 }
//             })
//             dispatch({ type:GLOBALTYPES.ALERT, payload:{}})
//         }catch(err) {
//             dispatch({
//                 type:GLOBALTYPES.ALERT,
//                 payload:{
//                     error:err.response.data.msg
//                 }
//             })
//         }
//     }
// }


export const refreshToken = () => async (dispatch) => {
    const firstLogin = localStorage.getItem("firstLogin")
    if(firstLogin){
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })

        try {
            const res = await postDataAPI('refresh_token')
            dispatch({ 
                type: GLOBALTYPES.AUTH, 
                payload: {
                    token: res.data.access_token,
                    // user: res.data.user,
                    username: res.data.user.username,
                    id: res.data.user._id,
                    email:res.data.user.email
                } 
            })

            dispatch({ type: GLOBALTYPES.ALERT, payload: {} })

        } catch (err) {
            dispatch({ 
                type: GLOBALTYPES.ALERT, 
                payload: {
                    error: err.response.data.msg
                } 
            })
        }
    }
}

export const register = (data) => async (dispatch) => {
    try{
        dispatch({ type:GLOBALTYPES.ALERT, payload:{loading:true}})
        const res = await postDataAPI('register', data)
        dispatch({
            type:GLOBALTYPES.AUTH,
            payload:{
                token:res.data.access_token,
                // user:res.data.user
                username: res.data.user.username,
                id: res.data.user._id,
                email:res.data.user.email
            }
        })
        localStorage.setItem("firstLogin",true)
    }catch(err){
        dispatch({
            type:GLOBALTYPES.ALERT,
            payload:{
                error:err.response.data.msg
            }
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('firstLogin')
        await postDataAPI('logout')
        window.location.href = "/"
    } catch (err) {
        dispatch({ 
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: err.response.data.msg
            } 
        })
    }
}