import { ChangeDetectionStrategy, Component } from "@angular/core";
import { slideInAnimation } from "constants/animations/routing-animations";

@Component({
  selector: "app-orders-page",
  templateUrl: "./orders-page.component.html",
  styleUrls: ["./orders-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
})
export class OrdersPageComponent {
  constructor() {}
}
