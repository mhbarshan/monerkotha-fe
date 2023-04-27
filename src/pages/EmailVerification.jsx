import { Link } from "react-router-dom";

export default function EmailVerification() {
  return (
    <div className="auth">
      <h1>Verify your email first!</h1>
      <form>
        <label>
          Check your registered Email to get the verification code:{" "}
        </label>
        <input
          required
          type="text"
          placeholder="Verification code"
          name="code"
        />
        <button>Submit</button>
        <span>
          Do you have any account? <Link to="/login">Login</Link> Here!
        </span>
      </form>
    </div>
  );
}
