import './global-types';
import './schema-builder';
import SchemaBuilder, { BasePlugin, BuildCache, PothosOutputFieldConfig, SchemaTypes } from '@pothos/core';
import { GraphQLFieldResolver } from 'graphql';

const pluginName = 'prismaCrud' as const;

export default pluginName;

export class PrismaCrudPlugin<Types extends SchemaTypes> extends BasePlugin<Types> {
  constructor(cache: BuildCache<Types>) {
    super(cache, pluginName);
  }

  override wrapResolve(
    resolver: GraphQLFieldResolver<unknown, Types['Context'], object>,
    fieldConfig: PothosOutputFieldConfig<Types>,
  ): GraphQLFieldResolver<unknown, Types['Context'], object> {
    return (parent, args, context, info) => {
      console.log(`Resolving ${info.parentType}.${info.fieldName}`);

      return resolver(parent, args, context, info);
    };
  }
}

SchemaBuilder.registerPlugin(pluginName, PrismaCrudPlugin);
