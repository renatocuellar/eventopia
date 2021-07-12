# eventopia
Eventopia is my final project made for the Globant Bootcamp, this is a small application to register to events and to check the participants of the event. 

I started this small application with create-react-app.

Then what I did was to create the components and the pages, to each one I gave styles leveraging Bootstrap and to finish adjusting them vanilla css.

To make a single page app, what I did was to use react router with Browser router, Switch and route, so we give good speed to our app.

I also used a Layout so that each page had the same navigation bar.

To make the API calls what I did was to create my own server that works with a file called API inside the SRC folder. This API is quite simple and works with the commands list, create, read, update and remove.

In the server folder what I did was to create a small database so that the API can make the call.

The API has its GET because it makes the call from the database, a post because when the form is filled it publishes the data.

The page is refreshed every 5 seconds in case new data is brought thanks to an Interval ID that lives in componentDidMount.

To finish and to be able to use React Hooks.

For the search bar what we did was to use the custom hooks UseMemo and we created our own Hook UseSearchCard.
