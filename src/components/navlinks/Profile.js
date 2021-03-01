import React, { useState } from 'react';
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import useMeasure from "./useMeasure";


function Profile(props) {
  const [isOpen, setOpen] = useState(false)
  const [bind, { height }] = useMeasure()
  const transitions = useTransition(isOpen, null, {
    from: { height: '0rem', opacity: 0 },
    enter: { height: '5rem', opacity: 1, overflowY: 'scroll' },
    leave: { height: '0rem', opacity: 0 }
  })

  return (
    <div className = "drop">
    <dl aria-expanded={isOpen} aria-controls="accordion">
      <dt>
        <button onClick={() => setOpen(!isOpen)} type="button" id="accordion">
          Profile
        </button>
        <br />
      </dt>
      <dd {...bind}>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                Full-Stack web developer with hands-on experience in developing and designing user interfaces and applications while incorporating a wide range of technologies and programming languages. Seeking for the opportunity to utilize my technical skills to seek out development solutions and strategies through innovative methods and technologies.
              </animated.div>
            )
        )}
      </dd>
    </dl>
    </div>
  )
}

export default Profile
