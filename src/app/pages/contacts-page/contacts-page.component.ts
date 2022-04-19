import {
  ChangeDetectionStrategy,
  Component,
} from "@angular/core";
import { slideInAnimation } from "constants/animations/routing-animations";

@Component({
  selector: "app-contacts-page",
  templateUrl: "./contacts-page.component.html",
  styleUrls: ["./contacts-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
})
export class ContactsPageComponent {
  constructor() {}
}
