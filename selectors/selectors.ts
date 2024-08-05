export const homePageSelectors = {
  joinUsBanner: 'text="Join Us Today"',
  signInLink: 'role=link[name="Sign In"]',
};

export const loginPageSelectors = {
  usernameField: '[placeholder="Username"]',
  passwordField: '[placeholder="Password"]',
  errorMessage: "#claimVerificationServerError",
  dashboardHeader: 'h1:has-text("Dashboard")',
};

export const forgotPasswordPageSelectors = {
  forgotPasswordLink: 'role=link[name="Forgot password?"]',
  goBackToSignInLink: 'role=link[name="Go back to sign in"]',
};

export const createAccountPageSelectors = {
  createAccountLabel: 'label[for="CREATE AN ACCOUNT"]',
  alreadyHaveAccountText: 'text="Already have an account"',
};
