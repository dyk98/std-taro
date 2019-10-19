import appStore from '../stores/appStore'

export const apiToken = appStore.apiToken;

export const login = (data) => {
  appStore.userLogin(data);
};

