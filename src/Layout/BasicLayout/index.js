import React from 'react';
import {BasicLayoutWrapper, ContentWrapper} from "./basicLayout.style";
import Sidebar from "./component/Sidebar";

const BasicLayout = ({children}) => {
    return (
        <BasicLayoutWrapper>
            <Sidebar/>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </BasicLayoutWrapper>
    )
};

export default BasicLayout;