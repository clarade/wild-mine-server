import { Field, ID, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity()
@ObjectType()
class File extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id!: number;

    @Column()
    @Field()
    name!: string;
}

export default File;