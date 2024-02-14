import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {TabsPageRoutingModule} from "./tabs/tabs-routing.module";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonicModule],
  standalone: true
})
export class AppComponent {
  constructor() {}
}
