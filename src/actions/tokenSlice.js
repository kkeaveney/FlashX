import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { get } from 'lodash'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    loaded: false,
    contract: {},
  },
  reducers: {
    tokenLoaded: (state, action) => {
      state.loaded = true
      state.contract = action.payload
    },
    tokenBalanceLoaded: (state, action) => {
      state.balance = action.payload
    },
  },
})
export const { tokenLoaded, tokenBalanceLoaded } = tokenSlice.actions

export default tokenSlice.reducer

// Selectors ///

const token = (state) => get(state, 'token.contract')
export const tokenSelector = createSelector(token, (t) => t)
