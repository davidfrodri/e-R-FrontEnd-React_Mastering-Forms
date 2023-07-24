export const cleanEmptyValues = (values) => {
    return Object.entries(values).reduce((acc, [key, value]) => {
      if (value.length !== 0) {
        acc[key] = value;
      }
      return acc;
    }, {});
  };