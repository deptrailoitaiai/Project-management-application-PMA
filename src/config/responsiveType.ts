export interface ResponseTypeSuccess {
  status: string;
  data: object;
}

export const ResponseSuccess = (data: object): ResponseTypeSuccess => {
  return {
    status: 'success',
    data: {},
  };
};

export interface ResponseTypeFail {
    status: string;
    errorCode: number;
    data: {
        message: string;
    }
}

export const ResponseFail = (errCode: number, errMsg: string): ResponseTypeFail => {
    return {
        status: 'error',
        errorCode: errCode,
        data: {
            message: errMsg,
        }
    }
}

