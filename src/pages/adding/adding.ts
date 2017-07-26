import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Transaction} from '../../database'; // importo el modelo

/**
 * Generated class for the AddingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html',
})
export class AddingPage {
    model: Transaction;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.model = new Transaction (null,"");
  }


  ionViewDidLoad() {
      
  }

save(){
    this.model.save().then(result =>{
        this.model = new Transaction (null,"");
        this.navCtrl.pop();
    });
}

}
