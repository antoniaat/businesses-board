import '../../../styles/components/business-profile/business-profile-contact.scss';

import React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../redux/reducers';
import { Profile } from '../../types/business-profile';

import ContentLoading from '../content-loading';

const BusinessProfileContact: React.FC<Profile> = ({ profile: { phone, email } }) => (
  <section className="business-profile-contact">
    <h4 className="business-profile-contact-title">
      <ContentLoading text="Contact" />
    </h4>
    <article className="business-profile-contact-phone">
      <ContentLoading text={phone} />
    </article>
    <article className="business-profile-contact-email">
      <ContentLoading text={email} />
    </article>
  </section>
);

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(BusinessProfileContact);
