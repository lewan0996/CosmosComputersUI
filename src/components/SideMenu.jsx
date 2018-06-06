import * as React from 'react';
import { Sidebar, Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

const SideMenu = (props) => (
    <Sidebar as={Menu} animation='push' width='thin' visible={true} icon='labeled' vertical inverted>
        <Menu.Item as={Link} to="/" active={props.location.pathname === '/'} color={props.color}>
            Computers
        </Menu.Item>
        <Menu.Item as={Link} to="/Cases" active={props.location.pathname === '/Cases'} color={props.color}>
            Cases
        </Menu.Item>
        <Menu.Item as={Link} to="/Coolers" active={props.location.pathname === '/Coolers'} color={props.color}>
            Coolers
        </Menu.Item>
        <Menu.Item as={Link} to="/Discs" active={props.location.pathname === '/Discs'} color={props.color}>
            Discs
        </Menu.Item>
        <Menu.Item as={Link} to="/GraphicCards" active={props.location.pathname === '/GraphicCards'} color={props.color}>
            Graphic cards
        </Menu.Item>
        <Menu.Item as={Link} to="/MemoryModules" active={props.location.pathname === '/MemoryModules'} color={props.color}>
            Memory modules
        </Menu.Item>
        <Menu.Item as={Link} to="/Motherboards" active={props.location.pathname === '/Motherboards'} color={props.color}>
            Motherboards
        </Menu.Item>
        <Menu.Item as={Link} to="/PowerSupplies" active={props.location.pathname === '/PowerSupplies'} color={props.color}>
            Power supplies
        </Menu.Item>
        <Menu.Item as={Link} to="/Processors" active={props.location.pathname === '/Processors'} color={props.color}>
            Processors
        </Menu.Item>
    </Sidebar>
);

export default withRouter(SideMenu);