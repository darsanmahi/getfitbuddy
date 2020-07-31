import { AddworkoutPage } from "./../addworkout/addworkout.page";
import { AngularFireAuth } from "@angular/fire/auth";
import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-leg",
  templateUrl: "./leg.page.html",
  styleUrls: ["./leg.page.scss"],
})
export class LegPage implements OnInit {
  itemsRef: AngularFireList<any>;
  data: Observable<any>;

  constructor(
    private db: AngularFireDatabase,
    private ngFireAuth: AngularFireAuth,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        console.log(user.uid);
        this.itemsRef = this.db.list("users/" + user.uid + "/legs");
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
      component: AddworkoutPage,
    });
    await modal.present();
  }
}
