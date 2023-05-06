import resume from "../resume";
import Section from "./Section";

const Summary = () => {
  return (
    <Section name="Summary" id="summary" gridArea="summary">
      <p>
        {resume.summary}
      </p>
    </Section>
  );
};

export default Summary;