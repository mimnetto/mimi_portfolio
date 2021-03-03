import React from 'react';
import Fade from 'react-reveal/Fade';


class Profile extends React.Component {
  render() {
    return (
      <div className="drop">
        <Fade bottom>
          <h1>Profile</h1>
        </Fade>
        <Fade left>
        <p>React Reveal</p>
        </Fade>

      </div>
    );
  }
}

export default Profile
