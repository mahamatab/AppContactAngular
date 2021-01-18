import { Component, OnInit } from '@angular/core';
import {Contact} from '../../Model/contacts.model';
import {Http} from '@angular/http';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {
  contact: Contact = new Contact();
  constructor(public http: Http, public contactservice: ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm) {
    console.log(dataForm);
  }

}
