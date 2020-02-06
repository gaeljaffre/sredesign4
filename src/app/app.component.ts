import { Component } from '@angular/core';

import { appliName } from './config-bd';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  appliName = appliName;

}
