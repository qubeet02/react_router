import { Link } from "react-router-dom"

import "./Users.css"
import users from '../../users'

const Users = () => {

    const markup = user => <div className="user"><Link key={user.id} to={`/users/${user.id}`}> {user.name} </Link></div>

    return (
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" alt="" />
            <h2>Users</h2>
            <div className="users-wrapper">
                {users.map(user => markup(user))}
            </div>
        </div>
    )

}

export default Users