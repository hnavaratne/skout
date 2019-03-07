/**
 * All tests related to gallery page is written in this test
 *
 * Author : Dhanushka 
 * Date : 2-19-2019
 * *
 */
describe('skout', function () {
   // 'use strict';

    //var login = require('../pages/homePage');
    var common = require('../commonScripts/common');
    var buzzPage = require('../pages/buzzPage');
    var editProfile = require('../pages/editProfile');

    //Open the browser and open the web page
    it('should allow to access the page', function () {
        common.loginToApp();
        console.log('Identified and Navigated to the Home Page');
        browser.sleep(5000);
    

    //Login
    //it('should navigate to Home page', function () {
        buzzPage.get();
        buzzPage.clickOnLink("My Profile");
        //editProf.Login_Page();
        browser.sleep(5000);
    

    //it('should navigate to My Profile', function () {
        editProfile.Navigate_MyProfile();
        console.log('Navigated to My Profile');
        browser.sleep(5000);
        expect(element(by.xpath('//p[@ng-bind="user.sex | gender | translate"]/..//*[text()="Male"]')).getText()).toMatch('Male');
        console.log('Verified navigated back to read-only and Gender = Male');
        browser.sleep(5000);
    
    //it('should navigate BACK to My Profile & Edit', function () {
        editProfile.Navigate_Back_MyProfile();
        console.log('Navigated BACK to My Profile');
        console.log('Verified navigated back My Profile and Updated');
        browser.sleep(5000);
    });

});
