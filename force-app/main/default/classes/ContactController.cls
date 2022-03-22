public with sharing class ContactController {
   
    @AuraEnabled(cacheable= true)
    public static List<Contact> getContacts() {
        return [Select id,FirstName,LastName,Email from Contact];
    }
}
