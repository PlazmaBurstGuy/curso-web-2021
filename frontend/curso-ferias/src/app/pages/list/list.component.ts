import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contacts.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  dataSource: Contact[] = [
    { id: 1, name: 'Pedro', contactNumber: '3811' },
  ];

  displayedColumns: string[] = ['id', 'name', 'contactNumber', 'buttons'];

  constructor() {}

  ngOnInit(): void {}

  edit() {
    console.log('edit');
  }

  deleteItem() {
    console.log('delete');
  }

  add() {
    console.log('add');
  }
}
