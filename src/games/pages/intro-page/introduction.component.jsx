import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../../components/button/button.component';
import PageTitle from '../../components/page-title.component';
import Paragraph from '../../components/paragraph.component';
import './introduction.styles.scss';

const IntroPage = ({ history }) => (
    <div className = 'welcome'>
        <PageTitle>
            *~!^&@*@#&%^*'S CAVE
        </PageTitle>
        <Paragraph content = "You encounter a cave, with the name scratched out, with a rather cryptic sign. Do you enter?"></Paragraph>
        <CustomButton passed = {true} successPara = "beware: the trials ahead are not for the faint hearted..." onClick = {() => history.push('/crossroads')}></CustomButton>
    </div>
)

export default withRouter(IntroPage);