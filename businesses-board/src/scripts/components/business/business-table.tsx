import '../../../styles/components/business/business-table.scss';

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { BusinessTableProps } from '../../types/business-table';
import { defaultBusinessData } from '../../utils/constants';
import ContentLoading from '../content-loading';

const BusinessTable: React.FC<BusinessTableProps> = (
  {
    isLoading = true,
    data = defaultBusinessData,
  },
) => {
  const history = useHistory();
  const [businesses, setBusinesses] = useState(defaultBusinessData);

  useEffect(() => {
    setBusinesses(data);
  }, [isLoading]);

  const handleOnClick = (event: any) => {
    const element = event.target as HTMLElement;
    const id = (element.parentElement?.id as string);
    const businessLink = `/business/${id}`;

    history.push(businessLink);
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
          businesses.map(({ id, name, description }) => (
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
                <ContentLoading text={description} isLoading={isLoading} />
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

const mapStateToProps = (state: Object) => state;

export default connect(mapStateToProps)(BusinessTable);
