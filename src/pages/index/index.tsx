import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer } from '@tarojs/mobx'
import indexStore from '../../store/indexStore'
import Demo from './Demo'

import './index.scss'

@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  public addNum() {
    indexStore.addNum()
  }

  public login(data) {
    indexStore.userLogin(data)
  }

  render () {
    const { num } = indexStore;
    return (
      <View className='index'>
        <Demo onClickNum={this.addNum} num={num} />
      </View>
    )
  }
}

export default Index  as ComponentType
