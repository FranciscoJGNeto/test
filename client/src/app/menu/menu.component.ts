import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {ServiceService} from './service.service';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public modalRef: BsModalRef;

  private nome = this.nome;
  private raca = this.modalRef;

  constructor(private modalService: BsModalService, private service: ServiceService) { }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.service.post(null, null).subscribe((res) => {
      
    });
  }

}
