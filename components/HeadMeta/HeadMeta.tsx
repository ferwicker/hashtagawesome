import Head from 'next/head'

type Props = {
    title?: string;
    description?: string;
}

const HeadMeta: React.FunctionComponent<Props> = ({
    title,
    description,
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    )
}

export default HeadMeta;
