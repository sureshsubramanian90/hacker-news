class LocalStorage {

    constructor(isLocalStorage) {
        if (this.isLocalStorageSupported()) {
            this.localStorageSupport = true;
            this.storage = isLocalStorage ? localStorage : sessionStorage;
        } else {
            this.localStorageSupport = false;
        }
    }

    isLocalStorageSupported() {
        const testData = 'testData';
        try {
            localStorage.setItem(testData, testData);
            localStorage.removeItem(testData);
            return true;
        } catch (e) {
            return false;
        }
    }
    setData(key, value) {
        let isSuccess = false;

        if (this.localStorageSupport) {
            if (typeof value !== 'object') {
                this.storage.setItem(key, value);
            } else {
                this.storage.setItem(key, JSON.stringify(value));
            }

            isSuccess = true;
        } else {
            console.error('localStorage is not available!');
        }

        return isSuccess;
    }

    getData(key) { 
        let value = null;
        if (this.localStorageSupport) {
            value = this.storage.getItem(key);
        } else {
            console.error('localStorage is not available!');
        }
        value = value && value === 'null' ? null : value;
        return value || null;
    }

    removeData(key) {
        if (this.localStorageSupport) {
            this.storage.removeItem(key);
        } else {
            console.error('localStorage is not available!');
        }
    }
}

export default new LocalStorage(true);
export const SessionStorage = new LocalStorage();
