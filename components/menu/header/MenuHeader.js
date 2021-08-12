import { Icon } from '@iconify/react';
import styles from '../Menu.module.css'
import { Component } from 'react'

class MenuHeader extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>Jaegar Resto</h1>
                    <span className={styles.date}>
                        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: "numeric", month: "long", day: "numeric" })}
                    </span>
                </div>
                <div className={styles.search}>
                    <div className="input-group">
                        <div className={`${styles.inputGroupPrepend} input-group-prepend`}>
                            <Icon icon="akar-icons:search" className={styles.icon} />

                        </div>
                        <input type="text" className="form-control" placeholder="Search for food, coffe, etc.."
                            aria-describedby="basic-addon1" onChange={this.props.onSearch} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuHeader