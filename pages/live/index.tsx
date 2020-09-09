import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import useLiveSessionStore from 'stores/useLiveSessionStore';
import Layout from 'components/layout';

export default function LiveIndexPage() {
  const router = useRouter();
  const netId = useLiveSessionStore((state) => state.netId);

  useEffect(() => {
    if (netId) {
      router.push('/live/wait');
    } else {
      router.push('/live/join');
    }
  }, []);

  return (
    <Layout>
      <motion.div exit={{}}>Checking NetID</motion.div>
    </Layout>
  );
}
