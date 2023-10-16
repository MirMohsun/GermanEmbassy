const set = async (key: string, data: any): Promise<any> => {
  await AsyncStorage.setItem(key, JSON.stringify(data));
};

const get = async (key: string): Promise<any> => {
  try {
    let value = await AsyncStorage.getItem(key);
    if (value) {
      value = JSON.parse(value);
    }
    return value;
  } catch (error) {
    console.warn("AsyncStorage > get", error);
    return null;
  }
};

const remove = async (key: string) => {
  const result = await AsyncStorage.removeItem(key);
  return result;
};

const clear = async () => {
  return await AsyncStorage.clear();
};

export const IAsyncStorage = {
  get,
  set,
  remove,
  clear,
};
