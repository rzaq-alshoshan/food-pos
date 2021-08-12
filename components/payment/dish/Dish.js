
import { Icon } from '@iconify/react';
import styles from '../Payment.module.css'
import Image from 'next/image'

import { Component } from 'react'

class Dish extends Component {
    render() {
        return (
            <div className={styles.order}>
                <div className={styles.orderRow}>
                    <div className={styles.image}>
                        <Image src={this.props.dish.image} />
                    </div>

                    <div className={styles.dish}>
                        <div className={styles.dishName}>{this.props.dish.name}</div>
                        <div className={styles.price}>$ {this.props.dish.price.toFixed(2)}</div>
                    </div>

                    <div className={styles.qty}>
                        <input type="text" className="form-control" value={this.props.dish.quantity}
                            onChange={(e) => this.props.onQuantityChange(e, this.props.dish)} />
                    </div>

                    <div className={styles.totalPrice}>
                        $ {(this.props.dish.quantity * this.props.dish.price).toFixed(2)}
                    </div>
                </div>

                <div className={styles.orderRow}>
                    <div className={styles.notes}>
                        <input type="text" className="form-control" placeholder="Order Note..."
                            value={this.props.dish.notes}
                            onChange={(e) => this.props.onNotesChange(e, this.props.dish)} />
                    </div>

                    <div className={styles.delete}>
                        <button type="button" className={`${styles.btn} btn`}
                            onClick={(e) => this.props.onDeleteClick(this.props.dish.id)}>
                            <Icon icon="octicon:trash-16" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dish