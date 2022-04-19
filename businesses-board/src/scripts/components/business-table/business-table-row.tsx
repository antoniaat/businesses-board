import '../../../styles/components/business-table/business-table-row.scss';

import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { StoreState } from '../../redux/reducers';

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
        {name}
      </td>
      <td className="business-table-row-cell">
        {description}
      </td>
    </tr>
  );
};

const mapStateToProps = (state: StoreState) => ({ data: state.data });

export default connect(mapStateToProps)(BusinessTableRow);
