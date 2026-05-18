import { Link, useRouteError } from "react-router"

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)

    const status = error?.status || "Unknown Error"

    return (
        <>
        <div>Uh oh! Are you sure you are at the right page?</div>
        <div><i>{ status } </i><i>{ error?.statusText || error?.message }</i></div>
        <Link to="/">Click here to return to the homepage</Link>
        </>
    )
}
export default ErrorPage