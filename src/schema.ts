import { builder } from './builder';
import { db } from './db';
import { } from '../src/models/Girafee'
import './models/User'
import './inputs'

const GiraffeInput = builder.inputType('GiraffeInput', {
  fields: (t) => ({
    name: t.string({ required: true }),
    birthdate: t.string({ required: true }),
    height: t.float({ required: true }),
  }),
});

interface RecursiveGiraffeInputShape {
  name?: string;
  birthdate?: string;
  height?: number;
  friends?: RecursiveGiraffeInputShape;
}

const RecursiveGiraffeInput = builder
  .inputRef<RecursiveGiraffeInputShape>('RecursiveGiraffeInput')
  .implement({
    fields: (t) => ({
      name: t.string({ required: false }),
      birthdate: t.string({ required: false }),
      height: t.float({ required: false }),
      friends: t.field({
        type: RecursiveGiraffeInput,
      }),
    }),
  });

export const User = builder.prismaObject('User', {
  findUnique: ({ id }) => ({ id: Number.parseInt(String(id || 1), 10) }),
  fields: (t) => ({
    id: t.exposeID('id'),
    firstName: t.exposeString('firstName'),
    lastName: t.exposeString('lastName'),
    fullName: t.string({
      resolve: (user, args, ctx, info) => {
        console.log({ args, ctx, info })
        return `${user.firstName} ${user.lastName}`
      },
    }),
    posts: t.relation('posts'),
    comments: t.relation('Comments', {
      args: {
        oldestFirst: t.arg.boolean(),
        girafee: t.arg({ type: GiraffeInput }),
        girafeeAndChilds: t.arg({ type: RecursiveGiraffeInput, required: true }),
      },
      query: (args, context) => {
        console.log(args.girafee?.birthdate)
        console.log(args.girafeeAndChilds.friends?.friends?.friends?.friends?.friends)
        console.log({ args })

        return {
          orderBy: {
            id: args.oldestFirst ? 'asc' : 'desc',
          },
        }
      },
    }),
  }),
});

builder.prismaObject('Post', {
  findUnique: ({ id }) => ({ id: Number.parseInt(String(id), 10) }),
  
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    content: t.exposeString('content'),
    titleContent: t.string({
      resolve: (user) => `${user.title} ${user.content}`,
    }),
    author: t.relation('author'),
    Comments: t.relation('Comments'),
    CommentsCount: t.prismaField({ type: "Comment", resolve: () => ({ id: 2, authorId: 1, comment: "asd", postId: 2 }) })
  }),
});

const a = builder.prismaWheree('User', {
  fields: ({
    id: true,
  }),
})

const commentObject = builder.prismaObject('Comment', {
  findUnique: (parent) => ({ id: parent.id }),
  include: {
    post: true,
  },
  fields: (t) => {
    const fields = {
      id: t.exposeInt('id'),
      comment: t.exposeString('comment'),
      comentt: t.field({
        type: "String", resolve: (parent) => {
          console.log({ parent })
          return `${parent.comment}-${parent.post.title}`
        }
      }),
      author: t.relation('author'),
      post: t.relation('post'),
    }
    const { comentt, ...publicFields } = fields
    console.log(`This ${comentt} is never sent to user`)
    console.log({ comentt })
    return { ...publicFields, authors: t.relation('author'), }
  },
});

const DEFAULT_PAGE_SIZE = 10;

builder.queryFields((t) => ({
  comment: t.prismaField({
    type: 'Comment',
    nullable: true,
    resolve: (query, root, args) => {
      console.log({ args, query })
      return db.comment.findUnique({
        where: { id: 1 },
        ...query,
      })
    }
  }),
  post: t.prismaField({
    type: 'Post',
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: (query, root, args) =>
      db.post.findUnique({
        ...query,
        where: { id: Number.parseInt(String(args.id), 10) },
      }),
  }),
  posts: t.prismaField({
    type: ['Post'],
    args: {
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args) =>
      db.post.findMany({
        ...query,
        take: args.take ?? DEFAULT_PAGE_SIZE,
        skip: args.skip ?? 0,
      }),
  }),
  user: t.prismaField({
    type: 'User',
    nullable: true,
    args: {
      id: t.arg({ type: "ID" })
    },
    resolve: (query, root, args) =>
      null
  }),
}))
// builder.queryType({
//   fields: (t) => ({
//     post: t.prismaField({
//       type: 'Post',
//       nullable: true,
//       args: {
//         id: t.arg.id({ required: true }),
//       },
//       resolve: (query, root, args) =>
//         db.post.findUnique({
//           ...query,
//           where: { id: Number.parseInt(String(args.id), 10) },
//         }),
//     }),
//     posts: t.prismaField({
//       type: ['Post'],
//       args: {
//         take: t.arg.int(),
//         skip: t.arg.int(),
//       },
//       resolve: (query, root, args) =>
//         db.post.findMany({
//           ...query,
//           take: args.take ?? DEFAULT_PAGE_SIZE,
//           skip: args.skip ?? 0,
//         }),
//     }),
//     user: t.prismaField({
//       type: 'User',
//       nullable: true,
//       args: {
//         id: t.arg({ type: "ID" })
//       },
//       resolve: (query, root, args) =>
//         db.user.findUnique({
//           ...query,
//           where: { id: Number.parseInt(String(args.id), 10) },
//         }),
//     }),
//   }),
// });

builder.mutationType({
  fields: (t) => ({
    createOnePost: t.prismaField({
      type: "Post",
      nullable: true,
      args: {
        idx: t.arg({ type: "Boolean", defaultValue: true }),
        idxz: t.arg({ type: "Boolean", defaultValue: true, required: true }),
      },
      extensions: {},
      resolve: (query, root, args, context, info) => {
        console.log({ query, root, args })
        return db.post.findFirst({
          ...query,
          where: {},
        })
      }
    }),
  })
})

export const schema = builder.toSchema({});
