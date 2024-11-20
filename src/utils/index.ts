export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export function getTestID(testID: string) {
  const appPrefix = "makeMyTripClone";
  if (!testID) {
    return "undefined";
  }
  const prefix = `${appPrefix}:id/`;
  const hasPrefix = testID.startsWith(prefix);
  return !hasPrefix ? `${prefix}${testID}` : testID;
}

export const capitalizeAllStartingWords = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|[''({])+\S/g, (match) =>
    match.toUpperCase(),
  );

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const isBlankString = (str: string) =>
  !str || str.length === 0 || /^\s*$/.test(str);
export const removeAllDuplicateValuesInArray = (arr: any[]) => [
  ...new Set(arr),
];

export const mergeArrays = (a: any[], b: any[]) => [...a, ...b];

export const mergeArraysAndRemoveDuplicates = (a: any[], b: any[]) => [
  ...new Set([...a, ...b]),
];

export const safelyParseJson = (string?: string | null) => {
  try {
    return JSON.parse(string as string);
  } catch {
    return string;
  }
};

export const isEmptyObj = (obj: any) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

export const convertSnakeToCamelCase = (str: string) => {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", ""),
  );
};

export const sleep = (delay: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const toObj = (arr: any[]) => Object.fromEntries(arr);

export const getUnion = (...arr: any[]) => [...new Set(arr.flat())];

export const partition = (arr: any[], criteria: any) =>
  arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);
