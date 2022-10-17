import { call, put } from 'redux-saga/effects';
import firebaseInstance from '@/firebase/firebase';
import { IProductSaga } from '@/types/saga.interface';
import { IProductRes } from '@/types/products.interface';
import {
  getProductsStart,
  getProductsSuccess,
} from '@/reducers/productsReducer';
import { isLoading, setRequestStatus } from '@/reducers/appReducer';

function* initRequest() {
  yield put(isLoading(true));
  yield put({ type: setRequestStatus.type, payload: null });
}

function* handleError(e: any) {
  yield put(isLoading(false));
  yield put({ type: setRequestStatus.type, payload: 'Request failed ' });
}

function* productSaga({ type, payload }: IProductSaga) {
  switch (type) {
    case getProductsStart.type:
      try {
        yield initRequest();
        const products: IProductRes[] = yield call(
          firebaseInstance.getProducts
        );
        yield put(getProductsSuccess(products));
        yield put(isLoading(false));
        yield put({ type: setRequestStatus.type, payload: null });
      } catch (e) {
        handleError(e);
      }
      break;
    default:
      return;
  }
}

export default productSaga;
