import { Grid } from "semantic-ui-react";
import React from "react";

import { Sidebar } from 'components';

class SidebarLayout extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3} stretched>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={13}>
            {this.props.children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SidebarLayout;
