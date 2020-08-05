import React from 'react';
import {connect} from 'react-redux';

import {getJobsByRole} from "../actions";
import Jobs from "../components/Jobs/Jobs";

class Genius extends React.Component {
  componentDidMount() {
    this.props.getJobsByRole('1')
  }

  render() {
    const {jobs} = this.props;
    return (
      <div>
        <Jobs jobs={jobs} />
      </div>
    )
  }
}

export default connect(state=> ({
  id: state.userInfo.id,
  jobs: state.list.jobs
}), {getJobsByRole})(Genius);