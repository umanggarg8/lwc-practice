public with sharing class searchAccount {
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccount(String name){
        return [Select id,Name,Industry,Phone,Picture__c From Account where Name Like: '%'+name+'%'];
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts(){
        return [Select id,Name,Picture__c From Account LIMIT 10];
    }

    @AuraEnabled(cacheable = true)
    public static Account getSingleAccount(){
        return [Select id,Name,Phone From Account LIMIT 1];
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountwithPicture(String name){
        return [Select id,Name,Industry,Phone,Picture__c From Account where Name Like: '%'+name+'%' AND Picture__c != null];
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountsWithPic(){
        return [Select id,Name,Industry,Phone,Picture__c From Account where Picture__c != null];
    }

}
