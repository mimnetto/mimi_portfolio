import React from 'react';
import Fade from 'react-reveal/Fade';
import {AiOutlineCaretRight} from "react-icons/ai";


class Projects extends React.Component {
  render() {
    return (
      <div className="left">
          <Fade right="right">
            <div className="skillL">
              <p className="Icon">
                <AiOutlineCaretRight/>
              </p>
              <h1 className="head">
              Projects &nbsp;&nbsp;&nbsp;&nbsp;
            </h1>
            </div>
          </Fade>
    </div>);
  }
}

export default Projects
