import { builder } from "../builder";

export class Giraffe {
  name: string;
  birthday: Date;
  heightInMeters: number;

  constructor(name: string, birthday: Date, heightInMeters: number) {
    this.name = name;
    this.birthday = birthday;
    this.heightInMeters = heightInMeters;
  }
}

builder.queryType({
  fields: (t) => ({
    getGirafee: t.field({
      type: ObjGirafee,
      nullable: true,
      args: {
        id: t.arg.id({ required: false }),
        idx: t.arg.id({ required: false }),
      },
      resolve: async (root, args) => {
        console.log("RETURNING GIRAFEX QUERY")

        if (Math.random() > 0.5) return null

        return {
          birthday: new Date("2020-01-01"),
          heightInMeters: 1.5,
          name: "Giraffe 1",
        }
      }
    }),
  }),
});

builder.mutationFields((t) => ({
  getGirafeee: t.field({
    type: Giraffe,
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
      idx: t.arg.id({ required: true }),
    },
    resolve: async (root, args) => {
      if (Math.random() > 0.5) return null

      return {
        birthday: new Date("2020-01-01"),
        heightInMeters: 1.5,
        name: "Giraffe 1",
      }
    }
  }),
}))

builder.mutationField('getGirafex', (t) => t.field({
  type: Giraffe,
  nullable: true,
  args: {
    id: t.arg.id({ required: false }),
    idx: t.arg.id({ required: false }),
  },
  resolve: async (root, args, context, info) => {
    // if (Math.random() > 0.5) return null

    return {
      birthday: new Date("2020-01-01"),
      heightInMeters: 1.5,
      name: "Giraffe 1",
    }
  }
}))

const ObjGirafee = builder.objectType(Giraffe, {
  name: 'Giraffe',
  description: 'Long necks, cool patterns, taller than you.',
  fields: (t) => ({
    name: t.exposeString('name', {}),
    age: t.int({
      resolve: (parent,) => {
        console.log("RESOLVING AGE")
        // Do some date math to get an aproximate age from a birthday
        const ageDifMs = Date.now() - parent.birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      },
    }),
    height: t.float({
      resolve: (parent) => parent.heightInMeters,
    }),
  }),
});


