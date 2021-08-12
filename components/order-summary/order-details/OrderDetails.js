
import Dish from '../Dish/Dish';
import Header from '../header/Header';
import styles from '../OrderSummary.module.css'
import { Component } from 'react'
import TotalBox from '../total-box/TotalBox';

class OrderDetails extends Component {
    render() {
        return (
            this.props.dishes.length > 0 ?
                <div className={styles.orderDetails}>
                    <Header orderNumber={this.props.orderNumber}
                        orderType={this.props.orderType}
                        onOrderTypeChange={this.props.onOrderTypeChange} />

                    <div className={styles.orderSummary}>
                        {this.props.dishes.map((dish) => {
                            return (
                                <Dish dish={dish} key={dish.id}
                                    onQuantityChange={this.props.onQuantityChange}
                                    onNotesChange={this.props.onNotesChange}
                                    onDeleteClick={this.props.onDeleteClick}>
                                </Dish>
                            )
                        })}
                    </div>
                    <TotalBox total={this.props.total}></TotalBox>
                </div>
                :
                ""
        )
    }
}

export default OrderDetails