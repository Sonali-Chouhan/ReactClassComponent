import React from "react";
import { connect } from "react-redux";
import { getUsers,removeUsers } from "../Redux/Action/Action";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    this.setState((prevState) => ({
      loading: !prevState.loading,
    }));

    setTimeout(() => {
      this?.props?.getUsers();
      this.setState((prevState) => ({
        loading: !prevState.loading,
      }));
    }, 1000);
  }
  handleDelete=(id)=>{
    this.props.removeUsers(id)
  }
  handleView=(data)=>{
    this.props.handler(data)
  }
  render() {
    return (
      <div className="user-list">
        {this.state.loading ? (
          "loading........!!"
        ) : (
          <table>
            <thead>
              <tr>
                <th style={{color:'#2b9bc0'}}>Name</th>
                <th style={{color:'#2b9bc0'}}>Email</th>
                <th style={{color:'#2b9bc0',textAlign:"center"}} colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {this?.props?.users?.length > 0 ? (
                this?.props?.users.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.userName}</td>
                      <td>{item.userEmail}</td>
                      <td><button className="button" onClick={()=>this.handleDelete(item.id)}>Remove</button></td>
                      <td><button className="button" onClick={()=>this.handleView(item)}>View</button></td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4" style={{textAlign:'center'}}>Data is not available</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.Userreducer.UserData,
});
//
const mapDispatchToProps = {
  getUsers,
  removeUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
