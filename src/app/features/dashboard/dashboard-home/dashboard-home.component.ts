import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  currentUser: any;

  constructor(private notificationService: NotificationService,
    private titleService: Title,
    private logger: NGXLogger) {
  }
  options: AnimationOptions = {
    path: '/assets/animations/blockchain.json',
  };

  animationCreated(animationItem: AnimationItem): void {
  }
  ngOnInit() {
    this.titleService.setTitle('blockcore dapp - Dashboard');
    this.logger.log('Dashboard loaded');
  }
}
