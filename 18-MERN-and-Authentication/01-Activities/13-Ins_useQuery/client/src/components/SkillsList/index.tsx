import type React from "react";

interface SkillsListProps {
  skills: string[];
}


const SkillsList: React.FC<SkillsListProps> = ({ skills }): JSX.Element => {
  if (!skills.length) {
    return <h3>No Skills Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {skills?.map((skill) => (
            <div key={skill} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {skill} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkillsList;
