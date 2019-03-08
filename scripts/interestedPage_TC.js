/*
 * Test Case related to Interested Page
 * Author : Sahani Wickaramasinghe
 * Date : 11/12/2018
 */
"use strict";

describe('Interested Page', function() {

    var common_Login = require('../commonScripts/common');
    var interestPage=require('../pages/interestedPage.js');

    it('Login,Navigate to Interested Page and block user and verify', function() {
        common_Login.loginToApp();
        interestPage.navigatetoInterestedPage();
        var reqName=interestPage.requestUserName().getText();
        interestPage.blockUser();
        browser.sleep(5000);
        expect(interestPage.verifyBlockedUser().getText()).toEqual(reqName);
    });

});