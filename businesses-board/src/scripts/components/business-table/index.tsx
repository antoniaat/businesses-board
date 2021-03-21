import '../../../styles/components/business/business-table.scss';

import React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../redux/reducers';
import { Business } from '../../types/business';

import Header from './header';
import Row from './row';

interface Props {
  data: Business[]
}

const BusinessTable: React.FC<Props> = ({ data }) => (
  <table className="business-table">
    <Header />
    <tbody className="business-table-content">
      {
          data.map(({ id, name, description }) => (
            <Row
              id={id}
              name={name}
              description={description}
            />
          ))
        }
    </tbody>
  </table>
);

const mapStateToProps = (state: StoreState) => ({ data: state.data });

export default connect(mapStateToProps)(BusinessTable);
