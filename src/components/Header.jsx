import * as React from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';

const Header = (props)=>(
    <Sidebar as={Segment} style={{height: "100%"}} direction='top' visible inverted>
        Cosmos computers
    </Sidebar>
);

export default Header;