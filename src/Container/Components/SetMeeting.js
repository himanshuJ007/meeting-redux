import { React, Component } from "react";
import { connect } from "react-redux";
import {
  set,
  onChangeDate,
  onChangeTime,
  onChangeEquipment,
  onChangeLocation,
  onChangeParticipants,
} from "../../app-Redux/Action/setMeeting";
import {
  Button,
  DatePicker,
  TimePicker,
  Select,
  Col,
  Row,
  Card,
  Alert,
} from "antd";
import moment from "moment";
import "../../../node_modules/antd/dist/antd.css";
const dateFormat = "YYYY/MM/DD";
const { Option } = Select;
const children = ["Himanshu", "Muskan", "Aryan", "Prabhat"];
class SetMeeting extends Component {
  render() {
    return (
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card style={{ width: 300 }}>
            Meeting Date :
            <DatePicker
              onChange={this.props.onChangeDate}
              defaultValue={moment("2020/01/01", dateFormat)}
              format={dateFormat}
            />
            <br />
            <br />
            Meeting Time :
            <TimePicker
              onChange={this.props.onChangeTime}
              defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
            />
            <br />
            <br />
            Location :
            <Select
              defaultValue="Room A1"
              style={{ width: 120 }}
              onChange={this.props.onChangeLocation}
            >
              <Option value="Room A1 ">Room A1</Option>
              <Option value="Room A2">Room A2</Option>
              <Option value="Room A3">Room A3</Option>
              <Option value="Room A4">Room A4</Option>
            </Select>
            <br />
            <br />
            Equipments :
            <Select
              defaultValue="1 PC"
              style={{ width: 120 }}
              onChange={this.props.onChangeEquipment}
            >
              <Option value="1 PC">1 PC</Option>
              <Option value="5 PCs">5 PCs</Option>
              <Option value="10 PCs">10 PCs</Option>
              <Option value="15 PCs">15 PCs</Option>
            </Select>
            <br />
            <br />
            <Select
              mode="tags"
              placeholder="Please select"
              onChange={this.props.onChangeParticipants}
              style={{ width: "100%" }}
            >
              {children.map((element) => {
                return <Option value={element}>{element}</Option>;
              })}
            </Select>
            <br />
            <br />
            <Button
              type="primary"
              size="large"
              onClick={this.props.set(
                "Himanshu1",
                this.props.meeting_date,
                this.props.meeting_time,
                this.props.meeting_Location,
                this.props.meeting_Equipments,
                this.props.meeting_Participants
              )}
            >
              Set
            </Button>
            <br />
            <br />
            {this.props.home ? (
              <Alert message="Meeting Saved SuccessFully" type="warning" />
            ) : (
              <></>
            )}
          </Card>
        </Col>
      </Row>
    );
  }
}
const MapStateToProps = (state) => {
  return {
    home: state.SetMeeting.home,
    meeting_date: state.SetMeeting.meeting_date,
    meeting_time: state.SetMeeting.meeting_time,
    meeting_Location: state.SetMeeting.meeting_Location,
    meeting_Equipments: state.SetMeeting.meeting_Equipments,
    meeting_Participants: state.SetMeeting.meeting_Participants,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    set,
    onChangeDate,
    onChangeTime,
    onChangeLocation,
    onChangeEquipment,
    onChangeParticipants,
  };
};
export default connect(MapStateToProps, MapDispatchToProps())(SetMeeting);
