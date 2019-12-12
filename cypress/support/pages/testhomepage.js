class Test_Homepage{
    getloginusername(){
        return cy.get('#username')
    }
    getloginpassword(){
        return cy.get('#password')
    }
    getloginbutton(){
        return cy.get('#login_button')
    }
    getrequesttype(){
        return cy.get('#request_type')
    }
    getrspselector(){
        return cy.get('#rsp_code')
    }
    getrspordernumber(){
        return cy.get('#rsp_order_number')
    }
}
export default Test_Homepage