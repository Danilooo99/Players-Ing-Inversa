import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-create',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.scss']
})
export class ButtonCreateComponent implements OnInit {

  @Input() value!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
