import styled, { useTheme } from "styled-components";
import resume from "../resume";
import Section from "./Section"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkedInLogo from "../LinkedIn.png";
import UnmarkedList from "./List";

const IndentedUnmarkedList = styled(UnmarkedList)`
  margin-left: 1em;
`

const Key = styled.span`
  font-weight: bold;
  ${props => !props.theme.isWebLayout ? '&:after {content: ": "; }' : 'vertical-align: middle'}
`;

const Image = styled.img`
  width: 24px;
  height: 20px;
`;

const Link = styled.a`
  color: ${props=>props.theme.mainColor};
  margin-left: 0.5em;
  height: 1em;
  line-height: 1em;
`;

const Contact = () => {
  const theme = useTheme();

  return (
    <Section name="Contact" id="contact" gridArea="contact">
      <IndentedUnmarkedList>
        <li>
          <Key>{ theme.isWebLayout ? <Image alt="LinkedIn Logo" title="LinkedIn" src={LinkedInLogo} /> : "LinkedIn"}</Key>
          <Link href={resume.contact.linkedIn}>{resume.contact.linkedIn.split("/").slice(-1)}</Link>
        </li>

        <li>
          <Key>{ theme.isWebLayout ? <FontAwesomeIcon title="Email" icon={faEnvelope} size="lg"/> : "Email"}</Key>
          <Link href={`mailto:${resume.contact.email}`}>{resume.contact.email}</Link>
        </li>
      </IndentedUnmarkedList>
    </Section>
  );
};

export default Contact;