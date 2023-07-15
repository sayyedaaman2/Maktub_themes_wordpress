import { AiFillSkype } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

import Link from "next/link";
import menuList from '../utils/headerData.json'
const Header = () => {
  // const [menuList, setMenuList] = useState<HeadItem[] | null>();
  console.log(menuList)

  return (
    <header id="header">
      <div id="header-wrapper">
        <div id="menu-wrapper">
          <div id="icon-wrapper">
            <div id="icon-list">
              <Link href="#" className="icon" id="fb-icon">
                <FaFacebookF />
              </Link>
              <Link href="#" className="icon" id="tw-icon">
                <FaTwitter />
              </Link>
              <Link href="#" className="icon" id="it-icon">
                <FaInstagram />
              </Link>
              <Link href="#" className="icon" id="sk-icon">
                <AiFillSkype />
              </Link>
            </div>
          </div>
          <div id="title-wrapper">
            <h1 id="title">
              <span>M</span>aktub
            </h1>
          </div>
          <div id="search-icon-wrapper">
            <div id="search-icon">
              <Link href="#">
                <BsSearch />
              </Link>
            </div>
          </div>
        </div>
        <nav id="nav-wrapper">
          <ul id="menu">
            {
             menuList && menuList.map((item:HeadItem,index:number)=> <ListMenu key={index} list={item}/>)
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

const ListMenu = ({list}:ListItemProps):JSX.Element => {

  return (
    <li className="menu-item dropdown">
    <Link href={list?.link as string} className="dropbtn">
      {list?.name}
    </Link>
    <div className="dropdown-wrapper">
      {list?.subHead && (list?.subHead.length != 0) && (
        <ul className="subHead">
          {list.subHead.map((sub: SubHeadItem, index: number) => (
            <li key={index} className="subHead-list">
              <Link href={sub.link as string}>{sub.name}</Link>
              {sub?.subHead && (sub?.subHead.length != 0) && (
                <ul className="sub-menu">
                  {sub.subHead.map((sub: SubHeadItem, index: number) => (
                    <li key={index} className="sub-menu-list">
                      {sub.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  </li>
  
  );
};

export default Header;
