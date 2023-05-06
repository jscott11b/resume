// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    isWebLayout: boolean,
    mainColor: string,
    buttonColor: string,
    backgroundColor: string,
    fillColor: string,
    headerColor: string,
    headerBackgroundColor: string,
    nameTextAlign: string,
    contextBackgroundMenuColor: string,
    sectionHeadingColor: string,
    locationColor: string,
    dateColor: string,
    techBackgroundColor: string,
    techColor: string
  }
}