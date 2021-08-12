import SideBarList from '../components/side-bar/side-bar-list/SideBarList'

export default function Layout({ children }) {
    return (
        <>
            <SideBarList/>
            {children}
        </>
    )
}