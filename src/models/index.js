// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Techtalk } = initSchema(schema);

export {
  Techtalk
};