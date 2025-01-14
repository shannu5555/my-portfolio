import './index.css'

const AppItem = props => {
  const {appDetails , onClickAppItem, clickCount} = props
  const {appName, imageUrl} = appDetails 

  return (
    <li className="app-item" onClick={() => onClickAppItem(appDetails.appId)}>
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
      <a href='https://www.cricbuzz.com/'>Clicked: {clickCount} times</a>
    </li>  
  )
}

export default AppItem 