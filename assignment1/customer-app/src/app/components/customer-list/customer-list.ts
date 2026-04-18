import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../models/customer.model';
import { CustomerDetailsComponent } from '../customer-details/customer-details';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomerDetailsComponent],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css'
})
export class CustomerListComponent implements OnInit {

  allCustomers: Customer[] = [
    { id: 1, name: 'Deepdas Sharma', address: 'Mg Road Delhi', email: 'deepdas@gmail.com', phone: '9876543210', dateOfBirth: '1999-05-14', gender: 'Male' },
    { id: 2, name: 'Deepak Verma', address: 'Raj Nagar Gurugram', email: 'deepak@gmail.com', phone: '9123456780', dateOfBirth: '1998-08-22', gender: 'Male' },
    { id: 3, name: 'Raj Deepak', address: 'Whitefield Pune', email: 'raj@gmail.com', phone: '9988776655', dateOfBirth: '1993-11-01', gender: 'Male' },
    { id: 4, name: 'Anita Singh', address: 'Green Lane Bangalore', email: 'anita@gmail.com', phone: '9871234560', dateOfBirth: '1995-03-17', gender: 'Female' },
    { id: 5, name: 'Priya Singh', address: 'Guru Road Bareily', email: 'priya@gmail.com', phone: '9345678901', dateOfBirth: '2000-07-09', gender: 'Female' },
    { id: 6, name: 'Rahul Mishra', address: 'Kolkata West Bengal', email: 'rahul@gmail.com', phone: '9001234567', dateOfBirth: '2004-01-25', gender: 'Male' },
    { id: 7, name: 'Arjit Utkarsh', address: 'Baliya Bihar', email: 'arjit@gmail.com', phone: '9812345678', dateOfBirth: '2002-06-30', gender: 'Male' },
    { id: 8, name: 'Aditya Thakur', address: 'Kareri Himachal Pradesh', email: 'aditya@gmail.com', phone: '9023456789', dateOfBirth: '2003-09-12', gender: 'Male' },
    { id: 9, name: 'Abhishek Pratap', address: 'OVL Road Lucknow', email: 'abhishek@gmail.com', phone: '9654321098', dateOfBirth: '2003-12-05', gender: 'Male' },
    { id: 10, name: 'Rahul Roy', address: 'Kolkata West Bengal', email: 'rahulroy@gmail.com', phone: '9765432109', dateOfBirth: '2002-04-18', gender: 'Male' },
    { id: 11, name: 'Deependra Singh', address: 'Alambagh Lucknow Uttarpradesh', email: 'deependra@gmail.com', phone: '9456789012', dateOfBirth: '2003-10-07', gender: 'Male' },
    { id: 12, name: 'Atul Kumar', address: 'Chapra Bihar', email: 'atul@gmail.com', phone: '9567890123', dateOfBirth: '2003-02-28', gender: 'Male' },
  ];

  filteredCustomers: Customer[] = [];
  pagedCustomers: Customer[] = [];
  searchText = '';
  currentPage = 1;
  pageSize = 5;

  ngOnInit() {
    this.filteredCustomers = this.allCustomers;
    this.updatePage();
  }

  onSearchChange() {
    this.currentPage = 1;
    if (this.searchText == '') {
      this.filteredCustomers = this.allCustomers;
    } else {
      this.filteredCustomers = this.allCustomers.filter(c =>
        c.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    this.updatePage();
  }

  updatePage() {
    let start = (this.currentPage - 1) * this.pageSize;
    let end = start + this.pageSize;
    this.pagedCustomers = this.filteredCustomers.slice(start, end);
  }

  totalPages() {
    return Math.ceil(this.filteredCustomers.length / this.pageSize);
  }

  goToPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }

  goToNext() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.updatePage();
    }
  }
}