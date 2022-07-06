import { Prisma } from "../prisma/client"
import { builder } from "./builder"

export const UserScalarFieldEnum = builder.enumType('UserScalarFieldEnum', {
  values: ["id","firstName","lastName","createdAt","updatedAt"] as const,
});
export const PostScalarFieldEnum = builder.enumType('PostScalarFieldEnum', {
  values: ["id","title","content","authorId"] as const,
});
export const CommentScalarFieldEnum = builder.enumType('CommentScalarFieldEnum', {
  values: ["id","comment","authorId","postId"] as const,
});
export const SortOrder = builder.enumType('SortOrder', {
  values: ["asc","desc"] as const,
});
export const QueryMode = builder.enumType('QueryMode', {
  values: ["default","insensitive"] as const,
});

export const UserWhereInput = builder.inputRef<Prisma.UserWhereInput>('UserWhereInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":UserWhereInput}),
    OR: t.field({"required":false,"type":[UserWhereInput]}),
    NOT: t.field({"required":false,"type":UserWhereInput}),
    id: t.field({"required":false,"type":IntFilter}),
    firstName: t.field({"required":false,"type":StringFilter}),
    lastName: t.field({"required":false,"type":StringFilter}),
    posts: t.field({"required":false,"type":PostListRelationFilter}),
    Comments: t.field({"required":false,"type":CommentListRelationFilter}),
    createdAt: t.field({"required":false,"type":DateTimeFilter}),
    updatedAt: t.field({"required":false,"type":DateTimeNullableFilter}),
  })
})

export const UserOrderByWithRelationInput = builder.inputRef<Prisma.UserOrderByWithRelationInput>('UserOrderByWithRelationInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    firstName: t.field({"required":false,"type":SortOrder}),
    lastName: t.field({"required":false,"type":SortOrder}),
    posts: t.field({"required":false,"type":PostOrderByRelationAggregateInput}),
    Comments: t.field({"required":false,"type":CommentOrderByRelationAggregateInput}),
    createdAt: t.field({"required":false,"type":SortOrder}),
    updatedAt: t.field({"required":false,"type":SortOrder}),
  })
})

export const UserWhereUniqueInput = builder.inputRef<Prisma.UserWhereUniqueInput>('UserWhereUniqueInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
  })
})

export const UserOrderByWithAggregationInput = builder.inputRef<Prisma.UserOrderByWithAggregationInput>('UserOrderByWithAggregationInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    firstName: t.field({"required":false,"type":SortOrder}),
    lastName: t.field({"required":false,"type":SortOrder}),
    createdAt: t.field({"required":false,"type":SortOrder}),
    updatedAt: t.field({"required":false,"type":SortOrder}),
    _count: t.field({"required":false,"type":UserCountOrderByAggregateInput}),
    _avg: t.field({"required":false,"type":UserAvgOrderByAggregateInput}),
    _max: t.field({"required":false,"type":UserMaxOrderByAggregateInput}),
    _min: t.field({"required":false,"type":UserMinOrderByAggregateInput}),
    _sum: t.field({"required":false,"type":UserSumOrderByAggregateInput}),
  })
})

export const UserScalarWhereWithAggregatesInput = builder.inputRef<Prisma.UserScalarWhereWithAggregatesInput>('UserScalarWhereWithAggregatesInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":UserScalarWhereWithAggregatesInput}),
    OR: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
    NOT: t.field({"required":false,"type":UserScalarWhereWithAggregatesInput}),
    id: t.field({"required":false,"type":IntWithAggregatesFilter}),
    firstName: t.field({"required":false,"type":StringWithAggregatesFilter}),
    lastName: t.field({"required":false,"type":StringWithAggregatesFilter}),
    createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
    updatedAt: t.field({"required":false,"type":DateTimeNullableWithAggregatesFilter}),
  })
})

export const PostWhereInput = builder.inputRef<Prisma.PostWhereInput>('PostWhereInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":PostWhereInput}),
    OR: t.field({"required":false,"type":[PostWhereInput]}),
    NOT: t.field({"required":false,"type":PostWhereInput}),
    id: t.field({"required":false,"type":IntFilter}),
    title: t.field({"required":false,"type":StringFilter}),
    content: t.field({"required":false,"type":StringFilter}),
    author: t.field({"required":false,"type":UserRelationFilter}),
    Comments: t.field({"required":false,"type":CommentListRelationFilter}),
    authorId: t.field({"required":false,"type":IntFilter}),
  })
})

export const PostOrderByWithRelationInput = builder.inputRef<Prisma.PostOrderByWithRelationInput>('PostOrderByWithRelationInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    title: t.field({"required":false,"type":SortOrder}),
    content: t.field({"required":false,"type":SortOrder}),
    author: t.field({"required":false,"type":UserOrderByWithRelationInput}),
    Comments: t.field({"required":false,"type":CommentOrderByRelationAggregateInput}),
    authorId: t.field({"required":false,"type":SortOrder}),
  })
})

export const PostWhereUniqueInput = builder.inputRef<Prisma.PostWhereUniqueInput>('PostWhereUniqueInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
  })
})

export const PostOrderByWithAggregationInput = builder.inputRef<Prisma.PostOrderByWithAggregationInput>('PostOrderByWithAggregationInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    title: t.field({"required":false,"type":SortOrder}),
    content: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
    _count: t.field({"required":false,"type":PostCountOrderByAggregateInput}),
    _avg: t.field({"required":false,"type":PostAvgOrderByAggregateInput}),
    _max: t.field({"required":false,"type":PostMaxOrderByAggregateInput}),
    _min: t.field({"required":false,"type":PostMinOrderByAggregateInput}),
    _sum: t.field({"required":false,"type":PostSumOrderByAggregateInput}),
  })
})

export const PostScalarWhereWithAggregatesInput = builder.inputRef<Prisma.PostScalarWhereWithAggregatesInput>('PostScalarWhereWithAggregatesInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":PostScalarWhereWithAggregatesInput}),
    OR: t.field({"required":false,"type":[PostScalarWhereWithAggregatesInput]}),
    NOT: t.field({"required":false,"type":PostScalarWhereWithAggregatesInput}),
    id: t.field({"required":false,"type":IntWithAggregatesFilter}),
    title: t.field({"required":false,"type":StringWithAggregatesFilter}),
    content: t.field({"required":false,"type":StringWithAggregatesFilter}),
    authorId: t.field({"required":false,"type":IntWithAggregatesFilter}),
  })
})

export const CommentWhereInput = builder.inputRef<Prisma.CommentWhereInput>('CommentWhereInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":CommentWhereInput}),
    OR: t.field({"required":false,"type":[CommentWhereInput]}),
    NOT: t.field({"required":false,"type":CommentWhereInput}),
    id: t.field({"required":false,"type":IntFilter}),
    comment: t.field({"required":false,"type":StringFilter}),
    author: t.field({"required":false,"type":UserRelationFilter}),
    post: t.field({"required":false,"type":PostRelationFilter}),
    authorId: t.field({"required":false,"type":IntFilter}),
    postId: t.field({"required":false,"type":IntFilter}),
  })
})

export const CommentOrderByWithRelationInput = builder.inputRef<Prisma.CommentOrderByWithRelationInput>('CommentOrderByWithRelationInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    comment: t.field({"required":false,"type":SortOrder}),
    author: t.field({"required":false,"type":UserOrderByWithRelationInput}),
    post: t.field({"required":false,"type":PostOrderByWithRelationInput}),
    authorId: t.field({"required":false,"type":SortOrder}),
    postId: t.field({"required":false,"type":SortOrder}),
  })
})

export const CommentWhereUniqueInput = builder.inputRef<Prisma.CommentWhereUniqueInput>('CommentWhereUniqueInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
  })
})

export const CommentOrderByWithAggregationInput = builder.inputRef<Prisma.CommentOrderByWithAggregationInput>('CommentOrderByWithAggregationInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    comment: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
    postId: t.field({"required":false,"type":SortOrder}),
    _count: t.field({"required":false,"type":CommentCountOrderByAggregateInput}),
    _avg: t.field({"required":false,"type":CommentAvgOrderByAggregateInput}),
    _max: t.field({"required":false,"type":CommentMaxOrderByAggregateInput}),
    _min: t.field({"required":false,"type":CommentMinOrderByAggregateInput}),
    _sum: t.field({"required":false,"type":CommentSumOrderByAggregateInput}),
  })
})

export const CommentScalarWhereWithAggregatesInput = builder.inputRef<Prisma.CommentScalarWhereWithAggregatesInput>('CommentScalarWhereWithAggregatesInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":CommentScalarWhereWithAggregatesInput}),
    OR: t.field({"required":false,"type":[CommentScalarWhereWithAggregatesInput]}),
    NOT: t.field({"required":false,"type":CommentScalarWhereWithAggregatesInput}),
    id: t.field({"required":false,"type":IntWithAggregatesFilter}),
    comment: t.field({"required":false,"type":StringWithAggregatesFilter}),
    authorId: t.field({"required":false,"type":IntWithAggregatesFilter}),
    postId: t.field({"required":false,"type":IntWithAggregatesFilter}),
  })
})

export const UserCreateInput = builder.inputRef<Prisma.UserCreateInput>('UserCreateInput').implement({
  fields: (t) => ({
    firstName: t.string({"required":true}),
    lastName: t.string({"required":true}),
    posts: t.field({"required":false,"type":PostCreateNestedManyWithoutAuthorInput}),
    Comments: t.field({"required":false,"type":CommentCreateNestedManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserUncheckedCreateInput = builder.inputRef<Prisma.UserUncheckedCreateInput>('UserUncheckedCreateInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    firstName: t.string({"required":true}),
    lastName: t.string({"required":true}),
    posts: t.field({"required":false,"type":PostUncheckedCreateNestedManyWithoutAuthorInput}),
    Comments: t.field({"required":false,"type":CommentUncheckedCreateNestedManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserUpdateInput = builder.inputRef<Prisma.UserUpdateInput>('UserUpdateInput').implement({
  fields: (t) => ({
    firstName: t.string({"required":false}),
    lastName: t.string({"required":false}),
    posts: t.field({"required":false,"type":PostUpdateManyWithoutAuthorInput}),
    Comments: t.field({"required":false,"type":CommentUpdateManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserUncheckedUpdateInput = builder.inputRef<Prisma.UserUncheckedUpdateInput>('UserUncheckedUpdateInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    firstName: t.string({"required":false}),
    lastName: t.string({"required":false}),
    posts: t.field({"required":false,"type":PostUncheckedUpdateManyWithoutAuthorInput}),
    Comments: t.field({"required":false,"type":CommentUncheckedUpdateManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserCreateManyInput = builder.inputRef<Prisma.UserCreateManyInput>('UserCreateManyInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    firstName: t.string({"required":true}),
    lastName: t.string({"required":true}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserUpdateManyMutationInput = builder.inputRef<Prisma.UserUpdateManyMutationInput>('UserUpdateManyMutationInput').implement({
  fields: (t) => ({
    firstName: t.string({"required":false}),
    lastName: t.string({"required":false}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserUncheckedUpdateManyInput = builder.inputRef<Prisma.UserUncheckedUpdateManyInput>('UserUncheckedUpdateManyInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    firstName: t.string({"required":false}),
    lastName: t.string({"required":false}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const PostCreateInput = builder.inputRef<Prisma.PostCreateInput>('PostCreateInput').implement({
  fields: (t) => ({
    title: t.string({"required":true}),
    content: t.string({"required":true}),
    author: t.field({"required":true,"type":UserCreateNestedOneWithoutPostsInput}),
    Comments: t.field({"required":false,"type":CommentCreateNestedManyWithoutPostInput}),
  })
})

export const PostUncheckedCreateInput = builder.inputRef<Prisma.PostUncheckedCreateInput>('PostUncheckedCreateInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    title: t.string({"required":true}),
    content: t.string({"required":true}),
    Comments: t.field({"required":false,"type":CommentUncheckedCreateNestedManyWithoutPostInput}),
    authorId: t.int({"required":true}),
  })
})

export const PostUpdateInput = builder.inputRef<Prisma.PostUpdateInput>('PostUpdateInput').implement({
  fields: (t) => ({
    title: t.string({"required":false}),
    content: t.string({"required":false}),
    author: t.field({"required":false,"type":UserUpdateOneRequiredWithoutPostsInput}),
    Comments: t.field({"required":false,"type":CommentUpdateManyWithoutPostInput}),
  })
})

export const PostUncheckedUpdateInput = builder.inputRef<Prisma.PostUncheckedUpdateInput>('PostUncheckedUpdateInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    title: t.string({"required":false}),
    content: t.string({"required":false}),
    Comments: t.field({"required":false,"type":CommentUncheckedUpdateManyWithoutPostInput}),
    authorId: t.int({"required":false}),
  })
})

export const PostCreateManyInput = builder.inputRef<Prisma.PostCreateManyInput>('PostCreateManyInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    title: t.string({"required":true}),
    content: t.string({"required":true}),
    authorId: t.int({"required":true}),
  })
})

export const PostUpdateManyMutationInput = builder.inputRef<Prisma.PostUpdateManyMutationInput>('PostUpdateManyMutationInput').implement({
  fields: (t) => ({
    title: t.string({"required":false}),
    content: t.string({"required":false}),
  })
})

export const PostUncheckedUpdateManyInput = builder.inputRef<Prisma.PostUncheckedUpdateManyInput>('PostUncheckedUpdateManyInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    title: t.string({"required":false}),
    content: t.string({"required":false}),
    authorId: t.int({"required":false}),
  })
})

export const CommentCreateInput = builder.inputRef<Prisma.CommentCreateInput>('CommentCreateInput').implement({
  fields: (t) => ({
    comment: t.string({"required":true}),
    author: t.field({"required":true,"type":UserCreateNestedOneWithoutCommentsInput}),
    post: t.field({"required":true,"type":PostCreateNestedOneWithoutCommentsInput}),
  })
})

export const CommentUncheckedCreateInput = builder.inputRef<Prisma.CommentUncheckedCreateInput>('CommentUncheckedCreateInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    comment: t.string({"required":true}),
    authorId: t.int({"required":true}),
    postId: t.int({"required":true}),
  })
})

export const CommentUpdateInput = builder.inputRef<Prisma.CommentUpdateInput>('CommentUpdateInput').implement({
  fields: (t) => ({
    comment: t.string({"required":false}),
    author: t.field({"required":false,"type":UserUpdateOneRequiredWithoutCommentsInput}),
    post: t.field({"required":false,"type":PostUpdateOneRequiredWithoutCommentsInput}),
  })
})

export const CommentUncheckedUpdateInput = builder.inputRef<Prisma.CommentUncheckedUpdateInput>('CommentUncheckedUpdateInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    comment: t.string({"required":false}),
    authorId: t.int({"required":false}),
    postId: t.int({"required":false}),
  })
})

export const CommentCreateManyInput = builder.inputRef<Prisma.CommentCreateManyInput>('CommentCreateManyInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    comment: t.string({"required":true}),
    authorId: t.int({"required":true}),
    postId: t.int({"required":true}),
  })
})

export const CommentUpdateManyMutationInput = builder.inputRef<Prisma.CommentUpdateManyMutationInput>('CommentUpdateManyMutationInput').implement({
  fields: (t) => ({
    comment: t.string({"required":false}),
  })
})

export const CommentUncheckedUpdateManyInput = builder.inputRef<Prisma.CommentUncheckedUpdateManyInput>('CommentUncheckedUpdateManyInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    comment: t.string({"required":false}),
    authorId: t.int({"required":false}),
    postId: t.int({"required":false}),
  })
})

export const IntFilter = builder.inputRef<Prisma.IntFilter>('IntFilter').implement({
  fields: (t) => ({
    equals: t.int({"required":false}),
    in: t.intList({"required":false}),
    notIn: t.intList({"required":false}),
    lt: t.int({"required":false}),
    lte: t.int({"required":false}),
    gt: t.int({"required":false}),
    gte: t.int({"required":false}),
    not: t.int({"required":false}),
  })
})

export const StringFilter = builder.inputRef<Prisma.StringFilter>('StringFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    mode: t.field({"required":false,"type":QueryMode}),
    not: t.string({"required":false}),
  })
})

export const PostListRelationFilter = builder.inputRef<Prisma.PostListRelationFilter>('PostListRelationFilter').implement({
  fields: (t) => ({
    every: t.field({"required":false,"type":PostWhereInput}),
    some: t.field({"required":false,"type":PostWhereInput}),
    none: t.field({"required":false,"type":PostWhereInput}),
  })
})

export const CommentListRelationFilter = builder.inputRef<Prisma.CommentListRelationFilter>('CommentListRelationFilter').implement({
  fields: (t) => ({
    every: t.field({"required":false,"type":CommentWhereInput}),
    some: t.field({"required":false,"type":CommentWhereInput}),
    none: t.field({"required":false,"type":CommentWhereInput}),
  })
})

export const DateTimeFilter = builder.inputRef<Prisma.DateTimeFilter>('DateTimeFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    not: t.string({"required":false}),
  })
})

export const DateTimeNullableFilter = builder.inputRef<Prisma.DateTimeNullableFilter>('DateTimeNullableFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    not: t.string({"required":false}),
  })
})

export const PostOrderByRelationAggregateInput = builder.inputRef<Prisma.PostOrderByRelationAggregateInput>('PostOrderByRelationAggregateInput').implement({
  fields: (t) => ({
    _count: t.field({"required":false,"type":SortOrder}),
  })
})

export const CommentOrderByRelationAggregateInput = builder.inputRef<Prisma.CommentOrderByRelationAggregateInput>('CommentOrderByRelationAggregateInput').implement({
  fields: (t) => ({
    _count: t.field({"required":false,"type":SortOrder}),
  })
})

export const UserCountOrderByAggregateInput = builder.inputRef<Prisma.UserCountOrderByAggregateInput>('UserCountOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    firstName: t.field({"required":false,"type":SortOrder}),
    lastName: t.field({"required":false,"type":SortOrder}),
    createdAt: t.field({"required":false,"type":SortOrder}),
    updatedAt: t.field({"required":false,"type":SortOrder}),
  })
})

export const UserAvgOrderByAggregateInput = builder.inputRef<Prisma.UserAvgOrderByAggregateInput>('UserAvgOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
  })
})

export const UserMaxOrderByAggregateInput = builder.inputRef<Prisma.UserMaxOrderByAggregateInput>('UserMaxOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    firstName: t.field({"required":false,"type":SortOrder}),
    lastName: t.field({"required":false,"type":SortOrder}),
    createdAt: t.field({"required":false,"type":SortOrder}),
    updatedAt: t.field({"required":false,"type":SortOrder}),
  })
})

export const UserMinOrderByAggregateInput = builder.inputRef<Prisma.UserMinOrderByAggregateInput>('UserMinOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    firstName: t.field({"required":false,"type":SortOrder}),
    lastName: t.field({"required":false,"type":SortOrder}),
    createdAt: t.field({"required":false,"type":SortOrder}),
    updatedAt: t.field({"required":false,"type":SortOrder}),
  })
})

export const UserSumOrderByAggregateInput = builder.inputRef<Prisma.UserSumOrderByAggregateInput>('UserSumOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
  })
})

export const IntWithAggregatesFilter = builder.inputRef<Prisma.IntWithAggregatesFilter>('IntWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.int({"required":false}),
    in: t.intList({"required":false}),
    notIn: t.intList({"required":false}),
    lt: t.int({"required":false}),
    lte: t.int({"required":false}),
    gt: t.int({"required":false}),
    gte: t.int({"required":false}),
    not: t.int({"required":false}),
    _count: t.field({"required":false,"type":NestedIntFilter}),
    _avg: t.field({"required":false,"type":NestedFloatFilter}),
    _sum: t.field({"required":false,"type":NestedIntFilter}),
    _min: t.field({"required":false,"type":NestedIntFilter}),
    _max: t.field({"required":false,"type":NestedIntFilter}),
  })
})

export const StringWithAggregatesFilter = builder.inputRef<Prisma.StringWithAggregatesFilter>('StringWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    mode: t.field({"required":false,"type":QueryMode}),
    not: t.string({"required":false}),
    _count: t.field({"required":false,"type":NestedIntFilter}),
    _min: t.field({"required":false,"type":NestedStringFilter}),
    _max: t.field({"required":false,"type":NestedStringFilter}),
  })
})

export const DateTimeWithAggregatesFilter = builder.inputRef<Prisma.DateTimeWithAggregatesFilter>('DateTimeWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    not: t.string({"required":false}),
    _count: t.field({"required":false,"type":NestedIntFilter}),
    _min: t.field({"required":false,"type":NestedDateTimeFilter}),
    _max: t.field({"required":false,"type":NestedDateTimeFilter}),
  })
})

export const DateTimeNullableWithAggregatesFilter = builder.inputRef<Prisma.DateTimeNullableWithAggregatesFilter>('DateTimeNullableWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    not: t.string({"required":false}),
    _count: t.field({"required":false,"type":NestedIntNullableFilter}),
    _min: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
    _max: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
  })
})

export const UserRelationFilter = builder.inputRef<Prisma.UserRelationFilter>('UserRelationFilter').implement({
  fields: (t) => ({
    is: t.field({"required":false,"type":UserWhereInput}),
    isNot: t.field({"required":false,"type":UserWhereInput}),
  })
})

export const PostCountOrderByAggregateInput = builder.inputRef<Prisma.PostCountOrderByAggregateInput>('PostCountOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    title: t.field({"required":false,"type":SortOrder}),
    content: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
  })
})

export const PostAvgOrderByAggregateInput = builder.inputRef<Prisma.PostAvgOrderByAggregateInput>('PostAvgOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
  })
})

export const PostMaxOrderByAggregateInput = builder.inputRef<Prisma.PostMaxOrderByAggregateInput>('PostMaxOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    title: t.field({"required":false,"type":SortOrder}),
    content: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
  })
})

export const PostMinOrderByAggregateInput = builder.inputRef<Prisma.PostMinOrderByAggregateInput>('PostMinOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    title: t.field({"required":false,"type":SortOrder}),
    content: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
  })
})

export const PostSumOrderByAggregateInput = builder.inputRef<Prisma.PostSumOrderByAggregateInput>('PostSumOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
  })
})

export const PostRelationFilter = builder.inputRef<Prisma.PostRelationFilter>('PostRelationFilter').implement({
  fields: (t) => ({
    is: t.field({"required":false,"type":PostWhereInput}),
    isNot: t.field({"required":false,"type":PostWhereInput}),
  })
})

export const CommentCountOrderByAggregateInput = builder.inputRef<Prisma.CommentCountOrderByAggregateInput>('CommentCountOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    comment: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
    postId: t.field({"required":false,"type":SortOrder}),
  })
})

export const CommentAvgOrderByAggregateInput = builder.inputRef<Prisma.CommentAvgOrderByAggregateInput>('CommentAvgOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
    postId: t.field({"required":false,"type":SortOrder}),
  })
})

export const CommentMaxOrderByAggregateInput = builder.inputRef<Prisma.CommentMaxOrderByAggregateInput>('CommentMaxOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    comment: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
    postId: t.field({"required":false,"type":SortOrder}),
  })
})

export const CommentMinOrderByAggregateInput = builder.inputRef<Prisma.CommentMinOrderByAggregateInput>('CommentMinOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    comment: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
    postId: t.field({"required":false,"type":SortOrder}),
  })
})

export const CommentSumOrderByAggregateInput = builder.inputRef<Prisma.CommentSumOrderByAggregateInput>('CommentSumOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
    postId: t.field({"required":false,"type":SortOrder}),
  })
})

export const PostCreateNestedManyWithoutAuthorInput = builder.inputRef<Prisma.PostCreateNestedManyWithoutAuthorInput>('PostCreateNestedManyWithoutAuthorInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":PostCreateWithoutAuthorInput}),
    connectOrCreate: t.field({"required":false,"type":PostCreateOrConnectWithoutAuthorInput}),
    createMany: t.field({"required":false,"type":PostCreateManyAuthorInputEnvelope}),
    connect: t.field({"required":false,"type":PostWhereUniqueInput}),
  })
})

export const CommentCreateNestedManyWithoutAuthorInput = builder.inputRef<Prisma.CommentCreateNestedManyWithoutAuthorInput>('CommentCreateNestedManyWithoutAuthorInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":CommentCreateWithoutAuthorInput}),
    connectOrCreate: t.field({"required":false,"type":CommentCreateOrConnectWithoutAuthorInput}),
    createMany: t.field({"required":false,"type":CommentCreateManyAuthorInputEnvelope}),
    connect: t.field({"required":false,"type":CommentWhereUniqueInput}),
  })
})

export const PostUncheckedCreateNestedManyWithoutAuthorInput = builder.inputRef<Prisma.PostUncheckedCreateNestedManyWithoutAuthorInput>('PostUncheckedCreateNestedManyWithoutAuthorInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":PostCreateWithoutAuthorInput}),
    connectOrCreate: t.field({"required":false,"type":PostCreateOrConnectWithoutAuthorInput}),
    createMany: t.field({"required":false,"type":PostCreateManyAuthorInputEnvelope}),
    connect: t.field({"required":false,"type":PostWhereUniqueInput}),
  })
})

export const CommentUncheckedCreateNestedManyWithoutAuthorInput = builder.inputRef<Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput>('CommentUncheckedCreateNestedManyWithoutAuthorInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":CommentCreateWithoutAuthorInput}),
    connectOrCreate: t.field({"required":false,"type":CommentCreateOrConnectWithoutAuthorInput}),
    createMany: t.field({"required":false,"type":CommentCreateManyAuthorInputEnvelope}),
    connect: t.field({"required":false,"type":CommentWhereUniqueInput}),
  })
})

export const StringFieldUpdateOperationsInput = builder.inputRef<Prisma.StringFieldUpdateOperationsInput>('StringFieldUpdateOperationsInput').implement({
  fields: (t) => ({
    set: t.string({"required":false}),
  })
})

export const PostUpdateManyWithoutAuthorInput = builder.inputRef<Prisma.PostUpdateManyWithoutAuthorInput>('PostUpdateManyWithoutAuthorInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":PostCreateWithoutAuthorInput}),
    connectOrCreate: t.field({"required":false,"type":PostCreateOrConnectWithoutAuthorInput}),
    upsert: t.field({"required":false,"type":PostUpsertWithWhereUniqueWithoutAuthorInput}),
    createMany: t.field({"required":false,"type":PostCreateManyAuthorInputEnvelope}),
    set: t.field({"required":false,"type":PostWhereUniqueInput}),
    disconnect: t.field({"required":false,"type":PostWhereUniqueInput}),
    delete: t.field({"required":false,"type":PostWhereUniqueInput}),
    connect: t.field({"required":false,"type":PostWhereUniqueInput}),
    update: t.field({"required":false,"type":PostUpdateWithWhereUniqueWithoutAuthorInput}),
    updateMany: t.field({"required":false,"type":PostUpdateManyWithWhereWithoutAuthorInput}),
    deleteMany: t.field({"required":false,"type":PostScalarWhereInput}),
  })
})

export const CommentUpdateManyWithoutAuthorInput = builder.inputRef<Prisma.CommentUpdateManyWithoutAuthorInput>('CommentUpdateManyWithoutAuthorInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":CommentCreateWithoutAuthorInput}),
    connectOrCreate: t.field({"required":false,"type":CommentCreateOrConnectWithoutAuthorInput}),
    upsert: t.field({"required":false,"type":CommentUpsertWithWhereUniqueWithoutAuthorInput}),
    createMany: t.field({"required":false,"type":CommentCreateManyAuthorInputEnvelope}),
    set: t.field({"required":false,"type":CommentWhereUniqueInput}),
    disconnect: t.field({"required":false,"type":CommentWhereUniqueInput}),
    delete: t.field({"required":false,"type":CommentWhereUniqueInput}),
    connect: t.field({"required":false,"type":CommentWhereUniqueInput}),
    update: t.field({"required":false,"type":CommentUpdateWithWhereUniqueWithoutAuthorInput}),
    updateMany: t.field({"required":false,"type":CommentUpdateManyWithWhereWithoutAuthorInput}),
    deleteMany: t.field({"required":false,"type":CommentScalarWhereInput}),
  })
})

export const DateTimeFieldUpdateOperationsInput = builder.inputRef<Prisma.DateTimeFieldUpdateOperationsInput>('DateTimeFieldUpdateOperationsInput').implement({
  fields: (t) => ({
    set: t.string({"required":false}),
  })
})

export const NullableDateTimeFieldUpdateOperationsInput = builder.inputRef<Prisma.NullableDateTimeFieldUpdateOperationsInput>('NullableDateTimeFieldUpdateOperationsInput').implement({
  fields: (t) => ({
    set: t.string({"required":false}),
  })
})

export const IntFieldUpdateOperationsInput = builder.inputRef<Prisma.IntFieldUpdateOperationsInput>('IntFieldUpdateOperationsInput').implement({
  fields: (t) => ({
    set: t.int({"required":false}),
    increment: t.int({"required":false}),
    decrement: t.int({"required":false}),
    multiply: t.int({"required":false}),
    divide: t.int({"required":false}),
  })
})

export const PostUncheckedUpdateManyWithoutAuthorInput = builder.inputRef<Prisma.PostUncheckedUpdateManyWithoutAuthorInput>('PostUncheckedUpdateManyWithoutAuthorInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":PostCreateWithoutAuthorInput}),
    connectOrCreate: t.field({"required":false,"type":PostCreateOrConnectWithoutAuthorInput}),
    upsert: t.field({"required":false,"type":PostUpsertWithWhereUniqueWithoutAuthorInput}),
    createMany: t.field({"required":false,"type":PostCreateManyAuthorInputEnvelope}),
    set: t.field({"required":false,"type":PostWhereUniqueInput}),
    disconnect: t.field({"required":false,"type":PostWhereUniqueInput}),
    delete: t.field({"required":false,"type":PostWhereUniqueInput}),
    connect: t.field({"required":false,"type":PostWhereUniqueInput}),
    update: t.field({"required":false,"type":PostUpdateWithWhereUniqueWithoutAuthorInput}),
    updateMany: t.field({"required":false,"type":PostUpdateManyWithWhereWithoutAuthorInput}),
    deleteMany: t.field({"required":false,"type":PostScalarWhereInput}),
  })
})

export const CommentUncheckedUpdateManyWithoutAuthorInput = builder.inputRef<Prisma.CommentUncheckedUpdateManyWithoutAuthorInput>('CommentUncheckedUpdateManyWithoutAuthorInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":CommentCreateWithoutAuthorInput}),
    connectOrCreate: t.field({"required":false,"type":CommentCreateOrConnectWithoutAuthorInput}),
    upsert: t.field({"required":false,"type":CommentUpsertWithWhereUniqueWithoutAuthorInput}),
    createMany: t.field({"required":false,"type":CommentCreateManyAuthorInputEnvelope}),
    set: t.field({"required":false,"type":CommentWhereUniqueInput}),
    disconnect: t.field({"required":false,"type":CommentWhereUniqueInput}),
    delete: t.field({"required":false,"type":CommentWhereUniqueInput}),
    connect: t.field({"required":false,"type":CommentWhereUniqueInput}),
    update: t.field({"required":false,"type":CommentUpdateWithWhereUniqueWithoutAuthorInput}),
    updateMany: t.field({"required":false,"type":CommentUpdateManyWithWhereWithoutAuthorInput}),
    deleteMany: t.field({"required":false,"type":CommentScalarWhereInput}),
  })
})

export const UserCreateNestedOneWithoutPostsInput = builder.inputRef<Prisma.UserCreateNestedOneWithoutPostsInput>('UserCreateNestedOneWithoutPostsInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":UserCreateWithoutPostsInput}),
    connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutPostsInput}),
    connect: t.field({"required":false,"type":UserWhereUniqueInput}),
  })
})

export const CommentCreateNestedManyWithoutPostInput = builder.inputRef<Prisma.CommentCreateNestedManyWithoutPostInput>('CommentCreateNestedManyWithoutPostInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":CommentCreateWithoutPostInput}),
    connectOrCreate: t.field({"required":false,"type":CommentCreateOrConnectWithoutPostInput}),
    createMany: t.field({"required":false,"type":CommentCreateManyPostInputEnvelope}),
    connect: t.field({"required":false,"type":CommentWhereUniqueInput}),
  })
})

export const CommentUncheckedCreateNestedManyWithoutPostInput = builder.inputRef<Prisma.CommentUncheckedCreateNestedManyWithoutPostInput>('CommentUncheckedCreateNestedManyWithoutPostInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":CommentCreateWithoutPostInput}),
    connectOrCreate: t.field({"required":false,"type":CommentCreateOrConnectWithoutPostInput}),
    createMany: t.field({"required":false,"type":CommentCreateManyPostInputEnvelope}),
    connect: t.field({"required":false,"type":CommentWhereUniqueInput}),
  })
})

export const UserUpdateOneRequiredWithoutPostsInput = builder.inputRef<Prisma.UserUpdateOneRequiredWithoutPostsInput>('UserUpdateOneRequiredWithoutPostsInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":UserCreateWithoutPostsInput}),
    connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutPostsInput}),
    upsert: t.field({"required":false,"type":UserUpsertWithoutPostsInput}),
    connect: t.field({"required":false,"type":UserWhereUniqueInput}),
    update: t.field({"required":false,"type":UserUpdateWithoutPostsInput}),
  })
})

export const CommentUpdateManyWithoutPostInput = builder.inputRef<Prisma.CommentUpdateManyWithoutPostInput>('CommentUpdateManyWithoutPostInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":CommentCreateWithoutPostInput}),
    connectOrCreate: t.field({"required":false,"type":CommentCreateOrConnectWithoutPostInput}),
    upsert: t.field({"required":false,"type":CommentUpsertWithWhereUniqueWithoutPostInput}),
    createMany: t.field({"required":false,"type":CommentCreateManyPostInputEnvelope}),
    set: t.field({"required":false,"type":CommentWhereUniqueInput}),
    disconnect: t.field({"required":false,"type":CommentWhereUniqueInput}),
    delete: t.field({"required":false,"type":CommentWhereUniqueInput}),
    connect: t.field({"required":false,"type":CommentWhereUniqueInput}),
    update: t.field({"required":false,"type":CommentUpdateWithWhereUniqueWithoutPostInput}),
    updateMany: t.field({"required":false,"type":CommentUpdateManyWithWhereWithoutPostInput}),
    deleteMany: t.field({"required":false,"type":CommentScalarWhereInput}),
  })
})

export const CommentUncheckedUpdateManyWithoutPostInput = builder.inputRef<Prisma.CommentUncheckedUpdateManyWithoutPostInput>('CommentUncheckedUpdateManyWithoutPostInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":CommentCreateWithoutPostInput}),
    connectOrCreate: t.field({"required":false,"type":CommentCreateOrConnectWithoutPostInput}),
    upsert: t.field({"required":false,"type":CommentUpsertWithWhereUniqueWithoutPostInput}),
    createMany: t.field({"required":false,"type":CommentCreateManyPostInputEnvelope}),
    set: t.field({"required":false,"type":CommentWhereUniqueInput}),
    disconnect: t.field({"required":false,"type":CommentWhereUniqueInput}),
    delete: t.field({"required":false,"type":CommentWhereUniqueInput}),
    connect: t.field({"required":false,"type":CommentWhereUniqueInput}),
    update: t.field({"required":false,"type":CommentUpdateWithWhereUniqueWithoutPostInput}),
    updateMany: t.field({"required":false,"type":CommentUpdateManyWithWhereWithoutPostInput}),
    deleteMany: t.field({"required":false,"type":CommentScalarWhereInput}),
  })
})

export const UserCreateNestedOneWithoutCommentsInput = builder.inputRef<Prisma.UserCreateNestedOneWithoutCommentsInput>('UserCreateNestedOneWithoutCommentsInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":UserCreateWithoutCommentsInput}),
    connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutCommentsInput}),
    connect: t.field({"required":false,"type":UserWhereUniqueInput}),
  })
})

export const PostCreateNestedOneWithoutCommentsInput = builder.inputRef<Prisma.PostCreateNestedOneWithoutCommentsInput>('PostCreateNestedOneWithoutCommentsInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":PostCreateWithoutCommentsInput}),
    connectOrCreate: t.field({"required":false,"type":PostCreateOrConnectWithoutCommentsInput}),
    connect: t.field({"required":false,"type":PostWhereUniqueInput}),
  })
})

export const UserUpdateOneRequiredWithoutCommentsInput = builder.inputRef<Prisma.UserUpdateOneRequiredWithoutCommentsInput>('UserUpdateOneRequiredWithoutCommentsInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":UserCreateWithoutCommentsInput}),
    connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutCommentsInput}),
    upsert: t.field({"required":false,"type":UserUpsertWithoutCommentsInput}),
    connect: t.field({"required":false,"type":UserWhereUniqueInput}),
    update: t.field({"required":false,"type":UserUpdateWithoutCommentsInput}),
  })
})

export const PostUpdateOneRequiredWithoutCommentsInput = builder.inputRef<Prisma.PostUpdateOneRequiredWithoutCommentsInput>('PostUpdateOneRequiredWithoutCommentsInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":PostCreateWithoutCommentsInput}),
    connectOrCreate: t.field({"required":false,"type":PostCreateOrConnectWithoutCommentsInput}),
    upsert: t.field({"required":false,"type":PostUpsertWithoutCommentsInput}),
    connect: t.field({"required":false,"type":PostWhereUniqueInput}),
    update: t.field({"required":false,"type":PostUpdateWithoutCommentsInput}),
  })
})

export const NestedIntFilter = builder.inputRef<Prisma.NestedIntFilter>('NestedIntFilter').implement({
  fields: (t) => ({
    equals: t.int({"required":false}),
    in: t.intList({"required":false}),
    notIn: t.intList({"required":false}),
    lt: t.int({"required":false}),
    lte: t.int({"required":false}),
    gt: t.int({"required":false}),
    gte: t.int({"required":false}),
    not: t.int({"required":false}),
  })
})

export const NestedStringFilter = builder.inputRef<Prisma.NestedStringFilter>('NestedStringFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    not: t.string({"required":false}),
  })
})

export const NestedDateTimeFilter = builder.inputRef<Prisma.NestedDateTimeFilter>('NestedDateTimeFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    not: t.string({"required":false}),
  })
})

export const NestedDateTimeNullableFilter = builder.inputRef<Prisma.NestedDateTimeNullableFilter>('NestedDateTimeNullableFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    not: t.string({"required":false}),
  })
})

export const NestedIntWithAggregatesFilter = builder.inputRef<Prisma.NestedIntWithAggregatesFilter>('NestedIntWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.int({"required":false}),
    in: t.intList({"required":false}),
    notIn: t.intList({"required":false}),
    lt: t.int({"required":false}),
    lte: t.int({"required":false}),
    gt: t.int({"required":false}),
    gte: t.int({"required":false}),
    not: t.int({"required":false}),
    _count: t.field({"required":false,"type":NestedIntFilter}),
    _avg: t.field({"required":false,"type":NestedFloatFilter}),
    _sum: t.field({"required":false,"type":NestedIntFilter}),
    _min: t.field({"required":false,"type":NestedIntFilter}),
    _max: t.field({"required":false,"type":NestedIntFilter}),
  })
})

export const NestedFloatFilter = builder.inputRef<Prisma.NestedFloatFilter>('NestedFloatFilter').implement({
  fields: (t) => ({
    equals: t.float({"required":false}),
    in: t.floatList({"required":false}),
    notIn: t.floatList({"required":false}),
    lt: t.float({"required":false}),
    lte: t.float({"required":false}),
    gt: t.float({"required":false}),
    gte: t.float({"required":false}),
    not: t.float({"required":false}),
  })
})

export const NestedStringWithAggregatesFilter = builder.inputRef<Prisma.NestedStringWithAggregatesFilter>('NestedStringWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    not: t.string({"required":false}),
    _count: t.field({"required":false,"type":NestedIntFilter}),
    _min: t.field({"required":false,"type":NestedStringFilter}),
    _max: t.field({"required":false,"type":NestedStringFilter}),
  })
})

export const NestedDateTimeWithAggregatesFilter = builder.inputRef<Prisma.NestedDateTimeWithAggregatesFilter>('NestedDateTimeWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    not: t.string({"required":false}),
    _count: t.field({"required":false,"type":NestedIntFilter}),
    _min: t.field({"required":false,"type":NestedDateTimeFilter}),
    _max: t.field({"required":false,"type":NestedDateTimeFilter}),
  })
})

export const NestedDateTimeNullableWithAggregatesFilter = builder.inputRef<Prisma.NestedDateTimeNullableWithAggregatesFilter>('NestedDateTimeNullableWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    not: t.string({"required":false}),
    _count: t.field({"required":false,"type":NestedIntNullableFilter}),
    _min: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
    _max: t.field({"required":false,"type":NestedDateTimeNullableFilter}),
  })
})

export const NestedIntNullableFilter = builder.inputRef<Prisma.NestedIntNullableFilter>('NestedIntNullableFilter').implement({
  fields: (t) => ({
    equals: t.int({"required":false}),
    in: t.intList({"required":false}),
    notIn: t.intList({"required":false}),
    lt: t.int({"required":false}),
    lte: t.int({"required":false}),
    gt: t.int({"required":false}),
    gte: t.int({"required":false}),
    not: t.int({"required":false}),
  })
})

export const PostCreateWithoutAuthorInput = builder.inputRef<Prisma.PostCreateWithoutAuthorInput>('PostCreateWithoutAuthorInput').implement({
  fields: (t) => ({
    title: t.string({"required":true}),
    content: t.string({"required":true}),
    Comments: t.field({"required":false,"type":CommentCreateNestedManyWithoutPostInput}),
  })
})

export const PostUncheckedCreateWithoutAuthorInput = builder.inputRef<Prisma.PostUncheckedCreateWithoutAuthorInput>('PostUncheckedCreateWithoutAuthorInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    title: t.string({"required":true}),
    content: t.string({"required":true}),
    Comments: t.field({"required":false,"type":CommentUncheckedCreateNestedManyWithoutPostInput}),
  })
})

export const PostCreateOrConnectWithoutAuthorInput = builder.inputRef<Prisma.PostCreateOrConnectWithoutAuthorInput>('PostCreateOrConnectWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":PostWhereUniqueInput}),
    create: t.field({"required":true,"type":PostCreateWithoutAuthorInput}),
  })
})

export const PostCreateManyAuthorInputEnvelope = builder.inputRef<Prisma.PostCreateManyAuthorInputEnvelope>('PostCreateManyAuthorInputEnvelope').implement({
  fields: (t) => ({
    data: t.field({"required":true,"type":[PostCreateManyAuthorInput]}),
    skipDuplicates: t.boolean({"required":false}),
  })
})

export const CommentCreateWithoutAuthorInput = builder.inputRef<Prisma.CommentCreateWithoutAuthorInput>('CommentCreateWithoutAuthorInput').implement({
  fields: (t) => ({
    comment: t.string({"required":true}),
    post: t.field({"required":true,"type":PostCreateNestedOneWithoutCommentsInput}),
  })
})

export const CommentUncheckedCreateWithoutAuthorInput = builder.inputRef<Prisma.CommentUncheckedCreateWithoutAuthorInput>('CommentUncheckedCreateWithoutAuthorInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    comment: t.string({"required":true}),
    postId: t.int({"required":true}),
  })
})

export const CommentCreateOrConnectWithoutAuthorInput = builder.inputRef<Prisma.CommentCreateOrConnectWithoutAuthorInput>('CommentCreateOrConnectWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":CommentWhereUniqueInput}),
    create: t.field({"required":true,"type":CommentCreateWithoutAuthorInput}),
  })
})

export const CommentCreateManyAuthorInputEnvelope = builder.inputRef<Prisma.CommentCreateManyAuthorInputEnvelope>('CommentCreateManyAuthorInputEnvelope').implement({
  fields: (t) => ({
    data: t.field({"required":true,"type":[CommentCreateManyAuthorInput]}),
    skipDuplicates: t.boolean({"required":false}),
  })
})

export const PostUpsertWithWhereUniqueWithoutAuthorInput = builder.inputRef<Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput>('PostUpsertWithWhereUniqueWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":PostWhereUniqueInput}),
    update: t.field({"required":true,"type":PostUpdateWithoutAuthorInput}),
    create: t.field({"required":true,"type":PostCreateWithoutAuthorInput}),
  })
})

export const PostUpdateWithWhereUniqueWithoutAuthorInput = builder.inputRef<Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput>('PostUpdateWithWhereUniqueWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":PostWhereUniqueInput}),
    data: t.field({"required":true,"type":PostUpdateWithoutAuthorInput}),
  })
})

export const PostUpdateManyWithWhereWithoutAuthorInput = builder.inputRef<Prisma.PostUpdateManyWithWhereWithoutAuthorInput>('PostUpdateManyWithWhereWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":PostScalarWhereInput}),
    data: t.field({"required":true,"type":PostUpdateManyMutationInput}),
  })
})

export const PostScalarWhereInput = builder.inputRef<Prisma.PostScalarWhereInput>('PostScalarWhereInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":PostScalarWhereInput}),
    OR: t.field({"required":false,"type":[PostScalarWhereInput]}),
    NOT: t.field({"required":false,"type":PostScalarWhereInput}),
    id: t.field({"required":false,"type":IntFilter}),
    title: t.field({"required":false,"type":StringFilter}),
    content: t.field({"required":false,"type":StringFilter}),
    authorId: t.field({"required":false,"type":IntFilter}),
  })
})

export const CommentUpsertWithWhereUniqueWithoutAuthorInput = builder.inputRef<Prisma.CommentUpsertWithWhereUniqueWithoutAuthorInput>('CommentUpsertWithWhereUniqueWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":CommentWhereUniqueInput}),
    update: t.field({"required":true,"type":CommentUpdateWithoutAuthorInput}),
    create: t.field({"required":true,"type":CommentCreateWithoutAuthorInput}),
  })
})

export const CommentUpdateWithWhereUniqueWithoutAuthorInput = builder.inputRef<Prisma.CommentUpdateWithWhereUniqueWithoutAuthorInput>('CommentUpdateWithWhereUniqueWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":CommentWhereUniqueInput}),
    data: t.field({"required":true,"type":CommentUpdateWithoutAuthorInput}),
  })
})

export const CommentUpdateManyWithWhereWithoutAuthorInput = builder.inputRef<Prisma.CommentUpdateManyWithWhereWithoutAuthorInput>('CommentUpdateManyWithWhereWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":CommentScalarWhereInput}),
    data: t.field({"required":true,"type":CommentUpdateManyMutationInput}),
  })
})

export const CommentScalarWhereInput = builder.inputRef<Prisma.CommentScalarWhereInput>('CommentScalarWhereInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":CommentScalarWhereInput}),
    OR: t.field({"required":false,"type":[CommentScalarWhereInput]}),
    NOT: t.field({"required":false,"type":CommentScalarWhereInput}),
    id: t.field({"required":false,"type":IntFilter}),
    comment: t.field({"required":false,"type":StringFilter}),
    authorId: t.field({"required":false,"type":IntFilter}),
    postId: t.field({"required":false,"type":IntFilter}),
  })
})

export const UserCreateWithoutPostsInput = builder.inputRef<Prisma.UserCreateWithoutPostsInput>('UserCreateWithoutPostsInput').implement({
  fields: (t) => ({
    firstName: t.string({"required":true}),
    lastName: t.string({"required":true}),
    Comments: t.field({"required":false,"type":CommentCreateNestedManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserUncheckedCreateWithoutPostsInput = builder.inputRef<Prisma.UserUncheckedCreateWithoutPostsInput>('UserUncheckedCreateWithoutPostsInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    firstName: t.string({"required":true}),
    lastName: t.string({"required":true}),
    Comments: t.field({"required":false,"type":CommentUncheckedCreateNestedManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserCreateOrConnectWithoutPostsInput = builder.inputRef<Prisma.UserCreateOrConnectWithoutPostsInput>('UserCreateOrConnectWithoutPostsInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":UserWhereUniqueInput}),
    create: t.field({"required":true,"type":UserCreateWithoutPostsInput}),
  })
})

export const CommentCreateWithoutPostInput = builder.inputRef<Prisma.CommentCreateWithoutPostInput>('CommentCreateWithoutPostInput').implement({
  fields: (t) => ({
    comment: t.string({"required":true}),
    author: t.field({"required":true,"type":UserCreateNestedOneWithoutCommentsInput}),
  })
})

export const CommentUncheckedCreateWithoutPostInput = builder.inputRef<Prisma.CommentUncheckedCreateWithoutPostInput>('CommentUncheckedCreateWithoutPostInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    comment: t.string({"required":true}),
    authorId: t.int({"required":true}),
  })
})

export const CommentCreateOrConnectWithoutPostInput = builder.inputRef<Prisma.CommentCreateOrConnectWithoutPostInput>('CommentCreateOrConnectWithoutPostInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":CommentWhereUniqueInput}),
    create: t.field({"required":true,"type":CommentCreateWithoutPostInput}),
  })
})

export const CommentCreateManyPostInputEnvelope = builder.inputRef<Prisma.CommentCreateManyPostInputEnvelope>('CommentCreateManyPostInputEnvelope').implement({
  fields: (t) => ({
    data: t.field({"required":true,"type":[CommentCreateManyPostInput]}),
    skipDuplicates: t.boolean({"required":false}),
  })
})

export const UserUpsertWithoutPostsInput = builder.inputRef<Prisma.UserUpsertWithoutPostsInput>('UserUpsertWithoutPostsInput').implement({
  fields: (t) => ({
    update: t.field({"required":true,"type":UserUpdateWithoutPostsInput}),
    create: t.field({"required":true,"type":UserCreateWithoutPostsInput}),
  })
})

export const UserUpdateWithoutPostsInput = builder.inputRef<Prisma.UserUpdateWithoutPostsInput>('UserUpdateWithoutPostsInput').implement({
  fields: (t) => ({
    firstName: t.string({"required":false}),
    lastName: t.string({"required":false}),
    Comments: t.field({"required":false,"type":CommentUpdateManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserUncheckedUpdateWithoutPostsInput = builder.inputRef<Prisma.UserUncheckedUpdateWithoutPostsInput>('UserUncheckedUpdateWithoutPostsInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    firstName: t.string({"required":false}),
    lastName: t.string({"required":false}),
    Comments: t.field({"required":false,"type":CommentUncheckedUpdateManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const CommentUpsertWithWhereUniqueWithoutPostInput = builder.inputRef<Prisma.CommentUpsertWithWhereUniqueWithoutPostInput>('CommentUpsertWithWhereUniqueWithoutPostInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":CommentWhereUniqueInput}),
    update: t.field({"required":true,"type":CommentUpdateWithoutPostInput}),
    create: t.field({"required":true,"type":CommentCreateWithoutPostInput}),
  })
})

export const CommentUpdateWithWhereUniqueWithoutPostInput = builder.inputRef<Prisma.CommentUpdateWithWhereUniqueWithoutPostInput>('CommentUpdateWithWhereUniqueWithoutPostInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":CommentWhereUniqueInput}),
    data: t.field({"required":true,"type":CommentUpdateWithoutPostInput}),
  })
})

export const CommentUpdateManyWithWhereWithoutPostInput = builder.inputRef<Prisma.CommentUpdateManyWithWhereWithoutPostInput>('CommentUpdateManyWithWhereWithoutPostInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":CommentScalarWhereInput}),
    data: t.field({"required":true,"type":CommentUpdateManyMutationInput}),
  })
})

export const UserCreateWithoutCommentsInput = builder.inputRef<Prisma.UserCreateWithoutCommentsInput>('UserCreateWithoutCommentsInput').implement({
  fields: (t) => ({
    firstName: t.string({"required":true}),
    lastName: t.string({"required":true}),
    posts: t.field({"required":false,"type":PostCreateNestedManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserUncheckedCreateWithoutCommentsInput = builder.inputRef<Prisma.UserUncheckedCreateWithoutCommentsInput>('UserUncheckedCreateWithoutCommentsInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    firstName: t.string({"required":true}),
    lastName: t.string({"required":true}),
    posts: t.field({"required":false,"type":PostUncheckedCreateNestedManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserCreateOrConnectWithoutCommentsInput = builder.inputRef<Prisma.UserCreateOrConnectWithoutCommentsInput>('UserCreateOrConnectWithoutCommentsInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":UserWhereUniqueInput}),
    create: t.field({"required":true,"type":UserCreateWithoutCommentsInput}),
  })
})

export const PostCreateWithoutCommentsInput = builder.inputRef<Prisma.PostCreateWithoutCommentsInput>('PostCreateWithoutCommentsInput').implement({
  fields: (t) => ({
    title: t.string({"required":true}),
    content: t.string({"required":true}),
    author: t.field({"required":true,"type":UserCreateNestedOneWithoutPostsInput}),
  })
})

export const PostUncheckedCreateWithoutCommentsInput = builder.inputRef<Prisma.PostUncheckedCreateWithoutCommentsInput>('PostUncheckedCreateWithoutCommentsInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    title: t.string({"required":true}),
    content: t.string({"required":true}),
    authorId: t.int({"required":true}),
  })
})

export const PostCreateOrConnectWithoutCommentsInput = builder.inputRef<Prisma.PostCreateOrConnectWithoutCommentsInput>('PostCreateOrConnectWithoutCommentsInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":PostWhereUniqueInput}),
    create: t.field({"required":true,"type":PostCreateWithoutCommentsInput}),
  })
})

export const UserUpsertWithoutCommentsInput = builder.inputRef<Prisma.UserUpsertWithoutCommentsInput>('UserUpsertWithoutCommentsInput').implement({
  fields: (t) => ({
    update: t.field({"required":true,"type":UserUpdateWithoutCommentsInput}),
    create: t.field({"required":true,"type":UserCreateWithoutCommentsInput}),
  })
})

export const UserUpdateWithoutCommentsInput = builder.inputRef<Prisma.UserUpdateWithoutCommentsInput>('UserUpdateWithoutCommentsInput').implement({
  fields: (t) => ({
    firstName: t.string({"required":false}),
    lastName: t.string({"required":false}),
    posts: t.field({"required":false,"type":PostUpdateManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const UserUncheckedUpdateWithoutCommentsInput = builder.inputRef<Prisma.UserUncheckedUpdateWithoutCommentsInput>('UserUncheckedUpdateWithoutCommentsInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    firstName: t.string({"required":false}),
    lastName: t.string({"required":false}),
    posts: t.field({"required":false,"type":PostUncheckedUpdateManyWithoutAuthorInput}),
    createdAt: t.string({"required":false}),
    updatedAt: t.string({"required":false}),
  })
})

export const PostUpsertWithoutCommentsInput = builder.inputRef<Prisma.PostUpsertWithoutCommentsInput>('PostUpsertWithoutCommentsInput').implement({
  fields: (t) => ({
    update: t.field({"required":true,"type":PostUpdateWithoutCommentsInput}),
    create: t.field({"required":true,"type":PostCreateWithoutCommentsInput}),
  })
})

export const PostUpdateWithoutCommentsInput = builder.inputRef<Prisma.PostUpdateWithoutCommentsInput>('PostUpdateWithoutCommentsInput').implement({
  fields: (t) => ({
    title: t.string({"required":false}),
    content: t.string({"required":false}),
    author: t.field({"required":false,"type":UserUpdateOneRequiredWithoutPostsInput}),
  })
})

export const PostUncheckedUpdateWithoutCommentsInput = builder.inputRef<Prisma.PostUncheckedUpdateWithoutCommentsInput>('PostUncheckedUpdateWithoutCommentsInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    title: t.string({"required":false}),
    content: t.string({"required":false}),
    authorId: t.int({"required":false}),
  })
})

export const PostCreateManyAuthorInput = builder.inputRef<Prisma.PostCreateManyAuthorInput>('PostCreateManyAuthorInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    title: t.string({"required":true}),
    content: t.string({"required":true}),
  })
})

export const CommentCreateManyAuthorInput = builder.inputRef<Prisma.CommentCreateManyAuthorInput>('CommentCreateManyAuthorInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    comment: t.string({"required":true}),
    postId: t.int({"required":true}),
  })
})

export const PostUpdateWithoutAuthorInput = builder.inputRef<Prisma.PostUpdateWithoutAuthorInput>('PostUpdateWithoutAuthorInput').implement({
  fields: (t) => ({
    title: t.string({"required":false}),
    content: t.string({"required":false}),
    Comments: t.field({"required":false,"type":CommentUpdateManyWithoutPostInput}),
  })
})

export const PostUncheckedUpdateWithoutAuthorInput = builder.inputRef<Prisma.PostUncheckedUpdateWithoutAuthorInput>('PostUncheckedUpdateWithoutAuthorInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    title: t.string({"required":false}),
    content: t.string({"required":false}),
    Comments: t.field({"required":false,"type":CommentUncheckedUpdateManyWithoutPostInput}),
  })
})

export const PostUncheckedUpdateManyWithoutPostsInput = builder.inputRef<Prisma.PostUncheckedUpdateManyWithoutPostsInput>('PostUncheckedUpdateManyWithoutPostsInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    title: t.string({"required":false}),
    content: t.string({"required":false}),
  })
})

export const CommentUpdateWithoutAuthorInput = builder.inputRef<Prisma.CommentUpdateWithoutAuthorInput>('CommentUpdateWithoutAuthorInput').implement({
  fields: (t) => ({
    comment: t.string({"required":false}),
    post: t.field({"required":false,"type":PostUpdateOneRequiredWithoutCommentsInput}),
  })
})

export const CommentUncheckedUpdateWithoutAuthorInput = builder.inputRef<Prisma.CommentUncheckedUpdateWithoutAuthorInput>('CommentUncheckedUpdateWithoutAuthorInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    comment: t.string({"required":false}),
    postId: t.int({"required":false}),
  })
})

export const CommentUncheckedUpdateManyWithoutCommentsInput = builder.inputRef<Prisma.CommentUncheckedUpdateManyWithoutCommentsInput>('CommentUncheckedUpdateManyWithoutCommentsInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    comment: t.string({"required":false}),
    postId: t.int({"required":false}),
  })
})

export const CommentCreateManyPostInput = builder.inputRef<Prisma.CommentCreateManyPostInput>('CommentCreateManyPostInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    comment: t.string({"required":true}),
    authorId: t.int({"required":true}),
  })
})

export const CommentUpdateWithoutPostInput = builder.inputRef<Prisma.CommentUpdateWithoutPostInput>('CommentUpdateWithoutPostInput').implement({
  fields: (t) => ({
    comment: t.string({"required":false}),
    author: t.field({"required":false,"type":UserUpdateOneRequiredWithoutCommentsInput}),
  })
})

export const CommentUncheckedUpdateWithoutPostInput = builder.inputRef<Prisma.CommentUncheckedUpdateWithoutPostInput>('CommentUncheckedUpdateWithoutPostInput').implement({
  fields: (t) => ({
    id: t.int({"required":false}),
    comment: t.string({"required":false}),
    authorId: t.int({"required":false}),
  })
})