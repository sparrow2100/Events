Feature: Specify number of events
    Scenario: When the user hasn't specified a number, 32 events are shown by default
        Given the main page is open
        When the events are showing
        Then the page should show thirty-two events by default
    Scenario: The user can change the number of events displayed
        Given the main page is open
        When the user enters a number in the number input
        Then the number of events displayed should equal the number inputted