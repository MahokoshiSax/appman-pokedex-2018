import React from 'react'
import { List, Avatar, Icon, Progress, Row, Col } from 'antd'
import styled from '@emotion/styled'
import 'antd/dist/antd.css'
import CuteImage from '../../src/cute.png'
import mock from './cards.json'

const ProgressStyled = styled(Progress)`
  .ant-progress-bg {
    height: 20px!important;
  }
`

class CardList extends React.PureComponent {

  renderHappiness = (item) => {
    var damage = 0
    if(item.attacks){
      item.attacks.map((attack) => {
        damage += parseInt(attack.damage.replace(/[//+//-//*]/,''), 10)
        }
      )
    }
    const weak = item.weaknesses ? item.weaknesses.length : 0
    const happiness = parseInt(((item.hp / 10) + (damage /10 ) + 10 - (weak)) / 5, 10)
    var happinessLV = []
    var i
    for (i = 0; i < happiness; i++) {
      happinessLV.push(<img src={CuteImage} style={{ width: 50,height: 50, margin: 5}}/>)
    }
    return happinessLV
  }

  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={mock.cards}
        renderItem={item => (
          <List.Item
            extra={<a onClick={()=>{}} style={{marginRight: 10,fontSize: 20}}>ADD</a>}
          >
            {console.log(item)}
            <Row>
              <Col span={4}>
                <img src={item.imageUrl} style={{width: 100,height: 'auto'}}/>
              </Col>
              <Col span={20}>
                <Row>
                  <Col span={3}>{'HP'}</Col>
                  <Col span={20}>
                    <ProgressStyled percent={item.hp} showInfo={false} />
                  </Col>

                  <Col span={3}>{'STR'}</Col>
                  <Col span={20}>
                    <ProgressStyled percent={item.attacks ? item.attacks.length*50 : 0} showInfo={false} />
                  </Col>
                  <Col span={3}>{'WEAK'}</Col>
                  <Col span={20}>
                    <ProgressStyled percent={item.weaknesses ?item.weaknesses.length*100 : 0} showInfo={false} />
                  </Col>
                  <Col span={24}>
                    {this.renderHappiness(item)}
                  </Col>
                </Row>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    )
  }
}

export default CardList