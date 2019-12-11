import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../model/item.model';
import * as firebase from 'firebase';

@Injectable()
export class BooksService {

  items: Item[] = [];
  itemSubject = new Subject<Item[]>();

  emitItems() {
    this.itemSubject.next(this.items);
  }

  saveItems() {
    firebase.database().ref('/items').set(this.items);
  }

  getItems() {
    firebase.database().ref('/items')
      .on('value', (data) => {
        this.items = data.val() ? data.val() : [];
        this.emitItems();
      }
      );
  }

  getSingleItem(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/items/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewBook(newItem: Item) {
    this.items.push(newItem);
    this.saveItems();
    this.emitItems();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const fileName = 'images/' + almostUniqueFileName + file.name;
        const upload = firebase.storage().ref()
          .child(fileName).put(file);
          console.log('file upload name : ' + fileName);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }

  removeBook(item: Item) {
    if (item.photo) {
      const storageRef = firebase.storage().refFromURL(item.photo);
      storageRef.delete().then(
        () => {
          console.log('Photo removed!');
        },
        (error) => {
          console.log('Could not remove photo! : ' + error);
        }
      );
    }
    const itemIndexToRemove = this.items.findIndex(
      (itemEl) => {
        if (itemEl === item) {
          return true;
        }
      }
    );
    this.items.splice(itemIndexToRemove, 1);
    this.saveItems();
    this.emitItems();
  }

}