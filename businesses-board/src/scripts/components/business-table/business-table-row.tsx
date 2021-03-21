import '../../../styles/components/business-table/business-table-row.scss';

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

const BusinessTableRow: React.FC<Props> = ({ id, name, description }) => {
  const history = useHistory();

  const handleOnClick = () => {
    const businessProfileLink = constructBusinessProfileLink(id);
    history.push(businessProfileLink);
  };

  return (
    <tr
      className="business-table-row"
      onClick={handleOnClick}
    >
      <td className="business-table-row-cell">
        <ContentLoading text={name} />
      </td>
      <td className="business-table-row-cell">
        <ContentLoading text={description} />
      </td>
    </tr>
  );
};

const mapStateToProps = (state: StoreState) => ({ data: state.data });

export default connect(mapStateToProps)(BusinessTableRow);
