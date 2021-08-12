
import styles from '../Menu.module.css'

export default function Categories({ categories, onCategoryClick }) {
    return (
        <div className={styles.tabs}>
            <ul className={`${styles.navTabs} nav nav-tabs`} role="tablist">
                {categories.map((category) => {
                    return <li className={`${styles.navItem} nav-item`} role="presentation" key={category.id}>
                        <button className={`${styles.navLink} nav-link ${category.active ? styles.active + " active" : ""}`}
                            id={category.id + "-tab"} data-bs-toggle="tab" type="button" role="tab"
                            data-bs-target={"#category-" + category.id + "-content"}
                            aria-controls={category.id} aria-selected="true"
                            onClick={() => onCategoryClick(category.id)}>
                            {category.name}
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
}


