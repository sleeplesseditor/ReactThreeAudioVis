import React from 'react';

const Visualiser = () => {
  return (
    <div id="content">
      <label for="thefile" class="file"> Choose an audio file
        <input type="file" id="thefile" accept="audio/*" />
      </label>

      <audio id="audio" controls></audio>
      <div id="out"></div>
    </div>
  )
}

export default Visualiser;