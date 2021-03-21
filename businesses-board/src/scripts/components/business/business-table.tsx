import '../../../styles/components/business/business-table.scss';

import React from 'react';
import { connect } from 'react-redux';
import { BusinessTableProps } from '../../types/business-table';
import { defaultBusinessData } from '../../utils/constants';

const BusinessTable: React.FC<BusinessTableProps> = ({ isLoading, data = defaultBusinessData }) => {
  console.log(isLoading, 'isLoading');
  console.log(data, 'data');

  return (
    <table className="business-table">
      <thead className="business-table-header">
        <tr className="business-table-row">
          <td className="business-table-header-cell business-table-cell">
            name
            {/* <ContentLoading text="Name" isLoading={isLoading} /> */}
          </td>
          <td className="business-table-header-cell business-table-cell">
            desc
            {/* <ContentLoading text="Description" isLoading={isLoading} /> */}
          </td>
        </tr>
      </thead>
      <tbody className="business-table-content">
        {
          data.map(({ id, name, description }) => (
            <tr className="business-table-row" key={id}>
              <td className="business-table-cell">
                {name}
                {/* <ContentLoading text={name} isLoading={isLoading} /> */}
              </td>
              <td className="business-table-cell">
                {description}
                {/* <ContentLoading text={description} isLoading={isLoading} /> */}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps)(BusinessTable);
