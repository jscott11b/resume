import { DefaultTheme } from "styled-components";

const MAIN_COLOR = "rgb(128,0,0)";
const SECONDARY_COLOR = "#8d8d8d";

export const themes: DefaultTheme[] = [
  {
    isWebLayout: true,
    mainColor: "black",
    buttonColor: "rgb(80,0,0)",
    backgroundColor: "white",
    fillColor: "white",
    headerColor: "white",
    nameTextAlign: "center",
    headerBackgroundColor: MAIN_COLOR,
    contextBackgroundMenuColor: "rgb(110,0,0)",
    sectionHeadingColor: MAIN_COLOR,
    locationColor: SECONDARY_COLOR,
    dateColor: MAIN_COLOR,
    techBackgroundColor: MAIN_COLOR,
    techColor: "white"
  },
  {
    isWebLayout: false,
    mainColor: "black",
    buttonColor: "rgb(150,150,150)",
    backgroundColor: "rgb(150,150,150)",
    fillColor: "white",
    headerColor: "black",
    headerBackgroundColor: "white",
    nameTextAlign: "left",
    contextBackgroundMenuColor: "white",
    sectionHeadingColor: "black",
    locationColor: "black",
    dateColor: "black",
    techBackgroundColor: "white",
    techColor: "black"
  }
];