import * as usersService from '../../services/users';
export default {
    namespace: "user",
    state: {
        list: [],
    },
    reducers: {
        save(state, {payload: {list}}) {
            return {...state, list};
        }
    },
    effects: {
        *fetch({payload: {page = 1 }}, {call, put}) {
            const {data} = yield call(usersService.fetchpage, page);
            yield put({
                type: 'save',
                payload: {list: data},
            });
        },
    },
  subscriptions: {
    setup({ dispatch, history }) {
        return history.listen(({ pathname }) => {
          if (pathname === '/users') {
            dispatch({ type: 'fetch', payload: 1 });
          }
        });
      },
  },
}