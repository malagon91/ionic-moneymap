import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Transaction} from '../../database'; // importo el modelo
import { GeolocationServiceProvider } from '../../providers/geolocation-service/geolocation-service';

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
    showGeolocate: boolean = false;
    /**
     * Esta bandera la declaro porque cuando se activa la
     * localizacion tarda un momento en traer las coords
     * y como lo guarda instantaneamente no guarda esos datos
     * de esta forma podemos asignar cuando esos datos ya
     * tengamos y enviar ahora si toda la info
     */
    shouldSend:boolean= true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public geolocator: GeolocationServiceProvider ) {
                 this.model = new Transaction (null,"");


              }


  ionViewDidLoad() {


  }

save(){
   if(this.shouldSend){
    this.model.save().then(result =>{
        this.model = new Transaction (null,"");
        this.navCtrl.pop();
    });
   }
}
getLocation(){
    if(this.showGeolocate){
        this.shouldSend= false;
        this.geolocator.get().then((result) =>{
            this.shouldSend= true;
            this.model.setCoords(result.coords);

        }).catch((err)=> console.log(err));
    }else{
        //TO DO
        this.model.clearCoords();

    }
}

}
