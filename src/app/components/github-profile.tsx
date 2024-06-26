//When we use server components in next (which is the functionality of the components to be rendered first on the server side and then the html is ready for the user and hydration is done (if necessary)), we can make our functions/components are asynchronous.
// By transforming the component into an asynchronous function, I can put some type of await inside it. This will make the node (the server that next goes up to) wait for all the instructions that have await within the component to finish so that it returns the html to the browser.
//If a component can be asynchronous, this means that I can fetch data directly from the component.
//DOC https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch
//PS: Client components cannot be async functions.
//The concept of server components in react allows me to make http calls or any other type of asynchronous operation within the component directly to load data that that component initially needs when displayed. I only do this type of data loading when I need to load information that needs to be available as soon as that component is displayed on the screen. I will not use this type of data loading given any user action.
// One of the disadvantages of this type of approach is that the user will only be able to iterate with the application after the promises are resolved.

//When I make the request to the github api, if I look at the devtools network, I notice that there is no request made. So where does the data come from?
//This is called Streaming SSR. Streaming means reading or writing data in partial form.

//Streaming SSR is the functionality of next to be able to bring the initial data that needs to appear on a screen in the same request and in the same request, after the data is loaded, replace the loading data with real data that came from the api.or In other words, when I have the type document on the network, it gives me "loading...", but that request doesn't die there.

export async function GithubProfile() {
  //making a promise for the component await 2 seconds, only to see how the async works.
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://api.github.com/users/samuelmenecucci");

  const user = await response.json();

  return (
    <>
      <h1>Hello World!</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
