import resume from "../resume";
import { H1 } from "./Headings";

const Name = () => {
  return (<H1>{resume.name}</H1>);
};

export default Name;