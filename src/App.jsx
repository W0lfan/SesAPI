import PropTypes from 'prop-types';
import AppButton from '../public/modules/utilities/buttons/visual';

import '../public/styling/root/index.css'
import '../public/styling/modules/index.css'
import MainRendering from './main/index';
import appSvg from '../public/modules/utilities/svg';
import './index.css';
import ActualizePopUp from '../public/modules/utilities/popup';
import { storage } from '../editor/edit/src/storage/access';
import app from '../app';



export const InfoBar = ({active}) => {
  const sectionItems = [
    { n : "Editor" , l : '/'},
    { n : "About" , l : '/SesAPI/about/'},
  ]

  return (
    <div className="info-bar">
      <div className="logotype">
        {appSvg.new('logotype')}
      </div>
      <div className="sections">
        {
          sectionItems.map((e,i) => (
            <div className={"item " +( e.n == active ? 'in' : '')} key={i}
              onClick={() => {
                window.open(e.l,"_self");
              }}
            >
                <div className="text">
                  {e.n}
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
};
InfoBar.PropTypes = {
  active : PropTypes.string.isRequired
}

export const Version = () => {
  const BetaOpen = () => {
    ActualizePopUp(
      {
        title : 'About SesAPI',
        description : 'SesAPI is a tool designed for Starblast players of any type. From pros to starters, write or read articles to improve yourself in any way.\nFor more informations, please join the Discord Server or read the blog post.\nThis tool is experimental and is subject to changes and improvements.',
        customEndMessage : 'Close'
      },
      [
        {
          type  : 'filled',
          container : {text:"Discord Server"},
          action : function() {
            window.open('https://discord.gg/hXsrvCjDmF');
          }
        }, 
        {
          type  : 'filled',
          container : {text:"Blog post"},
          action : function() {
            window.open('');
          }
        }, 
      ]
    )
  }

  return (
    <div className="app-details">
      <div className="app">
        <div className="status">
          {app.details.status}
        </div>
        <div className="version">
          Version {app.details.version}
        </div>
      </div>
      <div className="beta-message">
        <div className="text">
          <p>SesAPI is currently in <a onClick={() => BetaOpen()}>beta</a>.</p>
          <p>Make sure to report any major problems.</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  if (!storage.access()) storage.set({});

  if (!storage.access("SesAPIParameters")) storage.set({
      preferedDisplay : "grid"
  }, "SesAPIParameters" );


  return (
    <>
      <InfoBar active={"Editor"}/>
      <MainRendering />
      <div className="popup-container-dnd"></div>
      <Version />
    </>
  )
}

export default App
