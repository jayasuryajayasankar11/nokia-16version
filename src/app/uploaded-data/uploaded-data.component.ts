import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploaded-data',
  templateUrl: './uploaded-data.component.html',
  styleUrls: ['./uploaded-data.component.css']
})
export class UploadedDataComponent implements OnInit {
  @Input() data: any[] = [];

  constructor() { }

  ngOnInit(): void { }
}
