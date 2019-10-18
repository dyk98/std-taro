import { observable, action } from 'mobx'
import { login } from '../services/appService'

class indexStore {

  @observable
  public num: number = 1;

  @action.bound
  public addNum() {
    this.num++
  }

  @action.bound
  public userLogin(data) {
    login(data)
  }

}

export default new indexStore();
