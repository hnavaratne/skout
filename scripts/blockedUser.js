'use strict';

var common = require('../commonScripts/common');
var blockUserPage = require('../pages/blockUserPage');
var interested = require('../pages/whoAreYouIntPage');
var interestPage=require('../pages/interestedPage.js');

// Data used for testing
var goMeetBtn = element(by.xpath('//*[text()="Go meet someone"]'));
var skoutLogo = element(by.xpath('//div[@data-emoji="Protractor Testing"]'));


describe('Blocked user scenarios',function(){
    it('Unblock sigle user', function(){
        //Login to application by entering username password and select the gender user interest
        common.loginToApp();
        browser.sleep(5000);
		expect(goMeetBtn.isPresent()).toBe(true);
		interested.interestWomen();
		browser.sleep(5000);
		expect(skoutLogo.isPresent()).toBe(true);
        browser.sleep(5000);

        //Block user through Interest page
        interestPage.navigatetoInterestedPage();
        var reqName = interestPage.requestUserName().getText();
        interestPage.blockUser();
        browser.sleep(5000);
        expect(interestPage.verifyBlockedUser().getText()).toEqual(reqName);
        
        //Unblock individual user
        reqName.then(function(reqNameString){
            console.log('Name of the blocked user is ' + reqNameString);
            blockUserPage.clickBlockedUserMenu();
            browser.sleep(5000);
            blockUserPage.clickToUnblockUser(reqNameString);
            expect(blockUserPage.checkBlockedUser(reqNameString).isPresent()).toBe(false);
        });
    });

    xit('Unblock all users',function(){
        //Login to application by entering username password and select the gender user interest
        common.loginToApp();
        browser.sleep(5000);
		expect(goMeetBtn.isPresent()).toBe(true);
		interested.interestWomen();
		browser.sleep(5000);
		expect(skoutLogo.isPresent()).toBe(true);
        browser.sleep(5000);

        //Block all users
        blockUserPage.clickBlockedUserMenu();
        blockUserPage.clickUnblockAllLink();
    });
});