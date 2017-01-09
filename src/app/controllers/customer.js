import { CUSTOMER_SERVICE } from '../constants';

export default class CustomerController {
    constructor($scope, $log, CustomerService) {
        this.scope = $scope;
        this.scope.$log = $log;
        this.scope.customers = [];
        this.service = CustomerService;

        this.service.fetchAll((err, customers) => {
            this.scope.customers = customers;
        });
    }

    updateCustomer = customer => {
        const { id, name, phone } = customer;

        this.service.update(id, { name, phone }, (err, updatedCustomer) => {
            this.scope.customers = this.scope.customers.reduce((result, item) => {
                result.push(item.id === id ? updatedCustomer : item);

                return result;
            }, []);
        });
    };

    removeCustomer = id => {
        this.service.remove(id, err => {
            this.scope.customers = this.scope.customers.filter(customer => {
                return customer.id !== id;
            });
        });
    };

    editCustomer = customer => {
        this.scope.customer = { ...customer };
    };
}
