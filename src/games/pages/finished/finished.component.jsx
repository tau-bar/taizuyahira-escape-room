import React from 'react';
import CustomButton from '../../components/button/button.component';
import '../template.styles.scss';
import cave from '../../../stuff/cave5.jpeg';
import scroll from '../../../stuff/scroll.jpg';
import PageTitle from '../../components/page-title.component';
import Paragraph from '../../components/paragraph.component';

const Finished = ({ history }) => {
    return (
        <div className = 'template-div'>
        <PageTitle>a scroll</PageTitle>
        <Paragraph content="As you proceed, you start to see a light. Finally, the end of the cave! "/>
        <img src = {cave} alt = "cave" style={{width:"60vw", borderRadius:"10px"}}></img>
        <Paragraph content = "On the ground before the exit lies a glowing scroll... this looks like it contains a lifetime of knowledge..."/>
        <img src = {scroll} alt = "scroll" style = {{width:"60vw", borderRadius:"10px"}}></img>
        <CustomButton 
        passed = {true}
        onClick = {() => history.push('/case-file')}
        successPara = "Do you pick it up?"
        ></CustomButton>
        </div>
    )
}

export default Finished;