import { ChangeDetectionStrategy, Component } from "@angular/core";
import { slideInAnimation } from "app/constants/animations/routing-animations";

@Component({
  selector: "app-team-page",
  templateUrl: "./team-page.component.html",
  styleUrls: ["./team-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
})
export class TeamPageComponent {
  constructor() {}
}
