import React from 'react';

function ResourceNotepad({ handleResourceClose }) {
  const saveNote = async () => {
    // post request include noteID???
    handleResourceClose();
  };
  return (
    <div className="resourceNotepad">
      { /** title is needed for post/get */}
      <button type="submit" value="X" onClick={saveNote}>X</button>
      <textarea>
        {' '}
        {/** pass data request from server */ }
      </textarea>
      <button id="saveResource" type="submit" onClick={saveNote}>Save</button>
    </div>
  );
}

export default ResourceNotepad;
