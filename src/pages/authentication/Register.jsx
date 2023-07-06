import '../../auth.css'
import { Link } from 'react-router-dom'
import BackButton from '../../components/authentication/BackButton'
const Register = () => {
  return (
    <main className="auth-wrapper flex">
    <BackButton />
    <div className="auth-div flex">
    <h2><u>REGISTER</u></h2>
    <input type="text" className="input" placeholder="Username" />
    <input type="email"  className="input" placeholder="email"/>
    <input type="password" className="input" placeholder="Password"/>
    <input type="password" className="input" placeholder="Confirm password"/>
    <button>Sign up</button>
    <p>Already have an account? Log in <Link to="/auth/Login">here</Link></p>
    </div>
    </main>
  )
}

export default Register