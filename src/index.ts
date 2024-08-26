import "reflect-metadata";
import {dataSource} from "../config/db";
import {buildSchema} from "type-graphql";
import {ApolloServer} from "@apollo/server";
import CountryResolver from "./resolvers/countryResolver";
import {startStandaloneServer} from "@apollo/server/standalone";

const startServer = async (): Promise<void> => {
	try {
		await dataSource.initialize();
		console.log('Data source has been initialized.');

		const schema = await buildSchema({
			resolvers: [CountryResolver]
		});

		const server = new ApolloServer({schema});

		await startStandaloneServer(server, {
			listen: {port: 4000},
		});

		console.log(`Server listening on port 4000`);
	} catch (error) {
		console.error('Error while starting the server:', error);
	}
};

startServer()