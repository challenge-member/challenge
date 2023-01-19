import React from 'react';
import './Action.css';

class Action extends React.Component {
  constructor(props) {
    super(props);
}

  getYearMonthDate = (attendanceTime) => {
    const attendanceTimeObject = new Date(attendanceTime)
    return attendanceTimeObject.getFullYear() + '年' +
      this.addZeroForTime((attendanceTimeObject.getMonth() + 1)) + '月' +
      this.addZeroForTime(attendanceTimeObject.getDate()) + '日' +
      ' (' + this.convertDayToJapaneseDay(attendanceTimeObject.getDay()) + ') '
  } 

  convertDayToJapaneseDay = (day) => {
    switch (day) {
      case 0:
          return "日"
      case 1:
          return "月"
      case 2:
          return "火"
      case 3:
          return "水"
      case 4:
          return "木"
      case 5:
          return "金"
      case 6:
          return "土"
      default:
          return ""

    }
  } 

  getHourMinuteSecond = (attendanceTime) => {
    const attendanceTimeObject = new Date(attendanceTime)
    const time =
      this.addZeroForTime(attendanceTimeObject.getHours()) + '時' +
      this.addZeroForTime(attendanceTimeObject.getMinutes()) + '分' +
      this.addZeroForTime(attendanceTimeObject.getSeconds()) + '秒' 
    return time
  }

  addZeroForTime = (i) => {
    if (i < 10) {
        i = "0" + i
    }
    return i
  }

  renderAttendanceList = (attendanceList) => {
    console.log(attendanceList)
    return attendanceList.map(attendance => 
      <div className="actions" id="test">
        <p className="act-date">{this.getYearMonthDate(attendance.created_at)}</p>
        <p className="act-time">{this.getHourMinuteSecond(attendance.created_at)}</p>      
        <div className={attendance.status === "出勤" ? "state-attend" : "state-leave"}>
          <p className="state">{(attendance.status)}</p>
        </div>
      </div>
      )
  }

  render() {
    const {attendances} = this.props
    return (
      <>
        <div className="action-container">
          <p className="act-ttl">最近の活動</p>
          {this.renderAttendanceList(attendances)}
        </div>
      </>
    );
  }
}

export default Action;
