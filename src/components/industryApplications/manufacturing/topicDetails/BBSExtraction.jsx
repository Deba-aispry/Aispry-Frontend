import React from "react";

import { objectives } from "../../../utility/projectData/manufactureData/bbsExtraction/objectivesData";
import { constraints } from "../../../utility/projectData/manufactureData/bbsExtraction/constraintsData";
import { successCriteria } from "../../../utility/projectData/manufactureData/bbsExtraction/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/manufactureData/bbsExtraction/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/manufactureData/bbsExtraction/problemStatement";
import ProjectDetailsPage from "./ProjectDetailsPage";

import bbsExtraction from "../../../../assets/projectImage/bbsExtraction.png";
import bbsArchitecture from "../../../../assets/architecture/extractionarchitecture.png";

const BBSExtraction = () => {
  const headerTitle = "BBS Data Extraction";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={bbsExtraction}
          headerTitle={headerTitle}
          objectives={objectives}
          constraints={constraints}
          successCriteria={successCriteria}
          businessBenefits={businessBenefits}
          ProblemStatement={ProblemStatement}
          architecture={bbsArchitecture}
        />
      </div>
    </>
  );
};

export default BBSExtraction;
