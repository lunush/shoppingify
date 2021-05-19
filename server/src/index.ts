import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { MainResolver } from "./resolvers/main";

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [MainResolver],
      validate: false,
    }),
    playground: true,
  });

  apolloServer.applyMiddleware({
    app,
  });

  app.listen(4040);
};

main().catch((err) => console.error(err));
