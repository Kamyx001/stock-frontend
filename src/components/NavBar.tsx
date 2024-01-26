import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { Link } from 'react-router-dom'
import { Card } from './ui/card'

type NavBarProps = {
  balance?: number;
}

const NavBar = ({balance}:NavBarProps) => {
  return (
    <Card className='fixed top-0 left-0 right-0 z-10 flex flex-row justify-between p-3 pl-5 m-3 bg-black'>
      <NavigationMenu className='text-white'>
          <NavigationMenuList>
            {/* Home Link */}
            <NavigationMenuItem>
              <Link to="/">
                Home
              </Link>
            </NavigationMenuItem>
            <div className='mx-5'>|</div>
            <NavigationMenuItem>
              <Link to="/login">
                Login
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
      </NavigationMenu>
      <div>
        {balance && <p className='text-right text-white'>Your balance: ${balance}</p>}
      </div>
    </Card>
  );
};

export default NavBar