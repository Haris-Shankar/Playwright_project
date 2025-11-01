import { test, expect } from '@playwright/test';
import RegisterPage from '../public/src/RegisterPage';

 const registerpageobj = new RegisterPage();

test('has title', async ({ page }) => {
  await page.goto('https://bolt.playrealbrokerage.com/register');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Registration - Bolt/);
});

test('checking registration with details ', async ({ page }) => {
  try{
  await page.goto('https://bolt.playrealbrokerage.com/login');
  await page.locator("//p[text()='Join Real']").click();
  if (page.title == "Registration - Bolt"){
     registerpageobj.fillingDetailsInRegistrationPage();
     registerpageobj.selectingTermsAndConditions();
     registerpageobj.clickingCreateButton();
  }
}
  catch(error){
    console.log("Unexcepted Error Occured");
    throw error 3
  }


 }
);


 

