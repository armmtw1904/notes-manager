import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNotes } from './add-notes/add-notes';
import { Note } from './note/note';
import { NoteService } from './services/note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports:[AddNotes,Note,CommonModule]

})
export class App {
  protected firstName = 'nayana';
  notelist: any;
  constructor(private noteService:NoteService) {
    this.notelist = this.noteService.getNotes();
    
  }
}
