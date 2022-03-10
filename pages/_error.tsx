import type { NextPage } from 'next';
import { ErrorProps } from "next/error";


const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
    console.log('statusCode::', statusCode);
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
  
  ErrorPage.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default ErrorPage