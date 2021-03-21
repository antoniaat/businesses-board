import '../../../styles/components/business/business-table.scss';

import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { StoreState } from '../../redux/reducers';

import ContentLoading from '../content-loading';

interface Props {
  id: string,
  name: string,
  description: string,
}

const constructBusinessProfileLink = (id: string) => `/business/${id}`;

const Row: React.FC<Props> = ({ id, name, description }) => {
  const history = useHistory();

  const redirectOnProfile = (profileId: string) => {
    const businessProfileLink = constructBusinessProfileLink(profileId);
    history.push(businessProfileLink);
  };

  const handleOnClick = (event: any) => {
    const { id: targetId } = event.target.parentElement;
    redirectOnProfile(targetId);
  };

  return (
    <tr
      id={id}
      className="business-table-row"
      onClick={handleOnClick}
    >
      <td className="business-table-cell">
        <ContentLoading text={name} />
      </td>
      <td className="business-table-cell">
        <ContentLoading text={description} />
      </td>
    </tr>
  );
};

const mapStateToProps = (state: StoreState) => ({ data: state.data });

export default connect(mapStateToProps)(Row);
