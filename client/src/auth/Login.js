import React,{ useState } from 'react'
import { Link } from "react-router-dom"
import { login } from '../redux/actions/authAction'
import { useDispatch } from 'react-redux'
import Notify from './Notify'

const Login = () => {
    const dispatch = useDispatch()
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(({email,password}))
        dispatch(login({email,password}))
    };
    // const initialState = { email: '', password: '' }
    // const [userData, setUserData] = useState(initialState)
    // const { email, password } = userData

    // const [typePass, setTypePass] = useState(false)

    // const { auth } = useSelector(state => state)
    // const dispatch = useDispatch()
    // const history = useHistory()

    // useEffect(() => {
    //     if(auth.token) history.push("/")
    // }, [auth.token, history])

    // const handleChangeInput = e => {
    //     const { name, value } = e.target
    //     setUserData({...userData, [name]:value})
    // }

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     dispatch(login(email,password))
    // }

    return (
        <div className="relative">
        <div  className="flex flex-col items-center justify-center h-96 mt-36 font-mono">
            <span className="text-blue-700 text-6xl">Login</span>
            <form className="flex flex-col justify-center mt-8" onSubmit={handleSubmit}>
                <label className="text-green-600 text-3xl justify-center flex mt-8">Username</label>
                <input className="w-80 bg-gray-200 rounded-md py-2 pl-2 mt-2"   type="email"
                onChange={(e) => setEmail(e.target.value)}
                // onChange={handleChangeInput}
                //  value ={email}
                />
                <label className="text-green-600 text-3xl flex justify-center mt-6">Password</label>
                <input className="w-80 rounded-md py-2 pl-2 mt-2"  type="password"
                 onChange={(e) => setPassword(e.target.value)}
                // onChange={handleChangeInput} value= {password} 
                />
                <button className="p-2 mt-8 bg-green-800 rounded-md w-28    disabled:opacity-50" type="submit" >Login</button>
            </form>
            <Notify />
        </div>
        <button className="  bg-green-800 rounded-md w-28 absolute top-1 right-2 p-2 text-xl text-blue-300"><Link to="/register">Register</Link></button>
        </div>
    )
}

export default Login

