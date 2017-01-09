import angular from 'angular';
import uirouter from 'angular-route';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';

import routes from './routes';

import {
    CustomerController,
    InvoiceController,
    ProductController
} from './controllers';

import {
    CustomerService,
    InvoiceService,
    ProductService
} from './services';

import {
    Header
} from './directives';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.css';

import * as c from './constants';

angular.module(c.MODULE_NAME, [uirouter])
    .directive(c.HEADER_DIRECTIVE, Header)

    .service(c.CUSTOMER_SERVICE, CustomerService)
    .service(c.INVOICE_SERVICE, InvoiceService)
    .service(c.PRODUCT_SERVICE, ProductService)

    .controller(c.CUSTOMER_CONTROLLER, CustomerController)
    .controller(c.INVOICE_CONTROLLER, InvoiceController)
    .controller(c.PRODUCT_CONTROLLER, ProductController)

    .config(routes);
