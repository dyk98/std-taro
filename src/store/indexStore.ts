import { observable, action } from 'mobx'
import { userLogin } from '../apis/index/api'

class indexStore {

  @observable
  public num: number = 1;

  @action.bound
  public addNum() {
    this.num++
  }

  public async userLogin(data) {
    await userLogin(data)
  }

}

export default new indexStore();
