import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
