
import Dish from '../dish/Dish'
import styles from '../Menu.module.css'
import { Component } from 'react'

class Category extends Component {
    render() {
        return (
            <div className={`tab-pane fade show ${this.props.category.active ? styles.active + " active" : ""}`}
                id={"category-" + this.props.category.id + "-content"} role="tabpanel"
                aria-labelledby={this.props.category.id + "-tab"}>
                <div>
                    <div className={styles.categoryTitle}>
                        <h2>Choose Dishes</h2>
                        <div className={`row ${styles.dishesArea}`}>
                            {this.props.category.dishes.map((dish) => {
                                return <Dish dish={dish} key={dish.id} onDishClick={this.props.onDishClick}></Dish>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Category