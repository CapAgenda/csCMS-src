import styled from "styled-components";

export const ComicsContainer = styled.div`
    
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding-bottom: 10px;
`

export const ComicsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 0 20px;

    @media screen and (max-width: 768px) {   
        padding: 0 5px;
    }
`
 

export const ComicCard = styled.div`    
    height: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    padding: 5px;
    box-shadow: 0 0px 40px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    transform: 0;

    &.paperCard:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`
export const ComicH1 = styled.h1`
    color: #FFF;
    font-size: 48px;
    text-align: center;
    padding-bottom: 35px;
    word-break: break-all;

    @media screen and (max-width: 768px) {
        font-size: 40px;
        word-break: break-word;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        word-break: break-word;
    }
`

export const ComicSmall = styled.small`
    font-size: 1rem;
    text-align: right;
    color: black;
    width: 100%;
    margin-right: 10px;

    @media screen and (max-width: 768px) {
        font-size: .75rem;
    }
`

export const ComicP = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: #FFF;
    width: 100%;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

`

export const Comic = styled.img`
    max-height: 60vh;
    height: 100%;
    width: auto;
    max-width: 100%;
    margin-bottom: 10px;
    border: 3px solid black;
    border-radius:3px;
`

export const ComicButton = styled.button`
    border-radius: 10px;
    background: #0D47A1;
    white-space: nowrap;
    padding: 14px;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    text-transform:uppercase;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #1565C0;
    }

    @media screen and (max-width: 480px) {
        font-size: 10px;
        padding: 8px;
    }
`
