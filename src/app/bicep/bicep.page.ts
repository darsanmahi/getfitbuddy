import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireList, AngularFireDatabase } from "@angular/fire/database";
import { AddworkoutPage } from "./../addworkout/addworkout.page";
import { ModalController } from "@ionic/angular";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-bicep",
  templateUrl: "./bicep.page.html",
  styleUrls: ["./bicep.page.scss"],
})
export class BicepPage implements OnInit {
  itemsRef: AngularFireList<any>;
  data: Observable<any>;
  constructor(
    private modalCtrl: ModalController,
    private ngFireAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {}

  ngOnInit() {this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        console.log(user.uid);
        this.itemsRef = this.db.list("users/" + user.uid + "/bicep");
        this.data = this.itemsRef
          .snapshotChanges()
          .pipe(
            map((changes) =>
              changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
            )
          );
        this.data.forEach((element) => {
          console.log(element);
        });
      }
    });
  }

  async addWorkout() {
    const modal = await this.modalCtrl.create({
      component: AddworkoutPage
    });
    await modal.present();
  }
}
