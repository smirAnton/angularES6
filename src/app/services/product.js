import BaseService from './base';

export default class ProductService extends BaseService {
    constructor($http) {
        super($http, 'products');
    }
}
