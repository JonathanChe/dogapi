import * as types from '../constants/index';

export const requestDogs = () => ({
  type: types.REQUEST,
});

export const receiveDogs = breeds => ({
  type: types.RECEIVED,
  breeds,
});

export const fetchFailed = error => ({
  type: types.FAILED,
  error,
});

export const handleSearch = input => ({
  type: types.SEARCH,
  input,
})

export const fetchDogs = input => (dispatch) => {
  // dispatch to set loading to true while fetch is being initialized
  dispatch(requestDogs());

  return fetch(`https://dog.ceo/api/breed/${input}/images`)
    .then(data => data.json())
    .then(response => {
      (response.status === 'success')
        ? dispatch(receiveDogs(response.message.slice(0, 12)))
        : dispatch(fetchFailed(response.message));
    })
    .catch(err => dispatch(fetchFailed(err)));
}