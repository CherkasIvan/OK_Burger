import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from 'environments/environment';
import { counterReducer, CounterState, COUNTER_KEY } from './counter';

export interface State {
  [COUNTER_KEY]: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer,
  
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
