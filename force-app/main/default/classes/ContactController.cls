public with sharing class ContactController {
   //test
    @AuraEnabled(cacheable= true)
    public static List<Contact> getContacts() {
        return [Select id,FirstName,LastName,Email from Contact];
    }
}
