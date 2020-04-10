import { GraphQLSchema, GraphQLType } from "graphql"

export type ThemeMapping = {
    template: string,
    resolver: (type: GraphQLType, schema: GraphQLSchema) => boolean
}

export type GraphQLClientGeneratorThemeConfig = {
    mappings: {
        [key: string]: ThemeMapping
    }
}