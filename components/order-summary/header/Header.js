import styles from '../OrderSummary.module.css'
import { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className={styles.orderHeader}>
                <h2>Order #{this.props.orderNumber}</h2>

                <div className={styles.eatingOptions} role="group">
                    <input type="radio" className={"btn-check " + (this.props.orderType == "dinein" ? styles.selected : "")}
                        name="options" id="dinein" autoComplete="off" onChange={(e) => this.props.onOrderTypeChange("dinein")} />
                    <label className={`${styles.btn} btn`} htmlFor="dinein" style={{ order: 0 }}>Dine In</label>

                    <input type="radio" className={"btn-check " + (this.props.orderType == "togo" ? styles.selected : "")}
                        name="options" id="togo" autoComplete="off" onChange={(e) => this.props.onOrderTypeChange("togo")} />
                    <label className={`${styles.btn} btn`} htmlFor="togo" style={{ order: 1 }}>To Go</label>

                    <input type="radio" className={"btn-check " + (this.props.orderType == "delivery" ? styles.selected : "")}
                        name="options" id="delivery" autoComplete="off" onChange={(e) => this.props.onOrderTypeChange("delivery")} />
                    <label className={`${styles.btn} btn`} htmlFor="delivery" style={{ order: 2 }}>Delivery</label>
                </div>


                <div className={styles.orderSummaryHeader}>
                    <span>Item</span>
                    <span>Qty</span>
                    <span>Price</span>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header