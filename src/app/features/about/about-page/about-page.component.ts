import { Component } from '@angular/core';
import { PushNotificationService } from 'src/app/core/services/push-notification.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  constructor(public notification : PushNotificationService) {
  }
}
