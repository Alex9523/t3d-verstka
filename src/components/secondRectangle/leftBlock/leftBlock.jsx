import React from 'react'

import Why from './why/why'
import './leftBlock.scss'

function LeftBlock(){
const data = [
    {number: '01', text: 'Business consultants are experts in the fields they work in and since they have worked directly with various companies and in different fields, they have the best practices up their sleeve and they have developed the knowhow to provide custom-tailored solutions.', class:'position-1'},
    {number: '02', text: 'Consultants are result-focused, and their main target is to succeed with their project, therefore they will focus their resources and apply performance-related activities to make sure your goals are achieved.', class:'position-2'},
    {number: '03', text: 'Consultants are not full-time employees, therefore breaking off the relationship is relatively easy and cost-effective.', class:'position-3'},
    {number: '04', text: 'Sometimes your in-house people are too close to your company that they do not see the bigger picture within your market. With a fresh perspective on your business, consultants come in with a clear vision to provide real and concrete actions and activities that will help you accomplish your objective.', class:'position-4'},
    {number: '05', text: 'Consultants are professional trainers, so they are a natural choice to share valuable insights that boost your internal creative thinking and to train your team to break the logjam and adapt to new circumstances.', class:'position-5'},
]
    return(
        <div className='leftBlock'>
                <Why number={data[0].number} text={data[0].text} class={data[0].class}/>
                <Why number={data[1].number} text={data[1].text} class={data[1].class}/>
                <Why number={data[2].number} text={data[2].text} class={data[2].class}/>
                <Why number={data[3].number} text={data[3].text} class={data[3].class}/>
                <Why number={data[4].number} text={data[4].text} class={data[4].class}/>
                
                <div className="leftBlock__img"></div>
        </div>
    )
}

export default LeftBlock
