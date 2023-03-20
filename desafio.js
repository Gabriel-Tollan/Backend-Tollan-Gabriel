class ProductManager{

    constructor(){
        this.products = []
    }

    static precioBaseDeGanancia = 1.15;

    getProducts(){
        return this.products;
    }

    addProducts(title, description, price){
        
        let id_products = (this.getProducts()).length;

        let product = {
            title: 'shoe',
            description: 'men shoe',
            price:400 ,
            thumbnail: 'imagen shoe',
            code: '1234',
            stock:25,
            id: ++id_products
        }

        this.products.push(product);
        return this.products;
    }

    getProductById(id_product){
        let product = this.products.find(product => product.id === id_product)

        if(product){
            return product;
        }else{
            return null
        }
    }

    addProduct(id_product, id_code){
        let product = this.getProductById(id_product);
        if(product == null){
            return 'El product no existe';
        }
        let registro = product.stock.find(idStock => idStock === id_code)        
        if(registro == null){
            return true
        }else{
            return false
        }

    }

    addProduct(id_product, id_code){
        let product = this.traerProduct(id_product);
        if(product == null){
            return 'El evento no existe';
        }
        if(this.estaAgregado(id_product,id_code)){
            product.code.push(id_code)
            return product;
        }else{
            return 'El producto ya esta agregado'
        }
    }

    ponerProductEnGira(id_product, nproduct, nCode){
        let product = this.traerProduct(id_product);
        let contProducts = (this.getProducts()).length;

        if(!product){
            return 'El product no existe';
        }
        let nuevoProduct = {...product};
        nuevoProduct.description = nproduct;
        nuevoProduct.code = nCode;
        nuevoProduct.id = ++contProducts;
        this.Product.push(nuevoProduct)
        return this.products
    }
}

const productManager = new ProductManager();

productManager.addProduct('shoe', 'shoe men', 1500);
let products = productManager.addProduct('bota', 'bota mujer', 1500);


console.log(productManager.addProduct(1,1))
console.log(productManager.addProduct(1,1))
console.log(productManager.addProduct(2,1))
console.log(productManager.addProduct(1,2))

