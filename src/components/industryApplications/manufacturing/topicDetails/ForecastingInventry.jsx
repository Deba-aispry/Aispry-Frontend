import React from "react";

import { objectives } from "../../../utility/projectData/manufactureData/forcastingSteelRod/objectivesData";
import { constraints } from "../../../utility/projectData/manufactureData/forcastingSteelRod/constraintsData";
import { successCriteria } from "../../../utility/projectData/manufactureData/forcastingSteelRod/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/manufactureData/forcastingSteelRod/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/manufactureData/forcastingSteelRod/problemStatement";
import ProjectDetailsPage from "./ProjectDetailsPage";


import steelImage from "../../../../assets/projectImage/steelImg.jpg";

const ForecastingInventory = () => {
  const headerTitle =
    " Revolutionizing Steel Rod Offcuts with Smart Utilization and Automation";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={steelImage}
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

export default ForecastingInventory;
