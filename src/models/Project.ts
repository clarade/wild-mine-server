import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	Column,
	Entity,
	// JoinColumn,
	JoinTable,
	ManyToMany,
	// ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

import User from './User';
// import Organization from './Organization';
// import Issue from './Issue';

@Entity()
@ObjectType()
class Project extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id!: number;

	@Column()
	@Field()
	name!: string;

	@Column()
	@Field()
	description?: string;

	@Column()
	@Field()
	created_at!: string;

	@Column()
	@Field()
	projectPictureName?: string;

	// @Column()
	// @Field()
	// updated_at!: Date;

	// @ManyToOne(() => Organization, (organization) => organization.id)
	// @JoinColumn({ name: 'organization_id' })
	// organization_id!: number;

	@ManyToMany(() => User, (user) => user.id)
	@JoinTable()
	@Field(() => [User], { nullable: true })
	user_assigned?: User[];

	// @ManyToMany(() => Issue)
	// @JoinTable({
	//     name: "project_issues",
	//     joinColumn: {
	//         name: "project_id",
	//         referencedColumnName: "id"
	//     },
	//     inverseJoinColumn: {
	//         name: "issue_id",
	//         referencedColumnName: "id"
	//     }
	// })
	// project_id!: Issue;
}

export default Project;
