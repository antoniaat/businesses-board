import React from 'react';
import { BusinessTableProps } from '../../types/business-table';

const BusinessTable: React.FC<BusinessTableProps> = ({ business }) => (
  <table className="business-table">
    <thead className="business-table-header">
      <tr>
        <td>Name</td>
        <td>Description</td>
      </tr>
    </thead>
    <tbody className="business-table-content">
      {
        business.map(({ id, name, description }) => (
          <tr key={id}>
            <td>
              {name}
            </td>
            <td>
              {description}
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default BusinessTable;
