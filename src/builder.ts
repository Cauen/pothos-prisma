import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '../prisma/generated';
import PrismaCrudPlugin from './pothos-plugin/src';
import { db } from './db';

export const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
  plugins: [PrismaPlugin, PrismaCrudPlugin],
  prisma: {
    client: db,
  },
});

