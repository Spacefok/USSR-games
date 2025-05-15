import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'

const Website = ({ Component, pageProps, router } ) => {
    return (
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                    <Analytics />
                </AnimatePresence>
            </Layout>
    )
}

export default Website