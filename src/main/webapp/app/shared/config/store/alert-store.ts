import { Module } from 'vuex';

export const alertStore: Module<any, any> = {
  state: {
    dismissSecs: 0,
    dismissCountDown: 0,
    alertType: '',
    alertMessage: {},
  },
  getters: {
    dismissSecs: state => state.dismissSecs,
    dismissCountDown: state => state.dismissCountDown,
    alertType: state => state.alertType,
    alertMessage: state => state.alertMessage,
  },
  mutations: {
    initAlert(state) {
      state.dismissSecs = 0;
      state.dismissCountDown = 0;
      state.alertType = '';
      state.alertMessage = {};
    },
    setAlertType(state, alertType) {
      state.alertType = alertType;
    },
    setAlertMessage(state, alertMessage) {
      state.dismissSecs = 5;
      state.dismissCountDown = 5;
      state.alertMessage = alertMessage;
    },
    countDownChanged(state, newCountDown) {
      state.dismissCountDown = newCountDown;
    },
  },
};
