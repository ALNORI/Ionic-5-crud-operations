import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})
export class ProjectDetailsPage implements OnInit {
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
