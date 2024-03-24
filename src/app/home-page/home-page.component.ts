import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  MatDialog,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {AddTaskComponent} from '../add-task/add-task.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(public dialog: MatDialog) {}
  data = {
    todo: {
      title: '',
      desc: '',
      dueDate: '',
      ticketNo: '',
      status: '',
    },
    inProgress: {
      title: '',
      desc: '',
      dueDate: '',
      ticketNo: '',
      status: '',
    },
    done: {
      title: '',
      desc: '',
      dueDate: '',
      ticketNo: '',
      status: '',
    },
    inQA: {
      title: '',
      desc: '',
      dueDate: '',
      ticketNo: '',
      status: '',
    },
    readyForQA: {
      title: '',
      desc: '',
      dueDate: '',
      ticketNo: '',
      status: '',
    },
  };
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  inProgress = ['Angular', 'css'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  inQA = ['test'];

  readyForQA = ['test'];

  modules = ['To do', 'In progress', 'Ready for QA', 'In QA', 'Done'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AddTaskComponent, {
      width: '1000px',
      height: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
