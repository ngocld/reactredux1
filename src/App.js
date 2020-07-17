import React, {
  Component
} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';
import Search from './components/page/search/Search';
import Add from './components/page/add/Add';
import { connect } from 'react-redux';


class App extends Component {


  handleClickButton = () => {
    // const { dispatch } = this.props
    // dispatch({ type: 'CHANGE' })
    // this.props.onClickButton()
    // this.props.onClickButton1()
    this.props.onClickButton2()
  }

  render() {
    return (
      <div>
        Mình đang học redux. Giá trị của react là:
        
        <button onClick={() => this.handleClickButton()}>Test su kien</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dulieu: [state.device]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickButton: () => dispatch({ type: 'CHANGE' }),
    onClickButton1: () => dispatch({ type: 'ADD', payload: 'Máy in'}),
    onClickButton2: () => dispatch({ type: 'DELETE', payload: 0}),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

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