export const isNill = (value: any): value is null | undefined => {
  return value === null || value === undefined;
};

export const isNull = (value: any): value is null => {
  return value === null;
};

export const isEmpty = (value: any): value is '' => {
  return value === '';
};
