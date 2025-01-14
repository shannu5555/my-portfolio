import './index.css'

const AppWebItem = props => {
  const { appDetails } = props
  const { appName, imageUrl, url } = appDetails 

  return (
    <li className="app-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">View Website</a>
    </li>  
  )
}

export default AppWebItem;
