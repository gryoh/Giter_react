import React, {useEffect, useState} from "react";
import styled from "styled-components";
import searchImgSrc from './images/search.png';
import backgroundImgSrc from './images/main-pc-banner-bg.jpeg';

const SearchAreaWrap = styled.div`
    position: relative;
    z-index: 2;
    height: 330px;
    width: 100%;
    padding-top: 120px;
    //transform: translateX(-50%);
    //margin-left: 50%;
    background: url(${backgroundImgSrc}) 50% / 2400px 330px no-repeat;
    background-repeat: no-repeat;
`;

const SearchAreaH1 = styled.h1`
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 36px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    line-height: 40px;
`;

const SearchAreaInputWrap = styled.div`
    width: 580px;
    height: 50px;
    position: relative;
    display: flex;
    border-radius: 25px;
    border: none;
    padding: 0px 28px;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(255, 255, 255);
    margin: 20px auto 0px;
`;

const SearchAreaInputSpan = styled.span`
    margin-right: 24px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

const SearchAreaInputImgWrap = styled.img`
    width: 19px;
    height: 19px;
`;

const SearchAreaInputDiv =  styled.div`
    width: 100%;
    position: unset;
`;

const SearchAreaInput =  styled.input`
    width: 100%;
    background: none;
    border: none;
    outline: none;
    line-height: 1.5;
    font-weight: 400;
    font-size: 16px;
`;

export default function SearchArea({ props }) {
    const [inputTxt, setInputTxt] = useState("");

    function handlerOnChangeTxt(event){
        setInputTxt(event.target.value);
    }

    function handlerOnClickSearchBtn(){
        props(inputTxt);
    }

    return (
        <SearchAreaWrap>
            <SearchAreaH1>Git 사용자 조회하기</SearchAreaH1>
            <SearchAreaInputWrap>
                <SearchAreaInputSpan>
                    <SearchAreaInputImgWrap
                        src={searchImgSrc}
                        onClick={handlerOnClickSearchBtn}>
                    </SearchAreaInputImgWrap>
                </SearchAreaInputSpan>
                <SearchAreaInputDiv>
                    <SearchAreaInput value={inputTxt} placeholder="검색어를 입력해주세요." onChange={handlerOnChangeTxt}></SearchAreaInput>
                </SearchAreaInputDiv>
            </SearchAreaInputWrap>
        </SearchAreaWrap>
    )
}
