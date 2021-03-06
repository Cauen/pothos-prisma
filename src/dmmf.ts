export const dmmf = {
  "datamodel": {
    "enums": [],
    "models": [
      {
        "name": "User",
        "dbName": null,
        "fields": [
          {
            "name": "id",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": true,
            "isReadOnly": false,
            "type": "Int",
            "hasDefaultValue": true,
            "default": {
              "name": "autoincrement",
              "args": []
            },
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "firstName",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "String",
            "hasDefaultValue": false,
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "lastName",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "String",
            "hasDefaultValue": false,
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "posts",
            "kind": "object",
            "isList": true,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "Post",
            "hasDefaultValue": false,
            "relationName": "PostToUser",
            "relationFromFields": [],
            "relationToFields": [],
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "Comments",
            "kind": "object",
            "isList": true,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "Comment",
            "hasDefaultValue": false,
            "relationName": "CommentToUser",
            "relationFromFields": [],
            "relationToFields": [],
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "createdAt",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "DateTime",
            "hasDefaultValue": true,
            "default": {
              "name": "now",
              "args": []
            },
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "updatedAt",
            "kind": "scalar",
            "isList": false,
            "isRequired": false,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "DateTime",
            "hasDefaultValue": false,
            "isGenerated": false,
            "isUpdatedAt": true
          }
        ],
        "isGenerated": false,
        "primaryKey": null,
        "uniqueFields": [],
        "uniqueIndexes": []
      },
      {
        "name": "Post",
        "dbName": null,
        "fields": [
          {
            "name": "id",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": true,
            "isReadOnly": false,
            "type": "Int",
            "hasDefaultValue": true,
            "default": {
              "name": "autoincrement",
              "args": []
            },
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "title",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "String",
            "hasDefaultValue": false,
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "content",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "String",
            "hasDefaultValue": false,
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "author",
            "kind": "object",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "User",
            "hasDefaultValue": false,
            "relationName": "PostToUser",
            "relationFromFields": [
              "authorId"
            ],
            "relationToFields": [
              "id"
            ],
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "Comments",
            "kind": "object",
            "isList": true,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "Comment",
            "hasDefaultValue": false,
            "relationName": "CommentToPost",
            "relationFromFields": [],
            "relationToFields": [],
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "authorId",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": true,
            "type": "Int",
            "hasDefaultValue": false,
            "isGenerated": false,
            "isUpdatedAt": false
          }
        ],
        "isGenerated": false,
        "primaryKey": null,
        "uniqueFields": [],
        "uniqueIndexes": []
      },
      {
        "name": "Comment",
        "dbName": null,
        "fields": [
          {
            "name": "id",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": true,
            "isReadOnly": false,
            "type": "Int",
            "hasDefaultValue": true,
            "default": {
              "name": "autoincrement",
              "args": []
            },
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "comment",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "String",
            "hasDefaultValue": false,
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "author",
            "kind": "object",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "User",
            "hasDefaultValue": false,
            "relationName": "CommentToUser",
            "relationFromFields": [
              "authorId"
            ],
            "relationToFields": [
              "id"
            ],
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "post",
            "kind": "object",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": false,
            "type": "Post",
            "hasDefaultValue": false,
            "relationName": "CommentToPost",
            "relationFromFields": [
              "postId"
            ],
            "relationToFields": [
              "id"
            ],
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "authorId",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": true,
            "type": "Int",
            "hasDefaultValue": false,
            "isGenerated": false,
            "isUpdatedAt": false
          },
          {
            "name": "postId",
            "kind": "scalar",
            "isList": false,
            "isRequired": true,
            "isUnique": false,
            "isId": false,
            "isReadOnly": true,
            "type": "Int",
            "hasDefaultValue": false,
            "isGenerated": false,
            "isUpdatedAt": false
          }
        ],
        "isGenerated": false,
        "primaryKey": null,
        "uniqueFields": [],
        "uniqueIndexes": []
      }
    ],
    "types": []
  },
  "schema": {
    "inputObjectTypes": {
      "prisma": [
        {
          "name": "UserWhereInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "AND",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "OR",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "NOT",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "posts",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostListRelationFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentListRelationFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTimeFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTimeNullableFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserOrderByWithRelationInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "posts",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostOrderByRelationAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentOrderByRelationAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserWhereUniqueInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserOrderByWithAggregationInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCountOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_avg",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserAvgOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_max",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserMaxOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_min",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserMinOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_sum",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserSumOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserScalarWhereWithAggregatesInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "AND",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "OR",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "NOT",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTimeWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTimeNullableWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostWhereInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "AND",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "OR",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "NOT",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserRelationFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentListRelationFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostOrderByWithRelationInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserOrderByWithRelationInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentOrderByRelationAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostWhereUniqueInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostOrderByWithAggregationInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCountOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_avg",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostAvgOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_max",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostMaxOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_min",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostMinOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_sum",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostSumOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostScalarWhereWithAggregatesInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "AND",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "OR",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "NOT",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentWhereInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "AND",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "OR",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "NOT",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserRelationFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "post",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostRelationFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentOrderByWithRelationInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserOrderByWithRelationInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "post",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostOrderByWithRelationInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentWhereUniqueInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentOrderByWithAggregationInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCountOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_avg",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentAvgOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_max",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentMaxOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_min",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentMinOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_sum",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentSumOrderByAggregateInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentScalarWhereWithAggregatesInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "AND",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "OR",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "NOT",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentScalarWhereWithAggregatesInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserCreateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "firstName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "posts",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateNestedManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateNestedManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUncheckedCreateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "posts",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUncheckedCreateNestedManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUncheckedCreateNestedManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUpdateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "posts",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "DateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NullableDateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUncheckedUpdateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "posts",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUncheckedUpdateManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUncheckedUpdateManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "DateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NullableDateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserCreateManyInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUpdateManyMutationInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "DateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NullableDateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUncheckedUpdateManyInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "DateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NullableDateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostCreateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "title",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateNestedOneWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateNestedManyWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUncheckedCreateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUncheckedCreateNestedManyWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUpdateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserUpdateOneRequiredWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateManyWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUncheckedUpdateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUncheckedUpdateManyWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostCreateManyInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUpdateManyMutationInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUncheckedUpdateManyInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "comment",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateNestedOneWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "post",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateNestedOneWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedCreateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpdateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserUpdateOneRequiredWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "post",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateOneRequiredWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedUpdateInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateManyInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpdateManyMutationInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedUpdateManyInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "IntFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "StringFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "contains",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "startsWith",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "endsWith",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "mode",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "QueryMode",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedStringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostListRelationFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "every",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "some",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "none",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentListRelationFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "every",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "some",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "none",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "DateTimeFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedDateTimeFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "DateTimeNullableFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedDateTimeNullableFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostOrderByRelationAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentOrderByRelationAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserCountOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserAvgOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserMaxOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserMinOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserSumOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "IntWithAggregatesFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedIntWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_avg",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedFloatFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_sum",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_min",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_max",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "StringWithAggregatesFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "contains",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "startsWith",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "endsWith",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "mode",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "QueryMode",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedStringWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_min",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedStringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_max",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedStringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "DateTimeWithAggregatesFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedDateTimeWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_min",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedDateTimeFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_max",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedDateTimeFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "DateTimeNullableWithAggregatesFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedDateTimeNullableWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntNullableFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_min",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedDateTimeNullableFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_max",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedDateTimeNullableFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserRelationFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "is",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "isNot",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostCountOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostAvgOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostMaxOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostMinOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostSumOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostRelationFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "is",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "isNot",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCountOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentAvgOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentMaxOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentMinOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentSumOrderByAggregateInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "SortOrder",
                  "namespace": "prisma",
                  "location": "enumTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostCreateNestedManyWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateManyAuthorInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateNestedManyWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "CommentUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateManyAuthorInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "PostUncheckedCreateNestedManyWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateManyAuthorInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedCreateNestedManyWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "CommentUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateManyAuthorInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "StringFieldUpdateOperationsInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "set",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUpdateManyWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "upsert",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateManyAuthorInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "set",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "disconnect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "delete",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "update",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "updateMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "deleteMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpdateManyWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "CommentUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "upsert",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpsertWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpsertWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateManyAuthorInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "set",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "disconnect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "delete",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "update",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpdateWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "updateMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateManyWithWhereWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpdateManyWithWhereWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "deleteMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "DateTimeFieldUpdateOperationsInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "set",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "NullableDateTimeFieldUpdateOperationsInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "set",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "IntFieldUpdateOperationsInput",
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1
          },
          "fields": [
            {
              "name": "set",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "increment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "decrement",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "multiply",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "divide",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUncheckedUpdateManyWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "upsert",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateManyAuthorInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "set",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "disconnect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "delete",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "update",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "updateMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "deleteMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedUpdateManyWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "CommentUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateOrConnectWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "upsert",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpsertWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpsertWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateManyAuthorInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "set",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "disconnect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "delete",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "update",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpdateWithWhereUniqueWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "updateMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateManyWithWhereWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpdateManyWithWhereWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "deleteMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "UserCreateNestedOneWithoutPostsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedCreateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateOrConnectWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateNestedManyWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "CommentUncheckedCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateOrConnectWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateOrConnectWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateManyPostInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedCreateNestedManyWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "CommentUncheckedCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateOrConnectWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateOrConnectWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateManyPostInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "UserUpdateOneRequiredWithoutPostsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedCreateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateOrConnectWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "upsert",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserUpsertWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "update",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserUpdateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedUpdateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpdateManyWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "CommentUncheckedCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateOrConnectWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateOrConnectWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "upsert",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpsertWithWhereUniqueWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpsertWithWhereUniqueWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateManyPostInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "set",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "disconnect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "delete",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "update",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateWithWhereUniqueWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpdateWithWhereUniqueWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "updateMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateManyWithWhereWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpdateManyWithWhereWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "deleteMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedUpdateManyWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                },
                {
                  "type": "CommentUncheckedCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateOrConnectWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentCreateOrConnectWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "upsert",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpsertWithWhereUniqueWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpsertWithWhereUniqueWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "createMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateManyPostInputEnvelope",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "set",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "disconnect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "delete",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "update",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateWithWhereUniqueWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpdateWithWhereUniqueWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "updateMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateManyWithWhereWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUpdateManyWithWhereWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "deleteMany",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            }
          ]
        },
        {
          "name": "UserCreateNestedOneWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateOrConnectWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostCreateNestedOneWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateOrConnectWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUpdateOneRequiredWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateOrConnectWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "upsert",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserUpsertWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "update",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserUpdateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedUpdateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUpdateOneRequiredWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "create",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connectOrCreate",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateOrConnectWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "upsert",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpsertWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "connect",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "update",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedUpdateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "NestedIntFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "NestedStringFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "contains",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "startsWith",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "endsWith",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedStringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "NestedDateTimeFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedDateTimeFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "NestedDateTimeNullableFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedDateTimeNullableFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "NestedIntWithAggregatesFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedIntWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_avg",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedFloatFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_sum",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_min",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_max",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "NestedFloatFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Float",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Float",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Float",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedFloatFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "NestedStringWithAggregatesFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "contains",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "startsWith",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "endsWith",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedStringWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_min",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedStringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_max",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedStringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "NestedDateTimeWithAggregatesFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedDateTimeWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_min",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedDateTimeFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_max",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedDateTimeFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "NestedDateTimeNullableWithAggregatesFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": true
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedDateTimeNullableWithAggregatesFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "_count",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedIntNullableFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_min",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedDateTimeNullableFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "_max",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "NestedDateTimeNullableFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "NestedIntNullableFilter",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "equals",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "in",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": true
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "notIn",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": true
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "gte",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "not",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NestedIntNullableFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostCreateWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "title",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateNestedManyWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUncheckedCreateWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUncheckedCreateNestedManyWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostCreateOrConnectWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostCreateManyAuthorInputEnvelope",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "data",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateManyAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "skipDuplicates",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Boolean",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "comment",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "post",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateNestedOneWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedCreateWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateOrConnectWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateManyAuthorInputEnvelope",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "data",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateManyAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "skipDuplicates",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Boolean",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUpsertWithWhereUniqueWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "update",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedUpdateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUpdateWithWhereUniqueWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "data",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedUpdateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUpdateManyWithWhereWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "data",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateManyMutationInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedUpdateManyWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostScalarWhereInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "AND",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "OR",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "NOT",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpsertWithWhereUniqueWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "update",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedUpdateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpdateWithWhereUniqueWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "data",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedUpdateWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpdateManyWithWhereWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "data",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateManyMutationInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedUpdateManyWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentScalarWhereInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "AND",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "OR",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "NOT",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "StringFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "IntFilter",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserCreateWithoutPostsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "firstName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateNestedManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUncheckedCreateWithoutPostsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUncheckedCreateNestedManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserCreateOrConnectWithoutPostsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedCreateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "comment",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateNestedOneWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedCreateWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateOrConnectWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateManyPostInputEnvelope",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "data",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateManyPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": true
                }
              ]
            },
            {
              "name": "skipDuplicates",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Boolean",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUpsertWithoutPostsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "update",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserUpdateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedUpdateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedCreateWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUpdateWithoutPostsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "DateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NullableDateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUncheckedUpdateWithoutPostsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUncheckedUpdateManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "DateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NullableDateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpsertWithWhereUniqueWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "update",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedUpdateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedCreateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpdateWithWhereUniqueWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "data",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedUpdateWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpdateManyWithWhereWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentScalarWhereInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "data",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateManyMutationInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "CommentUncheckedUpdateManyWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserCreateWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "firstName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "posts",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateNestedManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUncheckedCreateWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "posts",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUncheckedCreateNestedManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserCreateOrConnectWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostCreateWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "title",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateNestedOneWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUncheckedCreateWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostCreateOrConnectWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "where",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostWhereUniqueInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUpsertWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "update",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserUpdateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedUpdateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "UserUncheckedCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUpdateWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "posts",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "DateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NullableDateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "UserUncheckedUpdateWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "firstName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "lastName",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "posts",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUncheckedUpdateManyWithoutAuthorInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "createdAt",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "DateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "updatedAt",
              "isRequired": false,
              "isNullable": true,
              "inputTypes": [
                {
                  "type": "DateTime",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "NullableDateTimeFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "Null",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUpsertWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "update",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedUpdateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "create",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                },
                {
                  "type": "PostUncheckedCreateWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUpdateWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserUpdateOneRequiredWithoutPostsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUncheckedUpdateWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostCreateManyAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateManyAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUpdateWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUpdateManyWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUncheckedUpdateWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "Comments",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "CommentUncheckedUpdateManyWithoutPostInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "PostUncheckedUpdateManyWithoutPostsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "title",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "content",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpdateWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "post",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "PostUpdateOneRequiredWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedUpdateWithoutAuthorInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedUpdateManyWithoutCommentsInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "postId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentCreateManyPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": true,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUpdateWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "author",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "UserUpdateOneRequiredWithoutCommentsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        },
        {
          "name": "CommentUncheckedUpdateWithoutPostInput",
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null
          },
          "fields": [
            {
              "name": "id",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "comment",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "String",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "StringFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            },
            {
              "name": "authorId",
              "isRequired": false,
              "isNullable": false,
              "inputTypes": [
                {
                  "type": "Int",
                  "location": "scalar",
                  "isList": false
                },
                {
                  "type": "IntFieldUpdateOperationsInput",
                  "namespace": "prisma",
                  "location": "inputObjectTypes",
                  "isList": false
                }
              ]
            }
          ]
        }
      ]
    },
    "outputObjectTypes": {
      "prisma": [
        {
          "name": "Query",
          "fields": [
            {
              "name": "findFirstUser",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "UserOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "distinct",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "User",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "findManyUser",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "UserOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "distinct",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "User",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": true
              }
            },
            {
              "name": "aggregateUser",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "UserOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AggregateUser",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "groupByUser",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserOrderByWithAggregationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "UserOrderByWithAggregationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "by",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    },
                    {
                      "type": "UserScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "having",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserScalarWhereWithAggregatesInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "UserGroupByOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": true
              }
            },
            {
              "name": "findUniqueUser",
              "args": [
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "User",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "findFirstPost",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "PostOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "distinct",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "Post",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "findManyPost",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "PostOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "distinct",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "Post",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": true
              }
            },
            {
              "name": "aggregatePost",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "PostOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AggregatePost",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "groupByPost",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostOrderByWithAggregationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "PostOrderByWithAggregationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "by",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    },
                    {
                      "type": "PostScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "having",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostScalarWhereWithAggregatesInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "PostGroupByOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": true
              }
            },
            {
              "name": "findUniquePost",
              "args": [
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "Post",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "findFirstComment",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "CommentOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "distinct",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "Comment",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "findManyComment",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "CommentOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "distinct",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "Comment",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": true
              }
            },
            {
              "name": "aggregateComment",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "CommentOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AggregateComment",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "groupByComment",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentOrderByWithAggregationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "CommentOrderByWithAggregationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "by",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    },
                    {
                      "type": "CommentScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "having",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentScalarWhereWithAggregatesInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "CommentGroupByOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": true
              }
            },
            {
              "name": "findUniqueComment",
              "args": [
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "Comment",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "Mutation",
          "fields": [
            {
              "name": "createOneUser",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "UserUncheckedCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "User",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "upsertOneUser",
              "args": [
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "create",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "UserUncheckedCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "update",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "UserUncheckedUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "User",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "createManyUser",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserCreateManyInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    }
                  ]
                },
                {
                  "name": "skipDuplicates",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Boolean",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AffectedRowsOutput",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "deleteOneUser",
              "args": [
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "User",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "updateOneUser",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "UserUncheckedUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "User",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "updateManyUser",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserUpdateManyMutationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "UserUncheckedUpdateManyInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AffectedRowsOutput",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "deleteManyUser",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "UserWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AffectedRowsOutput",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "createOnePost",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "PostUncheckedCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "Post",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "upsertOnePost",
              "args": [
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "create",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "PostUncheckedCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "update",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "PostUncheckedUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "Post",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "createManyPost",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostCreateManyInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    }
                  ]
                },
                {
                  "name": "skipDuplicates",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Boolean",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AffectedRowsOutput",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "deleteOnePost",
              "args": [
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "Post",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "updateOnePost",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "PostUncheckedUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "Post",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "updateManyPost",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostUpdateManyMutationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "PostUncheckedUpdateManyInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AffectedRowsOutput",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "deleteManyPost",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AffectedRowsOutput",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "createOneComment",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "CommentUncheckedCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "Comment",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "upsertOneComment",
              "args": [
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "create",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "CommentUncheckedCreateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "update",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "CommentUncheckedUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "Comment",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "createManyComment",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentCreateManyInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    }
                  ]
                },
                {
                  "name": "skipDuplicates",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Boolean",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AffectedRowsOutput",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "deleteOneComment",
              "args": [
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "Comment",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "updateOneComment",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "CommentUncheckedUpdateInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "where",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "Comment",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "updateManyComment",
              "args": [
                {
                  "name": "data",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentUpdateManyMutationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    },
                    {
                      "type": "CommentUncheckedUpdateManyInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AffectedRowsOutput",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "deleteManyComment",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "AffectedRowsOutput",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "executeRaw",
              "args": [
                {
                  "name": "query",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "String",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "parameters",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Json",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "Json",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "queryRaw",
              "args": [
                {
                  "name": "query",
                  "isRequired": true,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "String",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "parameters",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Json",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                }
              ],
              "isNullable": false,
              "outputType": {
                "type": "Json",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "AggregateUser",
          "fields": [
            {
              "name": "_count",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "UserCountAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_avg",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "UserAvgAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_sum",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "UserSumAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_min",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "UserMinAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_max",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "UserMaxAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "UserGroupByOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "firstName",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "lastName",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "createdAt",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "DateTime",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "updatedAt",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "DateTime",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "_count",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "UserCountAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_avg",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "UserAvgAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_sum",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "UserSumAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_min",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "UserMinAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_max",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "UserMaxAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "AggregatePost",
          "fields": [
            {
              "name": "_count",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "PostCountAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_avg",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "PostAvgAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_sum",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "PostSumAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_min",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "PostMinAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_max",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "PostMaxAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "PostGroupByOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "title",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "content",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "_count",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "PostCountAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_avg",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "PostAvgAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_sum",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "PostSumAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_min",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "PostMinAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_max",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "PostMaxAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "AggregateComment",
          "fields": [
            {
              "name": "_count",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "CommentCountAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_avg",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "CommentAvgAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_sum",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "CommentSumAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_min",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "CommentMinAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_max",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "CommentMaxAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "CommentGroupByOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "comment",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "postId",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "_count",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "CommentCountAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_avg",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "CommentAvgAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_sum",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "CommentSumAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_min",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "CommentMinAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "_max",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "CommentMaxAggregateOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "AffectedRowsOutput",
          "fields": [
            {
              "name": "count",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "UserCountOutputType",
          "fields": [
            {
              "name": "posts",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "Comments",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "UserCountAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "firstName",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "lastName",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "createdAt",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "updatedAt",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "_all",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "UserAvgAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Float",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "UserSumAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "UserMinAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "firstName",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "lastName",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "createdAt",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "DateTime",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "updatedAt",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "DateTime",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "UserMaxAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "firstName",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "lastName",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "createdAt",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "DateTime",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "updatedAt",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "DateTime",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "PostCountOutputType",
          "fields": [
            {
              "name": "Comments",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "PostCountAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "title",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "content",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "_all",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "PostAvgAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Float",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Float",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "PostSumAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "PostMinAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "title",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "content",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "PostMaxAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "title",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "content",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "CommentCountAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "comment",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "postId",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "_all",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "CommentAvgAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Float",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Float",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "postId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Float",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "CommentSumAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "postId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "CommentMinAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "comment",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "postId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "CommentMaxAggregateOutputType",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "comment",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "postId",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        }
      ],
      "model": [
        {
          "name": "User",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "firstName",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "lastName",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "posts",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "PostOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "distinct",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "PostScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "Post",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": true
              }
            },
            {
              "name": "Comments",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "CommentOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "distinct",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "Comment",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": true
              }
            },
            {
              "name": "createdAt",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "DateTime",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "updatedAt",
              "args": [],
              "isNullable": true,
              "outputType": {
                "type": "DateTime",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "_count",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "UserCountOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "Post",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "title",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "content",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "author",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "User",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "Comments",
              "args": [
                {
                  "name": "where",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "orderBy",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": true
                    },
                    {
                      "type": "CommentOrderByWithRelationInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "cursor",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentWhereUniqueInput",
                      "namespace": "prisma",
                      "location": "inputObjectTypes",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "take",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "skip",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "Int",
                      "location": "scalar",
                      "isList": false
                    }
                  ]
                },
                {
                  "name": "distinct",
                  "isRequired": false,
                  "isNullable": false,
                  "inputTypes": [
                    {
                      "type": "CommentScalarFieldEnum",
                      "namespace": "prisma",
                      "location": "enumTypes",
                      "isList": true
                    }
                  ]
                }
              ],
              "isNullable": true,
              "outputType": {
                "type": "Comment",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": true
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "_count",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "PostCountOutputType",
                "namespace": "prisma",
                "location": "outputObjectTypes",
                "isList": false
              }
            }
          ]
        },
        {
          "name": "Comment",
          "fields": [
            {
              "name": "id",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "comment",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "String",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "author",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "User",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "post",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Post",
                "namespace": "model",
                "location": "outputObjectTypes",
                "isList": false
              }
            },
            {
              "name": "authorId",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            },
            {
              "name": "postId",
              "args": [],
              "isNullable": false,
              "outputType": {
                "type": "Int",
                "location": "scalar",
                "isList": false
              }
            }
          ]
        }
      ]
    },
    "enumTypes": {
      "prisma": [
        {
          "name": "UserScalarFieldEnum",
          "values": [
            "id",
            "firstName",
            "lastName",
            "createdAt",
            "updatedAt"
          ]
        },
        {
          "name": "PostScalarFieldEnum",
          "values": [
            "id",
            "title",
            "content",
            "authorId"
          ]
        },
        {
          "name": "CommentScalarFieldEnum",
          "values": [
            "id",
            "comment",
            "authorId",
            "postId"
          ]
        },
        {
          "name": "SortOrder",
          "values": [
            "asc",
            "desc"
          ]
        },
        {
          "name": "QueryMode",
          "values": [
            "default",
            "insensitive"
          ]
        }
      ]
    }
  },
  "mappings": {
    "modelOperations": [
      {
        "model": "User",
        "aggregate": "aggregateUser",
        "createMany": "createManyUser",
        "createOne": "createOneUser",
        "deleteMany": "deleteManyUser",
        "deleteOne": "deleteOneUser",
        "findFirst": "findFirstUser",
        "findMany": "findManyUser",
        "findUnique": "findUniqueUser",
        "groupBy": "groupByUser",
        "updateMany": "updateManyUser",
        "updateOne": "updateOneUser",
        "upsertOne": "upsertOneUser"
      },
      {
        "model": "Post",
        "aggregate": "aggregatePost",
        "createMany": "createManyPost",
        "createOne": "createOnePost",
        "deleteMany": "deleteManyPost",
        "deleteOne": "deleteOnePost",
        "findFirst": "findFirstPost",
        "findMany": "findManyPost",
        "findUnique": "findUniquePost",
        "groupBy": "groupByPost",
        "updateMany": "updateManyPost",
        "updateOne": "updateOnePost",
        "upsertOne": "upsertOnePost"
      },
      {
        "model": "Comment",
        "aggregate": "aggregateComment",
        "createMany": "createManyComment",
        "createOne": "createOneComment",
        "deleteMany": "deleteManyComment",
        "deleteOne": "deleteOneComment",
        "findFirst": "findFirstComment",
        "findMany": "findManyComment",
        "findUnique": "findUniqueComment",
        "groupBy": "groupByComment",
        "updateMany": "updateManyComment",
        "updateOne": "updateOneComment",
        "upsertOne": "upsertOneComment"
      }
    ],
    "otherOperations": {
      "read": [],
      "write": [
        "executeRaw",
        "queryRaw"
      ]
    }
  }
}