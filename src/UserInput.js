import { useCallback } from "react"

function UserInput(props){
    const updateFilterInput=(e)=>{
        return props.updateFilter(e.target.value)
    }
    return(
        <div className="user-input">
            <h1>Super Sticky Notes</h1>
            <div className="">
                <button className="add-note-btn" onClick={props.addNote}>+ New Note</button>
                <input className="user-input" onChange={updateFilterInput}  type="text" placeholder="Type here to search..." />
            </div>
        </div>
    )
}
export default UserInput