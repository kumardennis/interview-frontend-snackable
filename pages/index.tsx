import React, { useEffect } from "react";
import { NextPage } from 'next'
import { useRouter } from 'next/router'


interface PropTypes {
  redirectToFiles: boolean
}

const Index: NextPage<PropTypes> = ({redirectToFiles}) => {
  const router = useRouter()


  useEffect(() => {
    if(redirectToFiles) {
      router.push('/files')
    }
  }, [redirectToFiles])
  
 
  
  return <div />};



Index.getInitialProps = async ({ res }) => {

  let redirectToFiles: boolean = true

  if (res) {
    redirectToFiles = false
    res.writeHead(302, {
      Location: "/files"
    });
    res.end();
  }

  return {redirectToFiles};
};

export default Index;
