import async from 'async';

export default class InvoiceController {
    constructor($scope, $log, InvoiceService, ProductService, CustomerService) {
        this.scope = $scope;
        this.scope.$log = $log;
        this.scope.invoices = [];
        this.service = InvoiceService;
        this.ProductService = ProductService;
        this.CustomerService = CustomerService;

        this.service.fetchAll((err, invoices) => {
            this.scope.invoices = invoices;
        });
    }

    createInvoice = invoice => {
        const { total, disount, customer: { name } } = invoice;

        this.service.create({ total, disount, customer_id: name }, (err, data) => {
            this.scope.invoices.push(data);
        })
    };

    removeInvoice = id => {
        this.service.remove(id, err => {
            this.scope.invoices = this.scope.invoices.filter(invoice => {
                return invoice.id !== id;
            });
        })
    };

    onSelectProduct = product => {
        this.scope.invoice.total = product.price;
    };

    createProduct = product => {
        this.ProductService.create(product, resp => {
            alert('created!')
        })
    };

    createCustomer = customer => {
        this.CustomerService.create(customer, resp => {
            alert('created!')
        })
    };

    openInvoiceForm = () => {
        async.parallel([

            cb => this.ProductService.fetchAll(cb),

            cb => this.CustomerService.fetchAll(cb)

        ], (err, result) => {
            this.scope.products = result[0];
            this.scope.customers = result[1];
            this.scope.invoice = {
                customer: {},
                product: {},
                total: 0
            };
        })
    };

    openCustomerForm = () => {
        this.scope.customer = {};
    };

    openProductForm = () => {
        this.scope.product = {};
    };
}
