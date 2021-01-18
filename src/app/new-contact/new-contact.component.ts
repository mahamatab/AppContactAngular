import { Component, OnInit } from '@angular/core';
import {Contact} from '../../Model/contacts.model'
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
mode = 'new';
contact: Contact = new Contact();
  constructor(public contactsService: ContactsService) { }

  ngOnInit() {
  }

  doSave() {
    this.contactsService.saveContact(this.contact)
      .subscribe(data => {
        this.contact = data;
        this.mode = 'confirm'
      }, err => {
        console.log(err);
      })
  }

}
