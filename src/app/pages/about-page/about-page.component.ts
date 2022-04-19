import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { slideInAnimation  } from "constants/animations/routing-animations";

import { map } from "rxjs";

import {
  increase,
  decrease,
  clear,
  counterSelector,
  updatedAtSelector,
} from "../../reducers/counter";

@Component({
  selector: "app-about-page",
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.scss"],
  changeDetection:ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation ],
})
export class AboutPageComponent {
  count$ = this.store.select(counterSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector);

  constructor(private store: Store) {}
  increase(): void {
    this.store.dispatch(increase());
  }
  decrease(): void {
    this.store.dispatch(decrease());
  }
  clear(): void {
    this.store.dispatch(clear());
  }
}
