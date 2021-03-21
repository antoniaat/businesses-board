import '../../../styles/components/business/business-table.scss';

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { BusinessTableProps } from '../../types/business-table';
import { defaultBusinessData } from '../../utils/constants';
import ContentLoading from '../content-loading';
import { getById } from '../../utils/utils';
import { Business } from '../../types/business';
import { setProfile } from '../../redux/creators';

const constructBusinessProfileLink = (id: string) => `/business/${id}`;

const BusinessTable: React.FC<BusinessTableProps> = (
  {
    isLoading = true,
    data = defaultBusinessData,
    handleProfileChange = (profile: Business) => profile,
  },
) => {
  const history = useHistory();

  const redirectOnProfile = (id: string) => {
    const businessProfileLink = constructBusinessProfileLink(id);
    history.push(businessProfileLink);
  };

  const handleOnClick = (event: any) => {
    const { id } = event.target.parentElement;
    const profileData = getById(id, data);
    handleProfileChange(profileData);

    redirectOnProfile(id);
  };

  return (
    <table className="business-table">
      <thead className="business-table-header">
        <tr className="business-table-row">
          <td className="business-table-header-cell business-table-cell">
            <ContentLoading text="Name" isLoading={isLoading} />
          </td>
          <td className="business-table-header-cell business-table-cell">
            <ContentLoading text="Description" isLoading={isLoading} />
          </td>
        </tr>
      </thead>
      <tbody className="business-table-content">
        {
            data.map(({
              id, name, description, address,
            }) => (
              <tr
                id={id}
                key={id}
                className="business-table-row"
                onClick={handleOnClick}
              >
                <td className="business-table-cell">
                  <ContentLoading text={name} isLoading={isLoading} />
                </td>
                <td className="business-table-cell">
                  <ContentLoading text={address.country} isLoading={isLoading} />
                </td>
              </tr>
            ))
          }
      </tbody>
    </table>
  );
};

const mapStateToProps = (state: Object) => state;

const mapDispatchToProps = (dispatch: Function) => ({
  handleProfileChange(profile: Business) {
    dispatch(setProfile(profile));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessTable);
