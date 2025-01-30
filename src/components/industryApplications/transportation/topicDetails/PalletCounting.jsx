import React from "react";

import { objectives } from "../../../utility/projectData/transportationData/palletCounting/objectivesData";
import { constraints } from "../../../utility/projectData/transportationData/palletCounting/constraintsData";
import { successCriteria } from "../../../utility/projectData/transportationData/palletCounting/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/transportationData/palletCounting/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/transportationData/palletCounting/problemStatement";
import ProjectDetailsPage from "../../manufacturing/topicDetails/ProjectDetailsPage";

import palletCounting from "../../../../assets/projectImage/palletcounting.png";
import countingArch from "../../../../assets/architecture/countingarchitecture.png"

const PalletCounting = () => {
  const headerTitle = "Pallet Counting";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={palletCounting}
          headerTitle={headerTitle}
          objectives={objectives}
          constraints={constraints}
          successCriteria={successCriteria}
          businessBenefits={businessBenefits}
          ProblemStatement={ProblemStatement}
          architecture={countingArch}
        />
      </div>
    </>
  );
};

export default PalletCounting;
