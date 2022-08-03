import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor() {
  }

  notify(message: string) {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      let notification = new Notification(message);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          let notification = new Notification(message);
        }
      });
    }
  }

  checkNotificationPromise(): boolean {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {

      return true;
    }
    else if (Notification.permission !== "denied") {
      return false;
    }
    return false;
  }




  askNotificationPermission() {
    console.log(Notification.permission);
    if (Notification.permission === 'denied' || Notification.permission === 'default') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        console.log(permission);
        var notification = new Notification("Hi there!");

        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
    else {
      let notification = new Notification("The notification is activated");

    }

  }

  askNotificationPermissionIOS() {
    // Ensure that the user can receive Safari Push Notifications.
    if ('safari' in window && 'pushNotification' in window.safari) {
      var permissionData = window.safari.pushNotification.permission('web.com.example.domain');
      this.checkPermissionIOS(permissionData);
    }
  };

  checkPermissionIOS(permissionData: { permission: string; }) {
    if (permissionData.permission === 'default') {
      // This is a new web service URL and its validity is unknown.
      window.safari.pushNotification.requestPermission(
        'https://domain.example.com',
        'web.com.example.domain',
        {},
        this.checkPermissionIOS // The callback function.
      );
    }
    else if (permissionData.permission === 'denied') {
      // The user said no.
    }
    else if (permissionData.permission === 'granted') {
      // The web service URL is a valid push provider, and the user said yes.
      // permissionData.deviceToken is now available to use.
      var notification = new Notification("Hi there!");

    }
  }



}
