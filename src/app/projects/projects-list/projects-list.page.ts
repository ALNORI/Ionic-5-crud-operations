import { Component, OnInit , EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.page.html',
  styleUrls: ['./projects-list.page.scss'],
})
export class ProjectsListPage implements OnInit {

  @Input() projects: Project[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  ngOnInit() {
    
  }
}

