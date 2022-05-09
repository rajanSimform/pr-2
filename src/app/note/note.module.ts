import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteComponent } from './note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

const noteRoutes: Routes = [
  {
    path: 'notes',
    component: NoteComponent,
    children: [
      { path: 'new-note', component: CreateNoteComponent },
      { path: '', component: NoteListComponent },
      { path: ':id', component: EditNoteComponent },
    ],
  },
];

@NgModule({
  declarations: [
    CreateNoteComponent,
    NoteComponent,
    NoteListComponent,
    EditNoteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(noteRoutes),
  ],
  exports: [NoteComponent],
})
export class NoteModule {}
