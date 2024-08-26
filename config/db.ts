import {DataSource} from "typeorm";
import {Country} from "../src/entities/country";

export const dataSource = new DataSource({
	type: 'sqlite',
	database: '../database.sqlite',
	synchronize: true,
	entities: [Country],
})