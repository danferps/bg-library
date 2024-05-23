const boardGameSchema = `#graphql
  type BoardGame {
    _id: ID!
    name: String!
    image: String
    description: String!
    play_time: Int!
    age_rating: Int!
    min_players: Int!
    max_players: Int!
    categories: [String!]!
    mechanics: [String!]!
    publisher: String!
  }

  type Query {
    boardGames: [BoardGame]
  }
`
export default boardGameSchema
