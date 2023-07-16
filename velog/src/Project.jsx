import styled from 'styled-components'

export const Profile_Image = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};

    position: relative;

    img{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        border-radius: 50%;
    }

`

export const Info = styled.div`
    font-size: ${props => props.fontSize};
    display: flex;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const SubInfo = styled(Info)`
    font-size: 12px;
    color: #ACACAC;
` 

export const Flex_Box =styled.div `
    display: flex;
    align-items: center;
`
export const Flex_Box_Icon = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};

    display : flex;
    justify-content: center;
    align-items : center;
`