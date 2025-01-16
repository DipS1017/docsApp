import { Button } from "@/components/ui/button";
import Link from "next/link";

 const Home=()=>{
   return(
<div className="flex min-h-screen items-center justify-center">

       <h1>hello</h1>
      <Button variant="default"> Hello</Button>
      Click <Link href="/documents/123"><span className="text-blue-500 cursor-pointer underline
        ">&nbsp;here&nbsp;</span></Link> to go to document id
     </div>
   )
 }
 export default Home;
