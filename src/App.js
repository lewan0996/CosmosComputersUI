import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import SideMenu from './components/SideMenu';
import { Route } from 'react-router-dom';
import Computers from './components/pages/Computers';
import Cases from './components/pages/Cases';
import { Sidebar, Segment } from 'semantic-ui-react';
import Coolers from './components/pages/Coolers';
import Discs from './components/pages/Discs';
import GraphicCards from './components/pages/GraphicsCards';
import MemoryModules from './components/pages/MemoryModules';
import Motherboards from './components/pages/Motherboards';
import PowerSupplies from './components/pages/PowerSupplies';
import Processors from './components/pages/Processors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar.Pushable as={Segment} style={{ border: "none", borderRadius: 0 }}>
          <SideMenu color="blue" />
          <Sidebar.Pusher
            style={{ padding: 50, paddingRight: 200, backgroundColor: "rgba(0,0,0,0.7)", height: "100%", overflowY: "scroll" }}
          > {/*150 - menu width*/}
            <Route exact path="/" render={() => <Computers />} />
            <Route path="/Cases" render={() => <Cases />} />
            <Route path="/Coolers" render={() => <Coolers />} />
            <Route path="/Discs" render={() => <Discs />} />
            <Route path="/GraphicCards" render={() => <GraphicCards />} />
            <Route path="/MemoryModules" render={() => <MemoryModules />} />
            <Route path="/Motherboards" render={() => <Motherboards />} />
            <Route path="/PowerSupplies" render={() => <PowerSupplies />} />
            <Route path="/Processors" render={() => <Processors />} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
