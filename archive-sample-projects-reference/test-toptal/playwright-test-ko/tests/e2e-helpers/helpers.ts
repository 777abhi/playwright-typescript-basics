export async function extractCredentials(page) {
    const credentialDetailsElements = await page.locator('.col-md-10');
    console.log(await credentialDetailsElements.first().innerText());
    let emailPassword = await credentialDetailsElements.first().innerText();
    emailPassword = emailPassword.replace('Email','')
    emailPassword = emailPassword.replace('Password','')
    let emailPasswordArray = emailPassword.split('\n');
    return [emailPasswordArray[0].trim(), emailPasswordArray[1].trim()]
}