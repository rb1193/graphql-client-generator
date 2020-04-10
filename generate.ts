import { Command } from 'commander'
import fetchSchema from './graphql/fetchSchema'
import { buildClientSchema } from 'graphql'

const program = new Command()

program
    .version('1.0.0')
    .arguments('<graphqlUrl> <templateDir> <outputDir>')
    .action((graphqlUrl: string, templateDir: string, outputDir: string) => {
        fetchSchema(graphqlUrl)
            .then((res) => res.json())
            .then((res) => {
                if (res.errors) throw new Error('Introspection query failed')
                const schema = buildClientSchema(res.data)
                console.log(schema)
            })
            .catch((err) => {
                console.error(err)
            })
    })

program.parse(process.argv)
