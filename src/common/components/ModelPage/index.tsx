import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {observer} from '@tarojs/mobx'
import {getWindowsHeight} from '../../../utils/tools';
import './index.scss'

interface IGoodsListProps {
  top:number,
  width:number,
  show:boolean,
  onTouchMove?:any
}

//封装弹出层model

@observer
class Index extends Component<IGoodsListProps> {


  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleTouchMove = () => {
    this.props.onTouchMove();
  };

  render() {
    const height = getWindowsHeight();
    const {top,show,width} = this.props;

    return (
      <View style={{display:`${!show&&'none'}`}}>
        <View className='index' style={{height:`${height}rpx`}} onTouchMove={this.handleTouchMove} onClick={this.handleTouchMove} />
        <View className='inner' style={{top:`${top}rpx`,width:`${width}rpx`,left:`${((750-width)/2)}rpx`,textAlign: `center`}}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

export default Index
