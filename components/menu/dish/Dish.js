
import styles from '../Menu.module.css'
import { Component } from 'react'
import Image from 'next/image'

class Dish extends Component {
    render() {
        return (
            <div className={`col ${styles.col}`} onClick={(e) => this.props.onDishClick(this.props.dish)}>
                <div className={styles.dish}>
                    <div className={styles.image}>
                        <Image src={this.props.dish.image} />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.name}>
                            {this.props.dish.name}
                        </div>
                        <div className={styles.price}>
                            $ {this.props.dish.price.toFixed(2)}
                        </div>
                        <div className={styles.availability}>
                            {this.props.dish.count} Bowls available
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dish