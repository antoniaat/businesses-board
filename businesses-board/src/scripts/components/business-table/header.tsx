import '../../../styles/components/business/business-table.scss';

import React from 'react';
import { connect } from 'react-redux';
import ContentLoading from '../content-loading';
import { StoreState } from '../../redux/reducers';

interface Props {
  isLoading: boolean
}

const Header: React.FC<Props> = ({ isLoading }) => (
  <thead className="header">
    <tr className="header-row">
      <td className="business-table-header-cell business-table-cell">
        <ContentLoading text="Name" isLoading={isLoading} />
      </td>
      <td className="business-table-header-cell business-table-cell">
        <ContentLoading text="Description" isLoading={isLoading} />
      </td>
    </tr>
  </thead>
);

const mapStateToProps = (state: StoreState) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(Header);
