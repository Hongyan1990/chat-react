import React from 'react';
import {connect} from 'react-redux';

import {getJobsByRole} from "../actions";
import Jobs from "../components/Jobs/Jobs";

class Boss extends React.Component {
  componentDidMount() {
    this.props.getJobsByRole('0')
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
}), {getJobsByRole})(Boss);