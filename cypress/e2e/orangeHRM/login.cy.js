import baseLogin from "../../support/PageObjectModel/loginPage.cy"
//import employeePage from "../../support/PageObjectModel/employeePage.cy"

const LOGIN_DATA = require("../../fixtures/loginData.json")

describe('Login account', () => {
  const BASE_LOGIN = new baseLogin
  it('Login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    BASE_LOGIN.inputUsername(LOGIN_DATA.validUser)
    BASE_LOGIN.inputPassword(LOGIN_DATA.validPassword)
    BASE_LOGIN.clickLogin()
    BASE_LOGIN.verifyDahsboard()
    BASE_LOGIN.profile()
    BASE_LOGIN.logoutBtn()
  })

  it('Login failed incorrect credential', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    BASE_LOGIN.inputUsername(LOGIN_DATA.invalidUser)
    BASE_LOGIN.inputPassword(LOGIN_DATA.invalidPassword)
    BASE_LOGIN.clickLogin()
    BASE_LOGIN.alertWrong()
  })

  
})