import React from "react";
import { connect } from "react-redux";
import { addUsers, updateUsers } from "../Redux/Action/Action";

class UserCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: { userName: "", userEmail: "", id: "" },
      errors: {},
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.fields.userName &&
      this.state.fields.userEmail &&
      !this.state.fields.id
    ) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        userName: this.state.fields.userName,
        userEmail: this.state.fields.userEmail,
      };
      this.props.addUsers(newEmployee);
      this.clearData();
    } else if (
      this.state.fields.userName &&
      this.state.fields.userEmail &&
      this.state.fields.id
    ) {
      const updatedDetails = {
        id: this.state.fields.id,
        userName: this.state.fields.userName,
        userEmail: this.state.fields.userEmail,
      };
      this.props.updateUsers(updatedDetails);
      this.clearData();
    }

    // if (this.state.fields.id) {
    //   const updatedDetails = {
    //     id: this.state.fields.id,
    //     userName: this.state.fields.userName,
    //     userEmail: this.state.fields.userEmail,
    //   };
    //   this.props.updateUsers(updatedDetails);
    // } else {
    //   const newEmployee = {
    //     id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
    //     userName: this.state.fields.userName,
    //     userEmail: this.state.fields.userEmail,
    //   };
    //   this.props.addUsers(newEmployee);
    // }
    this.clearData();
  };
  handleChange = (e) => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  };
  clearData = () => {
    this.setState({
      fields: {
        id: "",
        userEmail: "",
        userName: "",
      },
    });
  };

  componentWillReceiveProps(nextProps, prevState) {
    if (nextProps && this.state.fields?.id !== nextProps?.singleData?.id) {
      this.setState({
        fields: {
          id: nextProps?.singleData?.id,
          userEmail: nextProps?.singleData?.userEmail,
          userName: nextProps?.singleData?.userName,
        },
      });
    }
  }

  render() {
    return (
      <div id="register">
        <h3 style={{ marginLeft: "115px", color: "#2b9bc0" }}>Users</h3>
        <form name="userRegistrationForm" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="userName"
            value={this.state.fields.userName}
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            type="text"
            name="userEmail"
            value={this.state.fields.userEmail}
            onChange={this.handleChange}
          />
          <div className="button-div">
            <button type="submit" className="button">
              {this.state.fields.id ? "Update" : " Save"}
            </button>
            <button className="button" onClick={this.clearData}>
              CLEAR
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.Userreducer.UserData,
});
const mapDispatchToProps = {
  addUsers,
  updateUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserCreate);
