import styled from 'styled-components'
function Styled() {

    const Button = styled.button`
    color: red;
    background-color: yellow;
    `
    return (
        <div style={{backgroundColor: "red"}}>
            <Button>Styled</Button>
        </div>
    )
}

export default Styled;