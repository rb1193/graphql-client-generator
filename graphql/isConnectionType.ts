import { GraphQLOutputType, isObjectType } from 'graphql'

export default function isConnectionType(type: GraphQLOutputType): boolean {
    if (!isObjectType(type)) return false
    const fields = Object.values(type.getFields())
    return fields.findIndex((field) => field.name === "edges") !== -1
        && fields.findIndex((field) => field.name === "pageInfo") !== -1
        && fields.findIndex((field) => field.name === "totalCount") !== -1
}