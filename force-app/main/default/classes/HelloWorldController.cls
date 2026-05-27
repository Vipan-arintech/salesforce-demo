public with sharing class HelloWorldController {
    @AuraEnabled(cacheable=true)
    public static String getGreeting() {
        return 'Hello World from Apex - Copado Demo!';
    }

    @AuraEnabled(cacheable=true)
    public static String getUserName() {
        return UserInfo.getName();
    }
}