import Dexie from 'dexie';
//Archivo para manejar la DB
export class TransactionAppDB extends Dexie {
  /*En esta linea declaro mi tabla vacia le paso la interfaz que va a usar
  y el tipo de dato de su pimary key*/
  transactions : Dexie.Table<ITransaction,number>;
  //LA base de datos se crea en el constructor
  constructor(){
    //super manda llamar el mismo metodo que hereda como parent in PHP
    super("MoneyMapAppDB");
    // dentro de stores se declaran las tablas de la DB
    //++id quiere decir que el valor es autoincremental
    this.version(1).stores({
      transactions: '++id,amount,lat,lng,title,imageURL'
    });
    this.transactions.mapToClass(Transaction);//mapeo de la tabla con el modelo
  }

}
export interface ICategory {

}
export interface    ITransaction {
    id?:number;//EEl signo ? quiere decir que el valor puede ser null
    amount: number;
    lat:number;
    lng:number;
    title:string;
    imageUrl:string;
}

//implementamos la interfaz dentro de esta clase pero para eso
//necesite declarar todos los attr de la interfaz en la clase
export class Transaction implements ITransaction {
  id?:number;
  amount: number;
  lat:number;
  lng:number;
  title:string;
  imageUrl:string;

  constructor(amount:number,title:string , lat?:number,lng?:number,
              id?:number,imageUrl?:string){
                // esto es como el getter del modelo
      this.amount = amount;
      this.title = title;
      if (lat) this.lat = lat;
      if (lng) this.lng = lng;
      if (imageUrl) this.imageUrl = imageUrl;
      if (id) this.id = id;

  }
  save(){
    //agregamos un item al modelo
    return db.transactions.add(this);
  }
  static all(){
      // este metodo me traera todas las transacciones
      //regresara un promise
      return db.transactions.orderBy("id").reverse().toArray();
  }
}

export let db = new TransactionAppDB();
