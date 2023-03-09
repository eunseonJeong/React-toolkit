// //중앙 데이터 관리소(state)를 설정하는 부분

import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from '../modules/TodoModule'

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
})
