import styles from '../Payment.module.css'
import { Component } from 'react'
import { Icon } from '@iconify/react';

class PaymentDetails extends Component {
    paymentMethod = "creditCard";

    setPaymentMethod = (paymentMethod) => {
        this.paymentMethod = paymentMethod;
    }

    render() {
        return (
            <div className={styles.payment}>
                <div className={styles.orderHeader}>
                    <h1>Payment</h1>
                    <div className={styles.orderNumber}>3 payment methods available</div>
                    <hr />
                </div>
                <div className={styles.paymentForm}>
                    <h2>Payment Method</h2>

                    <div className={`row`}>
                        <div className="col-4">
                            <div className={styles.paymentType}>
                                <button type="button" className={`btn  ${this.paymentMethod === "creditCard" ? styles.active : ""}`}
                                    onClick={(e) => this.setPaymentMethod("creditCard")}>
                                    <Icon icon="octicon:credit-card-16" className={styles.paymrntTypeIcon} />
                                    <span className={styles.paymrntTypeName}>Credit Card</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={styles.paymentType}>
                                <button type="button" className={`btn  ${this.paymentMethod === "paypal" ? styles.active : ""}`}
                                    onClick={(e) => this.setPaymentMethod("paypal")}>

                                    <Icon icon="uit:paypal" className={styles.paymrntTypeIcon} />
                                    <span className={styles.paymrntTypeName}>Paypal</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={styles.paymentType}>
                                <button type="button" className={`btn  ${this.paymentMethod === "cash" ? styles.active : ""}`}
                                    onClick={(e) => this.setPaymentMethod("cash")}>
                                    <Icon icon="clarity:wallet-line" className={styles.paymrntTypeIcon} />
                                    <span className={styles.paymrntTypeName}>Cash</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className="col-12">
                            <div className={styles.label}>
                                Car Holder Name
                            </div>
                            <input type="text" className="form-control" placeholder="Card Holder Name" />
                        </div>
                    </div>

                    <div className={`row`}>
                        <div className="col-12">
                            <div className={styles.label}>
                                Card Number
                            </div>
                            <input type="text" className="form-control" placeholder="1234 5678 9012 3456"/>

                        </div>
                    </div>

                    <div className={`row`}>
                        <div className="col-6">
                            <div className={styles.label}>
                                Expiration Date
                            </div>
                            <input type="text" className="form-control" placeholder="MM/YY" />

                        </div>
                        <div className="col-6">
                            <div className={styles.label}>
                                CVV
                            </div>
                            <input type="password" className="form-control" placeholder="1234" />

                        </div>
                    </div>
                    <div className={`row`}>
                        <div className="col-6">
                            <div className={styles.label}>
                                Order Type
                            </div>
                            <select name="orderTypes" value={this.props.orderType} onChange={(e) => this.props.onOrderTypeChange(e.target.value)}>
                                <option value="dinein">Dine In</option>
                                <option value="togo">To Go</option>
                                <option value="delivery">Delivery</option>
                            </select>

                        </div>
                        {this.props.orderType == 'dinein' ?
                            <div className="col-6">
                                <div className={styles.label}>
                                    Table No.
                                </div>
                                <input type="text" className="form-control" />

                            </div>
                            : ""
                        }
                    </div>

                    <div className={`row ${styles.buttons}`}>
                        <div className="col-6">
                            <button type="button" className={styles.btn + " btn"} data-bs-dismiss="offcanvas">Cancel</button>
                        </div>
                        <div className="col-6">
                            <button type="submit" className={styles.btn + " btn " + styles.submitButton} onClick={(e) => {e.stopPropagation(); this.props.onSubmit(e)}}>Confirm Payment</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default PaymentDetails