export default class BaseService {
    constructor($http, model) {
        this.api = $http;
        this.url = `api/${model}`;
    }

    create(dataObj, callback) {
        return this.api
            .post(this.url, dataObj)
            .then(({ data }) => callback(null, data))
            .catch(callback);
    }

    fetchAll(callback) {
        return this.api
            .get(this.url)
            .then(({ data }) => callback(null, data))
            .catch(callback);
    }

    update(id, changes, callback) {
        return this.api
            .put(`${this.url}/${id}`, changes)
            .then(({ data }) => callback(null, data))
            .catch(callback);
    }

    remove(id, callback) {
        return this.api
            .delete(`${this.url}/${id}`)
            .then(({ data }) => callback(null, data))
            .catch(callback);
    }
}
