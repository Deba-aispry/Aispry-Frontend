import React from "react";

import { objectives } from "../../../utility/projectData/transportationData/palletDamage/objectivesData";
import { constraints } from "../../../utility/projectData/transportationData/palletDamage/constraintsData";
import { successCriteria } from "../../../utility/projectData/transportationData/palletDamage/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/transportationData/palletDamage/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/transportationData/palletDamage/problemStatement";
import ProjectDetailsPage from "../../manufacturing/topicDetails/ProjectDetailsPage";

import pallet from "../../../../assets/projectImage/poweredpallet.png";

const PalletDamage = () => {
  const headerTitle =
    "AI-Powered Pallet Damage Detection and Classification System for Enhanced Warehouse Operations";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={pallet}
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

export default PalletDamage;
