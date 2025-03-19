/*
Local Storage Utilities
Provides utility functions to interact with browser local storage.
*/

function isLocalStorageAvailable() {
  try {
    const testKey = '__localStorageTest__';
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

export function setItem(key, value) {
  if (!isLocalStorageAvailable()) return;
  try {
    const serializedValue = JSON.stringify(value);
    window.localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error setting localStorage item", error);
  }
}

export function getItem(key) {
  if (!isLocalStorageAvailable()) return null;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error getting localStorage item", error);
    return null;
  }
}

export function removeItem(key) {
  if (!isLocalStorageAvailable()) return;
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing localStorage item", error);
  }
}

export function clear() {
  if (!isLocalStorageAvailable()) return;
  try {
    window.localStorage.clear();
  } catch (error) {
    console.error("Error clearing localStorage", error);
  }
}
