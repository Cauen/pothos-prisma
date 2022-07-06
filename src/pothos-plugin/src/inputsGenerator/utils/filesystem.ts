import { mkdir, writeFile } from 'fs';

export const write = (content: any, path = 'src/inputs.ts') => {
  const parsedContent = (typeof content === "string") ? content : JSON.stringify(content, null, 2);
  return new Promise<string>((resolve, reject) => {
    return writeFile(path, parsedContent, (err) => {
      if (err) {
        console.log({ err })
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}