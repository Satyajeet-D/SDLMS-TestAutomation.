# Testing Approach for SDLMS Login and Password Reset

## Objective

The objective of this testing approach is to verify the login and user authentication process of the SDLMS, including successful login, unsuccessful login attempts, validation of error messages, and the redirection to the password reset page when clicking "Forgot Password."

## Test Environment Setup

1. Set up a local Node.js environment with a recommended, newer Node.js version.

2. Install TestCafe globally using the Node Package Manager (NPM):

>> npm install -g testcafe


## Test Cases

### Test Case 1: Test Successful Login with Valid Credentials

- **Scenario**: Verify that a user can log in successfully with valid credentials.
- **Steps**:
1. Navigate to the SDLMS login page.
2. Enter valid username and password.
3. Click the login button.
4. Verify that the user is redirected to the dashboard screen.
- **Assertions**:
- The dashboard screen should be displayed.

### Test Case 2: Test Unsuccessful Login Attempts with Invalid Credentials

- **Scenario**: Verify that a user cannot log in with invalid credentials.
- **Steps**:
1. Navigate to the SDLMS login page.
2. Enter invalid username and password.
3. Click the login button.
- **Assertions**:
- An error message should be displayed indicating unsuccessful login.

### Test Case 3: Validate Error Messages for Invalid Login Attempts

- **Scenario**: Verify that appropriate error messages are displayed for invalid login attempts.
- **Steps**:
1. Navigate to the SDLMS login page.
2. Leave both username and password fields empty.
3. Click the login button.
- **Assertions**:
- Error messages for both username and password should be displayed.

### Test Case 4: Verify Redirection to Password Reset Page

- **Scenario**: Verify that the user is redirected to the password reset page when clicking "Forgot Password."
- **Steps**:
1. Navigate to the SDLMS login page.
2. Click the "Forgot Password" link.
- **Assertions**:
- The user should be on the password reset page.

## Cross-Browser Testing

**Browser versions used**:
1. Chrome (115.0)
2. Firefox (115.0)

1. Configure the TestCafe tests to run on at least two different browsers (e.g., Chrome and Firefox).
2. Run the test cases and validate if processes work consistently across the chosen browsers.

## Challenges Faced During Testing and Solutions

**Challenge 1**: Identifying and selecting the correct HTML elements using TestCafe selectors.

- **Solution**: Inspect the HTML structure of the SDLMS login page and use appropriate selectors such as `Selector('input[name="username"]')` to target specific elements.

**Challenge 2**: Verifying page title when navigating to the password reset page.

- **Solution**: Use `t.eval(() => document.title)` to extract the current page title and compare it to the expected title.

**Challenge 3**: Ensuring consistent test execution across different browsers.

- **Solution**: Configure cross-browser testing with TestCafe by specifying multiple browsers in the test command (e.g., `testcafe chrome,firefox login.test.js`). Verify that tests run successfully on each browser.

## Conclusion

The testing approach outlined above covers the SDLMS login and password reset functionality comprehensively. By documenting test cases, challenges, and solutions, I ensure a clear and organized approach to testing the SDLMS. This approach allows for effective verification of user authentication and redirection processes.
