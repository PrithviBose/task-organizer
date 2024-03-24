import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-add-task',
  standalone: true,
  providers:[provideNativeDateAdapter()],
  imports: [MatSelectModule,MatIconModule,MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,MatInputModule,MatFormFieldModule,MatDatepickerModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  constructor(public dialogRef: MatDialogRef<AddTaskComponent>) {}
}
