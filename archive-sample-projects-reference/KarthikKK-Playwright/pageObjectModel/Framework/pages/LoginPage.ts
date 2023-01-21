import {Page} from '@playwright/test'

class LoginPage {

    Page: Page

    /**
     *
     */
    constructor(page:Page) {
        this.Page = page;
    }


    //All the UI elements of the Page
    lnkLogin = async() => this.Page.$('text="Login"');
    txtUserName = async() => this.Page.$('input[name="UserName"]');
    txtPassword = async () => this.Page.$('input[name="Password"]');
    btnSubmit = async () => this.Page.$('input[type="submit"]');


    public async ClickLogin() {
        await (await this.lnkLogin()).click();
    }

    public async Login(name: string, password: string) {
        await (await this.txtUserName()).type(name);
        await (await this.txtPassword()).type(password);
        await (await this.btnSubmit()).click();
    }

}

export {LoginPage}