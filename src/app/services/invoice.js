import BaseService from './base';

export default class InvoiceService extends BaseService {
    constructor($http) {
        super($http, 'invoices');
    }
}
