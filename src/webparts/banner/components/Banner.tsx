import * as React from 'react';
import styles from './Banner.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import './Banner.css'
export default class Banner extends React.Component<{}, {}> {
  private imageAdddress = 'https://i.ibb.co/x7fZ8w5/Capture.png'
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.banner}>
        <div className={styles.container}>
          <div className='left_Col'><img src={this.imageAdddress} alt="" /></div>
          <div className='right_Col'>
            <div className='top_Row'>新型コロナウイルス対策</div>
            <div className='bot_Row'>
              <div className='bot_left_row'>
                <img src="https://i.ibb.co/BGbLhYB/Capture1.png" alt="" />
                <img src="https://i.ibb.co/T1cdvc6/Capture2.png" alt="" />
              </div>
              <div className='bot_right_row'>
                <div>コンプライアンス</div>
                <div>規則-規程</div>
                <div>健康管理</div>
              </div>
            </div>
          </div>



        </div>
      </div>
    );
  }
}
