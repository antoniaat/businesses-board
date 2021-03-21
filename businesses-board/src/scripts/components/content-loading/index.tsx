import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/reducers';

const skeletonWidth = 100;
const skeletonHeight = 15;
const count = 1;

interface Props {
  isLoading: boolean;
  text: string | number;
}

const ContentLoading: React.FC<Props> = ({ isLoading, text }) => {
  if (isLoading) {
    return (
      <span className="skeleton-loading-wrapper">
        <SkeletonTheme color="#CFDAE7" highlightColor="#fff">
          <Skeleton
            width={skeletonWidth}
            height={skeletonHeight}
            count={count}
          />
        </SkeletonTheme>
      </span>
    );
  }

  return <>{text}</>;
};

const mapStateToProps = (state: StoreState) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(ContentLoading);
