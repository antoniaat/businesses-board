import ContentLoading from '../content-loading';

const Header = () => (
  <thead className="header">
    <tr className="header-row">
      <td className="business-table-header-cell business-table-cell">
        <ContentLoading text="Name" />
      </td>
      <td className="business-table-header-cell business-table-cell">
        <ContentLoading text="Description" />
      </td>
    </tr>
  </thead>
);

export default Header;
