# User Stories and Scenarios

## Filter events by city

As a user, I want to see the events available in a certain city.

### Scenario 1

When a user hasn't searched for a city, show upcoming events from all cities

- **Given** the user hasn't searched for any city
- **When** the user opens the app
- **Then** the user should see a list of upcoming events from all cities

### Scenario 2

User should see a list of suggestions when they search for a city

- **Given** the main page is open
- **When** the user starts typing in the city textbox
- **Then** the user should receive a list of cities (suggestions) that match what they've typed

### Scenario 3

User can select a city from the suggested list

- **Given** the user was typing in the city textbox and the list of suggested cities is showing
- **When** the user selects a city from the list
- **Then** their city should be changed to that city, and the user should receive a list of upcoming events in that city

## Show/hide event details

As a user, I want to see the details of an event I'm interested in, and hide the details again when I'm done reading them.

### Scenario 1

An event element is collapsed by default

- **Given** the user has searched for events, or the main page is open
- **When** the page is displaying event elements
- **Then** the event element should be collapsed

### Scenario 2

User can expand an event to see details

- **Given** the user has searched for a city, or the main page is open, displaying upcoming events from all cities
- **When** the user clicks on an event
- **Then** the event element should be collapsed

### Scenario 3

User can collapse an event to hide details

- **Given** an element is expanded, showing details
- **When** a user clicks on a button to exit the detailed view of the element
- **Then** the element should collapse to hide the details

## Specify number of events

As a user, I want to find out the number of events available.

### Scenario 1

When the user hasn't specified a number, 32 events are shown by default

- **Given** a user has searched for the events available
- **When** the user first views the results, but hasn't specified a number
- **Then** the page should show 32 evens

### Scenario 2

User can change the number of events displayed

- **Given** the user has searched for the events available
- **When** the user clicks on the button/link to change the number of results displayed
- **Then** the number of results displayed should reflect the desired number

## Use the app when offline

As a user, I want to be able to use the app when I don't have access to the internet.

### Scenario 1

Show cached data when there's no internet connection.

- **Given** the user does not have internet access
- **When** the user opens the app
- **Then** the app should show cached data

### Scenario 2

Show error when user changes search settings (city, number of events)

- **Given** the user does not have internet access
- **When** the user tries to change search settings
- **Then** the app should show an error

## Add an app shortcut to the home screen

As a user, I want to be able to easily access the app from the home screen of my device.

### Scenario 1

Show a chart with the number of upcoming events in each city.

- **Given** the user wants to see a chart displaying the upcoming events in each city
- **When** the user tries to navigate to the page with the charts
- **Then** the app should show the user charts with information about the number of upcoming events

---

## Serverless

This app uses AWS lambda serverless functions to interact with the Google OAuth authorization server (Google Calendar API) to gain authorization tokens and make requests.

---

## Dependencies

- @testing-library/jest-dom ^6.4.2
- @testing-library/react ^14.2.1
- @testing-library/user-event ^14.5.2
- atatus-spa ^4.6.0
- react ^18.2.0
- react-dom ^18.2.0
- react-scripts 5.0.1
- recharts ^2.12.2
- web-vitals ^2.1.4
- workbox-background-sync ^6.6.0
- workbox-broadcast-update ^6.6.0
- workbox-cacheable-response ^6.6.0
- workbox-core ^6.6.0
- workbox-expiration ^6.6.0
- workbox-google-analytics ^6.6.1
- workbox-navigation-preload ^6.6.0
- workbox-precaching ^6.6.0
- workbox-range-requests ^6.6.0
- workbox-routing ^6.6.0
- workbox-strategies ^6.6.0
- workbox-streams ^6.6.0

---

## API

The API used for this project is the **Google Calendar API**
