import { Selector } from 'testcafe';

fixture`SDLMS Login`.page`https://beta.deepthought.education/login`;

test('User can log in successfully with valid credentials', async (t) => {
    const usernameInput = Selector('input[name="username"]');
    const passwordInput = Selector('input[name="password"]');
    const loginButton = Selector('button#login');
    const dashboardHeading = Selector('header.sdlms-header-section');

    await t
        .typeText(usernameInput, 'Test1')
        .typeText(passwordInput, 'Test#111')
        .click(loginButton);

    await t.expect(dashboardHeading.exists).ok('Dashboard heading not found');
});

test('User cannot log in with invalid credentials', async (t) => {
    const usernameInput = Selector('input[name="username"]');
    const passwordInput = Selector('input[name="password"]');
    const loginButton = Selector('button#login');
    const errorMessage = Selector('div#login-error-notify');

    await t
        .typeText(usernameInput, 'Test2')
        .typeText(passwordInput, 'Test123')
        .click(loginButton);

    await t.expect(errorMessage.exists).ok('Error message not found');
});

test('User cannot log in with empty username and password', async (t) => {
    const usernameInput = Selector('input[name="username"]');
    const passwordInput = Selector('input[name="password"]');
    const loginButton = Selector('button#login');
    const usernameError = Selector('div#login-error-notify');
    const passwordError = Selector('div#login-error-notify');

    await t.click(loginButton);

    await t.expect(usernameError.exists).ok('Username error message not found');
    await t.expect(passwordError.exists).ok('Password error message not found');
});

test('User is redirected to password reset page when clicking "Forgot Password"', async (t) => {
    const forgotPasswordLink = Selector('a[id="reset-link"]');
  

    await t.click(forgotPasswordLink);
    
    await t.wait(2000);
    
    const title = await t.eval(() => document.title);

    await t.expect(title).eql('Reset your account password | DeepThought');
});
