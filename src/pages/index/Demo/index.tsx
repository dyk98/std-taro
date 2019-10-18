import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer } from '@tarojs/mobx'
import './index.scss'

interface IProps {
  num: number;
  onClickNum: () => void;
}

interface IState {

}

@observer
class Index extends Component<IProps, IState> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  addNum() {
    this.props.onClickNum()
  }

  render () {
    const { num } = this.props;
    return (
      <View className='index'>
        <View onClick={this.addNum}>{num}</View>
      </View>
    )
  }
}

export default Index
