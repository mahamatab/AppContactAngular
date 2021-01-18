import { Component, OnInit } from '@angular/core';
import {Contact} from '../../Model/contacts.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode: Number= 1;
  contact: Contact = new Contact();
  idContact: number;
  constructor(public activitedRoute: ActivatedRoute, public contactsService: ContactsService, public router: Router) {
    this.idContact = activitedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.contactsService.getContact(this.idContact)
      .subscribe(data => {
        this.contact = data;
      }, err => {console.log(err);
      })
  }
  updateContact() {
    this.mode = 2;
    this.contactsService.updateContact(this.contact)
      .subscribe(data => {
        console.log('data');
        alert('Mise à jour effectuée');
        this.router.navigate(['contacts']);
      }, err => {
        console.log(err);
        alert('alerte erreur') });
  }

}
