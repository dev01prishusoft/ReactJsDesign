
import layoutStyle from "../styles/Layout.module.css"
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <>
        {/* <Navbar /> */}
        <div className={layoutStyle.container}>
            <main className={layoutStyle.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout;