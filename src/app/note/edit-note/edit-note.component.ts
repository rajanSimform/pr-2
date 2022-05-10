import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styles: [],
})
export class EditNoteComponent implements OnInit {
  selectedItem: Note;
  selectedId: number;
  editNoteForm: FormGroup;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.params['id'];
    this.selectedItem = this.noteService.getNoteById(this.selectedId);
    this.editNoteForm = this.fb.group({
      noteTitle: [this.selectedItem.title, [Validators.required]],
      noteDesc: [this.selectedItem.desc, [Validators.required]],
    });
  }

  onUpdate() {
    this.selectedItem.title = this.editNoteForm.value.noteTitle;
    this.selectedItem.desc = this.editNoteForm.value.noteDesc;
    this.noteService.updateNoteById(this.selectedId, this.selectedItem);
    alert('Product Updated Successfully');
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  backToPreviousBtn() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
