
import { usePageContext } from "./pageNameContext";
const ParentPage = () => {
    const {pageName,pageVale}=usePageContext();
    return (
<h1>Parent page title {pageName} {pageVale}</h1>
    )
}
  export default ParentPage;