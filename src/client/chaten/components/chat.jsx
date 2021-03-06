import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FormInput from './FormInput';
import SheetButton from './SheetButton';

// This is a wrapper for google.script.run that lets us use promises.
import server from '../../utils/server';
import * as test from '../util/chat'
//require("./chateng.js")
const { serverFunctions } = server;
//test.alt()
const Chat = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    // Call a server global function here and handle the response with .then() and .catch()
    serverFunctions
      .getSheetsData()
      .then(setNames)
      .catch(alert);
  }, []);

  const deleteSheet = sheetIndex => {
    serverFunctions
      .deleteSheet(sheetIndex)
      .then(setNames)
      .catch(alert);
  };

  const setActiveSheet = sheetName => {
    serverFunctions
      .setActiveSheet(sheetName)
      .then(setNames)
      .catch(alert);
  };

  // You can also use async/await notation for server calls with our server wrapper.
  // (This does the same thing as .then().catch() in the above handlers.)
  const submitNewSheet = async newSheetName => {
    try {
      const response = await serverFunctions.addSheet(newSheetName);
      setNames(response);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    }
  };

  return (
	<div class="chat-ui-canvas">
		<div id="header" class="header header-scrolled">
			<div class="top-icons">
				<div class="back-arrow">
					<div class="back-arrow-line back-arrow-line-1"></div>
					<div class="back-arrow-line back-arrow-line-2"></div>
					<div class="back-arrow-line back-arrow-line-3"></div>
				</div>
				<div class="phone-icon">
					<img src="https://i.imgur.com/4OTkocV.png" height="50%"/>
				</div>
			</div>
			<div class="user-header-image"></div>
			<div class="user-name-header">
				<h1>Kenichi miyata</h1>
			</div>
		</div>
		<div id="message-feed" class="message-feed message-feed-unscrolled">
			<div class="message message-from">
				<div class="message-name">
					<h1>???????????????</h1>
				</div>
				<div class="message-body">
					<p>
						CHROME ?????????????????????????????????????????????.
					</p>
				</div>
				<div class="message-timestamp">
					<p>Today 10:02</p>
				</div>
			</div>
			<div class="message message-to">
				<div class="message-name">
					<h1>You</h1>
				</div>
				<div class="message-body">
					<p>
						??????????????????BPMCHAT????????????????????????????????????????????????????????????????????????.wwwwwwwww
					</p>
				</div>
				<div class="message-timestamp">
					<p>Today 10:14</p>
				</div>
			</div>
			<div class="message message-from">
				<div class="message-name">
					<h1>BPMCHAT</h1>
				</div>
				<div class="message-body">
					<p>
						????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
					</p><a href="https://bpmchat.com" target="_blunk">BPMCHAT??????</a>
				</div>
				<div class="message-timestamp">
					<p>Today 10:20</p>
				</div>
			</div>
		</div>
		<div class="message-input-bar">
			<div id="media-expand-arrow" class="media-expand-arrow">
				<div class="media-expand-arrow-line media-expand-arrow-line-1"></div>
				<div class="media-expand-arrow-line media-expand-arrow-line-2"></div>
				<div class="media-expand-arrow-line media-expand-arrow-line-3"></div>
			</div>
			<div class="message-text-input">
				<form class="message-send">
					<textarea id="message-input" placeholder="?????????Message..." value=""></textarea>
					<textarea id="status" placeholder="Message..." value=""></textarea>

				</form>
			</div>
		</div>
		<div id="media-bar" class="media-bar">
			<div class="media-bar-header">
				<div class="media-bar-title">
					<h1>Media</h1>
				</div>
				<div id="media-bar-cross" class="media-close">
					<div class="media-close-line media-close-line-1"></div>
					<div class="media-close-line media-close-line-2"></div>
				</div>
			</div>
			<div class="media-bar-body">
				<div class="media-buttons-canvas">
					<div class="media-button media-video">
						<img src="https://imgur.com/x9NDjYV.png"/>
					</div>
					<div class="media-button media-image">
						<img src="https://imgur.com/0Sw4F6i.png"/>
					</div>
					<div class="media-button media-audio">
						<img src="https://imgur.com/2KlzOiN.png"/>
					</div>
					<div class="media-button media-location">
						<img src="https://imgur.com/OvqVDk5.png"/>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default Chat;
