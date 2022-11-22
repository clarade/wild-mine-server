import { ApolloServer } from 'apollo-server-express';
import { getConnection } from 'typeorm';
import getApolloServer from '../apollo-server';
import getDatabaseConnection from '../database-connection';
import User from '../models/User';

describe('UserResolver', () => {
	let server: ApolloServer;

	beforeAll(async () => {
		server = await getApolloServer();
	});

	beforeEach(() => {
		if (!process.env.DATABASE_URL) {
			throw Error('DATABASE_URL must be set in environment.');
		}

		getDatabaseConnection(process.env.DATABASE_URL);
	});

	afterEach(() => getConnection().close());

	describe('query users', () => {
		const getUsers = `
        query {
          Users {
            id
            first_name
            last_name
            roles
            email
            password
            color_id
            organization_id
            created_at
          }
        }`;

		describe('when there are no users in database', () => {
			it('returns empty array', async () => {
				const result = await server.executeOperation({
					query: getUsers,
				});
				expect(result.errors).toBeUndefined();
				expect(result.data?.wilders).toEqual([]);
			});
		});

		// describe('CreateUser', () => {
		//     const createUserData = `
		//         mutation($first_name: String!, $last_name: String!, $roles: String!, $email: String!, $password: String!, $color_id: String!, $organization_id: String!, $created_at: String!) {
		//             createUser(first_name: $first_name, last_name: $last_name, roles: $roles, email: $email, password: $password, color_id: $color_id, organization_id: $organization_id, created_at: $created_at) {
		//                 id
		//                 first_name
		//                 last_name
		//                 roles
		//                 email
		//                 password
		//                 color_id
		//                 organization_id
		//                 created_at
		//             }
		//         }`;

		//     it('create a use in database', async () => {
		//         const result = await server.executeOperation({
		//             query: createUserData,
		//             variables: {
		//                 first_name: "Gros",
		//                 last_name: "Tony",
		//                 roles: `['ROLE_USER']`,
		//                 email: 'azerty@poiuy.com',
		//                 password: 'root',
		//                 color_id: '9',
		//                 organization_id: '9',
		//                 created_at: "2016-07-20T17:30:15+05:30"
		//             },
		//         });

		// console.log(result);

		// expect(await User.findOne({ first_name: "Gros" })).toHaveProperty(
		//     "last_name",
		//     "Tony"
		// );

		// expect(result.errors).toBeUndefined();
		// expect(result.data?.createUserData).toEqual({
		//     first_name: "Gros",
		//     last_name: "Tony",
		//     roles: `['ROLE_USER']`,
		//     email: 'azerty@poiuy.com',
		//     password: 'root',
		//     color_id: 9,
		//     created_at: "2016-07-20T17:30:15+05:30"
		// })
		//     })
	});
});
