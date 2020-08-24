import React from 'react';

const Level = (props) => {
  return(
    <div>
      <form>
        <label>
          Choose the difficulty: 
          <select>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default Level;