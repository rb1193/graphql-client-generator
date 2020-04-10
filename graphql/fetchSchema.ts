import fetch, { RequestInit } from 'node-fetch'
import { getIntrospectionQuery, parse } from 'graphql'
import { Agent } from 'https'

export default async function fetchSchema(url: string) {
    const options: RequestInit = {
        body: JSON.stringify({ query: getIntrospectionQuery() }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        agent: new Agent({ rejectUnauthorized: false }),
    }

    return fetch(url, options)
}
