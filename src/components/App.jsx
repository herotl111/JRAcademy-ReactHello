import React from 'react';
import { connect } from "react-redux";
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import {getWelcomeAsync} from '../actions/welcomeAction';

// const welcomeList = [
//   {id:1, name: 'Nick', isTeacher:true },
//   {id:2, name: 'Tim', isTeacher:false },
//   {id:3, name: 'Sam', isTeacher:false },
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getWelcomeAsync());
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.dispatch(postWelcomeAsync(this.state.auther, this.state.content))
  //             .then(()=>dispatch(getWelcomeAsync())).then(()=>console.log())
  // }

  render() {
    const {count, diff, dispatch} = this.props;
    return (
      <section className="App">
        {
          this.props.welcomeList.map((element, index) => 
          (
            <div key={index}>
              <Welcome 
              author={element.author} 
              content={element.content}
              isTeacher={element.isTeacher} 
              count={count}/>
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
    welcomeList: state.welcome.welcomeList,
    count: state.counter.count,
    diff: state.counter.diff,
  }
}

const AppC = connect(mapStateToProps)(App)

export default AppC;
