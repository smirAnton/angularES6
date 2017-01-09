import BaseService from './base';

export default class CustomerService extends BaseService {
    constructor($http) {
        super($http, 'customers');
    }
}
