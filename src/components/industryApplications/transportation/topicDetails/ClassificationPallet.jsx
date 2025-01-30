import { objectives } from "../../../utility/projectData/transportationData/ClassificationPallet/objectivesData";
import { constraints } from "../../../utility/projectData/transportationData/ClassificationPallet/constraintsData";
import { successCriteria } from "../../../utility/projectData/transportationData/ClassificationPallet/SuccessCriteriaData";
import { businessBenefits } from "../../../utility/projectData/transportationData/ClassificationPallet/businessBenefit";
import { ProblemStatement } from "../../../utility/projectData/transportationData/ClassificationPallet/problemStatement";
import ProjectDetailsPage from "../../manufacturing/topicDetails/ProjectDetailsPage";

import damage from "../../../../assets/projectImage/damage.png";
import palletArch from "../../../../assets/architecture/palletarchitecture.png";

const ClassificationPallet = () => {
  const headerTitle = "Pallet Damage Classification";
  return (
    <>
      <div className=" text-white p-4 container max-w-6xl mx-auto">
        <ProjectDetailsPage
          headerImage={damage}
          headerTitle={headerTitle}
          objectives={objectives}
          constraints={constraints}
          successCriteria={successCriteria}
          businessBenefits={businessBenefits}
          ProblemStatement={ProblemStatement}
          architecture={palletArch}
        />
      </div>
    </>
  );
};

export default ClassificationPallet;
