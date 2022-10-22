import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/BreadCrumb";
import BreadcrumbItem from "../components/BreadCrumbItem";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

  return (
    <>
      <div className="w-8/12 mx-auto">
        <Navbar />
        <Breadcrumb>
          <BreadcrumbItem isCurrent={router.pathname === "/"} href="/">
            Home
          </BreadcrumbItem>
          {breadcrumbs &&
            breadcrumbs.map((breadcrumb) => (
              <BreadcrumbItem
                key={breadcrumb.href}
                href={breadcrumb.href}
                isCurrent={breadcrumb.isCurrent}
              >
                {breadcrumb.label}
              </BreadcrumbItem>
            ))}
        </Breadcrumb>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
