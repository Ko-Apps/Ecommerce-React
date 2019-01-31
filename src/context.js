import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();


class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct
    }

    componentDidMount() {
        this.setproducts(); //change with api call when setup backend
    }

    setproducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })

        this.setState(() => {
            return { products: tempProducts }
        })
    }

    handleDetail = () => {
        console.log('hello from details');
    }

    addToCart = () => {
        console.log('hello from cart');
    }

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };