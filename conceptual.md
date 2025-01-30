### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
The purpose of React Router is to help users navigate between different component/pages of our application and 
enables developers to create Single Page Applications with multiple views or pages, all within a single-page app, without requiring full page reloads.

- What is a single page application?
A single page application is basically where the entire app is loaded on a single html page. Instead of loading entirely new pages from the server when a user interacts with the app, an single page application dynamically updates the content of the page as needed, without a full page reload.

- What are some differences between client side and server side routing?
the difference between client-side and server-side routing is server-side require you to make request to your server to generate data where as client-side routing has to do with loading the page without having to make a request to your server and let Javascript handle it in the browser.

- What are two ways of handling redirects with React Router? When would you use each?
Navigate and useNavigate. 
we use useNavigate() for more control over navigation, especially when the redirect is part of an event, logic flow, or timing example when we're running an asynchronous operation to a server to submit a form. .
we use Navigate for conditional rendering. <Navigate /> component is used to redirect a user to a different route in a React app. It replaces the older Redirect component

- What are two different ways to handle page-not-found user experiences using React Router? 
the two ways of handling page-not-found is by using switch or having a not found component.

we render NotFound conponent to  handle all unmatched routes by using a catch-all route that matches any URL that doesn’t match the specific routes you’ve defined. This is done by specifying a path ="*" to rendering a NOT Found page.

we handle 404 pages by using the Switch component and placing a route at the bottom of your route list with a path="*". Switch component renders the first route that matches the current location. If no routes match, it renders the default route, which can be a "Not Found" page.



- How do you grab URL parameters from within a component using React Router?
 useParams() hook allows you to easily access dynamic segments of the URL that are defined in your route configuration.

- What is context in React? When would you use it?
context in react is a way we can pass down data from one component without props drilling. It provide a way that we can share data like global state, theme, authentication with multiple components without having to pass it down.

- Describe some differences between class-based components and function
  components in React.

  the difference between the two is class-base components are created with the word class while function component are created using javaScript regular function or arrow function.
With function component can we use react hooks to manage the state/update data.
class components don't have state.
