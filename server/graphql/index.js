import { makeExecutableSchema } from 'graphql-tools';
import {resolvers as rootResolver} from './schemas/rootSchema/rootResolvers';
import {typeDefs as rootTypeDef} from './schemas/rootSchema/rootType';

import {resolvers as shopResolver} from './schemas/shopSchema/shopResolvers';
import {typeDefs as shopTypeDef} from './schemas/shopSchema/shopType';

import {resolvers as productResolver} from './schemas/productSchema/productResolvers';
import {typeDefs as productTypeDef} from './schemas/productSchema/productType';

import {resolvers as orderResolver} from './schemas/orderSchema/orderResolver';
import {typeDefs as orderTypeDef} from './schemas/orderSchema/orderType';

import {resolvers as lineItemResolver} from './schemas/lineItemSchema/lineItemResolvers';
import {typeDefs as lineItemTypeDef} from './schemas/lineItemSchema/lineItemType';

export default makeExecutableSchema({
  typeDefs: [rootTypeDef, shopTypeDef, productTypeDef, orderTypeDef, lineItemTypeDef],
  resolvers: [rootResolver, shopResolver, productResolver, orderResolver, lineItemResolver],
});
