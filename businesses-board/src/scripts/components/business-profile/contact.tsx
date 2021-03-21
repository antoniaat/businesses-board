import React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../redux/reducers';
import { Profile } from '../../types/business-profile';

import ContentLoading from '../content-loading';

const Contact: React.FC<Profile> = ({ profile: { phone, email } }) => (
  <section className="contact">
    <article className="contact-phone">
      <ContentLoading text={phone} />
    </article>
    <article className="contact-email">
      <ContentLoading text={email} />
    </article>
  </section>
);

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Contact);
