Feature: Filter events by city
    Scenario: When a user hasn't searched for a city, show upcoming events from all cities
        Given the user hasn't searched for a city
        When the user opens the app
        Then the user should see a list of upcoming events from all cities

    Scenario: The user should see a list of suggestions when they search for a city
        Given the main page is open
        When the user starts typing in the city textbox
        Then the user should receive a list of cities (suggestions) that match what they've typed

    Scenario: The user can select a city from the suggested list
        Given the user was typing in the city textbox
        And the list of suggested cities is showing
        When the user selects a city from the list
        Then their city should be changed to that city 
        And the user should reveive a list of upcoming events in that city
