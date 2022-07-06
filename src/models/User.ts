import { Prisma } from "../../prisma/client";
import { builder } from "../builder";
import { db } from "../db";
import { UserWhereInput } from "../inputs";
import { Giraffe } from "./Girafee";
import * as Inputs from '../inputs'
import { User } from "../schema";

builder.queryFields((t) => ({
  findManyUser: t.field({
    type: [User],
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.UserWhereInput }),
      orderBy: t.arg({ type: [Inputs.UserOrderByWithRelationInput] }),
      cursor: t.arg({ type: Inputs.UserWhereUniqueInput }),
      take: t.arg({ type: 'Int' }),
      skip: t.arg({ type: 'Int' }),
      distinct: t.arg({ type: [Inputs.UserScalarFieldEnum] }),
    },
    resolve: async (root, args) => {
      const user = await db.user.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,        
      })

      return user
    }
  }),
  findOneUser: t.field({
    type: User,
    nullable: true,
    args: {
      where: t.arg({ type: Inputs.UserWhereInput }),
      orderBy: t.arg({ type: [Inputs.UserOrderByWithRelationInput] }),
      cursor: t.arg({ type: Inputs.UserWhereUniqueInput }),
      take: t.arg({ type: 'Int' }),
      skip: t.arg({ type: 'Int' }),
      distinct: t.arg({ type: [Inputs.UserScalarFieldEnum] }),
    },
    resolve: async (root, args) => {
      const user = await db.user.findFirst({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,        
      })

      return user
    }
  })
}))

builder.mutationFields((t) => ({
  createOneUser: t.field({
    type: User,
    nullable: true,
    args: {
      data: t.arg({ type: Inputs.UserCreateInput, required: true }),
    },
    resolve: async (root, args) => {
      const user = await db.user.create({ data: args.data })
      return user
    }
  }),
}))