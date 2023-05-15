
import { isPlainObject, isString, isFunction, isEmpty, runAsync, isUnsignedInt, isNull } from '../utils.mjs';



export function getListenersForValueChange(listeners, name) {
    return listeners.filter(item => item.name = name).map(item => item.listener);
}



/**
 * Checks for changes in the datastore
 */
class ValueChangeListener {
    #store
    #key
    #listeners
    #id
    #interval


    get started() {
        return !isNull(this.#id);
    }


    get length() {
        return this.#listeners.size;
    }

    constructor(store, key, interval = 100) {
        if (store instanceof DataStore === false) {
            throw new TypeError('invalid storage provided');
        }

        if (isEmpty(key) || !isString(key)) {
            throw new TypeError('Key is not a non empty String.')
        }

        if (!isUnsignedInt(interval)) {
            throw new TypeError('Interval can only be a positive integer.')
        }

        this.#interval = interval;
        this.#store = store;
        this.#key = key;
        this.#id = null;
        this.#listeners = new Set();
    }

    async #update() {

        if (this.length > 0 && !this.started) {

            let store = this.#store, prev = await store.get(this.#key);

            this.#id = setInterval(async () => {

                value = await store.get(this.#key);

                if (value !== prev) {
                    for (let listener of this.#listeners) {
                        runAsync(listener, value, this.#key, store);
                    }
                }

            }, this.#interval);
        } else if (this.started) {
            clearInterval(this.#id);
            this.#id = null;
        }


    }


    add(listener) {

        if (!isFunction(listener)) {
            throw new TypeError('Listener is not a Function.');
        }

        this.#listeners.add(listener);

        this.#update();

    }


    delete(listener) {
        if (!isFunction(listener)) {
            throw new TypeError('Listener is not a Function.');
        }
        this.#listeners.delete(listener);
        this.#update();
    }


    clear() {
        this.#listeners.clear();
        this.#update();
    }

}






/**
 * The default DataStore interface
 * Implements ValueChangeListener
 */
export class DataStore {


    #listeners


    constructor() {
        this.#listeners = {};
    }


    #getListeners(name) {

        if (isEmpty(name) || !isString(name)) {
            throw new TypeError('Name is not a non empty String.')
        }

        return this.#listeners[name] ??= new ValueChangeListener(this, name);
    }

    addValueChangeListener(name, listener) {

        if (!isFunction(listener)) {
            throw new TypeError('Listener is not a Function.');
        }
        this.#getListeners(name).add(listener);

    }

    removeValueChangeListener(name, listener) {

        const listeners = this.#getListeners(name);
        if (!listener) {
            listeners.clear();
        } else if (isFunction(listener)) {
            listeners.delete(listener);
        }

    }


    async has(name) {
        return await this.get(name, null) !== null;
    }




    async multiset(values) {

        if (!isPlainObject(values) || isEmpty(values)) {
            throw new TypeError('values is not a non empty Object');
        }


        let names = Object.keys(values), promises = [];

        for (let i = 0; i < names.length; i++) {
            let name = names[i], value = values[name];
            promises.push(this.set(name, value));

        }

        return await Promise.all(promises).then(() => values);

    }


    async remove(name) {
        return await this.set(name, null);
    }

    async set(name, value) {
        throw new Error('set() not implemented');
    }

    async get(name, defaultValue = null) {
        throw new Error('get() not implemented');
    }


    async clear() {
        throw new Error('clear() not implemented');
    }


}



export default DataStore;