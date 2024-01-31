import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ECommerceClient';

  constructor(private toastrService:CustomToastrService)
  {
    toastrService.message("hello", "ruken",{
      messageType:ToastrMessageType.Info,
      position:ToastrPosition.TopCenter
    });
    toastrService.message("hello", "ruken",{
      messageType:ToastrMessageType.Error,
      position:ToastrPosition.TopCenter
    });
    toastrService.message("hello", "ruken",{
      messageType:ToastrMessageType.Success,
      position:ToastrPosition.TopCenter
    });
    toastrService.message("hello", "ruken",{
      messageType:ToastrMessageType.Warning,
      position:ToastrPosition.TopCenter
    });
  }
}
