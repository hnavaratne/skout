/**
 * All tests related to gallery page is written in this test
 *
 * Author : Dhanushka 
 * Date : 2-9-2019
 * *
 */

var Page2 = function () {

    var username = element(by.id('username'));
    var password = element(by.id('password'));
    var login = element(by.buttonText('Log in'));
    var GoMeetSomeone = element(by.xpath('//*[text()="Go meet someone"]'));
    var myprofile = element(by.xpath('//a[text()="My Profile"]/..//span [@class="fa fa-angle-right pull-right"]'));
    var gender = element(by.xpath('//*[text()="Gender"]'));
    var clickedit = element(by.xpath('//small[@class="text-ellipsis hidden-md hidden-sm hidden-xs"]'));
    var name = element(by.xpath('//input [@id="user_name"]'));
    var InterestedInMen = element(by.xpath('//*[text()=" Men"]//input[@type="radio"]/..//*[@value="male"]'));
    var InterestedInWomen = element(by.xpath('//*[text()=" Women"]//input[@type="radio"]/..//*[@value="female"]'));
    var InterestedInMenWomen = element(by.xpath('//*[text()=" Men & Women"]//input[@type="radio"]/..//*[@value="both"]'));
    var relationshipStatus = element(by.xpath('//select[@id="user_relationship_status"]'));
    var save = element(by.xpath('//button[@class="btn btn-success"]/..//*[text()="Save"]'));
    var discard = element(by.xpath('//button[@class="btn btn-default"]/..//*[text()="Discard"]'));
    var aboutMe = element(by.xpath('//textarea[@name="about"]'));
    var heightCM = element(by.xpath('//button[@type="button"]/..//*[text()="cm"]'));
    var heightAmount = element(by.xpath('//input[@data-ng-model="user.heightCm"]'));
    var brandlogo = element(by.xpath('//div [@class="brand-logo"]'));

    var common = require('../commonScripts/common');

    this.get = function () {
        browser.get('https://www.skout.com/');
    };


    this.refresh = function () {
        brandlogo.click();

    };

    this.goMeetSomeOne = function () {
        GoMeetSomeone.click();
    };

    this.Navigate_MyProfile = function (aboutMe1) {
        myprofile.click();
        common.waitElementToBeClickable(clickedit);
        console.log('Navigated to My Profile');
        clickedit.click();
        aboutMe.sendKeys(aboutMe1);
        common.waitElementToBeClickable(discard);
        discard.click();
        browser.sleep(5000);
    };

    this.Navigate_Back_MyProfile = function (name1, aboutMe2, height, relationshipStatus1) {
        myprofile.click();
        common.waitElementToBeClickable(clickedit);
        clickedit.click();
        name.clear();
        name.sendKeys(name1);
        InterestedInMen.click();
        common.waitElementToBeClickable(InterestedInWomen);
        InterestedInWomen.click();
        browser.sleep(1000);
        relationshipStatus.sendKeys(relationshipStatus1);
        browser.sleep(1000);
        aboutMe.sendKeys(aboutMe2);
        common.waitElementToBeClickable(heightCM);
        heightCM.click();
        heightAmount.clear();
        heightAmount.sendKeys(height);
        common.waitElementToBeClickable(save);
        save.click();
        browser.sleep(5000);


    };
};
module.exports = new Page2();