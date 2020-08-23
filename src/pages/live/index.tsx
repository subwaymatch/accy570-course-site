import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'lib/slices/liveUserSlice';
import { motion } from 'framer-motion';

export default function LiveIndexPage() {
  const router = useRouter();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.userName) {
      router.push('/live/wait');
    } else {
      router.push('/live/join');
    }
  }, []);

  return <motion.div exit={{}}>Redirect</motion.div>;
}
