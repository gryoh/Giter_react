import {useEffect, useState} from "react";
import styled from "styled-components";

const TableWrap = styled.table`
    width: 70%;
    border-top: 1px solid #444444;
    border-collapse: collapse;
    font-size: 20px;
    margin-top: 30px;
`;

const TableTh = styled.th`
    border-bottom: 1px solid #444444;
    padding: 10px;
`;
const TableTd = styled.td`
    border-bottom: 1px solid #444444;
    padding: 10px;
`;


export default function SearchArea({ props }) {
    const [gitInfoList, setGitInfoList] = useState();
    const [searchTxt, setSearchTxt] = useState();
    let isSearch = props.doSearch;
    console.log("props", props);
    //setSearchTxt(props.searchTxt);

    useEffect(() => {
        let getUserInfo = async () => {
            const res = await fetch(
                `https://api.github.com/users/${searchTxt}`
            );
            const data = await res.json();

            setGitInfoList(data);
            //console.log("data", data, searchTxt);
        };

        getUserInfo();
    },[]);

    //console.log("gitInfoList", gitInfoList);

    return (
        <>
            <TableWrap>
                <thead>
                    <TableTh>ID</TableTh>
                    <TableTh>name</TableTh>
                    <TableTh>git url</TableTh>
                    <TableTh>레파지토리 갯수</TableTh>
                    <TableTh>생성일</TableTh>
                    <TableTh>최근수정일</TableTh>
                </thead>
                <tbody>
                    <TableTd>{gitInfoList?.login}</TableTd>
                    <TableTd>{gitInfoList?.name}</TableTd>
                    <TableTd>{gitInfoList?.html_url}</TableTd>
                    <TableTd>{gitInfoList?.public_repos}</TableTd>
                    <TableTd>{gitInfoList?.created_at}</TableTd>
                    <TableTd>{gitInfoList?.updated_at}</TableTd>
                </tbody>
            </TableWrap>
        </>
    );

}