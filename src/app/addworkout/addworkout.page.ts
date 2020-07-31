import { ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-addworkout",
  templateUrl: "./addworkout.page.html",
  styleUrls: ["./addworkout.page.scss"],
})
export class AddworkoutPage implements OnInit {
  constructor(
    private ngFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  addit(part, name, date) {
    if(part.value && name.value && date.value){
      this.ngFireAuth.authState.subscribe((user) => {
        if (user) {
          this.db.database
            .ref("users/" + user.uid + "/" + part.value + "/" + date.value)
            .set({
              Workout: name.value,
            });
          this.modalCtrl.dismiss();
        }
      });
    }
    else{
      alert("Please give valid input!");
    }
  }
}
