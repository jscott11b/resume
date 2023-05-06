import styled, { css } from "styled-components";

const MOBILE_DEVICE_BOUNDARY = "640px";
const MAX_WIDTH = "1600px";

const Main = styled.main.attrs(({
  id: "resume"
}))`
  display: grid;
  align-content: center;
  color: ${props=>props.theme.mainColor};

  grid-template-areas:
    "header header header"
    ". summary ."
    ". contact ."
    ". employment ."
    ". education ."
    ". skills ."
    ". footer .";

  ${props => {
    if(props.theme.isWebLayout) {
      return css`
        width: 100vw;
        grid-gap: 1em;

        @media only screen and (min-width: ${MOBILE_DEVICE_BOUNDARY}) {

          grid-template-columns: auto 1fr 1fr auto;
          grid-template-areas:
            "header      header      header      header"
            ".           summary     summary     ."
            ".           contact     employment  ."
            ".           education   employment  ."
            ".           skills      employment  ."
            ".           footer      footer      .";

          grid-template-columns: auto 1fr 1fr auto;
        }

        @media only screen and (min-width: ${MAX_WIDTH}) {
          grid-template-columns: auto 800px 800px auto;
        }
      `;
    }

    return css`
      width: 8.5in;
      height: 11in;
      margin: auto;
      font-size: 16px;
      align-content: space-between;
      column-gap: 1em;
      row-gap: 0.25em;
      padding-bottom: 1em;
    `;
  }}
`

export default Main;