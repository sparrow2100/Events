Feature: Show and hide event details
    Scenario: An event element is collapsed by default
        Given the main page is open 
        When the page is displaying event elements
        Then the event element should be collapsed
    Scenario: The user can expand an event to see details
        Given the main page is open
        And the page is displaying event elements
        When the user clicks on the show details button
        Then the event should expand, showing the description
    Scenario: The user can collapse an event to hide details
        Given the page is dislpaying event elements
        And the description is showing
        When the user clicks on the hide detail button
        Then the description should no longer be visible