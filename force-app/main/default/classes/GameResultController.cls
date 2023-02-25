public with sharing class GameResultController {
    
    @AuraEnabled
    public static List<Word_Shuffle__c> getResults(){
        //getting current user's ID to show only current user result record
        String userId = UserInfo.getUserId(); 
        
        List<Word_Shuffle__c> results = [SELECT Id, Name, Game_Mode__c, Result__c, CreatedDate FROM Word_Shuffle__c
                                         WHERE CreatedById =: userId ORDER BY CreatedDate DESC];
        
        return results;
    }
}