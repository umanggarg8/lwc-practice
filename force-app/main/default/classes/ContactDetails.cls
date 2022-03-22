public with sharing class ContactDetails {
    @AuraEnabled(cacheable= true)
    public static List<Contact> getContactDetails() {
        return [Select id,Name from Contact LIMIT 10];

    }

    @AuraEnabled(cacheable= true)
    public static Contact getSingleContactDetail() {
        return [Select id,Name,Email,Title from Contact LIMIT 1];

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchParam) {
        String key = '%' + searchParam + '%';
        return [
            SELECT Id, Name, Title, Phone, Email, Picture__c
            FROM Contact
            WHERE Name LIKE :key
            LIMIT 10
        ];
    }
}