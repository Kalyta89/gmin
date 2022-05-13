import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <div>
        <h2 className="bg-yellow-400 font-bold inline-block my-8 p-3">
          Oops... Page got abducted :@
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
