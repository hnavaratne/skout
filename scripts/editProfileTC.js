/**
 * All tests related to gallery page is written in this test
 *
 * Author : Dhanushka 
 * Date : 2-19-2019
 * *
 */
describe('skout', function () {
    // 'use strict';
    const aboutMe = require('../pages/editProfile');
    const clickedit = require('../pages/editProfile');

    var common = require('../commonScripts/common');
    var buzzPage = require('../pages/buzzPage');
    var editProfile = require('../pages/editProfile');
    var aboutMe1 = 'Dhanushka';
    var name1 = 'Test Skout';
    var aboutMe2 = 'Test Skout with protractor';
    var height = '345'
    var relationshipStatus1 = 'S';
    
    it('should allow to access the page', function () {
        common.loginToApp();
        console.log('Identified the login and Navigated to the Home Page');
        browser.sleep(5000);
       
        editProfile.goMeetSomeOne();
        console.log('Clicked on Go Meet Someone');
        browser.sleep(5000);
       
        buzzPage.get();
        buzzPage.clickOnLink("My Profile");
        browser.sleep(5000);
        console.log('Navigated to My Profile');
        browser.sleep(5000);
    });

    it('should navigate to My Profile', function () {
        editProfile.Navigate_MyProfile(aboutMe1);
        expect(element(by.xpath('//p[@ng-bind="user.sex | gender | translate"]/..//*[text()="Male"]')).getText()).toMatch('Male');
        console.log('Discarded the changes back to read-only and Gender = Male');
        browser.sleep(5000);
    });

    it('should navigate BACK to My Profile & Edit', function () {
        editProfile.Navigate_Back_MyProfile(name1, aboutMe2, height, relationshipStatus1);
        expect(element(by.xpath('//p[@ng-bind="user.sex | gender | translate"]/..//*[text()="Male"]')).getText()).toMatch('Male');
        console.log('Updated the details and saved');
        browser.sleep(5000);
    });
});