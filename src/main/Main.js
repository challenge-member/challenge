import React from 'react';
import Title from '../title/Title';
import Card from '../card/Card';
import Action from '../action/Action';
import Time from '../time/Time';
import Attend from '../image/Vector1.png';
import Leave from '../image/Vector2.png';
import Over from '../image/Vector3.png';
import Off from '../image/Vector4.png';
import Blue from '../image/Blue.png';
import Red from '../image/Red.png';
import Green from '../image/Green.png';
import Purple from '../image/Purple.png';
import Detail from '../image/Detail.png';

import './Main.css';

class Main extends React.Component {
  render() {

    return (
      <>
        <section className="main-wrapper" >
          <header className="header">
            <Title />
          </header>
          <ul className="menu">
            <Card
              name= "出勤"
              image= {Attend}
              state= {Blue}
            />
            <Card
              name= "退勤"
              image= {Leave}
              state= {Red}
            />
            <Card
              name= "残業"
              image= {Over}
              state= {Green}
              />
            <Card
              name= "休暇"
              image= {Off}
              state= {Purple}
            />
          </ul>
          <div className="content">
            <Action />
            <div className="time-content">
              <h2 className="action-ttl">退勤統計</h2>
              <div className="time-wrapper">
                <Time
                  name="出勤日"
                  time="14日"
                  class="time time1"
                />
                <Time
                  name="土日祝"
                  time="6日"
                  class="time time2"
                />
                <Time
                  name="出勤時間"
                  time="102時30分"
                  class="time time3"
                  detail="詳細"
                  classdt="dt"
                  img= {Detail}
                />
                <Time
                  name="残業時間"
                  time="10時"
                  class="time time4"
                />
                <Time
                  name="休憩時間"
                  time="15時"
                  class="time time5"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Main;