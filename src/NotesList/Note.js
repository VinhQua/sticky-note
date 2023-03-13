import { type } from "@testing-library/user-event/dist/type"

function Note(props){
    const updateThisNote=(e)=>{
        const type = e.target.dataset.type;
        console.log(e.target.value)
        return props.updateNote(props.id,type,e.target.value)
    }
    return(
        <div className="note">
            <input value={props.title} onChange={updateThisNote} data-type='title' className="title" placeholder="TITLE"/>
            <textarea value={props.description} onChange={updateThisNote} data-type='description' className="description" placeholder="Description..."/>
            <span onClick={()=> props.deleteNote(props.id)} className="delete-note">x</span>
        </div>
    )
}
export default Note