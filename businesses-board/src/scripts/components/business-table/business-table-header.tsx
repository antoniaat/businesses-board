import '../../../styles/components/business-table/business-table-header.scss';

import ContentLoading from '../content-loading';

const BusinessTableHeader = () => (
  <thead className="business-table-header">
    <tr className="business-table-header-row">
      <td className="business-table-header-cell">
        <ContentLoading text="Name" />
      </td>
      <td className="business-table-header-cell">
        <ContentLoading text="Description" />
      </td>
    </tr>
  </thead>
);

export default BusinessTableHeader;
