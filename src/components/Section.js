import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
    margin: 100px 0px 0px;
    background: url(${props => props.image});
    background-size: cover;
    width: auto;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-content: center;
 
    @media (max-width: 640px) {
        height: 820px;
    } 
`

const SectionIconGroup = styled.div`
    margin: 100px 50px 50px;
`
const SectionIcon = styled.img``

const SectionTitle = styled.h3``

const SectionText = styled.p``

const Section = props => (
    <SectionGroup image={props.image}>
        <SectionIconGroup>
            <SectionIcon src={props.icon} />
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionIconGroup>
        <SectionIconGroup>
            <SectionIcon src={props.icon} />
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionIconGroup>
        <SectionIconGroup>
            <SectionIcon src={props.icon} />
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionIconGroup>
    </SectionGroup>
)

export default Section