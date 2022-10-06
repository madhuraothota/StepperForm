import React, { Component } from 'react';
import Header from './Components/Header';
import ReferEarn from './Components/ReferEarn';
import DividerText from './Components/DividerText';
import Programs from './Components/Programs';
import SelectProgram from './Components/SelectProgram';
import DividerOr from './Components/DividerOr';
import ReferalStatus from './Components/ReferalStatus';
import Footer from './Components/Footer';


class App extends Component {


  render() {


    return (
      <React.Fragment>
        <Header />
        <ReferEarn />
        <DividerText />
        <Programs />
        <SelectProgram />
        <DividerOr/>
        <ReferalStatus />
        <Footer />
      </React.Fragment>

    )

  }


}

export default App;