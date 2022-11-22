import { Field, ID, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    OneToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';

import User from './User';
import File from './File';

@Entity()
@ObjectType()
class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id!: number;

    @Column()
    @Field()
    content!: string;

    @OneToMany(() => User, user => user.id )
    @JoinColumn({name: 'user_id'})
    user_id!: string;

    @OneToOne(() => File, file => file.id )
    @JoinColumn({name: 'file_id'})
    file_id!: string;
}

export default Comment;