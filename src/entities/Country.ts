import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Field, ObjectType} from "type-graphql";


@ObjectType()
@Entity()
export class Country extends BaseEntity {

	@Field()
	@PrimaryGeneratedColumn()
	id: number

	@Field()
	@Column()
	name: string

	@Field()
	@Column()
	code: string

	@Field()
	@Column()
	emoji: string

	@Field()
	@Column()
	continent_code: string
}