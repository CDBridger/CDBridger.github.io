import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page Not Found">
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage
