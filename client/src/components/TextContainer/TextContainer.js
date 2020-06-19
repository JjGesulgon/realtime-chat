import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div className="headerContainer">
      <p className="header">Online <span role="img" aria-label="emoji">💬</span></p>
    </div>
    {
      users
        ? (
          <div>
            <div className="activeContainer">
                <h2 className="listItem">
                    {users.map(({name}) => (
                        <ScrollToBottom key={name}>
                            <div className="activeItem">
                                <img className="imageIcon" alt="Online Icon" src={onlineIcon}/>
                                <div className="userName">
                                    {name}
                                </div>
                            </div>
                        </ScrollToBottom>
                    ))}
                </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;