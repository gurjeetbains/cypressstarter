/// <reference types="cypress" />
import ibss_homepage from '../../support/pages/testhomepage'
describe('Testing', function () {
     before(function () {
        cy.task('prepareaddressfile').then(function (data) {
            cy.writeFile('cypress/fixtures/address.json', data)
        })
        cy.fixture('example').then(function (formvalues) {
            this.formvalues = formvalues
        })
        // cy.fixture('testsand').then(function (formvalues) {
        //     this.formvalues = formvalues
        // })
        cy.fixture('address').then(function (addresses) {
            this.addresses = addresses
            this.addresskey = Object.keys(addresses)
        })
        cy.fixture('verification').then(function (verifications) {
            this.verifications = verifications
        })
    });
    it('The test cases here',function(){
        cy.visit(this.formvalues.test_url);
        cy.wait(1000);
        let homepage = new ibss_homepage();
        homepage.getloginusername().type(this.formvalues.test_id)
        homepage.getloginpassword().type(this.formvalues.test_password)
        homepage.getloginbutton().click()
        cy.writeFile('cypress/fixtures/validations.txt', this.addresskey[i], {
            flag: 'a+'
        })
        cy.writeFile('cypress/fixtures/validations.txt', ' boc ' + this.formvalues.boc[j], {
            flag: 'a+'
        })
        homepage.getrequesttype().should('be.visible')
        homepage.getrspselector().select(this.formvalues.rsp)
        let date = new Date();
        let timestamp = date.getUTCMilliseconds();
        homepage.getrspordernumber().type('SparkRSP' + timestamp);
        cy.get('#street_number').type(this.addresses[this.addresskey[i]].address_number);
        cy.get('#street_name').type(this.addresses[this.addresskey[i]].address_road);
        cy.get('#address_change').click();
        cy.wait(4000);
        cy.get('#modal-close').click();
        if (this.formvalues.boc[j] === 'Yes') {
            cy.get('#owner_consent_confirmed').select(this.formvalues.boc[j]);
        } else {
            cy.get('#owner_consent_confirmed').select(this.formvalues.boc[j]);
            cy.get('#building_owner_details').type('Testing')
        }  
    })
})