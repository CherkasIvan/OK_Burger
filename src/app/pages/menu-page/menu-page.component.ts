import { ChangeDetectionStrategy, Component } from "@angular/core";

import { slideInAnimation } from "constants/animations/routing-animations";

@Component({
  selector: "app-menu-page",
  templateUrl: "./menu-page.component.html",
  styleUrls: ["./menu-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
})
export class MenuPageComponent {
  constructor() {}
}
