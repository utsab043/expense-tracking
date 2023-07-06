import { Link } from 'react-router-dom'
import '../../auth.css'
import BackButton from '../../components/authentication/BackButton'
export const Login = () => {
  return (
    <main className="auth-wrapper flex">
      <BackButton />
    <div className="auth-div flex">
        <h2><u>LOG IN</u></h2>
        <input type="text" className="input" placeholder="usename" />
        <input type="password" className="input"  placeholder="password"/>
        <button>Sign in</button>
        <p>No account? Create new one <Link to ="/auth/register">here</Link></p>
    </div>
      </main>
  )
}
