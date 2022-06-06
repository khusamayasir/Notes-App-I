import React from "react"
import "./Sidebar.css"

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => [])
  return (
    <section className="pane sidebar">
        <div className="sidebar--header">
            <h3>Notes</h3>
            <button className="new-note">+</button>
        </div>
    </section>
  )
}
