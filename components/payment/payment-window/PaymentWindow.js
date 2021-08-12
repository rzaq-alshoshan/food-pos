import styles from '../Payment.module.css'
import { Component } from 'react'
import { Icon } from '@iconify/react';
import OrderDetails from '../order-details/OrderDetails';
import PaymentDetails from '../payment-details/PaymentDetails';

class PaymentWindow extends Component {
    render() {
        return (
            <div className={`offcanvas offcanvas-end offcanvas.show ${styles.paymentDetailsContainer}`} data-bs-backdrop="false" tabIndex="-1"
                id="paymentDetailsContainer">
                <div className={styles.paymentDetails}>
                    <div className={`offcanvas-header ${styles.offcanvasHeader}`}>
                        <button type="button" className={`btn text-reset ${styles.closeButton}`} data-bs-dismiss="offcanvas">
                            <Icon icon="akar-icons:arrow-left" className={styles.close} />
                        </button>
                    </div>
                    <div className={`offcanvas-body ${styles.paymentBody}`}>
                        {this.props.success ?
                            <>
                                <div className={styles.successContainer}>
                                    <div className="alert alert-success" role="alert">
                                        Your payment received
                                    </div>

                                    <h1>Order Confirmed</h1>
                                    <h2>Order Number: {this.props.orderNumber}</h2>

                                    <button className={styles.btn + " btn"} type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#paymentDetailsContainer" aria-controls="paymentDetailsContainer" onClick={(e) => {e.stopPropagation(); this.props.clearPayment(e)}}>Create New Order</button>
                                </div>
                            </>
                            :
                            <>
                                <OrderDetails dishes={this.props.dishes ? this.props.dishes : []}
                                    orderNumber={this.props.orderNumber}
                                    total={this.props.total}
                                    onQuantityChange={this.props.onQuantityChange}
                                    onNotesChange={this.props.onNotesChange}
                                    onDeleteClick={this.props.onDeleteClick}>
                                </OrderDetails>
                                <PaymentDetails onSubmit={this.props.onSubmit} orderType={this.props.orderType} onOrderTypeChange={this.props.onOrderTypeChange}></PaymentDetails>
                            </>}
                    </div>
                </div>
            </div>)
    }
}

export default PaymentWindow