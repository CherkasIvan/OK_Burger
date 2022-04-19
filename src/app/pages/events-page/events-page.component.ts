import { ChangeDetectionStrategy, Component } from "@angular/core";

import { slideInAnimation } from "constants/animations/routing-animations";

@Component({
  selector: "app-events-page",
  templateUrl: "./events-page.component.html",
  styleUrls: ["./events-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
})
export class EventsPageComponent {
  constructor() {}
}
