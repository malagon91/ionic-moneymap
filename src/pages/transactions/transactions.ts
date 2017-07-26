import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Transaction} from '../../database';
import {AddingPage} from '../adding/adding'
/**
 * Generated class for the TransactionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  title :string = "Movimientos" ;
  transactions : any;
  addingPage = AddingPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
  /*  let transaction = new Transaction(20,"first");
    transaction.save();*/ //solo se uso para probar la DB
     this.loadTransactions(); 
  }
loadTransactions(){
    Transaction.all()
                .then((result) => 
                      {
                        this.transactions = result;
                        
                      });
}

}
