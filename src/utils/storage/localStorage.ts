export function getFromLocalStorage<T>(key: string): T | null {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting item from localStorage: ${error}`);
    return null;
  }
}

export function setInLocalStorage<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting item in localStorage: ${error}`);
  }
}

export function removeFromLocalStorage(key: string): void {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing item from localStorage: ${error}`);
  }
}

export function clearLocalStorage(): void {
  try {
    window.localStorage.clear();
  } catch (error) {
    console.error(`Error clearing localStorage: ${error}`);
  }
}

export function isLocalStorageAvailable(): boolean {
  try {
    const test = "__localStorage_test__";
    window.localStorage.setItem(test, test);
    window.localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}
