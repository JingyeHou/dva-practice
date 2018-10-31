import React from 'react';
import { connect } from 'dva';
import { FormattedMessage } from 'react-intl';
class Home extends React.Component {
    render() {
      return (
        <div className="Home">
          <div className="Home-header">
            <h2><FormattedMessage id="App.datePicker.title" /></h2>
   
          </div>
          <div className="Home-container">
            <div className="Home-items">
              <div className="Home-item">
                <h3 className="focus">
                  <FormattedMessage id="InjectExample.alert"/></h3>
                <div><p><FormattedMessage id="InjectExample.button" values={{name: <i>React</i>}}/></p>
                  <p><FormattedMessage id="InjectExample.description"/></p>
                </div>
              </div>
              <div className="Home-item">
                <h3 className="focus"><FormattedMessage id="InjectExample.descriptiond"/></h3>
                <div>
                  <p><FormattedMessage id="InjectExample.description"/></p>
                  <p><FormattedMessage id="InjectExample.description"/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default connect()(Home);
