import React from 'react';
import './App.css';
import UserCreate from './pages/UserCreate';
import UserList from './pages/UserList';
// import EmployeeList from './pages/EmployeeListing';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      singleData:{}
    }
  }
  handler = (val) => {
    this.setState({
      singleData: val
    })
  }



 render(){
  return (
    <div className="App">
       {/* <EmployeeList/> */}
       <UserCreate singleData={this.state.singleData}/>
       <UserList  handler = {this.handler} />
    </div>
  );
}
}

export default App;


