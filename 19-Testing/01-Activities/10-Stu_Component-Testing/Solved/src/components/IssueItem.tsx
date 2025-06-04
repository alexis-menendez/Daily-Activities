// Issue item accepts a single issue as a prop
import type IssueInterface from "../interfaces/Issue.interface";

// This component is solely responsible for displaying the specific information for a given issue
const IssueItem = ({ issue }: { issue: IssueInterface }) => {
  return (
    <div className="item">
      <i className="large github middle aligned icon"/>
      <div className="content">
        <a
          className="header"
          href={issue.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {issue.title}
        </a>
        <div className="description">{issue.description}</div>
      </div>
    </div>
  );
};

export default IssueItem;
