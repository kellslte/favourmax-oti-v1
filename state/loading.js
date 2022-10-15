import { atom, selector } from 'recoil';

const loadingState = atom({
    key: 'loadingState',
    default: true,
})

const loading = selector({
    key: 'loading',
    get: ({get}) => get(loadingState),
})

export {loadingState, loading}
