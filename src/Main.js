// replacing props with ({}), obtaining local variable 
function  Main ({activeNote, onUpdateNote}) {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value, 
            lastModified: Date.now(),
        })
    };

    if(!activeNote) return <div className="no-active-note">There is no selected note</div>

    return <div className="app-main">
        <div className="app-main-note-edit">
            <input
             type="text"
             id="title" 
             value={activeNote.title}
             onChange={(e) => onEditField("title", e.target.value)} 
             autoFocus 
            />
            <textarea
             id="body"
             value={activeNote.body}
             onChange={(e) => onEditField("body", e.target.value)} 
             placeholder="Input your note here!" 
            />
        </div>
        
    </div>
}

export default Main;
