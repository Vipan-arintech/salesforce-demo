@IsTest
private class HelloWorldControllerTest {
    @IsTest
    static void getGreeting_returnsExpectedText() {
        Test.startTest();
        String result = HelloWorldController.getGreeting();
        Test.stopTest();

        System.assertEquals('Hello World from Apex!', result);
    }
}
