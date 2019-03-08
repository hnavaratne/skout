/*
 * Interested Page - All functions and elements related to interested Page
 * Author : Sahani Wickaramasinghe
 * Date : 11/12/2018
 */

"use strict";

var interestedPage=function(){
    var btn_notInterested= element(by.xpath("//a[@data-ng-click='rateAsNotHot()']"));
    var request_UserName=element(by.xpath("//a[@data-ui-sref='app.profile.buzz({userId: user.id})']/span"));
    var lbl_skippedName=element(by.xpath("//a[@ui-sref='app.profile.buzz({userId: previous.blocked[0].id})']"));
    
    //Navigate to Intersted Page
    this.navigatetoInterestedPage=function(){
        browser.get("https://www.skout.com/interested");
    }

    //Get user request name displays to accept or decline
    this.requestUserName=function(){
        return request_UserName;
    }

    //Reject/blocked user request
    this.blockUser=function(){
        btn_notInterested.click();
    }

    //Get blocked user Name
    this.verifyBlockedUser=function(){
        return lbl_skippedName;
    }
}

module.exports=new interestedPage();