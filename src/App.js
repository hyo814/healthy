import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/views/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';
import PersonList from "./components/views/Person/PersonList";
import GenderChart from "./components/views/Chart/GenderChart";
import RaceChart from "./components/views/Chart/RaceChart";
import EthnicityChart from "./components/views/Chart/EthnicityChart";
import TotalList from "./components/views/Total/TotalList";
import DeathList from "./components/views/Death/DeathList";
import ConditionList from "./components/views/Conditon/ConditionList";

const App = () => {
  return (
      <>
        <Header/>
        <Router>
          <div>
            <ScrollToTop>
              <Switch>
                <Route exact path="/" component={PersonList}/>
                <Route exact path="/condition" component={ConditionList}/>
                <Route exact path="/death" component={DeathList}/>
                <Route path="/gender" component={GenderChart}/>
                <Route path="/race" component={RaceChart}/>
                <Route path="/ethnicity" component={EthnicityChart}/>
                <Route path="/total" component={TotalList}/>


              </Switch>
            </ScrollToTop>
          </div>
        </Router>
      </>
  )
}

export default App;