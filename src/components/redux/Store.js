import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    task: taskReducer,
    filters: filtersReducer,
  },
});

export default store;
