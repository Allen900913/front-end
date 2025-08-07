import React , {useContext} from 'react'
import { UserContext } from './ComponentA'

function ComponentD() {

    const name = useContext(UserContext);

    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>{name}</h2>
        </div>
    )
}

export default ComponentD