import { GraphQLSchema, assertType, assertObjectType } from 'graphql'
import fs from 'fs'

export default function generate(
    schema: GraphQLSchema,
    templateDir: string,
    outputDir: string,
) {
    fs.readFile(`${__dirname}/${templateDir}/mapping.json`, {encoding: 'utf8'}, (err, buffer) => {
        if (err) {
            console.warn(err)
            return
        }

        const mapping = JSON.parse(buffer)
        const queryType = schema.getQueryType()
        const query = assertObjectType(queryType)

        const mutationType = schema.getMutationType()
        const mutation = assertObjectType(mutationType)

        const queryFieldTypes = Object.values(query.getFields()).map((field) => {
            return schema.getType(field.type.toString())
        })

        // Iterate through mappings and types and generate a component for each combination
    })
}
