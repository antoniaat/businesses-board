import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers';

interface Props {
  profile: {
    phone: string,
    email: string,
  },
}

const Contact: React.FC<Props> = ({ profile }) => {
  const { phone, email } = profile;

  return (
    <section className="contact">
      <article className="contact-phone">
        {phone}
      </article>
      <article className="contact-email">
        {email}
      </article>
    </section>
  );
};

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Contact);
