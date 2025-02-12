import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ARLauncherPage } from '../ar-launcher/ar-launcher.page';
// import RouterOutlet from 'ion-router-outlet';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Tab3Page {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async openAR() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: ARLauncherPage,
      swipeToClose: true,
      // presentingElement: this.routerOutlet.nativeEl,
    });

    return await modal.present();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
