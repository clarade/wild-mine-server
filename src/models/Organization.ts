import { Field, ID, InvalidDirectiveError, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
@Entity()
@ObjectType()
class Organization extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id!: number;

    @Column()
    @Field()
    name!: string;

    @Column()
    @Field()
    description?: string;
}

export default Organization;