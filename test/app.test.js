describe('Belajar Bareng Apps Login Automation', () => {

    after(async () => {
        await driver.terminateApp('com.example.belajar_bareng');
    });

    it('Should login successfully', async () => {
        console.log('✅ BelajarBarengApps opened successfully');

        let emailField = await $('android=new UiSelector().resourceId("email_input")');

        await emailField.waitForDisplayed({
            timeout: 10000
        });

        await emailField.click();
        await emailField.setValue('rafidashfr2@gmail.com');

        let passwordField = await $('android=new UiSelector().resourceId("password_input")');

        await passwordField.waitForDisplayed({
            timeout: 10000
        });

        await passwordField.click();
        await passwordField.setValue('bellaloca');

        let loginButton = await $('~Login');
        await loginButton.click();

        let loginNotification = await $('//android.view.View[@content-desc="Login berhasil"]');

        await loginNotification.waitForDisplayed({
            timeout: 10000
        });

        await expect(loginNotification).toBeDisplayed();

        console.log('Login successful and notification displayed');

        await browser.pause(3000);
    });
});