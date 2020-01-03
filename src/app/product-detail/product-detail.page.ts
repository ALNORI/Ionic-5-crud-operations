import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  currentProject: Project;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    if(value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  };
  constructor() { }

  ngOnInit() {
  }

}
