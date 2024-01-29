import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private alertify:AlertifyService) {
  }
   
  m()
  {
    this.alertify.message("merhaba", {
      messageType:MessageType.Success,
      delay:5,
      position:Position.TopRight
    })
  }


  d()
  {
    this.alertify.dismiss()
  }
}
