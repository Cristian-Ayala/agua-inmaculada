import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  defaultDataIdFromObject,
} from "@apollo/client/core";
import { InMemoryCache } from "@apollo/client/cache";
import { setContext } from "@apollo/client/link/context";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (import.meta.env.DEV) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_BACKEND_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem("id_token");
  const defaultRole = window.localStorage.getItem("role");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      "x-hasura-role": defaultRole ? `${defaultRole}` : "",
    },
  };
});

const cache = new InMemoryCache({
  dataIdFromObject: (responseObject) => {
    // Cases are DEMO only, just in case needed in the future
    switch (responseObject.__typename) {
      case "Company":
        return `Company:${responseObject.name}`;
      case "User":
        return `User:${responseObject.name}:${responseObject.email}`;
      default:
        return defaultDataIdFromObject(responseObject);
    }
  },
});

const link = ApolloLink.from([authLink, httpLink]);

// Create the apollo client
export const apolloClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
});

export default ({ app }) => {
  /* eslint-disable-next-line */
  app.config.globalProperties.$apolloClient = apolloClient;
};
