import React from 'react';
import { connect } from "react-redux";
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';

// const welcomeList = [
//   {id:1, name: 'Nick', isTeacher:true },
//   {id:2, name: 'Tim', isTeacher:false },
//   {id:3, name: 'Sam', isTeacher:false },
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {count, diff, dispatch} = this.props;
    return (
      <section className="App">
        {
          this.props.welcomeList.map((element, index) => 
          (
            <div key={index}>
              <Welcome name={element.name} isTeacher={element.isTeacher} count={count}/>
            </div>)
          )
        }
          <Counter count={count} diff={diff} dispatch={dispatch}/>  
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    welcomeList: state.welcome,
    count: state.counter.count,
    diff: state.counter.diff,
  }
}

const AppC = connect(mapStateToProps)(App)

export default AppC;
