///<reference types="cypress" />
import { login } from "../POM/login"

let loginNew = new login()

describe('Login functionality', () => {
  beforeEach(() => {
    loginNew.navigation()
  })
  it('TC-01 Valid login credentials', () => {
    loginNew.loginCredential('testbams@gmail.com', 'facegenie')
    loginNew.validateLogo()
    loginNew.logout()
    loginNew.validDateLogout()
  });

  it('TC-02 Invalid login credentials with wrong password', () => {
    loginNew.loginCredential('testbams@gmail.com','facegenie14')
    loginNew.wrongPass()
  });

  it('TC-03 Invalid login credentials with wrong email', () => {
    loginNew.loginCredential("abcd@gmail.com","facegenie")
    loginNew.userNotFound()
  });
})