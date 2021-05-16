import { React, Component } from "react";
import { Button, Input, Space, Alert } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import Home from "./Home.js";
import { connect } from "react-redux";
import {updateEmail , updatePass,Login_Function} from '../../app-Redux/Action/login';


class Login extends Component {
  render() {
    console.log("LOGIN===========", this.props.login);
    if (this.props.login) {
      return <Home />;
    } else {
      return (
        <div>
          <h1>Login Page</h1>
          <br />
          <br />
          <Space direction="vertical">
            <Input
              size="large"
              placeholder="Email"
              prefix={<UserOutlined />}
              onChange={(event) => this.props.updateEmail(event.target.value)}
            />

            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              onChange={(event) => this.props.updatePass(event.target.value)}
            />
            <br />
            <Button
              type="primary"
              size="large"
              onClick={async (e) =>
                await this.props.Login_Function(this.props.username, this.props.pass)
              }
            >
              Login
            </Button>
            {this.props.incorrect ? (
              <Alert message="Wrong Credentials" type="warning" />
            ) : (
              <></>
            )}
          </Space>
        </div>
      );
    }
  }
}
const MapStateToProps = (state) => {
  return {
    login: state.Login.login,
    username: state.Login.username,
    pass: state.Login.pass,
    incorrect: state.Login.incorrect,
  };
};
const MapDispatchToProps = () => {
  return {
    updateEmail,
    updatePass,
    Login_Function
  }
};
export default connect(MapStateToProps, MapDispatchToProps())(Login);
