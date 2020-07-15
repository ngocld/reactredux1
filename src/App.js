import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';
import Search from './components/page/search/Search';
import Add from './components/page/add/Add';


export default class App extends Component {

  render() {

    var redux = require('redux')

    var oldState = {
      num: ['Man Hinh', 'Chuot', 'Ban Phim'],
      editStatus: true
    }

    var reducer1 = (state = oldState, action) => {
      switch (action.type) {
        case "CHANGE_STATUS":
          return {...state, editStatus: !state.editStatus}
          break;

        default:
          break;
      }

      return state
    }

    var store1 = redux.createStore(reducer1)
    store1.dispatch({type: "CHANGE_STATUS"})
    console.log(store1.getState());

    // var redux = require('redux')
    // var oldState = {
    //   num: ["Man hinh", "Chuot", "Ban Phim"],
    //   editStatus: true
    // }

    // var reducer1 = (state=oldState, action) => {
    //   return state
    // }

    // var store1 = redux.createStore(reducer1)


    return (
      <div>
        Mình đang học redux
      </div>
    )
  }
}


// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <Search />
//         </Route>
//         <Route path="/search">
//           <Search />
//         </Route>
//         <Route path="/add">
//           <Add />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;