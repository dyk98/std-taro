import { observable, action } from 'mobx'
import { userLogin } from '../apis/index/api'
import { user } from '../types/userType'
import { card } from '../common/types/cardType'

class appStore {

  @observable
  public apiToken: string = '';

  @observable
  public user: user = {
    username: 'qqq',
    password: 'pass'
  };

  @observable
  public card: card = {
    id: 12,
    name: 'qwe'
  };

  @action.bound
  public async userLogin(data) {
    const resp = await userLogin(data);
    this.apiToken = resp.data;
  }

}

export default new appStore();
