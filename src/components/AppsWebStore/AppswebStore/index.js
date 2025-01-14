import { Component } from 'react'

import AppWebItem from '../AppWebItem'
import AppWebTabItem from '../AppWebTabItem'

import './index.css'

const SEARCH_ICON_URL =
  'https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png'

const tabsList = [
  { tabId: 'SOCIAL', displayText: 'Social' },
  { tabId: 'GAMES', displayText: 'Games' },
  { tabId: 'NEWS', displayText: 'News' },
  { tabId: 'FOOD', displayText: 'Food' },
]

const appsList = [
  {
    appId: 0,
    appName: 'ExpenseTracker',
    imageUrl:
      'https://res.cloudinary.com/dth5uiebz/image/upload/v1722953736/expenseTraker_mwtoo3.png',
    category: 'SOCIAL',
    url: 'https://roombill.ccbp.tech/', // Add URL here
  },
  {
    appId: 1,
    appName: 'Basic IPL 2023',
    imageUrl:
      'https://res.cloudinary.com/dth5uiebz/image/upload/v1722953735/expenseTraker_1_vfmnch.png',
    category: 'SOCIAL',
    url: 'https://crcwebwsbar.ccbp.tech/', // Add URL here
  },
  {
    appId: 2,
    appName: 'Food Munch',
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png',
    category: 'SOCIAL',
    url: 'https://fm12.ccbp.tech/', // Add URL here
  },
  {
    appId: 3,
    appName: 'Calculator',
    imageUrl:
      'https://res.cloudinary.com/dth5uiebz/image/upload/v1722953737/expenseTraker_2_knvwhe.png',
    category: 'SOCIAL',
    url: 'https://calculator05.ccbp.tech/', // Add URL here
  },
  {
    appId: 5,
    appName: 'Portfolio',
    imageUrl:
      'https://res.cloudinary.com/dth5uiebz/image/upload/v1722956284/expenseTraker_3_ezotct.png',
    category: 'SOCIAL',
    url: 'https://sagirshaikp2.ccbp.tech/', // Add URL here
  },
  {
    appId: 4,
    appName: 'Wiki Search',
    imageUrl:
      'https://nkb-backend-otg-media-static.s3.ap-south-1.amazonaws.com/ccbp-dynamic-webapps/wiki-logo-img.png',
    category: 'SOCIAL',
    url: 'https://wikisearch22s.ccbp.tech/', // Add URL here
  },
  {
    appId: 6,
    appName: 'Todos List',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Todos_partido.png',
    category: 'SOCIAL',
    url: 'https://todolistss.ccbp.tech', // Add URL here
  },
  {
    appId: 7,
    appName: 'Sliding Form',
    imageUrl:
      'https://e7.pngegg.com/pngimages/709/627/png-clipart-google-docs-form-google-purple-violet-thumbnail.png',
    category: 'SOCIAL',
    url: 'https://slidingform.ccbp.tech', // Add URL here
  },
  {
    appId: 8,
    appName: 'Wiki Search',
    imageUrl:
      'https://nkb-backend-otg-media-static.s3.ap-south-1.amazonaws.com/ccbp-dynamic-webapps/wiki-logo-img.png',
    category: 'SOCIAL',
    url: 'https://wikisearch22s.ccbp.tech/', // Add URL here
  },
  {
    appId: 9,
    appName: 'Wiki Search',
    imageUrl:
      'https://nkb-backend-otg-media-static.s3.ap-south-1.amazonaws.com/ccbp-dynamic-webapps/wiki-logo-img.png',
    category: 'SOCIAL',
    url: 'https://wikisearch22s.ccbp.tech/', // Add URL here
  },
  
]

class AppsWebStore extends Component {
  state = {
    searchInput: '',
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabId => {
    this.setState({ activeTabId: tabId })
  }

  onChangeSearchInput = event => {
    this.setState({ searchInput: event.target.value })
  }

  getActiveTabApps = searchedApps => {
    const { activeTabId } = this.state
    const filteredApps = searchedApps.filter(
      eachSearchedApp => eachSearchedApp.category === activeTabId,
    )

    return filteredApps
  }

  getSearchResults = () => {
    const { searchInput } = this.state
    const searchResults = appsList.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const { searchInput, activeTabId } = this.state
    const searchResults = this.getSearchResults()
    const filteredApps = this.getActiveTabApps(searchResults)

    return (
      <div className="app-store-container">
        <div className="app-store">
          <h1 className="heading">App Store</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src={SEARCH_ICON_URL}
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <AppWebTabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                clickTabItem={this.clickTabItem}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
          <ul className="apps-list">
            {filteredApps.map(eachApp => (
              <AppWebItem
                key={eachApp.appId}
                appDetails={eachApp}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default AppsWebStore
