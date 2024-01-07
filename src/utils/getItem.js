import localforage from "localforage";

export async function getItemFromLocalForage(key) {
  try {
    const itemValue = await localforage.getItem(key);

    return itemValue
  } catch (error) {
    console.error(`Failed to retrieve item for key ${key}:`, error);
  }
}
