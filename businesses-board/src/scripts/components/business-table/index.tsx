import '../../../styles/components/business/business-table.scss';

import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { StoreState } from '../../redux/reducers';
import { Business } from '../../types/business';

import ContentLoading from '../content-loading';
import Header from './header';

interface Props {
  data: Business[]
}

const constructBusinessProfileLink = (id: string) => `/business/${id}`;

const BusinessTable: React.FC<Props> = ({ data }) => {
  const history = useHistory();

  const redirectOnProfile = (id: string) => {
    const businessProfileLink = constructBusinessProfileLink(id);
    history.push(businessProfileLink);
  };

  const handleOnClick = (event: any) => {
    const { id } = event.target.parentElement;
    redirectOnProfile(id);
  };

  return (
    <table className="business-table">
      <Header />
      <tbody className="business-table-content">
        {
          data.map(({ id, name, description }) => (
            <tr
              id={id}
              key={id}
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
          ))
        }
      </tbody>
    </table>
  );
};

const mapStateToProps = (state: StoreState) => ({ data: state.data });

export default connect(mapStateToProps)(BusinessTable);
