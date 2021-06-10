import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-firelist',
  templateUrl: './firelist.component.html',
  styleUrls: ['./firelist.component.css']
})
export class FirelistComponent implements OnInit {

  //manipulando string 
  text: string;

  //objetos 

  //lista
  listRef: AngularFireList<any>;
  list: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.listRef = db.list('list');
    this.list = this.listRef.snapshotChanges().pipe(
      //sempre que houver alteração na lista do firebase, o map é chamado
      // map mapeia todas as alterações
      // chave necesssária
      map(changes =>
        changes.map(c =>({key: c.payload.key, ...c.payload.val()}))
      )
    );
   }

  ngOnInit() {
  }

  //adicionar item
  addItem(){
    this.listRef.push(
    {
      //gravando conteudo do input na lista
      text: this.text
    }
    );
    //limpa campo
    this.text = null;
  }

  //remover item
  deleteItem(key: string){
    this.listRef.remove(key);
  }
  

}