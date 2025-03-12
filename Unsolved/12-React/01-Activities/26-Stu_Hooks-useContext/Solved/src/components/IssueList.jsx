import IssueItem from './IssueItem';

const IssueList = ({ issues }) => {
  const renderedList = issues.map(({ id, ...issue }) => {
    return <IssueItem key={id} issue={issue} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default IssueList;
