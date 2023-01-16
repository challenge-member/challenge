import React from 'react';
import './Action.css';

class Action extends React.Component {
  
  // let date = new Date()
  // date.getFullYear() + '年'
  
  render() {
    return (
      <>
        <div className="action-container">
          <p className="act-ttl">最近の活動</p>
          <div className="actions" id="test">
            <div className="state-attend">
              <p className="state">出勤</p>
            </div>
            <p className="act-date">Action dates</p>
          </div>

          <div className="actions" id="test">
            <div className="state-leave">
              <p className="state">退勤</p>
            </div>
            <p className="act-date">Action dates</p>
          </div>
        </div>
      </>
    );
  }
}

export default Action;

// indexのapi fetch,6個まで　Action.js ok
// 出勤退勤ボタンの挙動
// 二つの手順
// 1create api(新たに作成したmodelを返す) にfetch okかも
// 2返されたモデルを何とかして最近の活動に表示する(how to pass~参照)

// 3挨拶のロジックもやる, utc時間でDBに保存(rails)　ok
// 4img タグをif文で表示 done
// 5一直線にする done

// 16日進捗
// 19残り完了　レビュー
// 20納品