import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Country} from "../entities/country";

@Resolver(Country)
class CountryResolver {
	@Query(() => [Country])
	async getCountries(): Promise<Country[]> {
		return await Country.find();
	}

	@Mutation(() => Country)
	async createCountry(
		@Arg('name') name: string,
		@Arg('code') code: string,
		@Arg('emoji') emoji: string,
		@Arg('continent_code') continent_code: string
	): Promise<Country> {
		const country = Country.create();
		country.name = name;
		country.code = code;
		country.emoji = emoji;
		country.continent_code = continent_code;

		const saveCountry = await Country.save(country);
		return saveCountry;
	}

	@Query(() => Country)
	async getCountryFromCode(
		@Arg('code') code: string
	): Promise<Country> {
		const country = await Country.findOneByOrFail({code})

		return country
	}

	@Query(() => [Country])
	async getCountryFromContinent(
		@Arg('continent_code') continent_code: string
	): Promise<Country[]> {
		const countries = await Country.findBy({continent_code})

		return countries
	}
}

export default CountryResolver;