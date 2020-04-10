import { isTypeSubTypeOf, GraphQLSchema, GraphQLType, assertInterfaceType, isListType, assertOutputType, isInputObjectType } from 'graphql'
import { GraphQLClientGeneratorThemeConfig } from '../../graphql-client-generator'
import isConnectionType from '../../graphql/isConnectionType'

const config: GraphQLClientGeneratorThemeConfig = {
    mappings: {
        "node": {
            template: "Node",
            resolver: (type: GraphQLType, schema: GraphQLSchema) => {
                return isTypeSubTypeOf(schema, type, assertInterfaceType(schema.getType('Node')))
            },
        },
        "connection": {
            template: "Connection",
            resolver: (type: GraphQLType) => {
                return isConnectionType(assertOutputType(type))
            }
        },
        "list": {
            template: "List",
            resolver: (type: GraphQLType) => {
                return isListType(type)
            }
        },
        "inputObject": {
            template: "Form",
            resolver: (type: GraphQLType) => {
                return isInputObjectType(type)
            }
        }
    }
}

export default config