import React from "react"
import "./style.css"

export default function App() {
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
