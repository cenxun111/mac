import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Notify = () => {
    const { alert }= useSelector(state => state)

    return (
        <div>
            {alert.loading && <h1 className="mt-8  text-2xl ">LOGINING...</h1>}
            {/* <h1>Notify</h1> */}
            {alert.error && <h1 className="mt-8  text-2xl ">email or passwrod aren't  correct</h1>}
            {alert.success && <h1 className="mt-8  text-2xl ">Login Success</h1>}
        </div>
    )
}

export default Notify
