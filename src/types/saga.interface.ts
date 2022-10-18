export interface IAuthSaga {
  type: string;
  payload: { uid: string };
}

export interface IProductSaga {
  type: string;
  payload: any;
}
