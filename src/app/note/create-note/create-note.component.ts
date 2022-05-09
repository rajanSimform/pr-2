import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styles: [],
})
export class CreateNoteComponent implements OnInit {
  addNoteForm: FormGroup;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addNoteForm = new FormGroup({
      noteTitle: new FormControl(null, Validators.required),
      noteDesc: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    const title = this.addNoteForm.value.noteTitle;
    const desc = this.addNoteForm.value.noteDesc;

    const newNote = new Note(title, desc, new Date());

    this.noteService.addNewNote(newNote);
    console.log(this.noteService.getAllNotes());
    this.onReset();
  }

  onReset() {
    this.addNoteForm.reset();
  }

  backToPreviousBtn() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
