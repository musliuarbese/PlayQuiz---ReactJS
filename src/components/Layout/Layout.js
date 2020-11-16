import React from 'react';
import Auxx from '../../hoc/Auxx';

const layout = (props) =>{
    return(
    <Auxx>
        <div>Toolbar, SideDrawer, DrawerToggle
            <main>{props.children}</main>
        </div>
    </Auxx>
   );
}

export default layout;