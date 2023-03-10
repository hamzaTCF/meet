# **Feature 1: Filter events by city**

> ### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
>
> - `Given` user hasn’t searched for any city
> - `When` the user opens the app
> - `Then` the user should see a list of all upcoming events

> ### Scenario 2: User should see a list of suggestions when they search for a city
>
> - `Given` the main page is open
> - `When` user starts typing in the city textbox
> - `Then` the user should see a list of cities (suggestions) that match what they’ve typed

> ### Scenario 3: User can select a city from the suggested list.
>
> - `Given` the user was typing “Berlin” in the city textbox And the list of suggested cities is showing
> - `When` the user selects a city (e.g., “Berlin, Germany”) from the list
> - `Then` their city should be changed to that city (i.e., “Berlin, Germany”)
> - `And` the user should receive a list of upcoming events in that city

&nbsp;

## **Feature 2: Show/Hide an Event’s Details**

> Scenario 1: An event element is collapsed by default
>
> - `Given` the user have just opened the app
> - `When` the user views the events list
> - `Then` all events details should be hidden

> Scenario 2: User can expand an event to see its details
>
> - `Given` the user have just opened the app
> - `When` the user clicks on the "Show Details" button of one of the events
> - `Then` the event's details should be shown
> - `And` the event's "Show Details" button title will be adjusted to "Hide Details"

> Scenario 3: User can collapse an event to hide its details.
>
> - `Given` the event's details are shown
> - `And` the event's "Hide Details" button is shown
> - `When` the user clicks on "Hide Details" button of that event.
> - `Then` the event's details should be hidden.
> - `And` the event's "Hide Details" button title will be adjusted to "Show Details"

&nbsp;

## **Feature 3: Specify Number of Events**

> Scenario 1: When user hasn’t specified a number, 32 is the default number
>
> - `Given` the user have just opened the app
> - `And` the user Haven't changed the number of events
> - `When` the user views the events list
> - `Then` the Number Of Events input field should display "32" by default
> - `And` the number of events in the list should be 32 by default

> Scenario 2: User can change the number of events they want to see
>
> - `Given` the user have just opened the app
> - `When` the user changes the value of Number Of Events input field
> - `Then` the number of events in the list will change accordingly

&nbsp;

## **Feature 4: Use the App when Offline**

> Scenario 1: Show cached data when there’s no internet connection
>
> - `Given` there is no internet connection
> - `When` the user opens the app
> - `Then` events data will be obtained from the cache

> Scenario 2: Show error when user changes search settings (city, number of events)
>
> - `Given` there is no internet connection
> - `When` the user changes the value of City Search input field
> - `Or` the user changes the value of Number Of Events input field
> - `Then` an error notice stating that you can't change search settings while offline

&nbsp;

## **Feature 5: Data Visualization**

> Scenario 1: Show a chart with the number of upcoming events in each city
>
> - `Given` the user have just opened the app
> - `When` the events list is displayed
> - `Then` a chart visualizing the number of upcoming events in each city should be displayed
