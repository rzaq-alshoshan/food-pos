
import MenuHeader from '../header/MenuHeader';
import styles from '../Menu.module.css'
import { Component } from 'react'
import Categories from '../categories/Categories';
import Category from '../category/Category';

class MenuDetails extends Component {
    render() {
        return (
            <div className={styles.menu}>
                {this.props.categories ?
                    <>
                        <MenuHeader onSearch={this.props.onSearch}></MenuHeader>
                        <Categories categories={this.props.categories} onCategoryClick={this.props.onCategoryClick} ></Categories>
                        <div className={styles.dishes}>
                            <div className="tab-content">
                                {this.props.categories.map((category) => {
                                    return <Category category={category} key={category.id} onDishClick={this.props.onDishClick}></Category>
                                })}
                            </div>
                        </div>
                    </>
                    :
                    ""
                }
            </div>
        )
    }
}

export default MenuDetails
