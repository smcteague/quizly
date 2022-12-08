// import required info from graphql
const {
    GraphQLSchema,
    GraphQLObjectType
} = require('graphql')

// import queries
const queries = require('./queries')
const mutations = require('./mutations')


// define QueryType
const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'This type holds all of my queries',
    fields: queries
})

// define MutationType
const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'Mutations',
    fields: mutations
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})

