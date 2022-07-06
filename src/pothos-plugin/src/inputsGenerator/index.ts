import { DMMF } from "../../../../prisma/client/runtime";
import { dmmf } from '../../../dmmf'
import { write } from './utils/filesystem'
import { fLLower } from "./utils/string";

export default async function generateInputs(dmmf: DMMF.Document): Promise<string> {
  const inputs = dmmf.schema.inputObjectTypes.prisma
  const enums = dmmf.schema.enumTypes.prisma

  await write(dmmf, 'dmmf.json')

  const header = `import { Prisma } from "../prisma/client"
import { builder } from "./builder"`
  const enumString = enums.map(el => {
    return `export const ${el.name} = builder.enumType('${el.name}', {
  values: ${JSON.stringify(el.values)} as const,
});`
  })
  const inputsString = inputs.map(input => {
    const inputName = input.name
    const fields = input.fields.map(field => {
      const props = { required: field.isRequired, description: undefined }
      const input = field.inputTypes[0]
      const { isList, type, location } = input
      const isScalar = location === "scalar"

      const key = field.name
      const value = (() => {
        if (isScalar) {
          const parsedType = type === "DateTime" ? "String" : type
          const fieldType = isList ? `${parsedType}List` : parsedType.toString()
          return `t.${fLLower(fieldType)}(${JSON.stringify(props)})`
        } else {
          const fieldType = isList ? `[${type}]` : type.toString()
          const relationProps = { ...props, type: fieldType }
          // "type":"CommentUncheckedCreateNestedManyWithoutAuthorInput"} -> "type":CommentUncheckedCreateNestedManyWithoutAuthorInput}
          return `t.field(${JSON.stringify(relationProps).replace(/(type.+:)"(.+)"/, '$1$2')})`
        }
      })()
      return `${key}: ${value},`
    }).join('\n    ')
    return `
export const ${inputName} = builder.inputRef<Prisma.${inputName}>('${inputName}').implement({
  fields: (t) => ({
    ${fields}
  })
})`
  })
  const text = [header, '', ...enumString, ...inputsString].join('\n')

  const written = await write(text)

  return written
}

// generateInputs(dmmfDoc)