import { Component, NgZone, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { NavController, ToastController } from '@ionic/angular';
import { DetailPage } from '../detail/detail.page';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../data.service';
import { ɵConsole } from '@angular/core';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  [x: string]: any;


  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];
  devices: any[] = [];
  statusMessage: string;

  constructor(private toastCtrl: ToastController,
              private ble: BLE,
              public dataService: DataService,
              private ngZone: NgZone,
              private router: Router,
              public navCtrl: NavController
              /* private screenOrientation: ScreenOrientation */
             ) {


  }
ngOnInit() {
}
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.scan();
  }

  scan() {
    this.setStatus('Scanning for Bluetooth LE Devices');
    this.devices = [];  // clear list

    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
      error => this.scanError(error)
    );

    setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }

  // If location permission is denied, you'll end up here
  async scanError(error) {
    this.setStatus('Error ' + error);
    const toast = this.toastCtrl.create({
      message: 'Error scanning for Bluetooth low energy devices',
      position: 'middle',
      duration: 5000
    });
    (await toast).present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

  deviceSelected(device) {
    // console.log(JSON.stringify(device) + ' selected');
    this.dataService.setParamData(device);
    this.router.navigateByUrl('detail/device');
  }

  // ************************************************



}
