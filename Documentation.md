# Assignment 1

## Module Name: SDLMS Login Page

### Testing Approach

**Objective:** The objective of this testing approach is to verify the login and user authentication process of the SDLMS, including successful login, unsuccessful login attempts, validation of error messages, and the redirection to the password reset page when clicking "Forgot Password."

**Test Environment and Tools used:**

1. Node Js: For JavaScript
2. TestCafe: To automate the test cases written for the login page of SDLMS.

### Testing Performed

1. Functional Testing:
   - Error handling Coverage
2. Non-Functional Testing:
   - Cross-Browser Testing (Browsers tested: Chrome, Firefox, Edge)

### Test Scenarios & Cases

#### Test Scenario 1: Test successful Login with valid Credentials

**Test Cases:**

1. Verify that the user is able to enter the Username in the username field.
2. Verify that the user is able to enter the email in the email field.
3. Verify that the user is able to enter the Password in the password field.
4. Verify that the User is able to click the Login button.
5. Verify that the user lands on the dashboard after successful login.

#### Test Scenario 2: Test Unsuccessful login attempts with invalid credentials

**Test Cases:**

1. Verify that an error message is displayed when the user is trying to login with invalid username/email & password.
2. Verify the user is not able to login with an empty username/email field.
3. Verify that the user is not able to login with an empty password field.
4. Verify that an error message is displayed when the user is trying to login with an empty username/email field.
5. Verify that an error message is displayed when the user tries to login with an empty password field.

### Challenges Faced During Testing

1. Element was not visible during script execution and throws an error.

   **Solution:** I used implicit wait to wait for the element to be visible.

2. Selecting the correct HTML element using TestCafe selectors.

   **Solution:** I was using an XPath selector to identify the elements, then later I understood that I should use a CSS selector to fetch the element.

3. While cross-browser testing, I was facing problems with browser drivers and configuring the `test.login.js`.

   **Solution:** I installed the browser providers, and then the browser problem was solved. Then I used the direct path of the JS file present in the directory, and the configuration problem was also solved.

### Test Summary Report

| Test ID                                                      | Test Cases                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Expected Result                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Actual Result                                                                                                                                                                                                                                                                                                                                                                                                        | Status                                                                                                           |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 1.Test successful Login with valid Credentials.              | 1\. Verify that user is able to enter Username/email in username field.<br><br><br>2\. Verify that user is able to enter Password in password field.<br><br>3\. Verify that  User is able to click the Login button.<br><br>4\. Verify that user is landing on dashboard after successful login.                                                                                                                                                                                                          | User should be able to enter the username/email in username field.<br><br><br>User should be able to enter the password in password field.<br><br>User should be able to click the login button.<br><br>User should land on the dashboard page after successful login.                                                                                                                                                                                                | User is able to enter the username/email in username field.<br><br>User is able to enter the password in password field.<br><br>User is be able to click the login button.<br><br>User is landing on the dashboard page after successful login.                                                                                                                                                                      | Pass<br><br><br><br><br>Pass<br><br><br><br>Pass<br><br><br>Pass                                                 |
| 2.Test Unsuccessful login attempts with invalid credentials. | 1\. Verify that error message is displayed when user is trying to login with invalid username/email & password.<br> <br>2\. Verify user is not able to login with empty username/ email field.<br><br><br>3\. Verify that  user is not able to login with empty password field.<br><br>4\. Verify that error message is displayed when user is trying to login with empty username/email field.<br><br>5\. Verify that error message is displayed when user tries to login with empty password field.<br> | Error message should be displayed when user is trying to login with invalid username/email & password.<br><br><br>User should be not able to login with empty username/email field.<br><br><br>User should be not able to login with empty password field.<br><br><br>Error message should be displayed when user is trying to login with empty username/email field.<br><br>Error message should be displayed when user is tries to login with empty password field. | Error message is displayed when user is trying to login with invalid username/email & password.<br><br>User is not able to login with empty username/email field.<br><br>User is not able to login with empty password field.<br><br>Error message is displayed when user is trying to login with empty username/email field.<br><br>Error message is displayed when user  tries to login with empty password field. | Pass<br><br><br><br><br><br><br>Pass<br><br><br><br><br><br>Pass<br><br><br><br><br>Pass<br><br><br><br><br>Pass |
