import {
    COSTUMERS_ROUTE,
    INVOICES_ROUTE,
    PRODUCTS_ROUTE,

    CUSTOMER_CONTROLLER,
    INVOICE_CONTROLLER,
    PRODUCT_CONTROLLER
} from './constants';

function routing($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when(PRODUCTS_ROUTE, {
            template: require('./templates/products.html'),
            controller: PRODUCT_CONTROLLER
        })
        .when(COSTUMERS_ROUTE, {
            template: require('./templates/customers.html'),
            controller: CUSTOMER_CONTROLLER
        })
        .when(INVOICES_ROUTE, {
            template: require('./templates/invoices.html'),
            controller: INVOICE_CONTROLLER
        })
        .otherwise({
            redirectTo: INVOICES_ROUTE
        });
}

export default routing;
