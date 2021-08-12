import SideBarElement from '../side-bar-item/SideBarElement'
import styles from '../SideBar.module.css'
import { withRouter } from 'next/router'
import { Component } from 'react'


class SideBarList extends Component {
    componentDidMount() {
        const logoElement = {
            id: 'logo', icon: 'bx:bxs-store-alt', link: '/'
        }

        fetch(`https://pos-rzaq.proxy.beeceptor.com/nav`)
            .then(res => res.json())
            .then(json => this.setState({ elements: json, logoElement: logoElement }));
    }

    render() {
        return (
            this.state ?
                <div className={styles.sideBar}>
                    <div className={`${styles.logo} ${styles.sideMenuRow}`}>
                        <SideBarElement {...this.state.logoElement} />
                    </div>

                    {this.state.elements ? this.state.elements.map((element) => {
                        return (
                            <div className={`${styles.sideMenuRow} ${this.props.router.pathname == element.link ? styles.selected : ""}`} key={element.id}>
                                <SideBarElement {...element} />
                            </div>
                        )
                    }) : ""}
                </div> : ""
        )
    }
}

export default withRouter(SideBarList)
