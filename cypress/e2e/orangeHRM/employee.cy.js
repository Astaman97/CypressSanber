import employeePage from "../../support/PageObjectModel/employeePage.cy"


describe('Add employee', () => {
    const EMPLOYEE = new employeePage
    it('Add Employee success', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      BASE_LOGIN.inputUsername(LOGIN_DATA.validUser)
      BASE_LOGIN.inputPassword(LOGIN_DATA.validPassword)
      BASE_LOGIN.clickLogin()
      BASE_LOGIN.verifyDahsboard()
      BASE_LOGIN.profile()
      BASE_LOGIN.logoutBtn()
    })
})