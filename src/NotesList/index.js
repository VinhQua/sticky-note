import Note from "./Note"

function NotesList(props){
    const filterText = props.inputValue.toLowerCase() ;
    const notes = props.notes.map(note => {
      if (note.title.toLowerCase().includes(filterText) || note.description.toLowerCase().includes(filterText ) ){
        return <Note deleteNote={props.deleteNote} updateNote={props.updateNote} id={note.id} key={note.id} title={note.title} description={note.description} />
      }
    })
    return(
        <div className="note-list">{notes}</div>
    )
}
export default NotesList