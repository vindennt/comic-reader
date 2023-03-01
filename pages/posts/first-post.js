import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
    return (
    <Layout>
    <Head>
        <title>
            First Post
        </title>

    </Head>
    <h1>First Post</h1>
    <h2>
        <Link href="/">Back to Home</Link>
        {/* <Image
            src="/images/d.png"
            height={144}
            width={144}
            alt="D"
        /> */}
    </h2>
    </Layout>
    );
}