import React, { Component } from 'react';
import Title from '../Title';
import CartColums from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColums />
                                </React.Fragment>
                            )
                        }
                        else {
                            return (<EmptyCart />)
                        }
                    }}
                </ProductConsumer>

            </section>
        );
    }
}

export default Cart;