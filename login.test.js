import { Selector } from 'testcafe';

fixture`SDLMS Login`.page`https://beta.deepthought.education/login`;


test('user is able to enter Username in username field', async (t) => {
    const usernameInput = Selector('input[name="username"]');

	await t
        .typeText(usernameInput, 'Test2')
    
    await t.expect(usernameInput.exists).ok('Username field is inactive');
    
    
    });  
    
test( 'user is able to enter Password in Password field', async (t) =>{ 
	
    const passwordInput = Selector('input[name="password"]');
    
    await t
    	.typeText(passwordInput, 'Test123')
    
    await t.expect(passwordInput.exists).ok('Password field is inactive');
	
	
	});
	
	
test('User is able to click the login button', async (t) =>{
	
	 const loginButton = Selector('button#login');
	 
	 await t.expect(loginButton.hasAttribute('disabled')).notOk('Login button is clickable');
	
});


test('User can log in successfully with valid credentials', async (t) => {
    const usernameInput = Selector('input[name="username"]');
    const passwordInput = Selector('input[name="password"]');
    const loginButton = Selector('button#login');

    await t
        .typeText(usernameInput, 'Test1')
        .typeText(passwordInput, 'Test#111')
        .click(loginButton);

});


test('User is landing on dashboard after successful login', async (t) =>{
	
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
    
    
test('User is not able to login with empty username field and error message is displayed', async(t) => {
	
	
    const passwordInput = Selector('input[name="password"]');
    const loginButton = Selector('button#login');
    const errorMessage = Selector('div#login-error-notify');

    await t
    
        .typeText(passwordInput, 'Test123')
        .click(loginButton);

    await t.expect(errorMessage.exists).ok('Error message not found');
	
	
	});
	
test('User is not able to login with empty password field and error message is displayed', async(t) => {
	
	
    const usernameInput = Selector('input[name="username"]');
    const loginButton = Selector('button#login');
    const errorMessage = Selector('div#login-error-notify');

    await t
    
        .typeText(usernameInput, 'Test2')
        .click(loginButton);

    await t.expect(errorMessage.exists).ok('Error message not found');
	
	
	});    
    


test('error message is displayed when user is trying to login with invalid username/email & password', async(t) => {
	
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


