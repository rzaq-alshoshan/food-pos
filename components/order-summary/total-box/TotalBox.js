
import styles from '../OrderSummary.module.css'
import { Component } from 'react'

class TotalBox extends Component {
    render() {
        return (
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

                <div className={styles.continueButton}>
                    <button type="button" className={styles.btn + " btn"} data-bs-toggle="offcanvas"
                        data-bs-target="#paymentDetailsContainer" aria-controls="paymentDetailsContainer">Continue to Payment</button>
                </div>
            </div>
        )
    }
}

export default TotalBox