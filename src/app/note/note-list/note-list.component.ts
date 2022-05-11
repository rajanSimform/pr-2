import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styles: [],
})
export class NoteListComponent implements OnInit, OnDestroy {
  allNotes: Note[];
  noteSubs: Subscription;
  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.noteService.getAllNotes();
    this.noteSubs = this.noteService._noteSubject.subscribe(
      (x) => (this.allNotes = x)
    );
  }

  addNewNote() {
    this.router.navigate(['new-note'], { relativeTo: this.route });
  }

  viewNote(id: number) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }

  deleteNote(id: number) {
    this.noteService.deleteNoteById(id);
  }

  ngOnDestroy(): void {
    this.noteSubs.unsubscribe();
  }
}
