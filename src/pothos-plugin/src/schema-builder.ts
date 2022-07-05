import './global-types';
import { GraphQLResolveInfo } from 'graphql';
import SchemaBuilder, {
  brandWithType,
  FieldRef,
  InputRef,
  InterfaceRef,
  OutputType,
  SchemaTypes,
} from '@pothos/core';

const schemaBuilderProto = SchemaBuilder.prototype as PothosSchemaTypes.SchemaBuilder<SchemaTypes>;

schemaBuilderProto.prismaWheree = function prismaWhere(type: string, options: any): InputRef {
  const ref = this.inputRef(type)

  return ref
};