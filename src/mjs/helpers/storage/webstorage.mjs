import DataStore from './datastore.mjs';
import { isString, isEmpty, isUndef, JSON } from '../utils.mjs';
import { v4 as uuidv4 } from 'uuid';


/**
 * Reads or generates UUID for Storage prefix
 * 
 * @returns String
 */
function __UUID__() {
    let
        key = 'NGSOFT:WebStorage:UUID',
        result = localStorage.getItem(key);
    if (result === null) {
        localStorage.setItem(key, result = uuidv4());
    }
    return result;
}

export class WebStorage extends DataStore {

    #storage
    #prefix

    constructor(webstorage, prefix) {
        super();

        webstorage ??= sessionStorage;

        if (![localStorage, sessionStorage].includes(webstorage)) {
            throw new TypeError('webstorage not an instance of Storage');
        }

        this.#storage = webstorage;
        this.#prefix = prefix ??= __UUID__() + ':';
    }


    async get(name, defaultValue = null) {

        if (!isString(name) || isEmpty(name)) {
            throw new TypeError('name is not a non empty string');
        }


        let value = this.#storage.getItem(this.#prefix + name);

        if (!isString(value)) {
            return defaultValue;
        }

        return JSON.parse(value);
    }


    async set(name, value) {
        if (!isString(name) || isEmpty(name)) {
            throw new TypeError('name is not a non empty string');
        }

        if (isUndef(value)) {
            throw new TypeError('value is undefined');
        }


        if (value === null) {
            this.#storage.removeItem(this.#prefix + name);
        } else {
            this.#storage.setItem(this.#prefix + name, JSON.stringify(value));
        }


        return { name, value };
    }

    async clear() {

        let prefix = this.#prefix, store = this.#storage, promises = [], keys = [];


        for (let i = 0; i < store.length; i++) {

            let name = store.key(i);
            if (name.indexOf(prefix) === 0 || isEmpty(prefix)) {
                name = name.substring(prefix.length);
                keys.push(name);
                promises.push(this.remove(name));
            }

        }

        return Promise.all(promises).then(() => keys);
    }


}


export const SessionStore = new WebStorage(sessionStorage), LocalStore = new WebStorage(localStorage);

export default WebStorage;