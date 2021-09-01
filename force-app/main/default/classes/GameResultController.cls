public with sharing class GameResultController {
    
    @AuraEnabled
    public static List<Word_Shuffle__c> getResults(){
        //we want to show result to current user only, and will not show the other user
        //UserInfo: this UserInfo is standard class in all salesforce org, which has user details
       String userId = UserInfo.getUserId(); // this will give current user Id

       List<Word_Shuffle__c> results = [SELECT Id, Name, Result__c, Mode__c, CreatedDate
                                        FROM Word_Shuffle__c
                                        WHERE CreatedById =: userId
                                        ORDER BY CreatedDate DESC];
       return results;                            
    }
}
