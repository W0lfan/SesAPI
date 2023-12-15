import { useState } from "react";
import AppButton from "../buttons/visual";
import ReactDOM from "react-dom";
import SetLoader, { SetLoaderStatus } from "../loader";
import '../../../styling/modules/index.css';

function ActualizePopUp(content, buttons) {
  const portalRoot = document.querySelector('.popup-container-dnd');
  portalRoot.classList.add('active');

  const popupContainer = document.createElement('div');
  portalRoot.appendChild(popupContainer);
  

  if (!content.title) console.error('Error: missing a title for the popup module.');
  if (!content.description) console.error('Error: missing a description for the popup module.');
  if (!buttons || buttons.length === 0) console.error('Error: missing proper actions for the popup module.');

  const t = content.title;
  const d = content.description;
  const b = buttons;

  const buttonsContainer = (
    <div className="buttons-container">
      {b.map((button, i) => (
        <AppButton
          key={i}
          type={button.type}
          container={button.container}
          action={() => button.action()} // Call the function here
          custom_properties={button.custom_properties}
        />
      ))}
      <AppButton
        type="blank"
        container={{ text: content.customEndMessage || "Cancel" }}
        action={() => {
          portalRoot.classList.remove('active');
          popupContainer.remove();
          portalRoot.innerHTML = ''
        }}
      />
    </div>
  );

  const body = (
    <div className="popup">
      <div className="informations">
        <div className="title">
          {t}
        </div>
        <div className="description">
          {d}
        </div>
      </div>
      {buttonsContainer}
    </div>
  );

  const portal = ReactDOM.createPortal(body, portalRoot);


  ReactDOM.render(portal, popupContainer);

}

export default ActualizePopUp;
