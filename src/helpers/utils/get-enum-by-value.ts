export const getEnumKeyByValue = (obj: any, value: any) =>
  Object.keys(obj)[Object.values(obj).indexOf(value)]
