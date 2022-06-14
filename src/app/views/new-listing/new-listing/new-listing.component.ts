import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.scss']
})
export class NewListingComponent implements OnInit {

  constructor(private fireStorage:AngularFireStorage) { }

  path:string = ''
  fileName: string = ''
 
  ngOnInit(): void {
    
  }

  upload($event: any) {
    this.path = $event.target.files[0]
    this.fileName = $event.target.files[0].name
  }
  uploadImage() {
    console.log(this.path)
    this.fireStorage.upload("/files"+ Math.random() + this.fileName, this.path)
  }
}
