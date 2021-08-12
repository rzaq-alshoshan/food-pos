import styles from '../Payment.module.css'
import { Component } from 'react'
import Dish from '../dish/Dish'

class OrderDetails extends Component {
    render() {
        return (
            (
                <div className={styles.confirmation}>
                    {this.props.dishes && this.props.dishes.length > 0 ?
                        <>
                            <div className={styles.orderHeader}>
                                <h1>Confirmation</h1>
                                <div className={styles.orderNumber}>Orders #{this.props.orderNumber}</div>
                                <hr />
                            </div>

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
                            <div className={styles.totalBox}>
                                <hr />
                                <div className={styles.totals}>
                                    <div className={styles.subTotal}>
                                        <span className={styles.title}>Discount</span>
                                        <span className={styles.amount}>$ 0</span>
                                    </div>

                                    <div className={styles.subTotal}>
                                        <span className={styles.title}>Sub total</span>
                                        <span className={styles.amount}>$ {this.props.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        ""}
                </div>
            )
        )
    }
}

export default OrderDetails