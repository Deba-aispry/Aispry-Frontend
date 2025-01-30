import React from "react";

import { objectives } from "../../../utility/projectData/transportationData/volvo/objectivesData";
import { constraints } from "../../../utility/projectData/transportationData/volvo/constraintsData";
import { successCriteria } from "../../../utility/projectData/transportationData/volvo/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/transportationData/volvo/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/transportationData/volvo/problemStatement";
import ProjectDetailsPage from "../../manufacturing/topicDetails/ProjectDetailsPage";

import volvo from "../../../../assets/projectImage/volvo.png";

const Volvo = () => {
  const headerTitle =
    "Volvo";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={volvo}
          headerTitle={headerTitle}
          objectives={objectives}
          constraints={constraints}
          successCriteria={successCriteria}
          businessBenefits={businessBenefits}
          ProblemStatement={ProblemStatement}
        />
      </div>
    </>
  );
};

export default Volvo;
