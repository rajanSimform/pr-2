import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [
    new Note('Today News', 'Ipl won by me', new Date()),
    new Note('Latest News', 'Jinpin died', new Date()),
    new Note('Game News', 'Fade is op agent', new Date()),
    new Note('Task', 'complete pr-2', new Date()),
    new Note('Hello', 'drink water', new Date()),
  ];
  constructor() {}

  getAllNotes() {
    return this.notes;
  }

  addNewNote(note: Note) {
    this.notes.push(note);
  }

  getNoteById(id: number) {
    return this.notes[id - 1];
  }

  deleteNoteById(id: number) {
    this.notes.splice(id - 1, 1);
  }

  updateNoteById(id: number, updatedNote: Note) {
    this.notes[id - 1] = updatedNote;
  }
}
