import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // <-- added for ngModel
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgbModule, FormsModule,RouterModule], // <-- FormsModule added
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class App {
  protected title = 'stand-web';
}

