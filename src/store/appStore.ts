import { observable, action } from 'mobx'
import { userLogin } from '../apis/index/api'

class appStore {

  @observable
  public apiToken: string = '';

  @action.bound
  public async userLogin(data) {
    const resp = await userLogin(data);
    this.apiToken = resp.data;
  }

}

export default new appStore();
