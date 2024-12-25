### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
The purpose of React Router is to help us navigate between different component/pages of our application.

- What is a single page application?
A single page application is basically where the entire app is loaded on a single html page.

- What are some differences between client side and server side routing?
the difference between client-side and server-side routing is server-side require you to make request to your server to generate data where as client-side routing has to do with loading the page without having to make a request to your server and let Javascript handle it in the browser.

- What are two ways of handling redirects with React Router? When would you use each?
Navigate and useNavigate. 
we use Navigate for conditional rendering and we use useNavigate for like timing example when we're running an asynchronous operation to a server to submit a form.

- What are two different ways to handle page-not-found user experiences using React Router? 
we render NotFound conponent to a user when they are sending a request and the url doesn't match and use * for any path that not define.
we could also use the reDirect when is a page not found.

- How do you grab URL parameters from within a component using React Router?
you use the useParams hook. it allows us to access the url paramenters.

- What is context in React? When would you use it?
context in react is a way we can pass down data from one component with out props drilling.

- Describe some differences between class-based components and function
  components in React.

  the difference between the two is class-base components are created with the word class while function component are created using javaScript regular function or arrow function.

