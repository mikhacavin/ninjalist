import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const Notfound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1)
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Opps ...</h1>
      <h2>thats page cannot be found</h2>
      <p>
        Goback to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default Notfound;
