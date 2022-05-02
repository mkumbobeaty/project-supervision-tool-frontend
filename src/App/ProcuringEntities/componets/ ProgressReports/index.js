import React, {useEffect} from "react";
import { connect } from "react-redux";
import DynamicBreadcrumbs from "../../../components/DynamicBreadcrumbs";
import BaseLayout from "../../../layouts/BaseLayout";
import { getIdFromUrlPath  } from '../../../../Util';
import { ProcuringEntityActions, ProcuringEntitySelectors } from '../../../../redux/modules/ProcuringEntities';




function ProgressReports ({match, procuringEntity, getProcuringEntity}) {

    useEffect(() => {
        getProcuringEntity(match.params.id);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const breadcrumbs = procuringEntity ? [
        {
            title: 'Projects',
            url: '/projects',
            name: 'Projects'
        },
        {
            title: procuringEntity.project.code,
            url: `/projects/${procuringEntity.project.id}/`,
            name: procuringEntity.project.name
        },
        {
            title: `Procuring Entities`,
            url: `/projects/${procuringEntity.project.id}/procuring_entities`,
            name: `Procuring Entities under ${procuringEntity.project.name}(${procuringEntity.project.code})`
        },
        {
            title: `${procuringEntity.agency.name}`,
            url: `/projects/${procuringEntity.project.id}/procuring_entities/${procuringEntity.id}`,
            name: `${procuringEntity.agency.name}`
        },
        {
            title: `Progress Reports`,
            url: match.url,
            name: `Progress Reports`
        }
    ] : [];

  return (
      <BaseLayout breadcrumbs={<DynamicBreadcrumbs breadcrumbs={breadcrumbs} />}>
          <h1>it works</h1>
      </BaseLayout>

  );
}


const mapStateToProps = state => ({
    procuringEntity: ProcuringEntitySelectors.getProcuringEntitySelector(state),
});

const mapDispatchToProps = {
    getProcuringEntity: ProcuringEntityActions.getProcuringEntityStart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressReports);