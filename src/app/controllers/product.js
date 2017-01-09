export default class ProductController {
    constructor($scope, $log, ProductService) {
        this.scope = $scope;
        this.scope.$log = $log;
        this.scope.products = [];
        this.service = ProductService;

        this.service.fetchAll((err, products) => {
            this.scope.products = products;
        });
    }

    updateProduct = product => {
        const { id, name, price } = product;

        this.service.update(id, { name, price }, (err, updatedProduct) => {
            this.scope.products = this.scope.products.reduce((result, item) => {
                result.push(item.id === id ? updatedProduct : item);

                return result;
            }, []);
        });
    };

    removeProduct = id => {
        this.service.remove(id, err => {
            this.scope.products = this.scope.products.filter(product => {
                return product.id !== id;
            });
        });
    };

    editProduct = product => {
        this.scope.product = { ...product };
    };
}
