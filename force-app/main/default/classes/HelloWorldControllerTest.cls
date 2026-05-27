@IsTest
private class HelloWorldControllerTest {
    @IsTest
    static void getGreeting_returnsExpectedText() {
        Test.startTest();
        String result = HelloWorldController.getGreeting();
        Test.stopTest();

        System.assertEquals('Hello World from Apex - Copado Demo!', result);
    }

    @IsTest
    static void getUserName_returnsCurrentUserName() {
        Test.startTest();
        String result = HelloWorldController.getUserName();
        Test.stopTest();

        System.assertEquals(UserInfo.getName(), result);
        System.assertNotEquals(null, result);
    }
}