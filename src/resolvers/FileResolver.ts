import { Arg, Mutation, Resolver } from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';
import { FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';

import File from '../models/File';

@Resolver(File)
class FileResolver {
	@Mutation(() => Boolean)
	async createFile(
    @Arg('picture', () => GraphQLUpload)
      { createReadStream, filename }: FileUpload
    ) {
      if (createReadStream && filename) {
        return await new Promise(async (resolve, reject) => createReadStream()
        .pipe(createWriteStream(__dirname + `/../../images/${filename}`))
        .on('finish', () => resolve(true))
        .on('close', () => resolve(true))
        .on('error', () => reject(false))
      );
      }
      return false;
	}
}

export default FileResolver;
