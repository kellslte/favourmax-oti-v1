import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient( {
    uri: process.env.NEXT_GRAPHCMS_API_URI,
    cache: new InMemoryCache(),
} )