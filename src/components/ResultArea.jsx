//import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from 'moment';
//선언하지 않아도, 디바이스 혹은 locale의 시간을 불러온다.
import 'moment/locale/ko';	//대한민국

const TableWrap = styled.table`
    width: 80%;
    border-top: 1px solid #444444;
    border-collapse: collapse;
    font-size: 15px;
    margin-top: 30px;
    color: #202124;
`;

const TableTh = styled.th`
    border-bottom: 1px solid #444444;
    padding: 10px;
`;
const TableTd = styled.td`
    border-bottom: 1px solid #444444;
    padding: 10px;
    
    img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
`;

const NotResultTd = styled.td`
    padding: 10px 0;
    font-weight: bold;    
`;

export async function getServerSideProps({ params, req }) {
    return {
        props: {
            params,
        },
    };
}

export default function SearchArea({ params }) {
    // todo router 추가해보기
    const [gitInfo, setGitInfo] = useState({});

    useEffect(() => {
        const getUserInfo = async () => {
            //debugger;
            const res = await fetch(
                `https://api.github.com/users/${params.searchTxt}`
            );
            const data = await res.json();

            setGitInfo(data);
            //console.log("data", data, searchTxt);
        };

        getUserInfo();
    },[params.searchTxt]);

    return (
        <>
            <TableWrap>
                <thead>
                    <TableTh>이미지</TableTh>
                    <TableTh>name</TableTh>
                    <TableTh>git url</TableTh>
                    <TableTh>repos<br/>갯수</TableTh>
                    <TableTh>생성일</TableTh>
                    <TableTh>최근수정일</TableTh>
                </thead>

                { gitInfo?.name &&
                <tbody>
                    <tr>
                        <TableTd><img src={gitInfo?.avatar_url}/></TableTd>
                        <TableTd>{gitInfo?.name}</TableTd>
                        <TableTd>{gitInfo?.html_url}</TableTd>
                        <TableTd>{gitInfo?.public_repos}</TableTd>
                        <TableTd>{moment(gitInfo?.created_at).format('YYYY-MM-DD HH:mm:ss')}</TableTd>
                        <TableTd>{moment(gitInfo?.updated_at).format('YYYY-MM-DD HH:mm:ss')}</TableTd>
                    </tr>
                </tbody>
                }

                { !gitInfo?.name &&
                <tbody>
                    <NotResultTd colSpan={6}>git 유저 정보가 없습니다.</NotResultTd>
                </tbody>
                }
            </TableWrap>
        </>
    );

}