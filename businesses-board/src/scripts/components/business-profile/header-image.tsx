import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers';

interface Props {
  profile: {
    image: string,
    name: string,
  },
}

const HeaderImage: React.FC<Props> = ({ profile }) => {
  const { image, name } = profile;

  return (
    <section className="header-image">
      <img src={image} alt={name} />
    </section>
  );
};

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(HeaderImage);
