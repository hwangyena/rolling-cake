export const isObject = (value: unknown) => {
  if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
    return true;
  } else {
    return false;
  }
};

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

export const md = (
  prev: Map<string, string | Record<string, unknown>>,
  value: [string, string | Record<string, unknown>][],
) => {
  const m = new Map(prev);

  value.forEach((v) => {
    const [key, value] = v;

    const prev = m.get(key);
    if (prev && isObject(prev) && isObject(value)) {
      m.set(key, { ...(prev as Record<string, unknown>), ...(value as Record<string, unknown>) });
      return;
    }

    m.set(key, value);
  });

  return m;
};

export const mapToObject = <T>(map: Map<string, unknown>): T => {
  const value = Array.from(map.entries());
  const obj: T = {} as T;

  for (const item of value) {
    const [key, value] = item;
    obj[key as keyof T] = value as T[keyof T];
  }

  return obj;
};

export const getBaseUrl = () => {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:${process.env.PORT ?? 3000}/api`
    : 'https://rolling-cake.vercel.app/api';
};

export const getCakeBg = (color: Color, vivid = true) => {
  const vividColor: Record<Color, string> = {
    ivory: '#f9f5bd',
    red: '#ff8c99',
    green: '#75f580',
    blue: '#5adeff',
    purple: '#cb95fc',
    brown: '#7e5233',
  };

  const pastel: Record<Color, string> = {
    ivory: '#fefce1',
    red: '#f7cac7',
    green: '#cffdcb',
    blue: '#c6f4f8',
    purple: '#e9d5fc',
    brown: '#6d3710',
  };

  return vivid ? vividColor[color] : pastel[color];
};
