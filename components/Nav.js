import  Link from  'next/link'
import navStyles from "../styles/Nav.module.css"
const Nav = () => {
  return(
      <div className={navStyles.menu}>
          <div className={navStyles.nav}>
              <ul>
                  <li className={navStyles.item}><Link href='/'>Home</Link></li>
                  <li className={navStyles.item}><Link href='/about'>About</Link></li>
              </ul>
          </div>

      </div>
  )
}
export default Nav
