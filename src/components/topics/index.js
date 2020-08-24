import React from 'react';

const Topic = (props) => {
  return(
    <div>
      <form>
        <label>
          Choose your topic
          <select>
            <option value='science'>Science and Nature</option>
            <option value='sports'>Sports</option>
            <option value='geo'>Geography</option>
            <option value='history'>History</option>
            <option value='art'>Art</option>
            <option value='celebrities'>Celebrities</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default Topic;