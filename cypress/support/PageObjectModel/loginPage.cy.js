class baseLogin {
    username = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    btnLogin = '.oxd-button'
    dropDownPofile = '.oxd-userdropdown-name'
    btnLogout = ':nth-child(4) > .oxd-userdropdown-link'
    dashboardTitle = '.oxd-topbar-header-breadcrumb > .oxd-text'
    alertWrongLogin = '.oxd-alert-content > .oxd-text'

    inputUsername(username){
        //cy.get(this.username).type(username)
        cy.input(this.username, username)
    }
    inputPassword(password){
        cy.input(this.password, password)
        //cy.get(this.password).type(password)
    }
    clickLogin(){
        cy.klik(this.btnLogin)
        //cy.get(this.btnLogin).click()
    }
    verifyDahsboard(){
        cy.get(this.dashboardTitle).should('contain.text', 'Dashboard')
    }
    profile(){
        cy.klik(this.dropDownPofile)
        //cy.get(this.dropDownPofile).click()
    }
    logoutBtn(){
        cy.get(this.btnLogout).should('contain.text', 'Logout')
    }
    alertWrong(){
        cy.get(this.alertWrongLogin).should('contain.text', 'Invalid credentials')
    }
}
export default baseLogin;