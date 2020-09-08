import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from 'components/layout';

export default function LiveIndexPage() {
  const router = useRouter();

  const user = {
    userName: 'test',
  };

  useEffect(() => {
    if (user.userName) {
      router.push('/live/wait');
    } else {
      router.push('/live/join');
    }
  }, []);

  return (
    <Layout>
      <motion.div exit={{}}>Checking username</motion.div>
    </Layout>
  );
}
