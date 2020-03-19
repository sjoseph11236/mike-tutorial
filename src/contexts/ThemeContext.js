import React, { Component, createContext} from 'react'


export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component { 
  constructor() {
    super();

    this.state = { 
      isPurpleTheme: true,
      purple: {},
      dark: {}
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}