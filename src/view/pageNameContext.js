import { createContext,useContext, useState } from "react";
export const PageNameContext=createContext();
export const usePageContext = () => {
    return useContext(PageNameContext);
  };
  export const PageContextProvider = ({ children }) => {
    const [pageName,setPageName]=useState("AjayPage")
    const [pageVale,setPageVale]=useState("1")
    const contextValue = {
        pageName,
        pageVale
      };
      return(
        <PageNameContext.Provider value={contextValue}>
        {children}
      </PageNameContext.Provider>
      )
  }
