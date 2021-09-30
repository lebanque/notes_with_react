// replacing props with ({}), obtaining local variable 
function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {
    return <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes With React</h1>
            <button onClick={onAddNote}>
                <strong>Add</strong>
            </button>
        </div>
        <div className="app-sidebar-notes">
            {notes.map((note) => (
                <div
                className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                onClick={() => setActiveNote(note.id)}
              >
                <div className="sidebar-note-title">
                    <strong>{note.title}</strong>
                    <button onClick={() => onDeleteNote(note.id)}> 
                        <strong> Delete </strong>
                    </button>
                </div>

                <p>{note.body && note.body.substr(0,40) + "..."}</p>

                <small className="note-meta">{new Date (note.lastModified).toLocaleDateString("pl-PL",{
                    hour: "2-digit",
                    minute:"2-digit"
                })}</small>
                </div>
                )
            )}
            
        </div>

    </div>
}

export default Sidebar;