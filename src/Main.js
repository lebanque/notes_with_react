function  Major () {
    return <div className="app-master">
        <div className="app-major-note-edit">
            <input type="text" id="title" autoFocus />
            <textarea id="body" placeholder="alakhazam!" />
        </div>
        <div className="app-major-note-preview">
            <h1 className="preview-title">Title</h1>
            <div className="markdown-preview">note preview</div>

        </div>
    </div>
}

export default Major;
