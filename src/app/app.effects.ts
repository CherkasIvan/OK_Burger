import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map } from 'rxjs';

import { changedUpdateAt, clear, decrease, increase } from './reducers/counter';

@Injectable()
export class AppEffects {
  updatedAt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increase, decrease, clear),
      map(() => changedUpdateAt({ updatedAt: Date.now() }))
    )
  );
  constructor(private actions$: Actions) {}
}
