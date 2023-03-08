const LoginScreen = () => {
  return (
    <div className="LoginScreen">
      <p className="welcome-text">
        Log in to see upcoming events around the world for full-stack developers
      </p>
      <button
        className="google-btn"
        rel="nofollow noopener"
        onClick={() => {
          setShowWelcomeScreen(false);
        }}
      >
        <img
          className="google-icon"
          src="https://hamzatcf.github.io/meet/btn_google.png"
          alt="Google sign-in"
        />
        <span className="google-text">
          Sign in with Google
        </span>
      </button>
      <a
        href="https://hamzatcf.github.io/meet/privacy.html"
        rel="nofollow noopener"
      >
        Privacy policy
      </a>
    </div>
  )
}

export default LoginScreen;