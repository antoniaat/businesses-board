import '../../../styles/components/business/business-table.scss';

import React from 'react';
import { BusinessTableProps } from '../../types/business-table';

const BusinessTable: React.FC<BusinessTableProps> = ({ business }) => (
  <table className="business-table">
    <thead className="business-table-header">
      <tr className="business-table-row">
        <td className="business-table-header-cell business-table-cell">Name</td>
        <td className="business-table-header-cell business-table-cell">Description</td>
      </tr>
    </thead>
    <tbody className="business-table-content">
      {
        business.map(({ id, name, description }) => (
          <tr className="business-table-row" key={id}>
            <td className="business-table-cell">
              {name}
            </td>
            <td className="business-table-cell">
              {description}
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default BusinessTable;
