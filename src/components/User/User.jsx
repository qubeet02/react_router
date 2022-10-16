import { useParams, Link } from "react-router-dom"
import "./User.css"
import users from '../../users'

const User = () => {
  const { id } = useParams()    
  return (
        <div>
            <img src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" />
            <h1>Hello! My name is <span>{users.find(user => user.id == id).name}</span></h1>
            <Link to='/users'>Back to all users</Link>
        </div>
    )

}

export default User
