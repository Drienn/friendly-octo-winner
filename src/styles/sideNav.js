import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideNavWrapper = styled.div`
    background-color: rgb(54, 56, 57);
    flex: 1;
    padding: 0px 20px;
    min-height: 100vh;
`;

export const CompanyName = styled.div`
    display: flex;
    justify-content:center;
    color: white;
    font-size: 30px;
    padding-bottom: 20px;
`;

export const SideNavOptions = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SideNavOption = styled(Link)`
    text-decoration: none;
    padding: 5px;
    color: white;
`;
