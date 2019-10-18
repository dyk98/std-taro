import { observable, action } from 'mobx'
import { login } from '../services/appService'
import { numObj } from '../types/indexType'
import { card } from '../common/types/cardType'


class indexStore {

  @observable
  public num: number = 1;

  @observable
  public card: card = {
    id: 12,
    name: 'qwe'
  };

  @observable
  public numObj: numObj = {
    num: 1
  };

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
