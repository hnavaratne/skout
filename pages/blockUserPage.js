/**
 * All tests related to block users scenarios
 *
 * Author : Thimalee
 * Date : 11-20-2018
 *
 */
'use strict';

var BlockedPage = function(){
    
    var blockedUsersLink = element(by.xpath('//a[contains(text(), "Blocked Users")]'));
    var unblockAllLink = element(by.xpath('//a[@ng-click="unblockAll()"]'));

    this.clickBlockedUserMenu = function clickBlockedUserMenu(){
        blockedUsersLink.click();
    };

    this.clickUnblockAllLink = function clickUnblockAllLink(){
        unblockAllLink.click();
    };

    this.clickToUnblockUser = function(userToUnblock){
        var selectUserToUnblock = element(by.xpath(`//a[contains(text(),'${userToUnblock}')]/ancestor::div[2]/div[@class='unblock']/button`));
        selectUserToUnblock.click();
    };

    this.checkBlockedUser =  function(unblockedUser){
        var findUnblockedUser = element(by.xpath(`//a[contains(text(),'${unblockedUser}')]/ancestor::div[2]/div[@class='unblock']/button`));
        return findUnblockedUser;
    };

};

module.exports = new BlockedPage()