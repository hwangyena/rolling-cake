export const cn = (...names: unknown[]): string => {
  const flattenDeep = (array: unknown[], result: unknown[] = []): unknown[] => {
    if (array == null) {
      return result;
    }

    for (const value of array) {
      if (Array.isArray(value)) {
        flattenDeep(value, result);
      } else {
        result.push(value);
      }
    }

    return result;
  };

  const extractFromObj = (obj: Record<string, unknown>) => {
    let memo = '';
    for (const prop in obj) {
      if (Reflect.get(obj, prop) === true) {
        memo += ` ${prop}`;
      }
    }

    return memo.trim();
  };

  const built = names.reduce((memo: string, name): string => {
    if (typeof name === 'string') {
      memo += ` ${name.trim()}`;
    }

    if (typeof name === 'object' && !Array.isArray(name) && name !== null) {
      memo += ` ${extractFromObj(name as Record<string, unknown>)}`;
    }

    if (Array.isArray(name)) {
      const flattened = flattenDeep(name);
      for (const item of flattened) {
        if (typeof item === 'string') {
          memo += ` ${item.trim()}`;
        }
        if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
          memo += ` ${extractFromObj(item as Record<string, unknown>)}`;
        }
      }
    }

    return memo;
  }, '');

  return built.trim();
};

export const md = (value: [string, string | Record<string, unknown>][]) => {
  const m = new Map();

  value.forEach((v) => {
    const [key, value] = v;
    m.set(key, value);
  });

  return m;
};
