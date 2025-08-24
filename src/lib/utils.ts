export const isObject = (value: unknown): value is Record<string, unknown> => {
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

export const getCakeBg = (color: ExpandColor, vivid = true, theme?: CakeTheme) => {
  const vividColor: Record<ExpandColor, string> = {
    ivory: '#f9f5bd',
    red: '#ff8c99',
    green: '#28622d',
    blue: '#5adeff',
    purple: '#7d6cd5',
    brown: '#7e5233',
    'gradient-yellow': 'linear-gradient(#fef5c1, #f5f5f5)',
    'gradient-pinkblue': 'linear-gradient(#fecedb,#ffffff,#cffcfd)',
  };

  // lettering에서 사용
  const pastelColor: Record<ExpandColor, string> = {
    ivory: '#fefce1',
    red: '#f7cac7',
    green: '#cffdcb',
    blue: '#c6f4f8',
    purple: '#e9d5fc',
    brown: '#6d3710',
    // 아래 데이터는 사용되지 않지만 타입 안정성을 위해 정의
    'gradient-yellow': 'linear-gradient(#fef5c1, #f5f5f5)',
    'gradient-pinkblue': 'linear-gradient(#fecedb,#ffffff,#cffcfd)',
  };

  const themeColor: Record<CakeTheme, string> = {
    harrypotter: '#1f9b4f',
    princess: '#e65ae6',
    soju: '#2e2e34',
  };

  if (theme) {
    return themeColor[theme];
  }

  return vivid ? vividColor[color] : pastelColor[color];
};

export const getCirclePosition = (r: number, count = 30) => {
  const coordinates = [];

  for (let i = 0; i < count; i++) {
    const angle = (2 * Math.PI * i) / count;
    const [x, y] = [r * Math.cos(angle), r * Math.sin(angle)];

    coordinates.push([x, y]);
  }

  return coordinates;
};

export const DataURIToBlob = (dataURI: string) => {
  const splitDataURI = dataURI.split(',');
  const byteString =
    splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
};

export const isDisabledFont = (store: Cake, tab: Item, item: string): boolean => {
  const isThemeCake = (store: Cake): store is ThemeCake => !!(store as ThemeCake).theme;

  const harrypotterFont = 'font5';
  const sojuFont = 'font4';

  if (!isThemeCake(store)) {
    return false;
  }

  if (tab === 'font') {
    switch (store.theme) {
      case 'harrypotter':
        return item !== harrypotterFont;
      case 'soju':
        return item !== sojuFont;
    }
  }

  return false;
};
