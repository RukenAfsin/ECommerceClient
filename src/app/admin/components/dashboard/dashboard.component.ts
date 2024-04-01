import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';
import { SignalRService } from '../../../services/common/signalr.service';
import { ReceiveFunctions } from '../../../constants/receive-functions';
import { HubUrls } from '../../../constants/hub-urls';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private alertify:AlertifyService,private signalRService:SignalRService) {
    signalRService.start(HubUrls.ProductHub)
  } 

ngOnInit():void{
  this.signalRService.on(ReceiveFunctions.ProductAddedMessageReceiveFunction,message=>{
    this.alertify.message(message,{
      messageType:MessageType.Notify,
      position:Position.TopRight
    })
  })

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
