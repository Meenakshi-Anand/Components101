export const RECEIVE_INFORMATION = "RECEIVE_INFORMATION";
export const RECEIVE_INFO = "RECEIVE_INFO";
export const REMOVE_INFO = "REMOVE_INFO";
export const INFO_ERROR = "INFO_ERROR";
export const receiveInformation = information => ({
  type: RECEIVE_INFORMATION,
  information
});

export const receiveInfo = info => ({
  type: RECEIVE_INFO,
  info
});

export const removeInfo = info => ({
  type: REMOVE_INFO,
  info
});

export const infoError = error => ({
  type: INFO_ERROR,
  error
});
