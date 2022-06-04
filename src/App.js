import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import "./style.css"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
  const [notes, setNotes] = React.useState([])
  const [currentNoteId, setCurrentNoteId] = React.useState(
      (notes[0] && notes[0].id) || ""
  )

  function createNewNote() {
    const newNote = {
        id: nanoid(),
        body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }

  function updateNote(text) {
    setNotes(oldNotes => oldNotes.map(oldNote => {
        return oldNote.id === currentNoteId
            ? { ...oldNote, body: text }
            : oldNote
    }))
  }

  function findCurrentNote() {
    return notes.find(note => {
        return note.id === currentNoteId
    }) || notes[0]
  }

  return (
    <main>
      <div className="no-notes">
        <h1>You have no notes</h1>
        <button
        className="first-note">
          Create one now
        </button>
      </div>
    </main>
  )
}
