import {test,page} from '@playwright/test'


export default class default RegisterPage{

readonly page:Page

    firstName : String;
    lastName : String;
    userName : String;
    email : String;
    country : String;
    password : String;
    passwordConfirmation  : String;

    constructor(){

        this.firstName = "Hari" ;
        this.lastName = "Shankar";
        this.userName = "Hari";
        this.email = "harishankar@gmail.com";
        this.country = "India";
        this. password = "Test@123";
        this.passwordConfirmation = "Test@123";

    

    }

    async fillingDetailsInRegistrationPage() ){

        try{

            await this.page.locator("//input[@name='firstName']").fill(this.firstName);
            await this.page.locator("//input[@name='lastName']").fill(this.lastName);
            await this.page.locator("//input[@name='username']").fill(this.userName);
            await this.page.locator("//input[@name='emailAddress']").fill(this.email);
            await this.page.locator("//input[@name='username']").fill(this.country);
            await this.page.locator("//input[@name='emailAddress']").fill(this.password);
            await this.page.locator("//input[@name='emailAddress']").fill(this.passwordConfirmation);
            
        }catch(error){
            console.log("Error has occurred while filling registration details ", error);
            throw error
        }
    }

    async selectingTermsAndConditions(){
        try{
            const termsConfirmation = this.page.locator("//input[@name='terms']");
            const permissionConfirmation = this.page.locator("//input[@name='permission']");

            const termscheckboxcondition = termsConfirmation.Isenabled();
            const permissioncheckboxConfirmation =permissionConfirmation.Isenabled();
            if(termscondition === false){
                termsConfirmation.click();
                
            }
            if (permissionConfirmation === false){
                permissionConfirmation.click();
            }



        }catch(error){
                        console.log("Error has occurred while accepting terms and permissions ", error);
            throw error
        }
    }

    async clickingCreateButton(){
        try{
         await this.page.locator("//span[normalize-space(text())='Create Account']").click();
        }catch(error){
                        console.log("Error has occurred while accepting terms and permissions ", error);
            throw error
        }

    }
}

        



    




}
