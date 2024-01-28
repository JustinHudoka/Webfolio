import { useState } from "react"
import './styles.scss';
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <div className="signup_text-wrapper">
                <h3>Sign Up</h3>

                <label>Email:</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label>Password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <div className="signup_sign-up">
                    <button disabled={isLoading}>Sign Up</button>
                </div>
                {error && <div className="error">{error}</div>}
            </div>
        </form>
    )
}

export default Signup