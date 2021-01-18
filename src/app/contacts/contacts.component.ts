import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ContactsService} from '../../services/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../../Model/contacts.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
  motCle: any= '';
  cuurentPage: any= 0;
  size: any= 5;
  private pages: Array<number>;
  constructor(public http: Http, public contactservice: ContactsService, public router: Router) { }

  ngOnInit() {

  }

  doSearch() {
    this.contactservice.getContacts(this.motCle, this.cuurentPage, this.size)
      .subscribe( data => {
        this.pageContacts = data;
        this.pages = new Array(data.totalPages);
      }, err => {console.log(err);
      })
  }

  chercher() {
    this.doSearch()
  }
  doGet(i: number) {
    this.cuurentPage = i;
    this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['edit', id]);
  }
  onDeleteContact(c: Contact) {
    const confirm = window.confirm('vous etes sur de supprimer ce contact?')
if (confirm === true) {
  this.contactservice.deleteContact(c.id)
    .subscribe(data => {
      this.pageContacts.content.splice(
        this.pageContacts.content.indexOf(c), 1
      )
    }, err => {
      console.log(err);
    })
}
  }

}
